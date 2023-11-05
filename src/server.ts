import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import { PORT } from "./constants/environments";
import { routers } from "./app/routes/routes";
import { rateLimit } from "express-rate-limit";
import fs from "fs";
import MarkdownIt from "markdown-it";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import NodeCache from "node-cache";

const app = express();
const myCache = new NodeCache();

const fifteenMinutesInMilliseconds  = 15 * 60 * 1000; // 15 minutes
const maxRequestsPerWindow = 100;

const limiter = rateLimit({
  windowMs: fifteenMinutesInMilliseconds,
  max: maxRequestsPerWindow,
  message: "Too many requests, please try again later",
});

app.use(cors());
app.use(express.json());
app.use(routers);
app.use(limiter);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (_, res) => {
  const readmeContent = myCache.get("readme")

  if(readmeContent) {
    res.send(readmeContent);
  }

  const readme = fs.readFileSync("README.md", "utf8");
  const md = new MarkdownIt();
  const htmlContent = md.render(readme);

  myCache.set("readme", htmlContent, fifteenMinutesInMilliseconds)

  return res.send(htmlContent);
});

AppDataSource.initialize()
  .then(() => {
    console.log("DATABASE CONECTADO");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("error: " + err));
