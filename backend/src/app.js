import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import authRouter from "./routes/authRouter.js";

import AuthMiddleware from "./middleware/authMiddleware.js";
import userRouter from "./routes/userRouter.js";

const app = express();
export default app;

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
        console.log("MongoDB not Connected");
        console.log(err);
    });

app.use("/auth", authRouter);
app.use("/user", AuthMiddleware, userRouter);
// app.use("notifications", AuthMiddleware, NotificationRoutes);
