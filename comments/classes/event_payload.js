class EventPayload {
	constructor(type, data) {
		this.payload = {
			type,
			data
		}
	}
}

module.exports = EventPayload 