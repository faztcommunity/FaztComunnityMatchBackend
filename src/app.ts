import express, { Application, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import morgan from 'morgan';
import { Server } from "http";
import { urlencoded } from "body-parser";
// Routes
import IndexRoutes from '../src/routes/index.routes';
import RegisterRoutes from '../src/routes/post.routes';

export class App {

  private app: Application;

  public constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  };

  private settings() {
    this.app.set('port', process.env.PORT || this.port || 3000);
    this.app.disable("x-powered-by");
  };

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(urlencoded({ extended: true }));
  };

  private routes() {
    this.app.use(IndexRoutes);
    this.app.use('/register', RegisterRoutes);
  };

  public listen(callback: Function = () => { console.log(`Server on port ${this.app.get("port")}`) }): Server {
    return this.app.listen(this.app.get('port'), callback());
  };

};
