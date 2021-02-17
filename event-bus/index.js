'use strict'

const PORT = process.env.PORT || 4005

const express = require('express')
const axios = require('axios')
const events = []
const app = express()
app.use(express.json())

app.post('/events', (req, res) => {
    const { body:event } = req
    events.push(event)
    axios.post('http://localhost:4000/events', event)
    axios.post('http://localhost:4001/events', event)
    axios.post('http://localhost:4002/events', event)
    axios.post('http://localhost:4003/events', event)
    res.send({status:'OK'})
})

app.get('/events', (req, res) => {
    res.send(events)
})

app.listen(PORT, () => {
    console.log(`Event bus running on port ${PORT}`)
})