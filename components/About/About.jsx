import Image from 'next/image';
import aboutImage from '../../public/assets/marvin-cors-FBnlCT-cGUQ-unsplash.jpeg';

const About = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-4 lg:h-screen p-8 2xl:mx-36'>
      <figure className='p-4 flex align-center col-span-12 row-span-3 md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-5'>
        <Image className='object-cover' src={aboutImage} alt='' />
      </figure>
      <article className='leading-relaxed col-span-12 row-span-3 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-5 flex justify-center items-center'>
        We train athletes and individuals who are looking to achieve their
        fitness goals, perfect their fighting skills, and protect themselves
        from harm. We offer Martial Arts classes, Bootcamp classes, and Youth
        Martial Arts classes that encourage proper form and doing your best.
        From fighters to stay-at-home moms, we greet every member with a
        welcoming, high-energy atmosphere to create the best experience here at
        Martial Masters Academy. Our gym focuses on an intellectual approach to
        fighting where we put emphasis on the smallest details and make the
        biggest difference in one&apos;s combat skills. This has resulted in
        making our gym a home for people who deeply desire to grow themselves
        and challenge their body and mind everyday. Our coaches are devoted to
        watching EVERY single member achieve their goals and become better
        people in the gym and outside the gym.
      </article>
    </section>
  );
};
export default About;
