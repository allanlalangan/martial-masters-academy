import styles from './Programs.module.scss';

const Programs = () => {
  return (
    <ul className={`${styles['classes-grid']}`}>
      <li className={`${styles['class-card']} ${styles['boxing-card']}`}>
        <h2 className={styles['class-title']}>Boxing</h2>
      </li>
      <li className={`${styles['class-card']} ${styles['muaythai-card']}`}>
        <h2 className={styles['class-title']}>Muay Thai</h2>
      </li>
      <li className={`${styles['class-card']} ${styles['advanced-card']}`}>
        <h2 className={styles['class-title']}>Advanced Classes</h2>
      </li>
      <li className={`${styles['class-card']} ${styles['sparring-card']}`}>
        <h2 className={styles['class-title']}>Sparring</h2>
      </li>
    </ul>
  );
};
export default Programs;
