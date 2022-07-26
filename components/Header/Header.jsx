import Link from 'next/link';
import Logo from './Logo';

import { GiStarShuriken } from 'react-icons/gi';

const Header = () => {
  return (
    <header>
      <Link href='/' passHref={true}>
        <div>
          <GiStarShuriken />
          <h1>
            <span>Martial</span>
            <span>Masters</span>
            <span>Academy</span>
          </h1>
        </div>
      </Link>
      <nav>
        <ul>
          <Link href='/instructors' passHref={true}>
            <li>Instructors</li>
          </Link>
          <li>Classes</li>
          <li>Youth Program</li>
          <li>Schedule</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
