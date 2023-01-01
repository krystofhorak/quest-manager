import { Router } from 'express';

import { pool } from '../main';

const questListRouter = Router();

questListRouter.get('/', async (_, res) => {
  try {
    const questLists = await pool.query('SELECT * FROM QuestLists', []);
    res.json(questLists?.rows ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error!');
  }
});

questListRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const quest = await pool.query('SELECT * FROM Quests WHERE quest_id = $1', [id]);
    res.json(quest?.rows?.[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error!');
  }
});

export default questListRouter;
