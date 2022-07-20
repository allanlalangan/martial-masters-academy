import { MdMail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.map}>Map</div>
      <section className={styles.contact}>
        <article className={styles.address}>
          <p>5405 SE Alexander St. Unit D</p>
          <p>Hillsboro, OR 97123</p>
        </article>
        <ul className={styles.socials}>
          <li>
            <MdMail />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <FaFacebookF />
          </li>
        </ul>
      </section>
    </footer>
  );
};
export default Footer;
