
function Clock(callback, timeInterval) {

	this.timeInterval = timeInterval

	this.start = () => {

		this.expected = Date.now() + this.timeInterval
		this.timeout = setTimeout(this.frame, this.timeInterval)
	}

	this.stop = () => {

		clearTimeout(this.timeout)
	}

	this.frame = () => {

		let drift = Date.now() - this.expected
		callback()
		this.expected += this.timeInterval
		this.timeout = setTimeout(this.frame, this.timeInterval - drift)
	}
}
