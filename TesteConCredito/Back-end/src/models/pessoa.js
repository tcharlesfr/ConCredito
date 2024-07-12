const sequelize = require('sequelize');
const database = require('../db');
const schema = "";

class Pessoa extends sequelize.Model { }


Pessoa.init(
    {        
        nome:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        senha:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cargo:
        {
            type: sequelize.STRING,
        }
    },
    {
        sequelize: database, modelName: 'Pessoas', schema
    }
)

module.exports = Pessoa;