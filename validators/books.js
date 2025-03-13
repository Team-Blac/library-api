import Joi from "joi";

export const addProductValidator = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string().required(),
  isbn: Joi.string().required(),
  publishedYear: Joi.number().required(),
  image: Joi.string().required(),
  
});


