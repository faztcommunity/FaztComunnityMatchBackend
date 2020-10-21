import express, { Application } from 'express'
import morgan from 'morgan'
// Routes
import IndexRoutes from '../src/routes/index.routes'
import RegisterRoutes from '../src/routes/post.routes'

export class App {

   private app: Application;

constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
}

settings(){
    this.app.set('port', this.port || process.env.Port || 3000)
}

middlewares() {
  this.app.use(morgan('dev'));
  this.app.use(express.json());
}

routes() {
  this.app.use(IndexRoutes);
  this.app.use('/register', RegisterRoutes);
}

async listen() {
  await this.app.listen(this.app.get('port'));
  console.log('Server on port', 3000)
}

}