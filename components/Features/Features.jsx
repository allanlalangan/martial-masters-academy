import { MdTimer, MdAllInclusive } from 'react-icons/md';
import { FaAward, FaDumbbell } from 'react-icons/fa';

const FeaturesGrid = () => {
  return (
    <ul className='bg-gray-800 grid grid-cols-12 gap-8 lg:gap-4 p-8 my-12'>
      <li className='relative grid grid-cols-12 grid-rows-4 bg-gray-700 h-full col-span-12 md:col-span-6 lg:col-span-3 p-8 rounded-lg rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg pt-16 shadow-md'>
        <figure className='absolute bg-gray-900 left-[1rem] top-[-1rem] p-4 w-fit rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg shadow-lg'>
          <MdTimer className='text-5xl' />
        </figure>
        <h2 className='pt-6 text-xl flex items-baseline col-span-12 row-span-1 font-semibold'>
          Full workout in 60 minutes
        </h2>
        <div className='col-span-12 row-span-1 w-full h-[1px] bg-primary-700 my-auto'></div>
        <p className='leading-relaxed col-span-12 row-span-2 font-light'>
          From boxing to kickboxing, we mix cardio and resistance training for a
          full body workout in 60 minutes.
        </p>
      </li>
      <li className='relative grid grid-cols-12 grid-rows-4 bg-gray-700 h-full col-span-12 md:col-span-6 lg:col-span-3 p-8 rounded-lg rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg pt-16 shadow-md'>
        <figure className='absolute bg-gray-900 left-[1rem] top-[-1rem] p-4 w-fit rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg shadow-lg'>
          <MdAllInclusive className='text-5xl' />
        </figure>
        <h2 className='pt-6 text-xl flex items-baseline col-span-12 row-span-1 font-semibold'>
          Access to ALL classes
        </h2>
        <div className='col-span-12 row-span-1 w-full h-[1px] bg-primary-700 my-auto'></div>
        <p className='leading-relaxed col-span-12 row-span-2 font-light'>
          You can take any and every class we offer throughout the week. Want to
          box? Come in. Want to do two a days? Hop in! Grow as fast as you want!
        </p>
      </li>
      <li className='relative grid grid-cols-12 grid-rows-4 bg-gray-700 h-full col-span-12 md:col-span-6 lg:col-span-3 p-8 rounded-lg rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg pt-16 shadow-md'>
        <figure className='absolute bg-gray-900 left-[1rem] top-[-1rem] p-4 w-fit rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg shadow-lg'>
          <FaAward className='text-5xl' />
        </figure>
        <h2 className='pt-6 text-xl flex items-baseline col-span-12 row-span-1 font-semibold'>
          Refer-a-friend rewards
        </h2>
        <div className='col-span-12 row-span-1 w-full h-[1px] bg-primary-700 my-auto'></div>
        <p className='leading-relaxed col-span-12 row-span-2 font-light'>
          We know it{"'"}s not easy to train by yourself. Bring in a friend with
          you to class and receive a free private session with our coaches.
        </p>
      </li>
      <li className='relative grid grid-cols-12 grid-rows-4 bg-gray-700 h-full col-span-12 md:col-span-6 lg:col-span-3 p-8 rounded-lg rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg pt-16 shadow-md'>
        <figure className='absolute bg-gray-900 left-[1rem] top-[-1rem] p-4 w-fit rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg shadow-lg'>
          <FaDumbbell className='text-5xl' />
        </figure>
        <h2 className='pt-6 text-xl flex items-baseline col-span-12 row-span-1 font-semibold'>
          Private Training
        </h2>
        <div className='col-span-12 row-span-1 w-full h-[1px] bg-primary-700 my-auto'></div>
        <p className='leading-relaxed col-span-12 row-span-2 font-light'>
          Whether your goals are to compete, get fit, or learn martial arts, our
          coaches are ready to help you reach them.
        </p>
      </li>
    </ul>
  );
};
export default FeaturesGrid;
