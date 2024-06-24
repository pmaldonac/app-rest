const { DataTypes } = require('sequelize')
const { sequelize } = require('./connection')

//Entidad que almacena los datos de las personas.
const People = sequelize.define('people', {
    id: {                   //Atributo que identifica a una persona
        autoIncrement: true, //Autoincrementable
        primaryKey: true,   //Llave primaria
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo
    },
    firstName: {                //Atributo que almacena el nombre de la persona.
        type: DataTypes.STRING //Se define el tipo de dato del atributo
    },
    lastName: {                 //Atributo que almacena el apellido de la persona
        type: DataTypes.STRING//Se define el tipo de dato del atributo
    },
    addressId:{                 //Atributo que almacenará el id de la dirección de la persona
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo
    },
    carId: {                    //Atributo que almacenará el id del vehículo de la persona.
        type:DataTypes.INTEGER //Se define el tipo de dato del atributo
    }
});
module.exports = People