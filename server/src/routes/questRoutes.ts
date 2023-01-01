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

questRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const quest = await pool.query('SELECT * FROM Quests WHERE quest_id = $1', [id]);
    res.json(quest?.rows?.[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error!');
  }
});

questRouter.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const newQuest = await pool.query('INSERT INTO Quests (title) VALUES ($1) RETURNING *', [title]);
    res.json(newQuest?.rows?.[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error!');
  }
});

export default questRouter;
