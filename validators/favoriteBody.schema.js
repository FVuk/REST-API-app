import Joi from "joi";

export const favoriteBodySchema = Joi.object({
  favorite: Joi.boolean().required(),
});