const Sequelize = require('sequelize');
const { connect } = require('../routes');

const database = process.env.DATABASE;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT;

const Squelize = new Sequelize(database, username, password, {
    host,
    dialect,
})

module.exports = connection