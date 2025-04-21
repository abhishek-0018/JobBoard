import mongoose,{ Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const jobSchema = new Schema(
  {
  title: 
  { 
    type: String, 
    required: true 
  },
  overview: 
  { 
    type: String, 
    required: true 
  },
  requiredSkills: [
    { 
      type: String, 
    }
  ],
  user: 
  { 
    type: Schema.Types.ObjectId, 
    ref: "User",
  },
 jobType: 
  { 
    type: String, 
    enum: ["remote", "hybrid","onsite"],
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  place:
  { 
    type: String,
    required: true
  },
}, { timestamps: true });

// jobSchema.plugin(mongooseAggregatePaginate)
export const Job = mongoose.model("Job", jobSchema);