import { ClockLoader } from 'react-spinners';
import styles from './../PageState.module.scss';

function Loading ({ isFetching }) {
  return (
    <div className={styles.cont}>
      <ClockLoader
        color='#525252'
        loading={isFetching}
        size={200}
        speedMultiplier={1}
      />
      <h2 className={styles.text}>Please, wait a moment...</h2>
    </div>
  );
}

export default Loading;
