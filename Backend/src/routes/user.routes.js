import { Router } from "express";
import { registerUser, loginUser, changeCoverImage,changeAvatar, getCurrentUser} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router=Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/changeCoverImage").put(
    upload.fields([
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    verifyJWT,changeCoverImage)

router.route("/changeAvatar").put(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        }
    ]),
    verifyJWT,changeAvatar)
router.route("/current-user").get(verifyJWT,getCurrentUser)

export default router