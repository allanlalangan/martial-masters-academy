import Image from 'next/image';
import Link from 'next/link';
import { GiKatana } from 'react-icons/gi';
import heroImage from '../../public/assets/luis-vidal-FodEsaNZs48-unsplash.jpeg';
import Pattern from '../Pattern/Pattern';
const Hero = ({ aboutRef }) => {
  return (
    <section className='relative mb-16 grid h-main grid-cols-12'>
      <div className='pattern relative col-span-12 flex flex-col items-center justify-center bg-gray-800 p-8 md:col-span-6 md:items-start md:p-16'>
        <span className='text-3xl tracking-wide drop-shadow-sm'>Elevate</span>
        <span className='py-4 text-center text-5xl font-black uppercase tracking-wider drop-shadow-lg md:text-justify md:text-7xl'>
          Your training
        </span>
        <aside className='flex w-full flex-col items-center drop-shadow-sm md:block '>
          A methodical <GiKatana className='inline text-xl' /> student-first
          approach to martial arts
        </aside>
        <button
          onClick={() => {
            aboutRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          className='outlined-button border-theme mt-4'
        >
          About Us
        </button>
      </div>
      <figure className='absolute right-0 col-span-6 hidden h-full w-full items-center justify-end overflow-hidden object-cover md:flex'>
        <Image src={heroImage} alt='gym' />
      </figure>
    </section>
  );
};
export default Hero;
