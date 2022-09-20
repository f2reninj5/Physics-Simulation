
class Particle extends FixedParticle {

	constructor(x, y, mass) {

		super(x, y)

		this.mass = mass
		this.velocity = createVector(0, 0)
		this.acceleration = createVector(0, -9.8)

		this.forces = []
	}

	getVelocity() {

		let velocity = createVector()
		velocity.set(this.velocity)

		return velocity
	}

	getAcceleration() {

		let acceleration = createVector()
		acceleration.set(this.acceleration)

		return acceleration
	}

	update(period) {
		
			// s = ut + 0.5at²
			let s = this.getVelocity().mult(period).add(this.getAcceleration().mult(0.5 * (period ** 2)))
			let u = this.getVelocity()
			let v = this.getVelocity().add(this.getAcceleration().mult(period))

			// s = ut + 0.5at²
			this.position.add(this.getVelocity().mult(period)).add(this.getAcceleration().mult(0.5 * (period ** 2)))
		
		if (this.position.y < 0) {

			this.position.y = 0
			this.velocity.y = -this.velocity.y
		}
		
		// v = u + at
		this.velocity.add(this.getAcceleration().mult(period))

		console.log(this.velocity.y)
	}

	applyForce() {


	}

	removeForce() {


	}
}
