'use strict'

const PORT = process.env.PORT || 4003
const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

app.post('/events', (req, res) => {
	res.send({})
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})