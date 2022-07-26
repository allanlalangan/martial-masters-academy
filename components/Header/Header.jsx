import Link from 'next/link';

import { GiStarShuriken } from 'react-icons/gi';

const Header = () => {
  return (
    <header className='header flex justify-between items-center'>
      <Link href='/' passHref={true}>
        <div className='flex items-center'>
          <GiStarShuriken className='text-4xl' />
          <h1 className='flex flex-col uppercase'>
            <span>Martial</span>
            <span>Masters</span>
            <span>Academy</span>
          </h1>
        </div>
      </Link>
      <nav>
        <ul className='flex justify-evenly items-center'>
          <Link href='/instructors' passHref={true}>
            <li className='px-2'>Instructors</li>
          </Link>
          <li className='px-2'>Classes</li>
          <li className='px-2'>Youth Program</li>
          <li className='px-2'>Schedule</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
