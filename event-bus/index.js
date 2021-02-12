'use strict'

const PORT = process.env.PORT || 4005

const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())
app.post('/events', (req, res) => {
    const { body:event } = req
    axios.post('http://localhost:4000/events', event)
    axios.post('http://localhost:4001/events', event)
    axios.post('http://localhost:4002/events', event)
    axios.post('http://localhost:4003/events', event)
    res.send({status:'OK'})
})

app.listen(PORT, () => {
    console.log(`Event bus running on port ${PORT}`)
})