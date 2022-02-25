const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()

require("./services/mongooseDB")

const app = express()
app.use(morgan("dev"))
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("port", process.env.PORT || 4000)

app.listen(app.get("port"), () => {
	console.log("servidor en puerto http://localhost:" + app.get("port"))
})
