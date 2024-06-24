const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const router = require("./routes/index");
const sequelize = require("./models/connection.js");
require("./models/relations.js");

(async () => {
    await sequelize.sequelize.sync({force: false});
})();


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 


app.use("/test/", router);

module.exports = { app }
