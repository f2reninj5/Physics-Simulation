
class FixedParticle {

	constructor(x, y) {

		this.position = createVector(x, y)
	}

	getPosition() {

		let position = createVector()
		position.set(this.position)

		return position
	}

	draw() {

		ellipse(this.position.x * METRE, height - this.position.y * METRE, 0.1 * METRE)
	}
}
