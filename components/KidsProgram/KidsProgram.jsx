import Image from 'next/image';
import { CgShapeRhombus } from 'react-icons/cg';
import img from '../../public/assets/jyotirmoy-gupta-ryOMte-FerE-unsplash.jpg';

const KidsProgram = () => {
  return (
    <section className='grid-rows-8 grid grid-cols-12 gap-8 sm:p-8 md:px-16 2xl:mx-36'>
      <figure className='relative col-span-12 row-span-2 mx-8 mb-8 flex sm:mx-0 sm:ml-8 md:col-span-6 md:row-start-1 md:row-end-7'>
        <div className='border-theme absolute z-[0] h-full w-full border-2 border-primary-700 sm:right-8 sm:bottom-8'></div>
        <div className='image-overlay'></div>
        <Image className='border-theme z-[-2] object-cover' src={img} alt='' />
        <figcaption className='z-1 absolute bottom-[-3rem] right-[3rem] flex flex-col p-4 font-["Mirza"] text-2xl uppercase tracking-[1.5px]'>
          <span className='highlight'>empower</span>
          <span className='highlight pl-4'>your</span>
          <span className='highlight pl-8'>children</span>
        </figcaption>
      </figure>
      <article className='col-span-12 row-span-2 mx-8 flex flex-col items-start justify-start sm:mx-0 md:col-start-7 md:col-end-13 md:row-span-3'>
        <h3 className='mb-4 text-lg font-semibold'>
          Give your kids the tools to feel empowered, present and confident
        </h3>
        <p className='pb-2'>
          Being a kid can be tough! We believe children should feel empowered to
          be themselves. For over five years, coaches Fernando and Kelani have
          been teaching kids ways to defend themselves and the confidence to
          de-escalate situations, should they encounter any bullies. Our Lone
          Warrior Program gives your children a safe and healthy space to
          release energy and have fun!
        </p>
      </article>
      <aside className='col-span-12 mx-8 flex items-center sm:mx-0 md:col-start-7 md:col-end-13 md:row-start-4 md:row-end-5'>
        <h3 className='w-full text-[.80rem] font-semibold uppercase tracking-[3.5px] sm:w-1/2 md:w-[100%] lg:w-[75%]'>
          Students will..
        </h3>
        <div className='divider'></div>
      </aside>
      <ul className='col-span-12 row-span-2 mx-8 grid grid-cols-12 gap-2 sm:mx-0 md:col-start-7 md:col-end-13 '>
        <li className='col-span-12 flex w-full items-center justify-start lg:col-span-6'>
          <span className='w-[20px]'>
            <CgShapeRhombus className='text-lg text-emerald-400' />
          </span>
          <span className='ml-2'>Learn proper striking technique</span>
        </li>
        <li className='col-span-12 flex w-full items-center justify-start lg:col-span-6'>
          <span className='w-[20px]'>
            <CgShapeRhombus className='text-lg text-emerald-400' />
          </span>
          <span className='ml-2'>
            Learn defensive grappling and position control
          </span>
        </li>
        <li className='col-span-12 flex w-full items-center justify-start lg:col-span-6'>
          <span className='w-[20px]'>
            <CgShapeRhombus className='text-lg text-emerald-400' />
          </span>
          <span className='ml-2'>Push and encourage each other</span>
        </li>
        <li className='col-span-12 flex w-full items-center justify-start lg:col-span-6'>
          <span className='w-[20px]'>
            <CgShapeRhombus className='text-lg text-emerald-400' />
          </span>
          <span className='ml-2'>Move around and have fun!</span>
        </li>
      </ul>
      <div className='col-span-12 row-span-1 flex justify-center'>
        <button className='outlined-button border-theme bg-gray-900'>
          Explore our kids program
        </button>
      </div>
    </section>
  );
};
export default KidsProgram;
