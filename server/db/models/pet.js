'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate (models) {
      Pet.belongsTo(models.PetTypes, {
        foreignKey: {
          allowNull: false,
          name: 'petTypeId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      });
    }
  }
  Pet.init(
    {
      name: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      owner: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      ownerContacts: {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
          is: /^\+\d{12}$/,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.ENUM('Kyiv', 'Dnipro', 'New York'),
        allowNull: false,
      },
      isFound: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      lostDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isBefore: new Date().toISOString(),
        },
      },
    },
    {
      sequelize,
      modelName: 'Pet',
      underscored: true,
    }
  );
  return Pet;
};
