import express from 'express';
import contactsRouter from './routes/contacts';

const app = express();

app.use(express.json());
app.use('/contacts', contactsRouter);

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
