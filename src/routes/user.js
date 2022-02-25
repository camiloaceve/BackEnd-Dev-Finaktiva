const { Router } = require("express")

const { addUser } = require("../controller/UserController")

const router = Router()

router.post("/register", addUser)

module.exports = router
