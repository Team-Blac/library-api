import Joi from "joi";

export const addProductValidator = Joi.object({
  title: Joi.string().required(),
  genre: Joi.string().required(),
  description: Joi.string().required(),
  publishedYear: Joi.number().required(),
  coverImage: Joi.string().required(),
  quantityAvailable: Joi.string().required(),
});


