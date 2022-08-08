import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaCalendarAlt } from 'react-icons/fa';

import { GiStarShuriken } from 'react-icons/gi';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <header className='relative flex h-header items-center justify-between px-8 2xl:mx-36'>
      <Link href='/' passHref={true}>
        <div className='flex cursor-pointer items-center justify-center transition hover:brightness-110 '>
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
      <nav className='fixed top-0 left-[-50%] z-20 h-screen overflow-hidden bg-gray-800 bg-opacity-90 md:static md:h-fit md:bg-transparent'>
        <ul className='flex h-full flex-col items-center justify-evenly text-sm md:flex-row'>
          <Link href='/instructors' passHref={true}>
            <li
              className={`cursor-pointer px-4 tracking-wider transition hover:brightness-110 ${
                router.pathname === '/instructors' && 'current-page'
              }`}
            >
              Instructors
            </li>
          </Link>
          <li
            className={
              'cursor-pointer px-4 tracking-wider transition hover:brightness-110'
            }
          >
            Classes
          </li>
          <li
            className={
              'cursor-pointer px-4 tracking-wider transition hover:brightness-110'
            }
          >
            Youth Program
          </li>
          <li className='flex cursor-pointer items-center px-4 tracking-wider transition hover:brightness-110'>
            <span>Class Schedule</span>
            <FaCalendarAlt className='text-xltext-emerald-400 ml-2 text-emerald-400' />
          </li>
        </ul>
      </nav>
      <MdMenu className='text-2xl md:hidden' />
    </header>
  );
};
export default Header;
