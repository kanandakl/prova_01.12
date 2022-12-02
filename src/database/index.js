const Sequelize = require("sequelize");

const Produtos = require("../model/produtos");

const databaseConfig = require("../config/databases");

const connection = new Sequelize(databaseConfig);

Produtos.init(connection);
module.exports = connection;