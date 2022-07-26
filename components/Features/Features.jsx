import { MdTimer, MdAllInclusive } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';

const FeaturesGrid = () => {
  return (
    <ul className='grid grid-cols-12 grid-rows-6 gap-4 px-8'>
      <li className='bg-slate-700 lg:col-span-3 lg:row-span-6 p-8 rounded-lg '>
        <MdTimer className='text-5xl' />
        <h2>Full body workout in 60 minutes</h2>
        <p>
          From boxing to kickboxing, we mix cardio and resistance training for a
          full body workout in 60 minutes.
        </p>
      </li>
      <li className='bg-slate-700 lg:col-span-3 lg:row-span-6 p-8 rounded-lg '>
        <MdAllInclusive className='text-5xl' />
        <h2>Access to ALL classes</h2>
        <p>
          You can take any and every class we offer throughout the week. Want to
          box? Come in. Want to do two a days? Hop in! Grow as fast as you want!
        </p>
      </li>
      <li className='bg-slate-700 lg:col-span-3 lg:row-span-6 p-8 rounded-lg '>
        <FaAward className='text-5xl' />
        <h2>Refer-a-friend rewards</h2>
        <p>
          We know it{"'"}s not easy to train by yourself. Bring in a friend with
          you to class and receive a free private session with our coaches.
        </p>
      </li>
      <li className='bg-slate-700 lg:col-span-3 lg:row-span-6 p-8 rounded-lg '>
        <MdTimer className='text-5xl' />
        <h2>Private Training</h2>
        <p>
          Whether your goals are to compete, get fit, or learn martial arts, our
          coaches are ready to help you reach them.
        </p>
      </li>
    </ul>
  );
};
export default FeaturesGrid;
