const { Router } = require("express")

const {
	addUser,
	listUsers,
	updateUser,
	deleteUser,
} = require("../controller/UserController")

const router = Router()

router.post("/register", addUser)
router.get("/listUser", listUsers)
router.put("/update/:id", updateUser)
router.delete("/deleteUser/:id", deleteUser)

module.exports = router
