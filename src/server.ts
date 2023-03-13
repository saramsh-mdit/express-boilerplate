import express from 'express';
import cors from "cors";
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import { MainRoute } from './routes/main';
import swaggerSpec from './config/swagger';
import AuthMiddleware from './middlewares/AuthMiddleware';

const server = express();

// MIDDLEWARE
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(AuthMiddleware)
server.use(MainRoute);


// ROUTE

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.get("/",(req,res)=> {
    console.log("Route",res.locals)
    res.send(res.locals)
})

server.get("*", (req, res) => {
    res.status(400).send({"message":"Invalid URL"})
})



export default server;