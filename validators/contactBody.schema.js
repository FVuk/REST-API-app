import Joi from "joi";

export const contactBodySchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email({ maxDomainSegments: 2 }).required(),
  phone: Joi.string().min(9).max(20).required(),
});
