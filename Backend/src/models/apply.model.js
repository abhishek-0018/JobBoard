import mongoose,{ Schema } from "mongoose";

const applyScheme= new Schema(
    {
        jobpost:{
            type: Schema.Types.ObjectId, 
            ref: "Job",
        },
        user:{
            type: Schema.Types.ObjectId, 
            ref: "User",
        },
        name:{
            type: String,
            required: true
        },
        email:{
            type: String, 
            required: true,
        },
        qualification:{
            type: String, 
            enum: ["undergraduate", "graduate"],
            required: true
        }
    },{ timestamps: true }
);

export const Application = mongoose.model("Application", applyScheme);