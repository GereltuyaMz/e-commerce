import express, { Request, Response } from 'express';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript + ES6!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});