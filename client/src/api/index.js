import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getPetTypes = () => httpClient.get('/pettypes');

export const createPet = values => httpClient.post('/pets', values);

export const getPets = filter =>
  httpClient.get(`/pets?${queryString.stringify(filter)}`);

export const updatePet = ({ id, data }) =>
  httpClient.patch(`/pets/${id}`, data);

export const deletePet = id => httpClient.delete(`/pets/${id}`);
