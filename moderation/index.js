'use strict'

const PORT = process.env.PORT || 4003
const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

app.post('/events', async (req, res) => {
	const { type, data } = req.body
	if(type === 'CommentCreated'){
		const status = data["content"].toLowerCase().includes('orange') ? 'reject' : 'approved'
		await axios.post('http://localhost:4005/events', {type:'CommentModerated', data: {
			id:data.id,
			postId: data.postId,
			content: data.content,
			status
		}})
	}
	res.send({})
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})