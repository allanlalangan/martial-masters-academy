import Image from 'next/image';
import { CgShapeRhombus } from 'react-icons/cg';
import img from '../../public/assets/jyotirmoy-gupta-ryOMte-FerE-unsplash.jpg';

const KidsProgram = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-8 gap-8 2xl:mx-36 p-8 lg:px-16 '>
      <figure className='relative flex ml-8 mb-8 col-span-12 row-span-2 md:col-span-6 md:row-start-1 md:row-end-7 2xl:col-span-8'>
        <div className='image-overlay'></div>
        <Image className='z-[-2] object-cover' src={img} alt='' />
        <figcaption className='p-4 z-1 absolute bottom-[-3rem] right-[3rem] flex flex-col text-2xl font-["Mirza"] uppercase tracking-[1.5px]'>
          <span className='highlight leading-8'>empower</span>
          <span className='pl-4 highlight leading-8'>your</span>
          <span className='pl-8 highlight leading-8'>children</span>
        </figcaption>
        <div className='absolute z-[-1] right-8 bottom-8 border-theme border-2 border-primary-700 w-full h-full'></div>
      </figure>
      <article className='leading-[3rem] sm:leading-loose col-span-12 row-span-2 md:col-start-7 md:col-end-13 md:row-span-3 2xl:col-span-4 flex flex-col justify-start items-start'>
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
      <aside className='col-span-12 md:col-start-7 md:col-end-13 md:row-start-4 md:row-end-5 flex items-center'>
        <h3 className='w-full sm:w-1/2 md:w-[100%] lg:w-[75%] tracking-[3.5px] uppercase font-semibold text-[.80rem]'>
          Students will..
        </h3>
        <div className='w-full h-[1px] bg-primary-700'></div>
      </aside>
      <ul className='leading-loose grid grid-cols-12 gap-2 col-span-12 row-span-2 md:col-start-7 md:col-end-13 '>
        <li className='col-span-12 lg:col-span-6 flex justify-start items-baseline w-full'>
          <CgShapeRhombus className='text-emerald-400 text-lg' />
          <span className='ml-2'>Learn proper striking technique</span>
        </li>
        <li className='col-span-12 lg:col-span-6 flex justify-start items-baseline w-full'>
          <CgShapeRhombus className='text-emerald-400 text-lg' />
          <span className='ml-2'>
            Learn defensive grappling and position control
          </span>
        </li>
        <li className='col-span-12 lg:col-span-6 flex justify-start items-baseline w-full'>
          <CgShapeRhombus className='text-emerald-400 text-lg' />
          <span className='ml-2'>Push and encourage each other</span>
        </li>
        <li className='col-span-12 lg:col-span-6 flex justify-start items-baseline w-full'>
          <CgShapeRhombus className='text-emerald-400 text-lg' />
          <span className='ml-2'>Move around and have fun!</span>
        </li>
      </ul>
      <div className='col-span-12 row-span-1 flex justify-center'>
        <button className='outlined-button border-theme'>
          Explore our kids program
        </button>
      </div>
    </section>
  );
};
export default KidsProgram;
