import { Router } from "express";
import HeadsController from "../controllers/headFamily.controller";

const router = Router()
const headsController = HeadsController


router.post('/createHead', headsController.createHead)

router.get('/view', headsController.viewHeadAll)

router.get('/view/:id', headsController.viewHead)

router.get('/viewMembers', headsController.viewHeadAllWithMembers)

router.get('/viewMembers/:id', headsController.viewHeadWithMembers)

router.get('/viewAddress', headsController.viewHeadAllWithAddress)

router.get('/viewAddress/:id', headsController.viewHeadWithAddress)

router.get('/viewHistory', headsController.viewHeadAllWithHistory)

router.get('/viewHistory/:id', headsController.viewHeadWithHistory)

router.put('/update/:id', headsController.updateHead)

router.delete('/delete/:id', headsController.deleteHead)

export default router;