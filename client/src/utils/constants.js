import i1 from '../components/Carousel/1st.webp';
import i2 from '../components/Carousel/2nd.jpeg';
import i3 from '../components/Carousel/3rd.webp';
import i4 from '../components/Carousel/4th.webp';
import i5 from '../components/Carousel/5th.jpeg';

export const SLIDES_CONTENT = [
  {
    id: '1',
    title: 'First slide label',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: i1,
  },
  {
    id: '2',
    title: 'Second slide label',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: i2,
  },
  {
    id: '3',
    title: 'Third slide label',
    text: ' Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: i3,
  },
  {
    id: '4',
    title: 'Fourth slide label',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: i4,
  },
  {
    id: '5',
    title: 'Fifth slide label',
    text: ' Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: i5,
  },
];

export const CITIES = [
  {
    id: '1',
    name: 'Kyiv',
  },
  {
    id: '2',
    name: 'Dnipro',
  },
  {
    id: '3',
    name: 'New York',
  },
];

export const IS_FOUND_OPTIONS = [
  {
    id: '1',
    value: true,
    text: 'found',
  },
  {
    id: '2',
    value: false,
    text: 'not found',
  },
];

export const ORDER_OPTIONS = [
  {
    id: '1',
    value: 'createdAt,ASC',
    text: 'newest',
  },
  {
    id: '2',
    value: 'createdAt,DESC',
    text: 'oldest',
  },
];

export const YUP_MESSAGES = {
  required: 'this field is required',
  min: 'it should contain at least two characters',
  max32: 'it should contain at most 32 characters',
  max64: 'it should contain at most 64 characters',
};
