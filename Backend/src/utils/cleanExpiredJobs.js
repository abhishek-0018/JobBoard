import { Job } from "../models/job.model.js";

export const cleanExpiredJobs = async () => {
  try {
    const now = new Date();
    const result = await Job.deleteMany({ lastDate: { $lt: now } });
    console.log(`Deleted ${result.deletedCount} expired job(s)`);
  } catch (error) {
    console.error("Error cleaning expired jobs:", error);
  }
};