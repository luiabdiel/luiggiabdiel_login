import "reflect-metadata";
import { DataSource } from "typeorm";
import { USERNAME, PASSWORD, DATABASE } from "../constants/environments";
import { CreateUserTable1698848446762 } from "./migrations/1698848446762-create-user-table";
import { UserEntity } from "../app/entities/user.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: [CreateUserTable1698848446762],
  subscribers: [],
});
