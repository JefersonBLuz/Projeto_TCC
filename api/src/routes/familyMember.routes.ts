import { Router } from "express";
import MembersController from "../controllers/familyMember.controller";

const router = Router()
const membersController = MembersController


router.post('/createMember', membersController.createMember)

router.get('/view', membersController.viewMembersAll)

router.get('/view/:id', membersController.viewMember)

router.get('/viewHeads', membersController.viewMembersAllWithHead)

router.get('/viewHeads/:id', membersController.viewMemberWithHead)

router.get('/viewAddress', membersController.viewMembersAllWithAddress)

router.get('/viewAddress/:id', membersController.viewMemberWithAddress)

router.put('/update/:id', membersController.updateMember)

router.delete('/delete/:id', membersController.deleteMember)

export default router;