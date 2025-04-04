import http from 'node:http'

import { jsonHandler } from './middlewares/jsonHandler.js'
import { routeHandler } from './middlewares/routeHandler.js'

const PORT = 3333 || 3000

async function listener(req, res) {
	await jsonHandler(req, res)
	routeHandler(req, res)
}

http
	.createServer(listener)
	.listen(PORT, () =>
		console.log(`SERVER RUNNING AT PORT ${PORT} - http://localhost:${PORT}`)
	)
