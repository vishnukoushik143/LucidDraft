import express from "express";

import addEntryController from "../controllers/user/addEntryController.js";
import getEntriesController from "../controllers/user/getEntriesController.js";
import getEntryController from "../controllers/user/getEntryController.js";
import deleteEntryController from "../controllers/user/deleteEntryController.js";

const userRouter = express.Router();
export default userRouter;

userRouter.get("/entries", getEntriesController);
userRouter.get("/entry/:_id", getEntryController);
userRouter.post("/new-entry", addEntryController);
userRouter.post("/delete-entry/:_id", deleteEntryController);
