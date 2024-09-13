const pino = require("pino")


const file_transport = pino.transport({
   targets:[{ target:'pino/file',
    options:{destination:`${__dirname}/app.log`}}
   ]
})

module.exports = pino({
    level:process.env.PINO_LOG_LEVEL || 'info',
    formatters:{
        level:(label)=> {return {level:label.toUpperCase()}}
    },
    timestamp:pino.stdTimeFunctions.isoTime
},file_transport);