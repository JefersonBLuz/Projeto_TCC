import { Router, Request, Response } from "express";
import UserController from "../controllers/users.controller";

const router = Router()
const usersController = UserController

// * Rota responsável por criar um novo usuário: (POST): localhost:3000/users/createUser
router.post('/createUser', usersController.createUser)
// * Rota responsável por lsitar todos os usuários: (GET): localhost:3000/users/view
router.get('/view', usersController.viewUsersAll)
// * Rota responsável por listar usuário especifico: (GET): localhost:3000/users/view/:id
router.get('/view/:id', usersController.viewUser)
// * Rota responsável por listar usuário especifico: (GET): localhost:3000/users/viewaddress
router.get('/viewaddress', usersController.viewUsersAllWhitAddress)
// * Rota responsável por listar usuário especifico: (GET): localhost:3000/users/viewaddress/:id
router.get('/viewaddress/:id', usersController.viewUsersWhitAddress)
// * Rota responsável por listar usuário especifico: (GET): localhost:3000/users/update/:id
router.get('/update/:id', usersController.updateUser)
// * Rota responsável por listar usuário especifico: (GET): localhost:3000/users/delete/:id
router.get('/delete/:id', usersController.deleteUser)




export default router;