import {Router} from 'express'
import {getMessage, sendMessage} from '../controllers/messageControllers.js';
import { ProtectRoute } from '../middleware/ProtectRoute.js';

const route = Router();

route.post("/send/:id", ProtectRoute ,sendMessage);
route.get("/:id",ProtectRoute, getMessage);

export default route;