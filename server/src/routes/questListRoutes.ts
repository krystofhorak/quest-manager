import { Router } from 'express';

import { pool } from '../main';

import type { Quest } from '../../../typings/questTypes';

const questListRouter = Router();

questListRouter.get('/', async (_, res) => {
  try {
    const questLists = await pool.query('SELECT * FROM QuestLists', []);
    const quests = await pool.query('SELECT * FROM Quests', []);
    res.json(
      questLists?.rows?.map(row => ({
        ...row,
        quests: quests?.rows.filter((quest: Quest) => quest.questlist === row.questlist_id) ?? [],
      })
    ) ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error!');
  }
});

questListRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const questList = await pool.query('SELECT * FROM QuestLists WHERE questlist_id = $1', [id]);
    const quests = await pool.query('SELECT * FROM Quests WHERE questlist = $1', [id]);
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
