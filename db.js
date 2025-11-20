const {Sequelize} = require('sequelize')

const sequelize = New sequelize('postgres:://postgres:admin@localhos:5432',
    {logging: false}
)

module.export=sequelize
