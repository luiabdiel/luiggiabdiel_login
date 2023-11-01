import { Request, Response, Router } from "express";
import userRepository from "../repositories/user.repository";

export const userRouter = Router();

userRouter.get("/", async (_, res: Response): Promise<Response> => {
  const users = await userRepository.findUsers();

  return res.status(200).json(users);
});

userRouter.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const idUser = Number(req.params.id);

    const user = await userRepository.findUserById(idUser);

    return res.status(200).json(user);
  }
);
