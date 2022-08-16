import { Server } from "./src/server";
import express from "express";
import configApp from "./src/environment/index";

const app = express();
const { port } = configApp.app;

const server = new Server(app);

server.start(port);
