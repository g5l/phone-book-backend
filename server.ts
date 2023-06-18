import express from 'express';
import cors from 'cors';
import contactsRouter from './routes/contacts';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/contacts', contactsRouter);

app.get('/health', (req: express.Request, res: express.Response) => {
  res.status(200).send('Server is running');
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
