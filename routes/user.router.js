import { Router } from "express";
import {
  create,
  getCurrent,
  login,
  logout,
  updateAvatar,
  updateSubscriptionStatus,
} from "#controllers/user.controller.js";
import auth from "#auth/user.auth.js";
import upload from "#config/multer.config.js";

const userRouter = Router();

userRouter.post("/signup", create);

userRouter.post("/login", login);

userRouter.get("/logout", auth, logout);

userRouter.get("/current", auth, getCurrent);

userRouter.patch("/", auth, updateSubscriptionStatus);

userRouter.patch("/avatars", upload.single("avatar"), updateAvatar);

export default userRouter;
