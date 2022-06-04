const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.static('views'))
server.use(express.json())
server.use(cors())

server.get("/", (req,res) => {
    res.sendFile("index.html")
})


server.listen(3001)