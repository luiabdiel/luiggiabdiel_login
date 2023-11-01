import { AppDataSource } from "../../database/data-source";
import { User } from "../entities/user.entity";
import { IUser } from "../interfaces/user.interface";

export const userRepository = AppDataSource.getRepository(User);

function getUsers(): Promise<IUser[]> {
  return userRepository.find();
}

export default {
  getUsers,
};
