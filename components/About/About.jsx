import Image from 'next/image';
import aboutImage from '../../public/assets/marvin-cors-FBnlCT-cGUQ-unsplash.jpeg';

const About = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-4 gap-8 p-8 lg:h-screen lg:p-16 2xl:mx-36'>
      <figure className='align-center relative col-span-12 row-span-2 mr-8 mb-8 flex sm:row-span-3 md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-5'>
        <div className='image-overlay'></div>
        <Image
          className='border-theme z-[-2] object-cover'
          src={aboutImage}
          alt=''
        />
        <figcaption className='z-1 absolute bottom-[-3rem] left-[-1rem] flex flex-col p-4 font-["Mirza"] text-2xl uppercase tracking-[1.5px] lg:left-[-3rem]'>
          <span className='highlight'>Be first,</span>
          <span className='highlight pl-4'>Be last,</span>
          <span className='highlight pl-8'>Be gone.</span>
        </figcaption>
        <div className='border-theme absolute left-8 bottom-8 z-[-1] h-full w-full border-2 border-primary-700'></div>
      </figure>
      <article className='md-justify-start col-span-12 row-span-2 flex h-full flex-col items-start justify-center leading-[3rem] sm:row-span-1 sm:leading-loose md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-5'>
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
