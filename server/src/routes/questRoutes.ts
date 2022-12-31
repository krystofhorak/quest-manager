import { Router } from 'express';

const questRouter = Router();

const exampleQuestData: any[] = [
  { quest_id: 0, name: 'Quest 1' },
  { quest_id: 1, name: 'Quest 2' },
  { quest_id: 2, name: 'Quest 3' },
  { quest_id: 3, name: 'Quest 4' },
  { quest_id: 4, name: 'Quest 5' },
  { quest_id: 5, name: 'Quest 6' },
  { quest_id: 6, name: 'Quest 7' },
];

questRouter.get('/', (_, res) => {
  res.json(exampleQuestData);
});

export default questRouter;
