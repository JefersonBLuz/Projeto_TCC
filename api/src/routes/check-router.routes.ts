/**
 * Arquivo: src/routes/check-router.ts
 * Descrição: Arquivo responsável pela chamada da API na aplicação.
 * Data: 01/12/2024
 * Autor: Jeferson Braga
 */

import { Router } from "express";
import { CheckRouterController } from "../controllers/check-router.controller";

const router = Router()
const checkRouterController = new CheckRouterController()

/**Página HTML */
router.get("/", (req, res) => { checkRouterController.home(req,res)});

/**API Json*/
router.get('/api', (req,res)=>{ checkRouterController.api(req,res)})

/**Conexão do Banco de dados */
router.get('/tables', (req,res)=>{ checkRouterController.showTables(req,res)})

export default router;