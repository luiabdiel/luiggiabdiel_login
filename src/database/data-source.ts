import "reflect-metadata";
import { DataSource } from "typeorm";
import { USERNAME, PASSWORD, DATABASE, HOST } from "../constants/environments";
import { CreateUserTable1698848446762 } from "./migrations/1698848446762-create-user-table";
import { UserEntity } from "../app/entities/user.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: HOST,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  ssl: {
    rejectUnauthorized: true,
  },
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: [CreateUserTable1698848446762],
  subscribers: [],
});
