import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello, Node!");
});

app.listen(3333, () => {
  console.log("🚀 Server is running on http://localhost:3333");
});
