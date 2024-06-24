const express = require("express")
const router = express.Router()
const findRoute = require("./findByName")

router.use("/", findRoute)
module.exports = router