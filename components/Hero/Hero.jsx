import Image from 'next/image';
import Link from 'next/link';
import { GiKatana } from 'react-icons/gi';
import heroImage from '../../public/assets/luis-vidal-FodEsaNZs48-unsplash.jpeg';
import Pattern from '../Pattern/Pattern';
const Hero = () => {
  return (
    <section className='relative mb-16 grid h-main grid-cols-12'>
      <div className='pattern relative col-span-6 flex flex-col items-start justify-center bg-gray-800 p-8 lg:p-16'>
        <h2 className='text-3xl tracking-widest drop-shadow-sm'>Elevate</h2>
        <h1 className='py-4 text-7xl font-black uppercase tracking-wider drop-shadow-lg'>
          Your training
        </h1>
        <aside className='drop-shadow-sm'>
          <span className='flex tracking-wider'>
            A methodical
            <span className='px-1'>
              <GiKatana />
            </span>
            student-first approach to martial arts
          </span>
        </aside>
        <Link href='/about' passHref={true}>
          <button className='outlined-button border-theme mt-4'>
            About Us
          </button>
        </Link>
        {/* <div className='bg-repeat w-full absolute'>
          <Pattern className='' />
        </div> */}
      </div>
      <figure className='absolute right-0 col-span-6 flex h-full w-full items-center overflow-hidden object-cover'>
        <Image src={heroImage} alt='gym' />
      </figure>
    </section>
  );
};
export default Hero;
