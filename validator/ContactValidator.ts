import Joi from 'joi';

export const ContactValidator = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
});
