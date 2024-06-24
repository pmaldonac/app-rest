const{ app }= require("./app")

require('dotenv').config();

app.listen(process.env.PORT_APP, () => {
    console.log(`Corriendo en puerto ${process.env.PORT_APP}`)
  })