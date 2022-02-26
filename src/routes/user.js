const { Router } = require("express")

const {
	addUser,
	listUsers,
	updateUser,
	deleteUser,
	login,
} = require("../controller/UserController")

const auth = require("../middlewares/auth")

const router = Router()

router.post("/register", auth.verifyAdmin, addUser)
router.get("/listUser", auth.verifyUser, listUsers)
router.put("/update/:id", auth.verifyAdmin, updateUser)
router.delete("/deleteUser/:id", auth.verifyAdmin, deleteUser)
router.post("/login", login)

module.exports = router
