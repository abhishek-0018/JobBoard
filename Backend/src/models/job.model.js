import mongoose,{ Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const jobSchema = new Schema(
  {
  title: 
  { 
    type: String, 
    required: true 
  },
  requiredSkills: [
  { 
    type: String, 
  }
],
  postedBy: 
  { 
    type: Schema.Types.ObjectId, 
    ref: "User" 
  },
 jobType: 
  { 
    type: String, 
    enum: ["remote", "hybrid","onSite"],
    required: true
  },
  salary: 
  { 
    type: String,
    required: true
  },
  place: 
  { 
    type: String,
    required: true
  },
  requirements:[
    {
        type:String,
        required:true
    }
  ],
}, { timestamps: true });
jobSchema.plugin(mongooseAggregatePaginate)
export const Job = mongoose.model("Job", jobSchema);