import styles from './ClassesGrid.module.css';

const ClassesGrid = () => {
  return (
    <ul className={styles['classes-grid']}>
      <li className={`${styles['class-card']}`}>
        <h2>Boxing</h2>
      </li>
      <li className={`${styles['class-card']}`}>
        <h2>Muay Thai</h2>
      </li>
      <li className={`${styles['class-card']}`}>
        <h2>Advanced Classes</h2>
      </li>
      <li className={`${styles['class-card']}`}>
        <h2>Sparring</h2>
      </li>
    </ul>
  );
};
export default ClassesGrid;
