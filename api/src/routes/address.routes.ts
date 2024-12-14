import { Router } from "express";
import AddressController from "../controllers/AddressController";

const router = Router()
const addressController = AddressController

// Rota responsável por criar um novo endereço: (POST): localhost:3000/address/createAddress
router.post('/createAddress', addressController.createAddress)
// Rota responsável por listar todos os endereços: (GET): localhost:3000/address/view
router.get('/view', addressController.viewAddressAll)
// Rota responsável por listar endereço especifico: (GET): localhost:3000/address/view/:id
router.get('/view/:id', addressController.viewAddress)
// Rota responsável por atualizar endereço especifico: (PUT): localhost:3000/address/update/:id 
router.put('/update/:id', addressController.updateAddress)
// Rota responsável por deleta endereço especifico: (DELETE): localhost:3000/users/delete/:id
router.delete('/delete/:id', addressController.deleteAddress)

export default router;