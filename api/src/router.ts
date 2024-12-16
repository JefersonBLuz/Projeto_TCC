import { Request, Response, Router } from 'express'
import { FirstController } from './controllers/teste';
import { Test } from './routes/check-router';
import Users from './routes/users.routes';
import Address from './routes/address.routes';
import Trucks from './routes/trucks.routes';
import Drivers from './routes/drivers.routes';
import Heads from './routes/headFamily.routes';
import Members from './routes/familyMember.routes';
import Family from './routes/family.routes'


const router = Router()
const usersRoutes = Users
const addressRoutes = Address 
const trucksRoutes = Trucks
const driversRoutes = Drivers
const headsRoutes = Heads
const membersRoutes = Members
const familyRoutes = Family

const firstController = new FirstController()
const test = new Test()
//Rota api para teste
router.get('/api', (req: Request,res:Response)=>{
    test.api(req,res)
})
router.get('/tables', (req: Request,res:Response)=>{
    test.showTables(req,res)
})
//Routes
router.get("/", (req: Request, res: Response) => {
    firstController.home(req,res)
});

//Rotas de usuários 
router.use('/users/', usersRoutes)
router.use('/address/', addressRoutes)
router.use('/trucks/', trucksRoutes)
router.use('/drivers/', driversRoutes)
router.use('/heads/', headsRoutes)
router.use('/members/', membersRoutes)
router.use('/family/', familyRoutes);

export default router;
