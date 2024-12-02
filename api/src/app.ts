import express from 'express'
import cors from 'cors'
import router from './router'

export class App {
    private server: express.Application = express()

    constructor() {
        this.server
        this.middleware()
        this.router()
    }
    private middleware(){
      this.server.use(cors())
      this.server.use(express.json());
    }
  
    private router(){
      this.server.use(router);
    }

    public getServer(): express.Application {
        return this.server
    }
}