import styles from './404.module.scss';
import image from './notFound.webp';

function NotFound () {
  return (
    <div className={styles.cont}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt='not found' />
      </div>
      <h3 className={styles.text}>
        Sorry, it seems like this page does not exist
      </h3>
    </div>
  );
}

export default NotFound;
