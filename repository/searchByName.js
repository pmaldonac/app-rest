const People = require("../models/people")
const Address = require("../models/address")
const Cities = require("../models/city")
const States = require("../models/state")
const Cars = require("../models/car")
const Brands = require("../models/brand")


exports.findByName = async(name) =>{
    try{
        let data = await People.findAll({ //Método para encontrar
            attributes: [   //Definimos los atributos que se quieren mostrar de la entidad People
              'id',
              'firstName',
              'lastName'
            ],
            include: [  
              {//Inner Join (intersección entre entidad People y Address)
                model: Address, //Definimos la entidad a la que se quiere acceder, en este caso Address
                attributes: ['id', 'street', 'number'], //Atributos de Address que queremos que se incluya en la respuesta
                include: [ //LEFT Join Cities
                  {
                    model: Cities, 
                    attributes: ['id', 'name'], //Atributos de City que queremos que se incluyan en la respuesta
                    include: [ //LEFT Join con Cities
                      {
                        model: States,
                        attributes: ['id', 'name']  //Atributos de State que queremos que se incluyan en la respuesta
                      }
                    ]
                  }
                ]
              },
              {//Inner Join (intersección entre entidad People y Cars)
                model: Cars,
                attributes: ['id', 'model', 'year'], //Atributos de Cars que queremos que se incluyan en la respuesta
                include: [ //LEFT Join con Brands
                  {
                    model: Brands,
                    attributes: ['id', 'name'] //Atributos de Brands que queremos que se incluyan en la respuesta
                  }
                ]
              }
            ],
            where: { firstName: name } //Buscamos por nombre
          })
          
    return data //Retorna la data
    }catch(error){ //En caso de error retorna el error.
        console.log(error)
        return error
    }
}