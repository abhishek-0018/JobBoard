import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { Job } from "../models/job.model.js";


const postJob=asyncHandler(async(req,res)=>{
    const {title,overview,place,requiredSkills,jobType,user,lastDate,salary}=req.body;
    if(!title){
        throw new ApiError(401,"Title required");
    }
    if(!overview){
        throw new ApiError(401,"Overview required");
    }
    if(!place){
        throw new ApiError(401,"Place required");
    }
    if(!salary){
        throw new ApiError(401,"Salary required");
    }
    if(!jobType){
        throw new ApiError(401,"JobType required");
    }
    if(!lastDate){
        throw new ApiError(401,"Last date is required");
    }
    if(requiredSkills.length===0){
        throw new ApiError(401,"Required skill required");
    }
    const job= await Job.create({
       title,
       overview,
       place,
       jobType,
       user:req.user._id,
       salary,
       lastDate,
       requiredSkills
    })

    if(!job){
        throw new ApiError(500,"Something went wrong while posting the job.")
    }
    // const jobs= await Job.find({user:user._id});
    return res.status(201).json(
        new ApiResponse(200, job, "Job posted Successfully")
    )
})

const getPostedJobs=asyncHandler(async(req,res)=>{
    const user=req.user._id;
    const jobs= await Job.find({user:user});
    return res.status(200).json(
        new ApiResponse(200, jobs, "Jobs fetched Successfully")
    )
})

const getAllJobs=asyncHandler(async(req,res)=>{
    const jobs=await Job.find();
    return res.status(200).json(
        new ApiResponse(200, jobs, "All jobs fetched Successfully")
    )
})

export {postJob, getPostedJobs,getAllJobs}