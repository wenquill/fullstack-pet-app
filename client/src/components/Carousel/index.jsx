import Carousel from 'react-bootstrap/Carousel';
import i1 from './1st.webp';
import i2 from './2nd.jpeg';
import i3 from './3rd.webp';
import i4 from './4th.webp';
import i5 from './5th.jpeg';

function Carousell () {
  return (
    <Carousel
      style={{ maxWidth: '700px', margin: '30px auto' }}
    >
      <Carousel.Item className='carouselItem'>
        <img style={{ objectFit: 'cover' }} src={i1} alt='' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img style={{ objectFit: 'cover' }} src={i2} alt='' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img style={{ objectFit: 'cover' }} src={i3} alt='' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img style={{ objectFit: 'cover' }} src={i4} alt='' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img style={{ objectFit: 'cover' }} src={i5} alt='' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
