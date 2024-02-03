const { Router } = require('express');
const { petsControllers } = require('../controllers');
const { uploadFile, prepareQueries, pagination } = require('../middleware');

const petsRouter = Router();

petsRouter
  .route('/')
  .post(uploadFile.uploadPhoto, petsControllers.createPet)
  .get(
    pagination.paginatePets,
    prepareQueries.prepareGetQueries,
    petsControllers.getPets
  );

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
