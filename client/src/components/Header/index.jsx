import { Link } from 'react-router-dom';
import { FaShieldCat } from 'react-icons/fa6';
import styles from './Header.module.scss';

function Header () {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <FaShieldCat size={30} />
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} to='/'>
              Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to='/pet/create'>
              Add pet
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to='/pets'>
              Pet list
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
