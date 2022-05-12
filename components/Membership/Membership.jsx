import FeatureCard from './FeatureCard/FeatureCard';
import styles from './Membership.module.css';

const Membership = () => {
  return (
    <section className={styles.container}>
      <h1>{`What's Included In Your Membership`}</h1>
      <ul className={styles['features-grid']}>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </ul>
    </section>
  );
};
export default Membership;
