import Carousel from 'react-bootstrap/Carousel';
import { SLIDES_CONTENT } from '../../utils/constants';

function Carousell () {
  return (
    <Carousel style={{ maxWidth: '700px', margin: '30px auto' }}>
      {SLIDES_CONTENT.map(s => (
        <Carousel.Item className='carouselItem'>
          <img style={{ objectFit: 'cover' }} src={s.image} alt={s.title} />
          <Carousel.Caption>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousell;
