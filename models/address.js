const { DataTypes } = require('sequelize')
const { sequelize } = require('./connection')
//Entidad encargada de almacenar las direcciones de las personas.
const Address = sequelize.define('address', {
    id: {                       //Atributo que identifica a una dirección
        autoIncrement: true, //Autoincrementable
        primaryKey: true, //Llave primaria
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo.
    },
    street: { //Atributo que almacena el nombre de la calle
        type: DataTypes.STRING, //Se define el tipo de dato del atributo.
    },
    number: { //Atributo que almacena el número de casa
        type: DataTypes.INTEGER, //Se define el tipo de dato del atributo.
    },
    main:{ 
        type: DataTypes.INTEGER, //Se define el tipo de dato del atributo.
    },
    cityId: { //Atributo que almacena el id de la ciudad 
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo.
    }
});
module.exports = Address