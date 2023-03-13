import env from "dotenv";

import server from "./server";
import logger from "./config/logger";
import swaggerUi from 'swagger-ui-express';

env.config();
//

const PORT = process.env.PORT ?? 8000;


server.listen(PORT, () => {
    logger.info(`Server running at port ${PORT}`)
})