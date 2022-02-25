const models = require("../models")
// para encriptar contrseñas
const bcrypt = require("bcrypt")

// crear usuario
async function addUser(req, res, next) {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 10)
		const reg = await models.Usuario.create(req.body)
		res.status(200).json(reg)
	} catch (error) {
		res.status(500).send({
			message: "Ocurrio un error",
		})
		next(error)
	}
}

// Listar los usuarios
async function listUsers(req, res, next) {
	try {
		const valor = req.query.valor
		const reg = await models.Usuario.find(
			{
				$or: [
					{ nombre: new RegExp(valor, "i") },
					{ email: new RegExp(valor, "i") },
				],
			},
			{ createdAt: 0 }
		).sort({
			createdAt: -1,
		})
		res.status(200).json(reg)
	} catch (error) {
		res.status(500).send({
			message: "Ocurrio un error",
		})
		next(error)
	}
}

// Actulizar los uaurios
async function updateUser(req, res, next) {
	const { id } = req.params

	req.body.password = await bcrypt.hash(req.body.password, 10)

	await models.Usuario.findOneAndUpdate(
		{ _id: id },
		{
			rol: req.body.rol,
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		}
	)
		.then((result) => {
			res.json("Actualizado")
		})
		.catch((error) => console.error(error))
}

// Borrar usuario
async function deleteUser(req, res, next) {
	const { id } = req.params
	await models.Usuario.deleteOne({ _id: id })
		.then((result) => {
			res.json("Borrado")
		})
		.catch((error) => console.error(error))
}

module.exports = {
	addUser,
	listUsers,
	updateUser,
	deleteUser,
}
