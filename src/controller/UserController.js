const models = require("../models")
const bcrypt = require("bcrypt")

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

module.exports = {
	addUser,
}
