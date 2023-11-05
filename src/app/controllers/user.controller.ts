import { Request, Response, Router } from "express";
import userRepository from "../repositories/user.repository";
import { NotFoundException } from "../exeception/not-found";
import { BadRequestException } from "../exeception/bad-request";

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
    if(error instanceof BadRequestException) {
      if(error.getMessage() === "The email is already in use") {
        return res.status(409).json( error );
      } else {
        return res.status(400).json(error);
      }
    }

    return res.status(500).json({ error: "Internal server error" });
  }
});
