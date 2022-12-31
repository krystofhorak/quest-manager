import express from 'express';
import cors from 'cors';

import questRouter from './routes/questRoutes';

const app = express();
app.use(cors());
app.use(express.json());

const DEFAULT_PORT: number = 3001;
const port = process.env.PORT || DEFAULT_PORT;

// Routes
app.use('/quest', questRouter);

app.listen(port, () => {
  console.log(`[STATUS] Listening on port ${port}...`);
});
