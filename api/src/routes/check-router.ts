/**
 * Arquivo: src/routes/check-router.ts
 * Descrição: Arquivo responsável pela chamada da API na aplicação.
 * Data: 01/12/2024
 * Autor: Jeferson Braga
 */

import { Request, Response} from "express";
import { db } from "../config/db";
import { users } from "../config/model/schema";

export class Test {
    public api(req: Request, res: Response) {
        return res.status(200).send({
            success: true,
            message: 'Api acessada com sucesso.',
            version: '1.0.0'
        })
    }
    public async showTables( req: Request, res: Response){
        try {
            const rows = await db.select().from(users)
            return res.status(201).send({ rows: rows })
        } catch (error) {
            console.error('mostrar tabelas',error)
            return res. status(500).send({
                message: 'deu ruim',
                error: error
            })
        }
    }
}



