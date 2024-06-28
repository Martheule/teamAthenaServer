import { userSchema } from "../schemas/users.js";
import { eventSchema } from "../schemas/events.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const validateRequest = (req, res, next) => {
  const model = req.params.model;
  let schema;

  switch (model) {
    case "users":
      schema = userSchema;
      break;
    case "events":
      schema = eventSchema;
      break;
    default:
      throw new ErrorResponse("Invalid model specified", 404);
  }

  const { error } = schema.validate(req.body);
  if (error) throw new ErrorResponse(error.details[0].message, 404);
  next();
};
