const userController = require("../controllers/user_controller");

const userRoutes = require("express").Router()
const USERS_API = "/users"
userRoutes.post(`${USERS_API}/signup`,userController.signUp)


module.exports = userRoutes;