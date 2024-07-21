import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { createServer } from "http";
import { dataSource } from "./config/database";
import { corsConfig } from "./config/cors";

dotenv.config({ path: ".env" });

const PORT = process.env.PORT;

const app = express();
const server = createServer(app);

dataSource
    .initialize()
    .then(() => {
        console.log("[TypeORM] DataSource has been initialized!");
    })
    .catch((err) => {
        console.error("[TypeORM] Error during Datasource Initialization : ", err);
    });

app.use(corsConfig());
app.use(express.json());

server.listen(PORT, () => {
    console.log("[Express] Server is Running on port :", PORT);
});
