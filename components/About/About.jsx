import Image from 'next/image';
import Link from 'next/link';
import aboutImage from '../../public/assets/marvin-cors-FBnlCT-cGUQ-unsplash.jpeg';

const About = () => {
  return (
    <section className='grid grid-cols-12 gap-8 sm:p-8 md:grid-rows-6 md:px-16 lg:h-screen 2xl:mx-36'>
      <figure className='relative col-span-12 mx-8 mb-8 flex sm:mr-8 md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-7'>
        <div className='border-theme absolute z-[0] h-full w-full border-2 border-primary-700 sm:left-8 sm:bottom-8'></div>
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
      </figure>
      <article className='md-justify-start col-span-12 flex flex-col items-start justify-start px-8 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-5 md:px-0'>
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
      <div className='col-span-12 flex items-start justify-center md:col-span-6 md:row-start-5 md:row-end-7'>
        <Link href='/programs'>
          <button className='outlined-button border-theme h-fit bg-gray-900'>
            Explore our programs
          </button>
        </Link>
      </div>
    </section>
  );
};
export default About;
