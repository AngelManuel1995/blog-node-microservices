'use strict'

const express = require('express')
const { randomBytes } = require('crypto')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 4000
const posts = {}

app.post('/posts', (req, res) => {
	const id = randomBytes(4).toString('hex')
	const { title } = req.body
	posts[id] = {
		id, title
	}
	res.status(201).send(posts[id])
})

app.get('/posts', (req, res) => {
	res.status(200).send(posts)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})