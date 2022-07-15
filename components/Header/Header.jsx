import Link from 'next/link';
import Logo from './Logo';
import styles from './Header.module.scss';
import { GiStarShuriken } from 'react-icons/gi';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Link href='/' passHref={true}>
        <div className={styles['main-title']}>
          <GiStarShuriken className={styles['logo-icon']} />
          <h1>
            <span className={`${styles['title-line']} ${styles['line-1']}`}>
              Martial
            </span>
            <span className={`${styles['title-line']} ${styles['line-2']}`}>
              Masters
            </span>
            <span className={`${styles['title-line']} ${styles['line-3']}`}>
              Academy
            </span>
          </h1>
        </div>
      </Link>
      <ul className={styles['nav-links']}>
        <Link href='/instructors' passHref={true}>
          <li className={`${styles['nav-link']}`}>Instructors</li>
        </Link>
        <li className={`${styles['nav-link']}`}>Classes</li>
        <li className={`${styles['nav-link']}`}>Youth Program</li>
        <li className={`${styles['nav-link']}`}>Schedule</li>
      </ul>
    </header>
  );
};
export default Header;
