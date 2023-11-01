import { Request, Response, Router } from "express";
import userRepository from "../repositories/user.repository";

export const userRouter = Router();

userRouter.get("/", async (_, res: Response): Promise<Response> => {
  try {
    const users = await userRepository.findUsers();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
});

userRouter.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const idUser = Number(req.params.id);

      const user = await userRepository.findUserById(idUser);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ error: "User not found." });
    }
  }
);

userRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData = req.body;

    const newUser = await userRepository.createUser(userData);

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: "Error creating the user." });
  }
});
