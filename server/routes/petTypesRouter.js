const { Router } = require('express');
const { petTypesControllers } = require('../controllers');

const petTypesRouter = Router();

petTypesRouter
  .route('/')
  .post(petTypesControllers.createPetType)
  .get(petTypesControllers.getPetTypes);

module.exports = petTypesRouter;
