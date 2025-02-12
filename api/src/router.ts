import { Request, Response, Router } from 'express'
import CheckRouter from './routes/check-router.routes';
import Users from './routes/users.routes';
import Address from './routes/address.routes';
import Trucks from './routes/trucks.routes';
import Drivers from './routes/drivers.routes';
import Heads from './routes/headFamily.routes';
import Members from './routes/familyMember.routes';
import Family from './routes/family.routes'
import { populationBomb } from './config/seed';

// populationBomb()
const router = Router()
const usersRoutes = Users
const addressRoutes = Address
const trucksRoutes = Trucks
const driversRoutes = Drivers
const headsRoutes = Heads
const membersRoutes = Members
const familyRoutes = Family
const checkRouter = CheckRouter
//Rota api para teste
router.use(checkRouter)
//Rotas de usuários 
router.use('/users/', usersRoutes)
router.use('/address/', addressRoutes)
router.use('/trucks/', trucksRoutes)
router.use('/drivers/', driversRoutes)
router.use('/heads/', headsRoutes)
router.use('/members/', membersRoutes)
router.use('/family/', familyRoutes);

export default router;
