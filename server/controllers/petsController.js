const createHttpError = require('http-errors');
const { Pet } = require('./../db/models');
const { OMIT } = require('../utils/constants/functions');

module.exports.createPet = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPet = await Pet.create(body);

    if (!createdPet) {
      return next(createHttpError(400, 'Something went wrong...'));
    }

    const preparedPet = OMIT(createdPet.get())

    res.status(201).send(preparedPet);
  } catch (err) {
    next(err);
  }
};

module.exports.getPets = async (req, res, next) => {
  try {
    const foundTypes = await Pet.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!foundTypes) {
      return next(createHttpError(400, 'Something went wrong...'));
    }

    res.status(200).send(foundTypes);
  } catch (err) {
    next(err);
  }
};

module.exports.getPetById = async (req, res, next) => {};

module.exports.updatePetById = async (req, res, next) => {};

module.exports.deletePetById = async (req, res, next) => {};
