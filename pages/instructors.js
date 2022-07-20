import { BsInstagram } from 'react-icons/bs';

import styles from './instructors.module.scss';

const Instructors__page = () => {
  return (
    <>
      <h2 className={styles.heading}>Meet Our Coaches</h2>
      <ul className={`${styles.coaches} p-0 m-0`}>
        <li className={`${styles.card}`}>
          <h2 className={styles.name}>Name</h2>
          <figure className={styles.portrait}></figure>
          <h3>Title</h3>
          <ul className={styles.teaching}>
            <li>Boxing</li>
            <li>Muay Thai</li>
            <li>Boot Camp</li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ex
            sit! Illo aspernatur magni, vel asperiores cumque pariatur vero
            delectus eius saepe ipsam labore.
          </p>
          <aside className={styles.social}>
            <BsInstagram />
          </aside>
        </li>

        <li className={`${styles.card}`}>
          <h2 className={styles.name}>Name</h2>
          <figure className={styles.portrait}></figure>
          <h3>Title</h3>
          <ul className={styles.teaching}>
            <li>Boxing</li>
            <li>Muay Thai</li>
            <li>Boot Camp</li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ex
            sit! Illo aspernatur magni, vel asperiores cumque pariatur vero
            delectus eius saepe ipsam labore.
          </p>
          <aside className={styles.social}>
            <BsInstagram />
          </aside>
        </li>

        <li className={`${styles.card}`}>
          <h2 className={styles.name}>Name</h2>
          <figure className={styles.portrait}></figure>
          <h3 className={styles.title}>Title</h3>
          <ul className={styles.teaching}>
            <li>Boxing</li>
            <li>Muay Thai</li>
            <li>Boot Camp</li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ex
            sit! Illo aspernatur magni, vel asperiores cumque pariatur vero
            delectus eius saepe ipsam labore.
          </p>
          <aside className={styles.social}>
            <BsInstagram />
          </aside>
        </li>

        <li className={`${styles.card}`}>
          <h2 className={styles.name}>Name</h2>
          <figure className={styles.portrait}></figure>
          <h3>Title</h3>
          <ul className={styles.teaching}>
            <li>Boxing</li>
            <li>Muay Thai</li>
            <li>Boot Camp</li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ex
            sit! Illo aspernatur magni, vel asperiores cumque pariatur vero
            delectus eius saepe ipsam labore.
          </p>
          <aside className={styles.social}>
            <BsInstagram />
          </aside>
        </li>
      </ul>
    </>
  );
};
export default Instructors__page;
