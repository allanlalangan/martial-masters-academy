import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.container} ${styles['container-layout']}`}>
      <Link href='/about' passHref={true}>
        <button className={styles.button}>About Us</button>
      </Link>
    </section>
  );
};
export default Hero;
