import ClassesGrid from './ClassesGrid';
import styles from './Membership.module.css';
import FeaturesGrid from './FeaturesGrid';

const Membership = () => {
  return (
    <section className={`${styles.container} ${styles['container-layout']}`}>
      <h1>{`What's Included In Your Membership`}</h1>
      <FeaturesGrid />
      <ClassesGrid />
    </section>
  );
};
export default Membership;
