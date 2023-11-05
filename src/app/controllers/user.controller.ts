import { Request, Response, Router } from "express";
import userRepository from "../repositories/user.repository";
import { NotFoundException } from "../exeception/not-found";

export const userRouter = Router();

userRouter.get("/", async (_, res: Response): Promise<Response> => {
  try {
    const users = await userRepository.findUsers();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const idUser = parseInt(req.params.id);

      const user = await userRepository.findUserById(idUser);

      return res.status(200).json(user);
    } catch (error) {
      if(error instanceof NotFoundException) {
        return res.status(404).json(error);
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

userRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData = req.body;

    const newUser = await userRepository.createUser(userData);

    return res.status(201).json(newUser);
  } catch (error) {
    if(error instanceof Error) {
      return res.status(500).json({ error: error.message});
    }

    return res.status(500).json({ error: "Internal server error" });
  }
});
