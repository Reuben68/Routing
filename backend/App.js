const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()

app.use(cors())

const users = [
    {"id": 1, "name": "Reuben", "age": 51},
    {"id": 2, "name": "Minna", "age": 28},
    {"id": 3, "name": "Marley", "age": 17},

]


app.get('/', (req, res) => {
    res.send("Public content")
})

app.get('/users', (req, res) => {
    res.json(users)
})

const port = process.env.PORT
app.listen(port)