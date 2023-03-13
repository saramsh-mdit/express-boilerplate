import { NextFunction, Request, Response } from "express";
import logger from "../config/logger"


const AuthMiddleware = (req:Request,res:Response,next:NextFunction) => {
  try {
    const token = req.headers.Authorization;
    res.locals.userID = token;
    next();
  }
  catch(err) {
    logger.error(err);
    res.status(400).send({message:"unauthorized"})
  }
}

export default AuthMiddleware