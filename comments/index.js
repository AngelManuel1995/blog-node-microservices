'use strict'

const PORT = process.env.PORT || 4001

const express = require('express')
const { randomBytes } = require('crypto')
const cors = require('cors')
const EventPayload = require('./classes/event_payload')
const axios = require('axios')
const app = express()
app.use(express.json())
app.use(cors())
const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
  const comments = commentsByPostId[req.params.id] || []
  res.status(200).send(comments)
})

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { content } = req.body
  const comments = commentsByPostId[req.params.id] || []
  comments.push({id: commentId, content})
  commentsByPostId[req.params.id] = comments
  
  await axios.post('http://localhost:4005/events', {type:'CommentCreated', data:{ id:commentId, content, postId: req.params.id }})
  res.status(201).send(comments)  
})

app.post('/events', (req, res) => {
	console.log('Received Event', req.body.type)
	res.send({})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

