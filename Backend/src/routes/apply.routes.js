import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { applyJob,applyStatus } from "../controllers/apply.controller.js";

const router=Router()

router.route("/applyJob").post(verifyJWT,applyJob);
router.route("/applyStatus").get(verifyJWT,applyStatus);

export default router;