import CoachCard from '../components/CoachCard/CoachCard';
import { coaches } from '../public/static/data';
import { BsInstagram } from 'react-icons/bs';
import Divider from '../components/Divider/Divider';

const Instructors__page = () => {
  return (
    <>
      <h2 className='mx-8 mb-12 border-b-[1.5px] border-gray-700 p-12 pb-8 text-center text-3xl font-bold uppercase tracking-widest lg:mx-16'>
        Meet Our Coaches
      </h2>
      <ul className='mb-12 grid grid-cols-12 gap-8 sm:mx-16 lg:mx-32'>
        {coaches.map((coach, i) => (
          <CoachCard key={i} index={i} coach={coach} />
        ))}
      </ul>
      <Divider />
    </>
  );
};
export default Instructors__page;
