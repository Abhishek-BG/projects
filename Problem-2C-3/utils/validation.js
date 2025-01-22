const Joi = require('joi');

// Validate user input using Joi
function validateUserInput(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
  });

  return schema.validate(data);
}

module.exports = { validateUserInput };
