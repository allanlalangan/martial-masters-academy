import Image from 'next/image';
import Link from 'next/link';
import { GiKatana } from 'react-icons/gi';
import heroImage from '../../public/assets/luis-vidal-FodEsaNZs48-unsplash.jpeg';
const Hero = () => {
  return (
    <section className='relative grid grid-cols-12 h-main'>
      <div className='col-span-6 p-16 flex flex-col justify-center items-start z-40 bg-gray-800'>
        <h2 className='tracking-wider drop-shadow-sm'>Level up</h2>
        <h1 className='tracking-wider font-black uppercase text-7xl py-4 drop-shadow-lg'>
          Your training
        </h1>
        <aside className='drop-shadow-sm'>
          <span className='flex tracking-wide'>
            A methodical
            <span className='px-1'>
              <GiKatana />
            </span>
            student-first approach to martial arts
          </span>
        </aside>
        <Link href='/about' passHref={true}>
          <button className='action-button'>About Us</button>
        </Link>
      </div>
      <figure className='object-cover overflow-hidden col-span-6flex items-center absolute w-full h-full right-0'>
        <Image src={heroImage} alt='gym' />
      </figure>
    </section>
  );
};
export default Hero;
