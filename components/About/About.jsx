import Image from 'next/image';
import aboutImage from '../../public/assets/marvin-cors-FBnlCT-cGUQ-unsplash.jpeg';

const About = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-4 gap-8 lg:h-screen p-8 lg:p-16 2xl:mx-36'>
      <figure className='relative flex mr-8 mb-8 align-center col-span-12 row-span-2 sm:row-span-3 md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-5'>
        <div className='image-overlay'></div>
        <Image
          className='z-[-2] border-theme object-cover'
          src={aboutImage}
          alt=''
        />
        <figcaption className='p-4 z-1 absolute bottom-[-3rem] left-[-1rem] lg:left-[-3rem] flex flex-col text-2xl font-["Mirza"] uppercase tracking-[1.5px]'>
          <span className='highlight'>Be first,</span>
          <span className='pl-4 highlight'>Be last,</span>
          <span className='pl-8 highlight'>Be gone.</span>
        </figcaption>
        <div className='absolute z-[-1] left-8 bottom-8 border-theme border-2 border-primary-700 w-full h-full'></div>
      </figure>
      <article className='flex flex-col justify-center items-start md-justify-start h-full leading-[3rem] sm:leading-loose col-span-12 row-span-2 sm:row-span-1 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-5'>
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
