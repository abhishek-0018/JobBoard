import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { postJob, getPostedJobs} from "../controllers/job.controller.js";

const router=Router()

router.route("/postJob").post(verifyJWT,postJob);
router.route("/getpostedjobs").get(getPostedJobs);
export default router;