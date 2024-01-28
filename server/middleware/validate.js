const {
  VALIDATION_PET_SCHEMA,
} = require('../utils/constants/validationSchemas');

module.exports.validatePetOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await VALIDATION_PET_SCHEMA.validate(body);
    next();
  } catch (err) {
    next(err);
  }
};
