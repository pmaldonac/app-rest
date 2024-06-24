const repository = require("../repository/searchByName")
exports.searchByName= async(req, res) =>{
  try {
    const name= req.body.name
    if(!name){
      return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})
    }
      let findData = await repository.findByName(name)
      return res.status(200).json({status:200, data: findData})
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error
      });
    }
  }
  