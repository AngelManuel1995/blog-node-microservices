'use strict'

const express = require('express')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')
const EventPayload = require('./classes/event_payload')
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4000
const posts = {}

app.post('/posts', async (req, res) => {
	const id = randomBytes(4).toString('hex')
	const { title } = req.body
	posts[id] = {
		id, title
	}
	await axios.post('http://localhost:4005/events', {type:'PostCreated', data:{ id, title }})
	res.status(201).send(posts[id])
})

app.post('/events', (req, res) => {
	console.log('Received Event', req.body.type)
	res.send({})
})

app.get('/posts', (req, res) => {
	res.status(200).send(posts)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})