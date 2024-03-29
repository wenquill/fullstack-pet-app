const createHttpError = require('http-errors');
const { Pet } = require('./../db/models');
const { OMIT } = require('../utils/constants/functions');

module.exports.createPet = async (req, res, next) => {
  const { body, file } = req;

  try {
    if (file) {
      body.image = file.filename;
    }

    const createdPet = await Pet.create(body);

    if (!createdPet) {
      return next(createHttpError(400, 'Something went wrong...'));
    }

    const preparedPet = OMIT(createdPet.get());

    res.status(201).send(preparedPet);
  } catch (err) {
    next(err);
  }
};

module.exports.getPets = async (req, res, next) => {
  const { order } = req.query;
  const { pagination, whereConditions } = req;

  try {
    const foundTypes = await Pet.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      where: whereConditions,
      limit: pagination.limit,
      offset: pagination.offset,
      order: [[order.split(',')]],
    });

    if (!foundTypes) {
      return next(createHttpError(400, 'Something went wrong...'));
    }

    res.status(200).send(foundTypes);
  } catch (err) {
    next(err);
  }
};

module.exports.getPetById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundPet = await Pet.findByPk(id, {
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!foundPet) {
      return next(createHttpError(404, 'Pet not found ):'));
    }

    res.status(200).send(foundPet);
  } catch (err) {
    next(err);
  }
};

module.exports.updatePetById = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const [updatedPetCount, [updatedPet]] = await Pet.update(body, {
      where: { id },
      returning: true,
    });

    if (!updatedPetCount) {
      return next(createHttpError(404, 'Pet not found );'));
    }

    const preparedPet = OMIT(updatedPet.get());

    res.status(200).send(preparedPet);
  } catch (err) {
    next(err);
  }
};

module.exports.deletePetById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedPet = await Pet.destroy({
      where: { id },
    });

    if (!deletedPet) {
      return next(createHttpError(404, 'Pet not found'));
    }

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports.updatePetImage = async (req, res, next) => {
  const {
    file,
    params: { id },
  } = req;

  try {
    if (!file) {
      return next(createHttpError(422, 'Image is required'));
    }

    const [updatedPetCount, [updatedPet]] = await Pet.update(
      { image: file.filename },
      { where: { id }, raw: true, returning: true }
    );

    if (!updatedPetCount) {
      return next(createHttpError(404, 'Phone not found ):'));
    }

    const preparedPet = OMIT(updatedPet.get());

    res.status(200).send(preparedPet);
  } catch (err) {
    next(err);
  }
};
