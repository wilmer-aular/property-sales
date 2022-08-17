import bodyParser from "body-parser";
import express, { Express } from "express";
import morgan from "morgan";
import apiRouter from "./routers/index.";
import cors from "cors";
import mongoConnect from "./environment/mongo.connect.ts";
import fileUpload from "express-fileupload";
import path from 'path';
import  createData  from "./utils/createData.util"
export class Server {
  app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(fileUpload());
    this.app.use(morgan("dev"));
    this.app.use("/api", apiRouter);
    this.app.use(express.static(path.resolve('./') + '/build'));

    this.app.get('*', (req, res) => {
      res.sendFile(path.resolve('./') + '/build/index.html');
    });
    
    mongoConnect();
    createData();
  }
  
  start(port: number): void {
    this.app.listen(port, () => {
      console.info(`Server running on port ${port}`);
    });
  }
}
