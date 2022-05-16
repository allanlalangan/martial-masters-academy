import Link from 'next/link';
import { GiKatana } from 'react-icons/gi';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.container} ${styles['container-layout']}`}>
      <div className={styles.banner}>
        <h2 className={styles.subheading}>Level up</h2>
        <h1 className={styles.heading}>Your training</h1>
        <aside className={styles.tagline}>
          <span>
            A methodical{' '}
            <span className={styles['icon-container']}>
              <GiKatana className={styles['icon']} />
            </span>
            student-first approach to martial arts
          </span>
        </aside>
      </div>
      <Link href='/about' passHref={true}>
        <button className={styles.button}>About Us</button>
      </Link>
    </section>
  );
};
export default Hero;
