import express, {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import {ContactValidator} from "../validator/ContactValidator";
import {handleError} from "../service/ErrorService";

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const contacts = await prisma.contact.findMany();
  res.json(contacts);
});

router.post('/', async (req: Request, res: Response) => {
  const { error } = ContactValidator.validate(req.body);
  if (error) return res.status(400).send(handleError(error));
  
  const {name, phone} = req.body;
  const contact = await prisma.contact.create({
    data: {name, phone},
  });
  res.json(contact);
});

router.put('/:id', async (req: Request, res: Response) => {
  const { error } = ContactValidator.validate(req.body);
  if (error) return res.status(400).send(handleError(error));
  
  const {id} = req.params;
  const {name, phone} = req.body;
  const contact = await prisma.contact.update({
    where: {id: parseInt(id)},
    data: {name, phone},
  });
  res.json(contact);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const contact = await prisma.contact.delete({
    where: {id: parseInt(id)},
  });
  res.json(contact);
});

export default router;
