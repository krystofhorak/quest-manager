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
    const questList = await pool.query('SELECT * FROM QuestLists WHERE questlist_id = $1', [id]);
    const quests = await pool.query('SELECT QuestLists.questlist_id, Quests.* FROM QuestLists INNER JOIN Quests ON QuestLists.questlist_id = Quests.questlist WHERE questlist_id = $1', [id]);
    res.json({
      ...questList?.rows?.[0],
      quests: quests?.rows ?? [],
    } ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error!');
  }
});

export default questListRouter;
