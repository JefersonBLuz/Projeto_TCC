/**
 * Arquivo: src/controllers/test.controller.ts
 * Descrição: Arquivo responsável para testar chamada da API na aplicação.
 * Data: 12/02/2024
 * Autor: Jeferson Braga
 */

import { Request, Response } from "express";
import { db } from "../config/db";
import { users } from "../config/model/schema";

export class CheckRouterController {
  public home(req: Request, res: Response): Response<HTMLBodyElement> {
    return res.send('<h1>Nois que manda</h1>')
  }
  public api(req: Request, res: Response): Response<JSON> {
    return res.status(200).json({
      success: true,
      message: 'Api acessada com sucesso.',
      version: '1.0.0'
    })
  }
  public async showTables(req: Request, res: Response): Promise<Response> {
    try {
      const rows = await db.select().from(users)
      if (!rows) {
        return res.status(404).send({ message: 'Tabela não encontrada' })
      }
      return res.status(201).send({ message: "Tabela encontrada" })
    } catch (error) {
      console.error('Consulta de usuários: ', error)
      return res.status(500).send({
        message: 'Banco não encontrado.',
        error: error
      })
    }
  }
}
