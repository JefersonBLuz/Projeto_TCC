import { Router } from "express";
import famillyController from "../controllers/familly.controller";

const router = Router()
const FamillyController = famillyController


router.post('/createFamilly', FamillyController.createFamilly)

router.get('/view', FamillyController.viewFamillyAll)

router.get('/view/:name', FamillyController.viewFamillyName)

router.put('/update/:id', FamillyController.updateFamilly)

router.delete('/delete/:id', FamillyController.deleteFamilly)

export default router;