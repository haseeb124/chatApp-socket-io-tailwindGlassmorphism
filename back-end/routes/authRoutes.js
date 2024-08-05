import { Router } from "express";
import { UserSignup, userLogin, userLogout } from "../controllers/authControllers.js";

const route = Router();

route.post("/signup", UserSignup);
route.post("/login", userLogin);
route.post("/logout", userLogout);

export default route;