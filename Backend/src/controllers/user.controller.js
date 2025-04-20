import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import  jwt  from "jsonwebtoken";

const generateAccessAndRefreshTokens= async(userId)=>{
    try{
        const user = await User.findById(userId)
        const accessToken=user.generateAccessToken()
        const refreshToken=user.generateRefreshToken()
        
        user.refreshToken=refreshToken;
        await user.save({validateBeforeSave: false})
        return {accessToken,refreshToken};

    } catch(error){
        throw new ApiError(500,"Something went wrong while generating refresh and access token")
    }
}

const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password,status}=req.body;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(name===""){
        throw new ApiError(400,"Name is required")
    }
    if(password===""){
        throw new ApiError(400,"Password is required")
    }
    if(email===""){
        throw new ApiError(400,"Email is required")
    }

    // if (!email.match(validRegex)) {
    //     throw new ApiError(400,"Email is not correct")
    //   }

    const existedUser= await User.findOne({
        $or: [{name},{email}]
    })
    if (existedUser){
        throw new ApiError(409,"User with email or Username already exist");
    }

    const user= await User.create({
        name,
        email,
        password,
        status
    })

    const createdUser= await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user.")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
    
})

const loginUser =asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if(!email){
        throw new ApiError(400,"email is required");
    }

    const user = await User.findOne({email})

    if(!user){
        throw new ApiError(404,"User does not exist");
    }

    const isPValid = await user.isPasswordCorrect(password);
    
    if(!isPValid){
        throw new ApiError(401,"Password incorrect");
    }

    const {accessToken,refreshToken}=await generateAccessAndRefreshTokens(user._id)

    const loggedInUser= await User.findById(user._id).select("-password -refreshToken")

    //  for cookies
    const options ={
        httponly:true,
        secure:true  // cookie can only be modified by server
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(200,{
            user:loggedInUser, accessToken, refreshToken
        },
        "User logged In Successfully")
    )

})

const changeCoverImage=asyncHandler(async(req,res)=>{
    const coverImageLocalPath= req.files?.coverImage[0]?.path;
    if(!coverImageLocalPath){
        throw new ApiError(404,"Cover Image required");
    }
    const coverImage=await uploadOnCloudinary(coverImageLocalPath);
    if(!coverImage){
        throw new ApiError(404,"Something went wrong while uploading file");
    }
    const user= await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                coverImage:coverImage?.url
            }
        },
        {new:true}
    ).select("-password -refreshToken")
    return res.status(200).json(new ApiResponse(200, user, "Cover Image updated successfully"));
})

const changeAvatar=asyncHandler(async(req,res)=>{
    const avatarLocalPath= req.files?.avatar[0]?.path;
    if(!avatarLocalPath){
        throw new ApiError(404,"Avatar Image required");
    }
    const avatar=await uploadOnCloudinary(avatarLocalPath);
    if(!avatar){
        throw new ApiError(404,"Something went wrong while uploading file");
    }
    const user= await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                avatar:avatar?.url
            }
        },
        {new:true}
    ).select("-password -refreshToken")
    return res.status(200).json(new ApiResponse(200, user, "Avatar Image updated successfully"));
})

const getCurrentUser = asyncHandler(async(req,res)=>{
    return res.status(200)
    .json(200,req.user,"Current user fetched successfully");
})
export {registerUser,loginUser,changeCoverImage,changeAvatar,getCurrentUser}