import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import { GiStarShuriken } from 'react-icons/gi';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);
  const router = useRouter();
  return (
    <header className='fixed top-0 z-30 flex h-header w-full items-center justify-between bg-gray-900 px-8 shadow-md 2xl:mx-36'>
      <Link href='/' passHref={true}>
        <div
          onClick={() => setNavOpen(false)}
          className='flex cursor-pointer items-center justify-center transition hover:brightness-110 '
        >
          <h1 className='flex flex-col font-[Mirza] uppercase'>
            <span className='text-xl leading-4 tracking-[.275rem]'>
              Martial
            </span>
            <span className='text-xl leading-4 tracking-[.25rem]'>Masters</span>
            <span className='text-xl leading-4 tracking-[.215rem]'>
              Academy
            </span>
          </h1>
        </div>
      </Link>
      <nav
        className={`fixed top-0 mt-[13vh] w-full ${
          navOpen ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'
        } transition-nav z-10 h-full overflow-hidden bg-gray-800 md:static md:mt-0 md:h-fit md:w-fit md:bg-transparent md:opacity-100`}
      >
        <ul className='flex h-full flex-col items-center justify-start text-sm md:flex-row'>
          <Link href='/instructors' passHref={true}>
            <li
              onClick={() => setNavOpen(false)}
              className={`mx-2 my-4 cursor-pointer px-2 tracking-wider transition hover:brightness-110 ${
                router.pathname === '/instructors' && 'current-page'
              }`}
            >
              Instructors
            </li>
          </Link>
          <li
            onClick={() => setNavOpen(false)}
            className={
              'mx-2 my-4 cursor-pointer px-2 tracking-wider transition hover:brightness-110'
            }
          >
            Programs
          </li>
          <li
            onClick={() => setNavOpen(false)}
            className='mx-2 my-4 flex cursor-pointer items-center px-2 tracking-wider transition hover:brightness-110'
          >
            <span>Class Schedule</span>
            <FaCalendarAlt className='text-xltext-emerald-400 ml-2 text-emerald-400' />
          </li>
        </ul>
      </nav>
      <button className='md:hidden' onClick={toggleNav}>
        <MdMenu className='text-2xl md:hidden' />
      </button>
    </header>
  );
};
export default Header;
