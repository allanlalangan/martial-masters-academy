import NavBar from './NavBar/NavBar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={styles['page-content']}>{children}</main>
    </>
  );
};
export default Layout;
