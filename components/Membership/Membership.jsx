import { FaCheckCircle } from 'react-icons/fa';
import ClassesGrid from './ClassesGrid';
import styles from './Membership.module.css';
import FeaturesGrid from './FeaturesGrid';

const Membership = () => {
  return (
    <section className={`${styles.container} ${styles['container-layout']}`}>
      <ClassesGrid />
      <article className={styles['features-card']}>
        <div className={styles.features}>
          <h1 className={styles['features_title']}>{`Monthly Membership`}</h1>
          <h2 className={styles.subheading}>
            New members are eligilble for 3 free introductory classes!
          </h2>
          <aside className={styles['divider-container']}>
            <h3 className={styles['included-heading']}>{`What's Included`}</h3>
            <div className={styles.divider}></div>
          </aside>
          <ul className={styles['included-list']}>
            <li className={styles['included-item']}>
              <FaCheckCircle className={styles['check-circle']} />
              Full body workout in 60 minutes
            </li>
            <li className={styles['included-item']}>
              <FaCheckCircle className={styles['check-circle']} />
              Unlimited access to all classes
            </li>
            <li className={styles['included-item']}>
              <FaCheckCircle className={styles['check-circle']} />
              Personalized training with our coaches!
            </li>
            <li className={styles['included-item']}>
              <FaCheckCircle className={styles['check-circle']} />
              Refer-a-friend rewards
            </li>
          </ul>
        </div>
        <div className={styles['price-card']}>
          <h2 className={styles['price-heading']}>
            Join us for a fixed price of
          </h2>
          <h1 className={styles['final-price']}>
            <span className={styles.dollar}>$</span>99.99
          </h1>
          <div className={styles.actions}>
            <span className={styles['learn-more']}>Learn more</span>
            <button className={styles['action-button']}>Contact a Coach</button>
            <button className={styles['action-button']}>Visit Us</button>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Membership;
