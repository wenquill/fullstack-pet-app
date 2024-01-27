const { Router } = require('express');
const { petsControllers } = require('../controllers');

const petsRouter = Router();

petsRouter
  .route('/')
  .post(petsControllers.createPet)
  .get(petsControllers.getPets);

petsRouter
  .route('/:id')
  .get(petsControllers.getPetById)
  .patch(petsControllers.updatePetById)
  .delete(petsControllers.deletePetById);

module.exports = petsRouter;
