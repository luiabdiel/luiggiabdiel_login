import { Router } from "express";
import { userRouter } from "../controllers/user.controller";

export const routers = Router();

routers.use("/users", userRouter);
