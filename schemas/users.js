import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().min(2).max(30).optional(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(50).required(),
  isActive: Joi.boolean().optional(),
});
