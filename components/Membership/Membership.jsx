import FeatureCard from './FeatureCard/FeatureCard';
import styles from './Membership.module.css';
import { MdTimer, MdAllInclusive } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';

const Membership = () => {
  return (
    <section className={`${styles.container} ${styles['container-layout']}`}>
      <h1>{`What's Included In Your Membership`}</h1>
      <ul className={styles['features-grid']}>
        <li className={`${styles['feature-card']} ${styles['grid-item']}`}>
          <MdTimer className={styles['feature-icon']} />
          <h2>Full body workout in 60 minutes</h2>
          <p>
            From boxing or kickboxing, we mix cardio and resistance training for
            a full body workout in 60 minutes.
          </p>
        </li>
        <li className={`${styles['feature-card']} ${styles['grid-item']}`}>
          <MdAllInclusive className={styles['feature-icon']} />
          <h2>Access to ALL classes</h2>
          <p>
            You can take any and every class we offer throughout the week. Want
            to box? Come in. Want to do two a days? Hop in! Grow as fast as you
            want!
          </p>
        </li>
        <li className={`${styles['feature-card']} ${styles['grid-item']}`}>
          <FaAward className={styles['feature-icon']} />
          <h2>Refer-a-friend rewards</h2>
          <p>
            We know it{"'"}s not easy to train by yourself. Bring in a friend
            with you to class and receive a free private session with our
            coaches.
          </p>
        </li>
        <li className={`${styles['feature-card']} ${styles['grid-item']}`}>
          <MdTimer className={styles['feature-icon']} />
          <h2>Private Training</h2>
          <p>
            Whether your goals are to compete, get fit, or learn martial arts,
            our coaches are ready to help you reach them.
          </p>
        </li>
      </ul>
    </section>
  );
};
export default Membership;
