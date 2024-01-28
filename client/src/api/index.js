import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getPetTypes = () => httpClient.get('/pettypes');

export const createPet = values => httpClient.post('/pets', values);
