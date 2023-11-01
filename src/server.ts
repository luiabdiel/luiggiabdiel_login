import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import { PORT } from "./constants/environments";
import { routers } from "./app/routes/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.get("/", (_, res) => {
  res.send("Hello, Node!");
});

AppDataSource.initialize()
  .then(() => {
    console.log("DATABASE CONECTADO");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("error: " + err));
