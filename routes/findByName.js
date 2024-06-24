const Controller = require("../controllers/findByName")
var router = require("express").Router()

router.post("/search", Controller.searchByName)

module.exports = router