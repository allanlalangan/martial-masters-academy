import Link from 'next/link';

import { GiStarShuriken } from 'react-icons/gi';

const Header = () => {
  return (
    <header className='px-8 2xl:mx-36 h-header flex justify-between items-center'>
      <Link href='/' passHref={true}>
        <div className='flex justify-center items-center hover:brightness-110 cursor-pointer transition '>
          <h1 className='font-[Mirza] flex flex-col uppercase'>
            <span className='text-xl tracking-[.275rem] leading-4'>
              Martial
            </span>
            <span className='text-xl tracking-[.25rem] leading-4'>Masters</span>
            <span className='text-xl tracking-[.215rem] leading-4'>
              Academy
            </span>
          </h1>
        </div>
      </Link>
      <nav className='hidden md:block'>
        <ul className='text-sm flex justify-evenly items-center'>
          <Link href='/instructors' passHref={true}>
            <li className='hover:brightness-110 tracking-wider cursor-pointer transition px-4'>
              Instructors
            </li>
          </Link>
          <li className='hover:brightness-110 tracking-wider cursor-pointer transition px-4'>
            Classes
          </li>
          <li className='hover:brightness-110 tracking-wider cursor-pointer transition px-4'>
            Youth Program
          </li>
          <li className='hover:brightness-110 tracking-wider cursor-pointer transition px-4'>
            Schedule
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
