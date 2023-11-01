import { Response, Router } from "express";
import userRepository from "../repositories/user.repository";

export const userRouter = Router();

userRouter.get("/", async (_, res: Response): Promise<Response> => {
  const users = await userRepository.getUsers();

  return res.status(200).json(users);
});
