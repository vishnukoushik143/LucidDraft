import express from "express";

import registerController from "../controllers/auth/registerController.js";
import loginController from "../controllers/auth/loginController.js";
import logoutController from "../controllers/auth/logoutController.js";
import loginStatusController from "../controllers/auth/loginStatusController.js";

const authRouter = express.Router();
export default authRouter;

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);
authRouter.get("/login-status", loginStatusController);
authRouter.post("/logout", logoutController);
// authRouter.post("/forgot-password", forgotPasswordController);
// authRouter.post("/reset-password", resetPasswordController);
