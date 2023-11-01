import { AppDataSource } from "../../database/data-source";
import { UserEntity } from "../entities/user.entity";

export const userRepository = AppDataSource.getRepository(UserEntity);

function findUsers(): Promise<UserEntity[]> {
  return userRepository.find({
    select: ["fullName", "userName", "email", "isTeacher"],
  });
}

function findUserById(userId: number): Promise<UserEntity | null> {
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
