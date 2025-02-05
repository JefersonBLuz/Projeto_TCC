import express from 'express'
import cors from 'cors'
import router from './router'
import session from 'express-session'

export class App {
  private server: express.Application

  constructor() {
    this.server = express()
    this.middleware()
    this.router()
    this.session()
  }
  private middleware() {
    this.server.use(express.urlencoded({ extended: true }))
    this.server.use(express.json());
    this.server.use(cors())
  }
  private router() {
    this.server.use(router);
  }
  private session() {
    this.server.use(session({
      secret: 'secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1 * 60 * 60 * 1000 } // 1 hour
    }))
  }
  private checkAuth() {
    const sessionAllowed = ['','/','/login', '/register']
  }
  public getServer(): express.Application {
    return this.server
  }
}