import styles from './KidsProgram.module.scss';

const KidsProgram = () => {
  return (
    <section className={`${styles.container}`}>
      <figure className={styles['image-container']}></figure>
      <h2 className={styles.heading}>Lone Warrior Project</h2>
      <article className={styles.subheading}>
        <p>Give your kids the tools to feel empowered, present and confident</p>
        <p>
          Being a kid can be tough! We believe children should feel empowered to
          be themselves. For over five years, coaches Fernando and Kelani have
          been teaching kids ways to defend themselves and the confidence to
          de-escalate situations, should they encounter any bullies. Our Lone
          Warrior Program gives your children a safe and healthy space to
          release energy and have fun!
        </p>
      </article>
      <ul className={styles.features}>
        <li>feature</li>
        <li>feature</li>
        <li>feature</li>
        <li>feature</li>
      </ul>
      <button className={styles.button}>Explore our kids program</button>
    </section>
  );
};
export default KidsProgram;
