import { Link } from 'react-router-dom';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { FaDog, FaCat } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import styles from './Home.module.scss';
import image from './dog.webp';
import Carousell from '../../components/Carousel';
import HomeTextCard from '../../components/HomeTextCard';

function Home () {
  return (
    <>
      <section className={styles.upperSection}>
        <div className={`container ${styles.cont}`}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              Your search service for lost animals {'<'}3
            </h1>
            <h2>We`ll help you to find your pet or find an owner.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, modi
              praesentium aspernatur pariatur dignissimos, recusandae corrupti
              impedit nulla, provident omnis facere ducimus velit odio rem
              facilis fugit iusto quia nisi.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              id natus hic error voluptate delectus voluptas, facilis repellat
              nulla, cumque maxime ullam ipsa quod, numquam deserunt doloribus
              ad sequi officia?
            </p>
            <div className={styles.buttons}>
              <Link to='/pet/create'>
                <button className={styles.linkBtn}>
                  I am searching for my pet
                </button>
              </Link>

              <Link to='/pets'>
                <button className={styles.linkBtn}>
                  I am searching for an owner
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img width={300} className={styles.image} src={image} alt='dog' />
          </div>
        </div>
      </section>
      <section>
        <div className={`container ${styles.secondCont}`}>
          <h2 className={styles.subtitle}>What we can do?</h2>
          <div className={styles.cards}>
            <article className={styles.card}>
              <FaCat size={40} />
              <h3>Help you to find your pet after filling out the form</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium
              </p>
            </article>
            <article className={styles.card}>
              <FaDog size={40} />
              <h3>Help you to find an owner of the loast pet</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium tenetur ullam maiores assumenda
              </p>
            </article>
            <article className={styles.card}>
              <MdOutlineScreenSearchDesktop size={40} />
              <h3>Best search service</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium tenetur
              </p>
            </article>
            <article className={styles.card}>
              <FaHome size={40} />
              <h3>Deliver your found pet right to ypor home</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Vero repudiandae quos
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className={styles.thirdSection}>
        <div className={`container ${styles.thirdCont}`}>
          <div className={styles.carouselContainer}>
            <Carousell />
          </div>
          <div className={styles.textCont}>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              consectetur illum
            </h2>
            <HomeTextCard
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repudiandae reiciendis laboriosam eos placeat itaque fugiat
              officia, officiis, ducimus ea quae ratione. Laudantium, esse
              blanditiis. Debitis quia nisi enim eius!'
            />
            <HomeTextCard
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repudiandae reiciendis laboriosam eos placeat itaque fugiat
              officia, officiis, ducimus ea quae ratione. Laudantium, esse
              blanditiis. Debitis quia nisi enim eius!'
            />
            <HomeTextCard
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repudiandae reiciendis laboriosam eos placeat itaque fugiat
              officia, officiis, ducimus ea quae ratione. Laudantium, esse
              blanditiis. Debitis quia nisi enim eius!'
            />
            <HomeTextCard
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repudiandae reiciendis laboriosam eos placeat itaque fugiat
              officia, officiis, ducimus ea quae ratione. Laudantium, esse
              blanditiis. Debitis quia nisi enim eius!'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
