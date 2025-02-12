import express from 'express'
import cors from 'cors'
import router from './router'
import { populationBomb } from './config/seed'

export class App {
    private server: express.Application

    constructor() {
        this.server = express()
        this.middleware()
        // this.seed()
        this.router()
    }
    private middleware(){
      this.server.use(express.urlencoded({ extended: true }))
      this.server.use(express.json());
      this.server.use(cors())
    }
    private router(){
      this.server.use(router);
    }
    public getServer(): express.Application {
        return this.server
    }
    private async seed(){
      await populationBomb()
    }
}