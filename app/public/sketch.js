
const FRAMERATE = 120 // frames per second
const PERIOD = 1 / FRAMERATE

const METRE = 100 // pixels

let p

function setup() {

	p = new Particle(1, 1, 1)

	createCanvas(800, 800)

	new Clock(() => {

		p.update(PERIOD)

	}, 1000 * PERIOD).start() // milliseconds
}

function draw() {

	background(0)

	fill(255)
	p.draw()
}
