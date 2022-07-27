import Link from 'next/link';
import { GiKatana } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className='h-main flex flex-col justify-center items-center border-b border-slate-700'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl tracking-wider'>Level up</h2>
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
        <button className='text-sm mt-4 hover:brightness-110 shadow-md hover:shadow-lg mx-auto transition uppercase tracking-widest px-12 py-4 border rounded-bl-lg rounded-br-sm rounded-tr-lg rounded-tl-sm border-primary-700'>
          About Us
        </button>
      </Link>
    </section>
  );
};
export default Hero;
