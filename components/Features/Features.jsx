import { MdTimer, MdAllInclusive } from 'react-icons/md';
import { FaAward, FaDumbbell } from 'react-icons/fa';

const FeaturesGrid = () => {
  return (
    <ul className='pattern bg-gray-800 z-0 grid grid-cols-12 gap-8 p-8 lg:px-16 my-12'>
      <li className='features-card'>
        <figure className='features-icon border-theme shadow-lg'>
          <MdTimer className='text-5xl' />
        </figure>
        <h2 className='pt-6 text-lg tracking-wide flex items-baseline col-span-12 row-span-1 font-bold capitalize'>
          Full workout in 60 minutes
        </h2>
        <div className='features-divider'></div>
        <p className='leading-loose lg:leading-relaxed col-span-12 row-span-2 font-light'>
          From boxing to kickboxing, we mix cardio and resistance training for a
          full body workout in 60 minutes.
        </p>
      </li>
      <li className='features-card'>
        <figure className='features-icon border-theme shadow-lg'>
          <MdAllInclusive className='text-5xl' />
        </figure>
        <h2 className='pt-6 text-lg tracking-wide flex items-baseline col-span-12 row-span-1 font-bold capitalize'>
          Unlimited Classes
        </h2>
        <div className='features-divider'></div>
        <p className='leading-loose lg:leading-relaxed col-span-12 row-span-2 font-light'>
          You can take any and every class we offer throughout the week. Want to
          box? Come in. Want to do two a days? Hop in! Grow as fast as you want!
        </p>
      </li>
      <li className='features-card'>
        <figure className='features-icon border-theme shadow-lg'>
          <FaAward className='text-5xl' />
        </figure>
        <h2 className='pt-6 text-lg tracking-wide flex items-baseline col-span-12 row-span-1 font-bold capitalize'>
          Refer-a-friend rewards
        </h2>
        <div className='features-divider'></div>
        <p className='leading-loose lg:leading-relaxed col-span-12 row-span-2 font-light'>
          We know it&apos;s not easy to train by yourself. Bring in a friend
          with you to class and receive a free private session with our coaches.
        </p>
      </li>
      <li className='features-card'>
        <figure className='features-icon border-theme shadow-lg'>
          <FaDumbbell className='text-5xl' />
        </figure>
        <h2 className='pt-6 text-lg tracking-wide flex items-baseline col-span-12 row-span-1 font-bold capitalize'>
          Private Training
        </h2>
        <div className='features-divider'></div>
        <p className='leading-loose lg:leading-relaxed col-span-12 row-span-2 font-light'>
          Whether your goals are to compete, get fit, or learn martial arts, our
          coaches are ready to help you reach them.
        </p>
      </li>
    </ul>
  );
};
export default FeaturesGrid;
