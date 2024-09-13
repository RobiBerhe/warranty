require("dotenv").config()
const express = require("express")
const logger = require("./logger")

const router = require("./routes");


const app = express()

app.use(express.json())
app.use(router)


app.listen(process.env.PORT,()=> logger.info(`app has started running on port ${process.env.PORT}`))

