const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.static('views'))
server.use(express.json())

const corsOptions = {
    exposedHeaders: 'Access-Control-Allow-Origin'
};

server.use(cors(corsOptions))

server.use((req,res,next) => {
    res.set('Access-Control-Allow-Origin',"*")
    next()
})


server.get("/", (req,res) => {
    res.sendFile("index.html")
})


server.listen(3001)