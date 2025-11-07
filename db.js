const {Sequelize} = require('sequelize')

const sequelize = new sequelize('postgres://postgres:admin@localhos:5432',
    {logging: false}
)

module.exports=sequelize
