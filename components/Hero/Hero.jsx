import Link from 'next/link';
import { GiKatana } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className='h-main flex flex-col justify-center items-start border-b border-slate-700'>
      <div>
        <h2>Level up</h2>
        <h1>Your training</h1>
        <aside>
          <span className='flex'>
            A methodical
            <span>
              <GiKatana />
            </span>
            student-first approach to martial arts
          </span>
        </aside>
      </div>
      <Link href='/about' passHref={true}>
        <button className='hover:brightness-110 shadow-md hover:shadow-lg mx-auto transition uppercase tracking-widest px-8 py-4 border rounded-bl-lg rounded-tr-lg border-primary-700'>
          About Us
        </button>
      </Link>
    </section>
  );
};
export default Hero;
