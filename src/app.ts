import express, { Application } from 'express';
import morgan from 'morgan';
// Routes
import IndexRoutes from '../src/routes/index.routes';
import RegisterRoutes from '../src/routes/post.routes';

export default class App {

  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  };

  private settings(){
    this.app.set('port', this.port || process.env.Port || 3000);
  };

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  };

  private routes() {
    this.app.use(IndexRoutes);
    this.app.use('/users', RegisterRoutes);
  };
  
  public listen() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port', this.app.get("port"));
    });
  };

};
