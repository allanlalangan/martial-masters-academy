import ProgramCard from '../components/ProgramCard/ProgramCard';
import { coaches, programs } from '../public/static/data';
import { BsInstagram } from 'react-icons/bs';
import Divider from '../components/Divider/Divider';

const Programs__page = () => {
  return (
    <>
      <h2 className='mx-8 mb-12 border-b-[1.5px] border-gray-700 p-12 pb-8 text-center text-3xl font-bold uppercase tracking-widest lg:mx-16'>
        Our Programs
      </h2>
      <ul className='mb-12 grid grid-cols-12 gap-8 sm:mx-16 lg:mx-16'>
        {programs.map((program, i) => (
          <ProgramCard key={i} index={i} program={program} />
        ))}
      </ul>
      <Divider />
    </>
  );
};
export default Programs__page;
