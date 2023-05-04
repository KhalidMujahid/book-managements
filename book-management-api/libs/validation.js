// User valiation Schema
const Joi = require("joi");

const validate = Joi.object().keys({
    title: Joi.string().required().min(1),
    price: Joi.number().required(),
    image: Joi.string().required()
})

module.exports = validate;