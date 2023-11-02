import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import { PORT } from "./constants/environments";
import { routers } from "./app/routes/routes";
import { rateLimit } from "express-rate-limit";
import fs from "fs";
import MarkdownIt from "markdown-it";

const app = express();

const windowMs = 15 * 60 * 1000; // 15 minutes
const maxRequestsPerWindow = 100;

const limiter = rateLimit({
  windowMs,
  max: maxRequestsPerWindow,
  message: "Too many requests, please try again later",
});

app.use(cors());
app.use(express.json());
app.use(routers);
app.use(limiter);

app.get("/", (_, res) => {
  const readme = fs.readFileSync("../README.md", "utf8");

  const md = new MarkdownIt();

  const htmlContent = md.render(readme);

  res.send(htmlContent);
});

AppDataSource.initialize()
  .then(() => {
    console.log("DATABASE CONECTADO");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("error: " + err));
