import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import cron from "node-cron";
import { cleanExpiredJobs } from "./utils/cleanExpiredJobs.js";
const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))
// app.use(express.static("public"))
app.use(cookieParser())

//   routes import
import userRouter from './routes/user.routes.js'
import jobRouter from './routes/job.routes.js'

cron.schedule("0 0 * * *", async () => {
    console.log("Running job cleaner at", new Date());
    try {
      await cleanExpiredJobs();
      console.log("Expired jobs cleaned.");
    } catch (error) {
      console.error("Error while cleaning expired jobs:", error);
    }
  });
//   routes declaration
// to use routes it's needed to use ".use" instead of ".get"
app.use("/api/v1/users",userRouter)
app.use("/api/v1/jobs",jobRouter)

export {app}