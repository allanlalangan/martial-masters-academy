import { GiShuriken } from 'react-icons/gi';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles['logo-container']}>
      <GiShuriken className={styles.logo} />
    </div>
  );
};
export default Logo;
