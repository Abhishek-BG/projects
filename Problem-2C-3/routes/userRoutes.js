const express = require('express');
const Joi = require('joi'); //module which is used for data validation

function validateUserInput(data) {
 const schema = Joi.object({
  name:Joi.string().min(3).max(30).required(),
  email:Joi.string().email().required(),
})
  return schema.validate(data); //{error,value}
}

const router = express.Router();

router.post('/', (req, res, next) => {
  try {
    // Validate user input
    const { error, value } = validateUserInput(req.body);
    if (error) throw { status: 400, message: error.details[0].message };
    // Simulate processing (e.g., storing user details)
    const processedData = {
      message: `Hello, ${value.name}! Your email is ${value.email}.`,
      receivedAt: new Date(),
    };

    res.status(200).json(processedData);//respond
  } catch (err) {
    next(err); // Pass error to the error handler
  }
});

module.exports = router;
