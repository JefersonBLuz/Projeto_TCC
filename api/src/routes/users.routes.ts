import { Router } from "express";
import UserController from "../controllers/users.controller";

const router = Router()
const usersController = UserController

// * Rota responsável por criar um novo usuário: (POST): localhost:3000/users/createUser
router.post('/createUser', usersController.createUser)
// * Rota responsável por lsitar todos os usuários: (GET): localhost:3000/users/view
router.get('/view', usersController.viewUsersAll)
// * Rota responsável por listar usuário especifico: (GET): localhost:3000/users/view/:id
router.get('/view/:name', usersController.viewUser)
// * Rota responsável por listar usuário especifico: (GET): localhost:3000/users/viewaddress
router.get('/viewaddress', usersController.viewUsersAllWithAddress)
// * Rota responsável por listar usuário especifico: (GET): localhost:3000/users/viewaddress/:id
router.get('/viewaddress/:name', usersController.viewUsersWithAddress)
// * Rota responsável por listar usuário especifico: (PUT): localhost:3000/users/update/:id
router.put('/update/:id', usersController.updateUser)
// * Rota responsável por listar usuário especifico: (DELETE): localhost:3000/users/delete/:id
router.delete('/delete/:id', usersController.deleteUser)

export default router;