import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import img from '../../public/assets/jyotirmoy-gupta-ryOMte-FerE-unsplash.jpg';

const KidsProgram = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-8 gap-8 2xl:mx-36 p-8 lg:px-16 lg:pl-24'>
      <figure className='relative flex col-span-12 row-span-2 md:col-span-6 md:row-span-6 2xl:col-span-8'>
        <Image className='object-cover' src={img} alt='' />
        <div className='absolute z-0 right-8 bottom-8 border-theme border-2 border-primary-700 w-full h-full'></div>
      </figure>
      <article className='leading-loose col-span-12 row-span-2 md:col-span-6 md:row-span-3 2xl:col-span-4 flex flex-col justify-center items-start'>
        <p className='pb-2'>
          Give your kids the tools to feel empowered, present and confident
        </p>
        <p className='pb-2'>
          Being a kid can be tough! We believe children should feel empowered to
          be themselves. For over five years, coaches Fernando and Kelani have
          been teaching kids ways to defend themselves and the confidence to
          de-escalate situations, should they encounter any bullies. Our Lone
          Warrior Program gives your children a safe and healthy space to
          release energy and have fun!
        </p>
      </article>
      <ul className='grid grid-cols-12 gap-2 col-span-12 row-span-2 md:col-span-6 md:row-span-3 lg:col-span-6'>
        <li className='col-span-12 lg:col-span-6 flex justify-start items-center w-full'>
          <FaCheckCircle className='text-emerald-400' />
          <span className='pl-2'>Full body workout in 60 minutes</span>
        </li>
        <li className='col-span-12 lg:col-span-6 flex justify-start items-center w-full'>
          <FaCheckCircle className='text-emerald-400' />
          <span className='pl-2'>Unlimited access to all classes</span>
        </li>
        <li className='col-span-12 lg:col-span-6 flex justify-start items-center w-full'>
          <FaCheckCircle className='text-emerald-400' />
          <span className='pl-2'>Personalized training with our coaches!</span>
        </li>
        <li className='col-span-12 lg:col-span-6 flex justify-start items-center w-full'>
          <FaCheckCircle className='text-emerald-400' />
          <span className='pl-2'>Refer-a-friend rewards</span>
        </li>
      </ul>
      <div className='col-span-12 row-span-2 flex justify-center pb-8'>
        <button className='outlined-button border-theme'>
          Explore our kids program
        </button>
      </div>
    </section>
  );
};
export default KidsProgram;
