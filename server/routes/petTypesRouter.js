const { Router } = require('express');
const { petTypesControllers } = require('../controllers');

const petTypesRouter = Router();

petTypesRouter
  .route('/')
  .post(petTypesControllers.createPetType)
  .get(petTypesControllers.getPetTypes);

petTypesRouter
  .route('/:id')
  .get(petTypesControllers.getPetTypeById)
  .patch(petTypesControllers.updatePetTypeById)
  .delete(petTypesControllers.deletePetTypeById);

module.exports = petTypesRouter;
