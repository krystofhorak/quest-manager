import { Router } from 'express';

import { pool } from '../main';

const questRouter = Router();

questRouter.get('/', async (_, res) => {
  try {
    const quests = await pool.query('SELECT * FROM Quests');
    res.json(quests?.rows ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error!');
  }
});

export default questRouter;
