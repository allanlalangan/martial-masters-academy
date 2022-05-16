import Image from 'next/image';
import styles from './ClassesGrid.module.css';

const ClassesGrid = () => {
  return (
    <ul className={styles['classes-grid']}>
      <li className={`${styles['class-card']} ${styles['boxing-card']}`}>
        <h2>Boxing</h2>
      </li>
      <li className={`${styles['class-card']} ${styles['muaythai-card']}`}>
        <h2>Muay Thai</h2>
      </li>
      <li className={`${styles['class-card']} ${styles['advanced-card']}`}>
        <h2>Advanced Classes</h2>
      </li>
      <li className={`${styles['class-card']} ${styles['sparring-card']}`}>
        <h2>Sparring</h2>
      </li>
    </ul>
  );
};
export default ClassesGrid;
