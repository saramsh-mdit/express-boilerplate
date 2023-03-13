import { Router } from "express";

import UserController from "../controllers/user";

export const MainRoute = Router();

MainRoute.use("/user",UserController);
