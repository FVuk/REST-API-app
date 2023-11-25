import Joi from "joi";

export const emailBodySchema = Joi.object({
  email: Joi.string().email({ maxDomainSegments: 3 }).required(),
});