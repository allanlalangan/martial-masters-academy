import CoachCard from '../components/CoachCard/CoachCard';

import { BsInstagram } from 'react-icons/bs';

const Instructors__page = () => {
  return (
    <>
      <h2 className='mx-8 mb-12 border-b-[1.5px] border-gray-700 p-12 pb-8 text-center text-3xl font-bold uppercase tracking-widest lg:mx-16'>
        Meet Our Coaches
      </h2>
      <ul className='mx-8 grid grid-cols-12 gap-8'>
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
      </ul>
    </>
  );
};
export default Instructors__page;
