import Image from 'next/image';
import Link from 'next/link';
import { GiKatana } from 'react-icons/gi';
import heroImage from '../../public/assets/luis-vidal-FodEsaNZs48-unsplash.jpeg';
import Pattern from '../Pattern/Pattern';
const Hero = () => {
  return (
    <section className='relative grid grid-cols-12 h-main'>
      <div className='pattern col-span-6 p-8 lg:p-16 flex flex-col justify-center items-start z-40 bg-gray-800'>
        <h2 className='tracking-widest drop-shadow-sm text-3xl'>Elevate</h2>
        <h1 className='tracking-wider font-black uppercase text-7xl py-4 drop-shadow-lg'>
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
          <button className='mt-4 outlined-button border-theme'>
            About Us
          </button>
        </Link>
        {/* <div className='bg-repeat w-full absolute'>
          <Pattern className='' />
        </div> */}
      </div>
      <figure className='object-cover overflow-hidden col-span-6 flex items-center absolute w-full h-full right-0'>
        <Image src={heroImage} alt='gym' />
      </figure>
    </section>
  );
};
export default Hero;
