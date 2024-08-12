import {Router} from 'express'

import { getUsers } from '../controllers/userControllers.js';
import { ProtectRoute } from '../middleware/ProtectRoute.js';

const route = Router();

route.get("/getall", ProtectRoute ,getUsers);

export default route;