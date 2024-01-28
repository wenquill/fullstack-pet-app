const yup = require('yup');
const { CITIES } = require('./enums');

module.exports.VALIDATION_PET_SCHEMA = yup.object({
  name: yup.string().trim().min(1).max(32).required(),
  owner: yup.string().trim().min(2).max(64).required(),
  ownerContacts: yup
    .string()
    .length(13, 'phone number should has exatly 13 characters.')
    .matches(/^\+\d{12}$/, 'phone number should match +XX XXX XXX XXXX.')
    .required(),
  description: yup.string().required(),
  city: yup.string().oneOf(CITIES).required(),
  petTypeId: yup.number().min(1).required(),
  lostDate: yup
    .date()
    .max(new Date(), 'the date cannot be later than today.')
    .required(),
});
