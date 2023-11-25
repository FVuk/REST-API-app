import { Router } from "express";
import {
  create,
  getCurrent,
  login,
  logout,
  sendVerificationToken,
  submitVerification,
  updateAvatar,
  updateSubscriptionStatus,
} from "#controllers/user.controller.js";
import auth from "#auth/user.auth.js";
import upload from "#config/multer.config.js";
import { contactBodySchema } from "#validators/contactBody.schema.js";
import bodyValidate from "../middlewares/bodyValidate.js";

const userRouter = Router();

userRouter.post("/signup", bodyValidate(create));

userRouter.post("/login", bodyValidate(login));

userRouter.get("/logout", auth, bodyValidate(logout));

userRouter.get("/current", auth, bodyValidate(getCurrent));

userRouter.patch("/", auth, bodyValidate(updateSubscriptionStatus));

userRouter.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  bodyValidate(updateAvatar)
);

userRouter.get("/verify/:verificationToken", bodyValidate(submitVerification));

userRouter.post("/verify", bodyValidate(sendVerificationToken));

userRouter.post("/signup", bodyValidate(contactBodySchema), create);

export default userRouter;
