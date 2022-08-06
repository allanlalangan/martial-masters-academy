import Link from 'next/link';
import { useRouter } from 'next/router';

import { GiStarShuriken } from 'react-icons/gi';

const Header = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <header className='flex h-header items-center justify-between px-8 2xl:mx-36'>
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
      <nav className='hidden md:block'>
        <ul className='flex items-center justify-evenly text-sm'>
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
          <li className='cursor-pointer px-4 tracking-wider transition hover:brightness-110'>
            Schedule
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
