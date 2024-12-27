import { Router } from "express";
import DriversController from "../controllers/drivers.controller";

const router = Router()
const driversController = DriversController


router.post('/createTruck', driversController.createDriver)

router.get('/view', driversController.viewDriversAll)

router.get('/view/:id', driversController.viewDriver)

router.get('/viewTrucks', driversController.viewDriversAllWithTrucks)

router.get('/viewTrucks/:id', driversController.viewDriverWithTruck)

router.get('/viewAddress', driversController.viewDriversAllWithAddress)

router.get('/viewAddress/:id', driversController.viewDriverWithAddress)

router.put('/update/:id', driversController.updateDriver)

router.delete('/delete/:id', driversController.deleteDriver)

export default router;