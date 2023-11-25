import Joi from "joi";

export const userBodySchema = Joi.object({
  email: Joi.string().email({ maxDomainSegments: 3 }).required(),
  password: Joi.string().min(8).required(),
});
