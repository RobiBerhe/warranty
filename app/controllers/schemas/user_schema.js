const joi = require("joi")


const userSchema = joi.object({
    firstName: joi.string().min(2).max(30).required(),
    lastName: joi.string().min(2).max(30).required(),
    email: joi.string().email().error(new Error("please provide a valid email address")).required(),
    password:joi.string().min(6).max(30).required()
})


module.exports = userSchema;