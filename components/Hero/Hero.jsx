import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.container} ${styles['container-layout']}`}>
      <div className={styles.banner}>
        <h1 className={styles.heading}>Train different</h1>
        <aside className={styles.tagline}>
          <span>Hard work</span>
          <span>Dedication</span>
        </aside>
      </div>
      <Link href='/about' passHref={true}>
        <button className={styles.button}>About Us</button>
      </Link>
    </section>
  );
};
export default Hero;
