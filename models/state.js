const { DataTypes } = require('sequelize')
const { sequelize } = require('./connection')
//Entidad que almacena los datos de los estados.
const State = sequelize.define('state', {
    id: {                   //Atributo que identifica a un estado
        autoIncrement: true, //Autoincrementable
        primaryKey: true,      // Se establece como llave primaria
        type: DataTypes.INTEGER //Se define el tipo de dato del atributo
    },
    name: { //Atributo que almacena el nombre del estado.
        type: DataTypes.STRING //Se define el tipo de dato del atributo
    }
});
module.exports = State