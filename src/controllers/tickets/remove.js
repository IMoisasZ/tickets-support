export function remove({ req, res, database }) {
	const { id } = req.params

	database.remove('tickets', id)

	return res.writeHead(201).end('Operação realizada com sucesso!')
}
