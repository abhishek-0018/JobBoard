import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { applyJob } from "../controllers/apply.controller.js";

const router=Router()

router.route("/applyJob").post(verifyJWT,applyJob);

export default router;