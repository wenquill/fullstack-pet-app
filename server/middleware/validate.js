const {
  VALIDATION_PET_SCHEMA,
} = require('../utils/constants/validationSchemas');

module.exports.validatePetOnCreate = async (err, req, res, next) => {
  const { body } = req;
  console.log(body);
  try {
    req.body = await VALIDATION_PET_SCHEMA.validate(body);
    next();
  } catch (err) {
    next(err);
  }
};
