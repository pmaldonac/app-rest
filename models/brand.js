const { DataTypes } = require('sequelize')
const { sequelize } = require('./connection')
//Entidad que almacena marcas de vehículos.
const Brand = sequelize.define('brand', {
    id: {                   //Atributo que almacena el identificador de la marca.
        autoIncrement: true, //Autoincrementable
        primaryKey: true, //Llave primaria
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo.
    },
    name: {             //Atributo que almacena el nombre de la marca.
        type: DataTypes.STRING //Se define el tipo de dato del atributo.
    }
});
module.exports = Brand