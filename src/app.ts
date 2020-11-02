import express, { Application } from 'express'
import morgan from 'morgan'
// Routes
import IndexRoutes from '../src/routes/index.routes'
import RegisterRoutes from '../src/routes/post.routes'

export class App {

  private app: Application;

  public constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set('port', process.env || this.port || 3000)
  }

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(IndexRoutes);
    this.app.use('/register', RegisterRoutes);
  }

  public listen(callback: Function = () => { console.log(`Server on port ${this.app.get("port")}`) }) {
    this.app.listen(this.app.get('port'), callback());
  }

}