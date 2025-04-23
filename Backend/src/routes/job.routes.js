import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { postJob, getPostedJobs, getAllJobs} from "../controllers/job.controller.js";

const router=Router()

router.route("/postJob").post(verifyJWT,postJob);
router.route("/getpostedjobs").get(verifyJWT,getPostedJobs);
router.route("/getalljobs").get(getAllJobs);
export default router;