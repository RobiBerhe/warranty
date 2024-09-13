// const userRoutes = require("./users")

const router = require("express").Router()


router.post("/users/signup",(req,res)=>{res.json("sign up successful!!")})

// router.use(userRoutes)


module.exports = router;