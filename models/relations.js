const People = require('./people');
const Address = require('./address');
const Cities = require("./city");
const States = require('./state')
const Cars = require("./car")
const Brand = require("./brand");
//Se establecen las relaciones entre entidades, indicando las llaves foráneas.
Address.hasOne(People, {foreignKey: 'addressId', sourceKey: 'id'}) //Una dirección puede ser de una persona
People.belongsTo(Address, {foreignKey: 'addressId'}) //Una persona puede tener solo una dirección.

Cars.hasOne(People, {foreignKey: 'carId', sourceKey:'id'})//Un vehículo puede tener un único propietario
People.belongsTo(Cars, {foreignKey: 'carId'}) // Una persona esta asociado a un vehículo.

Cities.hasMany(Address, {foreignKey: 'cityId', sourceKey:'id'}) //Una Ciudad puede tener varias direcciones asociadas
Address.belongsTo(Cities,{foreignKey: 'cityId'}) //Una dirección puede tener solo una ciudad asociada.

States.hasMany(Cities, {foreignKey: 'stateId', sourceKey:'id'}) //Un Estado puede tener varias ciudades
Cities.belongsTo(States, {foreignKey: 'stateId'}) //Una ciudad puede pertenecer a un solo estado

Brand.hasMany(Cars, {foreignKey: 'brandId', sourceKey: 'id'}) //Una marca puede tener varios modelos de vehículos
Cars.belongsTo(Brand, {foreignKey: 'brandId'}) //Un modelo de vehículo es de una marca en específico.