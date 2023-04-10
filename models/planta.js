'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Planta.init({
    especie: DataTypes.STRING,
    luminosidade: DataTypes.FLOAT,
    temperatura: DataTypes.FLOAT,
    umidadeSolo: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Planta',
  });
  return Planta;
};