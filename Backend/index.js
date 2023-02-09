require('dotenv/config')
require('express-async-errors')
const express = require('express')

const { dbConnection } = require('./services/Database')

const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI

const StartServer = async () => {

    const app = express()

    await dbConnection(MONGO_URI)


    app.listen(PORT, () => {
        console.log(`Listening at port ${PORT}`)
    })
}

StartServer()
