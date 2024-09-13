const userRoutes = require("./users")

const router = require("express").Router()



router.use(userRoutes)


module.exports = router;