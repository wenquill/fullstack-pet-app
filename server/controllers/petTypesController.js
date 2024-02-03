const createHttpError = require('http-errors');
const { PetType } = require('./../db/models');

module.exports.createPetType = async (req, res, next) => {};

module.exports.getPetTypes = async (req, res, next) => {
  try {
    const foundTypes = await PetType.findAll({
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
