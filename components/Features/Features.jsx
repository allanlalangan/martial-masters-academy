import { MdTimer, MdAllInclusive } from 'react-icons/md';
import { FaAward, FaDumbbell } from 'react-icons/fa';

const FeaturesGrid = () => {
  return (
    <ul className='pattern my-12 grid grid-cols-12 gap-8 bg-gray-800 py-8 sm:p-8 md:px-16'>
      <li className='features-card'>
        <figure className='features-icon border-theme shadow-lg'>
          <MdTimer className='text-5xl' />
        </figure>
        <h3 className='col-span-12 row-span-1 flex items-baseline pt-6 text-lg font-bold capitalize tracking-wide'>
          Full workout in 60 minutes
        </h3>
        <div className='divider'></div>
        <p className='col-span-12 row-span-2'>
          From boxing to kickboxing, we mix cardio and resistance training for a
          full body workout in 60 minutes.
        </p>
      </li>
      <li className='features-card'>
        <figure className='features-icon border-theme shadow-lg'>
          <MdAllInclusive className='text-5xl' />
        </figure>
        <h3 className='col-span-12 row-span-1 flex items-baseline pt-6 text-lg font-bold capitalize tracking-wide'>
          Unlimited Classes
        </h3>
        <div className='divider'></div>
        <p className='col-span-12 row-span-2'>
          You can take any and every class we offer throughout the week. Want to
          box? Come in. Want to do two a days? Hop in! Grow as fast as you want!
        </p>
      </li>
      <li className='features-card'>
        <figure className='features-icon border-theme shadow-lg'>
          <FaAward className='text-5xl' />
        </figure>
        <h3 className='col-span-12 row-span-1 flex items-baseline pt-6 text-lg font-bold capitalize tracking-wide'>
          Refer-a-friend rewards
        </h3>
        <div className='divider'></div>
        <p className='col-span-12 row-span-2'>
          We know it&apos;s not easy to train by yourself. Bring in a friend
          with you to class and receive a free private session with our coaches.
        </p>
      </li>
      <li className='features-card'>
        <figure className='features-icon border-theme shadow-lg'>
          <FaDumbbell className='text-5xl' />
        </figure>
        <h3 className='col-span-12 row-span-1 flex items-baseline pt-6 text-lg font-bold capitalize tracking-wide'>
          Private Training
        </h3>
        <div className='divider'></div>
        <p className='col-span-12 row-span-2'>
          Whether your goals are to compete, get fit, or learn martial arts, our
          coaches are ready to help you reach them.
        </p>
      </li>
    </ul>
  );
};
export default FeaturesGrid;
