import { AppDataSource } from "../../database/data-source";
import { User } from "../entities/user.entity";
import { IUser } from "../interfaces/user.interface";

export const userRepository = AppDataSource.getRepository(User);

function findUsers(): Promise<IUser[]> {
  return userRepository.find({
    select: ["fullName", "userName", "email", "isTeacher"],
  });
}

function findUserById(userId: number) {
  const user = userRepository.findOne({
    where: {
      id: userId,
    },
    select: ["fullName", "userName", "email", "isTeacher"],
  });

  if (!userId) {
    throw new Error(`CityId: ${userId} not found.`);
  }

  return user;
}

export default {
  findUsers,
  findUserById,
};
