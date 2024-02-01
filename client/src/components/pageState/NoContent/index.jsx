import styles from './../PageState.module.scss';
import image from './noContent.png';

function NoContent () {
  return (
    <div className={styles.cont}>
      <img width='200' src={image} alt='no content' />
      <h2 className={styles.text}>Sorry, no results found...</h2>
    </div>
  );
}

export default NoContent;
