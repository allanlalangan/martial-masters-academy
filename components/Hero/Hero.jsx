import Link from 'next/link';
import { GiKatana } from 'react-icons/gi';

const Hero = () => {
  return (
    <section>
      <div>
        <h2>Level up</h2>
        <h1>Your training</h1>
        <aside>
          <span>
            A methodical{' '}
            <span>
              <GiKatana />
            </span>
            student-first approach to martial arts
          </span>
        </aside>
      </div>
      <Link href='/about' passHref={true}>
        <button>About Us</button>
      </Link>
    </section>
  );
};
export default Hero;
