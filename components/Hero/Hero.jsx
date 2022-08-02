import Link from 'next/link';
import { GiKatana } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className='h-main flex flex-col justify-center items-center border-b border-slate-700'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='tracking-wider'>Level up</h2>
        <h1 className='tracking-wider font-black uppercase text-7xl py-4'>
          Your training
        </h1>
        <aside>
          <span className='flex tracking-wide'>
            A methodical
            <span className='px-1'>
              <GiKatana />
            </span>
            student-first approach to martial arts
          </span>
        </aside>
      </div>
      <Link href='/about' passHref={true}>
        <button className='action-button'>About Us</button>
      </Link>
    </section>
  );
};
export default Hero;
