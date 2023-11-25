import Joi from "joi";

export const subscriptionBodySchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});