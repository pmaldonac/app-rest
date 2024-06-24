const { DataTypes } = require('sequelize')
const { sequelize } = require('./connection')
//Entidad que almacena vehículos.
const Car = sequelize.define('cars', {
    id: {                   //Atributo que identifica un vehículo.
        autoIncrement: true, //Autoincrementable
        primaryKey: true, //Llave primaria
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo.
    },
    model: {                    //Atributo que almacena el modelo del vehículo.
        type: DataTypes.STRING //Se define el tipo de dato del atributo.
    },
    year: {                     //Atributo que almacena el año del vehículo.
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo.
    },
    brandId:{                   //Atributo que almacena el id asociado a la marca del vehículo.
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo.
    }
});
module.exports = Car