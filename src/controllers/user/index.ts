import { Router } from 'express';
import logger from '../../config/logger';
import { getUser, postUser } from './user.service';

const UserController = Router();

// GET
/**
 * @openapi
 * /user:
 *   get:
 *     description: Get Users
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 *   post:
 *     description: POST User
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
UserController.get('/', async (req, res) => {
  try {
    const data = await getUser();
    res.send(data);
  } catch (e) {
    logger.error(e);
    res.status(400).send(e);
  }
});

// PORT
UserController.post('/', async (req, res) => {
  try {
    const data = await postUser();
    res.send(data);
  } catch (e) {
    logger.error(e);
    res.status(400).send(e);
  }
});

export default UserController;
