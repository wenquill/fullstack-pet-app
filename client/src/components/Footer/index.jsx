import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebookSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import styles from './Footer.module.scss';

function Footer () {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.copyright}>&copy; Copyright 2024</div>
      <div className={styles.socials}>
        <FaInstagram size={25} />
        <FaTelegram size={25} />
        <FaTwitterSquare size={25} />
        <FaFacebookSquare size={25} />
        <FaYoutube size={25} />
      </div>
    </footer>
  );
}

export default Footer;
