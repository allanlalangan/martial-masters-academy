import portrait from '../../public/assets/johann-walter-bantz-HG1pkXN7SVA-unsplash.jpg';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import Image from 'next/image';
import { CgShapeRhombus } from 'react-icons/cg';

const ProgramCard = ({ program, index }) => {
  const even = index % 2 == 0;
  return (
    <li className='pattern border-theme col-span-12 grid grid-cols-12 grid-rows-6 gap-4 bg-gray-800 p-8 md:col-span-6 lg:col-span-12 xl:col-span-6'>
      <article className='border-theme col-span-12 row-span-1 flex items-center justify-between border-b-2 border-primary-700 bg-gray-800'>
        <h2 className='text-2xl font-bold uppercase tracking-wider'>
          {program.name}
        </h2>
      </article>
      <figure
        className={`border-theme ${
          even ? 'section-left' : 'section-right'
        } col-span-12 row-span-3 flex`}
      >
        <Image
          height='100%'
          // width='100%'
          // objectFit='cover'
          src={program.image}
          className='border-theme w-full object-cover'
          alt=''
        />
      </figure>
      {/* <ul className='col-span-12 row-start-3 row-end-4 flex flex-col items-start justify-evenly'>
        <li className='mr-4 flex items-center'>
          <CgShapeRhombus className='text-lg text-emerald-400' />
          <span className='pl-2'>Boxing</span>
        </li>
        <li className='mr-4 flex items-center'>
          <CgShapeRhombus className='text-lg text-emerald-400' />
          <span className='pl-2'>Muay Thai</span>
        </li>
        <li className='mr-4 flex items-center'>
          <CgShapeRhombus className='text-lg text-emerald-400' />
          <span className='pl-2'>Boot Camp</span>
        </li>
      </ul> */}
      {/* <div className='divider col-span-12'></div> */}
      <p
        className={`border-theme ${
          even ? 'section-right' : 'section-left'
        } col-span-12 row-span-2 flex items-start border-t-2 border-primary-700 bg-gray-800 p-4 pt-4 md:border-none`}
      >
        {program.description}
      </p>
    </li>
  );
};
export default ProgramCard;
