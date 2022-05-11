import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav>
      <h1>Martial Masters Academy</h1>
      <ul className={styles['nav-links']}>
        <li>Instructors</li>
        <li>Programs</li>
        <li>Youth Program</li>
      </ul>
    </nav>
  );
};
export default NavBar;
