import { AppDataSource } from "../../database/data-source";
import { UserEntity } from "../entities/user.entity";
import { NotFoundException } from "../exeception/not-found";
import { IUser } from "../interfaces/user.interface";

export const userRepository = AppDataSource.getRepository(UserEntity);

async function findUsers(): Promise<IUser[]> {
  return await userRepository.find({
    select: ["id", "fullName", "userName", "email", "isTeacher"],
  });
}

async function findUserById(userId: number): Promise<UserEntity | null> {
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    select: ["id", "fullName", "userName", "email", "isTeacher"],
  });

  if (!user) {
    throw new NotFoundException(`User not found.`);
  }

  return user;
}

async function findUserByEmail(email: string): Promise<UserEntity | null> {
  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  return user;
}

async function createUser(userData: IUser): Promise<UserEntity | null> {
  const existingUser = await findUserByEmail(userData.email);

  if (existingUser) {
    throw new Error(`The email is already in use.`);
  }

  const newUser = userRepository.create(userData);
  await userRepository.save(newUser);

  return newUser;
}

export default {
  findUsers,
  findUserById,
  createUser,
};
