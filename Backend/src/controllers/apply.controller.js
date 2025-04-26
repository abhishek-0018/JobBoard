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

const applyStatus=asyncHandler(async(req,res)=>{
    try {
        const {jobpost} = req.query;
        const userId = req.user._id;

        //console.log(typeof(jobpost));
    
        // Check if already applied
        const existingApplication = await Application.findOne({
          user: userId,
          jobpost: new mongoose.Types.ObjectId(jobpost),
        });
    
        if (existingApplication) {
          return res.status(201).json({
            success: false,
            message: "You have already applied for this job.",
          });
        }
    }catch (error) {
        console.error("Error applying for job:", error);
        res.status(500).json({
        success: false,
        message: "Something went wrong!",
        });
    }
    return res.status(201).json(
        ({
            success: true,
            message: "Not Applied yet",
            }))
})

export {applyJob,applyStatus}