import styles from '../../pages/Home/Home.module.scss';

function HomeTextCard ({ text }) {
  return <article className={styles.art}>{text}</article>;
}

export default HomeTextCard;
