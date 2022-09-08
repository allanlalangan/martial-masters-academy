import portrait from '../../public/assets/johann-walter-bantz-HG1pkXN7SVA-unsplash.jpg';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import Image from 'next/image';
import { CgShapeRhombus } from 'react-icons/cg';

const ProgramCard = ({ program, index }) => {
  const even = index % 2 == 0;
  return (
    <li className='pattern border-theme col-span-12 grid grid-cols-12 grid-rows-6 gap-4 bg-gray-800 p-4 sm:p-8 md:col-span-12 lg:col-span-6 lg:flex lg:flex-col xl:grid'>
      <article className='border-theme col-span-12 row-span-1 flex items-center justify-between border-b-2 border-primary-700 bg-gray-800'>
        <h2 className='text-2xl font-bold uppercase tracking-wider'>
          {program.name}
        </h2>
      </article>
      <figure
        className={`border-theme ${
          even ? 'section-left' : 'section-right'
        } col-span-12 row-span-3 flex lg:h-[300px] xl:h-full`}
      >
        <Image
          height='100%'
          // width='100%'
          src={program.image}
          className='border-theme flex w-full object-cover'
          alt=''
        />
      </figure>
      <p
        className={`border-theme ${
          even ? 'section-right' : 'section-left'
        } col-span-12 row-span-2 flex items-start border-t-2 border-primary-700 bg-gray-800 p-4 pt-4 md:border-none lg:h-[45%] xl:h-full`}
      >
        {program.description}
      </p>
    </li>
  );
};
export default ProgramCard;
