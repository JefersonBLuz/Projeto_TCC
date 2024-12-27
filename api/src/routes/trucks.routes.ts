import { Router } from "express";
import TrucksController from "../controllers/trucks.controller";

const router = Router()
const trucksController = TrucksController


router.post('/createTruck', trucksController.createTruck)

router.get('/view', trucksController.viewTrucksAll)

router.get('/view/:id', trucksController.viewTruck)

router.get('/viewDrivers', trucksController.viewTrucksWithDrivers)

router.get('/viewDrivers/:id', trucksController.viewTruckWithDriver)

router.put('/update/:id', trucksController.updateTruck)

router.delete('/delete/:id', trucksController.deleteTruck)

export default router;