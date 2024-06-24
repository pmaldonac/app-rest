const { DataTypes } = require('sequelize')
const { sequelize } = require('./connection')
//Entidad encargada de almacenar las ciudades.
const City = sequelize.define('city', {
    id: {                   //Atributo que identifica a una ciudad.
        autoIncrement: true, //Autoincrementable
        primaryKey: true,   //Se establece como llave primaria
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo.
    },
    name: {                 //Atributo que almacena el nombre de la ciudad
        type: DataTypes.STRING,//Se define el tipo de dato del atributo.
    },
    stateId: {              //Atributo que almacena el id del estado asociado a la ciudad.
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo.
    }
});
module.exports = City