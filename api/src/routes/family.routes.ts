import { Router } from "express";
import familyController from "../controllers/family.controller";

const router = Router()
const FamilyController = familyController


router.post('/createFamily', FamilyController.createFamily)

router.get('/view', FamilyController.viewFamilyAll)

router.get('/view/:name', FamilyController.viewFamilyName)

router.put('/update/:id', FamilyController.updateFamily)

router.delete('/delete/:id', FamilyController.deleteFamily)

export default router;