import Link from 'next/link';
import Logo from './Logo';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles['main-nav']}>
      <Link href='/' passHref={true}>
        <div className={styles['main-title']}>
          <h1>
            Martial Masters <br />
            Academy
          </h1>
        </div>
      </Link>
      <ul className={styles['nav-links']}>
        <Link href='/instructors' passHref={true}>
          <li className={`${styles['nav-link']}`}>Instructors</li>
        </Link>
        <li className={`${styles['nav-link']}`}>Classes</li>
        <li className={`${styles['nav-link']}`}>Youth Program</li>
      </ul>
    </nav>
  );
};
export default NavBar;
