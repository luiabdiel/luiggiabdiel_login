import "reflect-metadata";
import { DataSource } from "typeorm";
import { USERNAME, PASSWORD, DATABASE } from "../constants/environments";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
