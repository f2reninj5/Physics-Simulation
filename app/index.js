
const path = require('path')
// const { fetchBuilder, MemoryCache } = require('node-fetch-cache')
// const fetch = fetchBuilder.withCache(new MemoryCache({ ttl: 1000 * 60 * 5 }))
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

const PORT = process.env.PORT

app.enable('trust proxy')

app.set('views', path.resolve(__dirname, './views')) // PATH: views
app.set('view engine', 'ejs')

app.use(cookieParser())

app.use(express.static(path.resolve(__dirname, './public'))) // PATH: public

app.use((request, response, next) => {
	
	response.locals.partialsDir = path.resolve(__dirname, './views/partials') // PATH: views/partials

	next()
})

app.get('/', async (request, response) => {
	
	response.render('home/main')
})

module.exports = app.listen(PORT, () => {

	console.log(`Listening on http://127.0.0.1:${PORT}`)
})
