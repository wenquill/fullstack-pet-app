import { Link } from 'react-router-dom';
import { FaShieldCat } from 'react-icons/fa6';
import styles from './Header.module.scss';

function Header () {
  return (
    <header className={`container ${styles.header}`}>
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
              Find my pet
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to='/pets'>
              Our pets
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
