import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { Application } from "../models/apply.model.js";
import mongoose from "mongoose";


const applyJob=asyncHandler(async(req,res)=>{
    const {name,email,qualification,jobpost}=req.body;
    if(!name||!email||!qualification){
        throw new ApiResponse("Every field is required");
    }


    const application=await Application.create({
        name,
        email,
        qualification,
        jobpost:new mongoose.Types.ObjectId(jobpost),
        user:req.user._id
    })

    if(!application){
        throw new ApiError("Something went wrong while applying");
    }
    return res.status(201).json(
        new ApiResponse(200, application, "Application submitted Successfully")
    )
})

export {applyJob}