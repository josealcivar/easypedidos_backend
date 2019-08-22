//require("dotenv").config();
const fs = require('fs');
const sequelize	= require('sequelize');
const Op = sequelize.Op;
// "development": {
//   "username": process.env.DB_DEV_USER,
//   "password": process.env.DB_DEV_PWD,
//   "database": process.env.DB_DEV_NAME,
//   "host": process.env.DB_DEV_HOSTNAME,
//   "dialect": process.env.DB_DEV_DIALECT,
//   "logging": false 
  
// }
let operadores ={
  
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like
  };

module.exports =
{
  "development": {
    "username": "root",
    "password": null,
    "database": "easypedidosdevdb",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases":operadores,
    "logging": false 
    
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
    
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
    
  }
}
