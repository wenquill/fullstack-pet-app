import * as yup from 'yup';
import { CITIES, YUP_MESSAGES } from './constants';

const { required, min, max32, max64 } = YUP_MESSAGES;

export const PET_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2, min).max(32, max32).required(required),
  owner: yup.string().min(2, min).max(64, max64).required(required),
  ownerContacts: yup
    .string()
    .length(13, 'phone number must contain exactly 13 characters')
    .matches(/^\+\d{12}$/, 'phone number is incorrect')
    .required(required),
  description: yup.string().required(required),
  city: yup
    .string()
    .oneOf(CITIES.map(c => c.name))
    .required(required),
  lostDate: yup.date().max(new Date()),
  petTypeId: yup.number().required(required),
  petPhoto: yup.mixed(),
});
