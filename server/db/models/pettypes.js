'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PetTypes extends Model {
    static associate (models) {
      PetTypes.hasMany(models.Pet, { foreignKey: 'petTypeId' });
    }
  }
  PetTypes.init(
    {
      type: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PetTypes',
      underscored: true,
    }
  );
  return PetTypes;
};
