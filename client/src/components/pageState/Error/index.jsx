import { MdErrorOutline } from 'react-icons/md';
import styles from './../PageState.module.scss';

function Error () {
  return (
    <div className={styles.cont}>
      <MdErrorOutline color='#525252' size={200} />
      <h2 className={styles.text}>Sorry, it seems like something went wrong...</h2>
    </div>
  );
}

export default Error;
