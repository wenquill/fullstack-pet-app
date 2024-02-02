const { Router } = require('express');
const { petsControllers } = require('../controllers');
const { validation, uploadFile } = require('../middleware');

const petsRouter = Router();

petsRouter
  .route('/')
  .post(
    validation.validatePetOnCreate,
    uploadFile.uploadPhoto,
    petsControllers.createPet
  )
  .get(petsControllers.getPets);

petsRouter
  .route('/:id')
  .get(petsControllers.getPetById)
  .patch(uploadFile.uploadPhoto, petsControllers.updatePetById)
  .delete(petsControllers.deletePetById);

petsRouter.patch(
  '/:id/images',
  uploadFile.uploadPhoto,
  petsControllers.updatePetImage
);

module.exports = petsRouter;
