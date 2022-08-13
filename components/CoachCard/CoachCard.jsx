import portrait from '../../public/assets/johann-walter-bantz-HG1pkXN7SVA-unsplash.jpg';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import Image from 'next/image';
import { CgShapeRhombus } from 'react-icons/cg';

const CoachCard = ({ coach, index }) => {
  const even = index % 2 == 0;
  return (
    <li className='pattern border-theme col-span-12 grid h-full grid-cols-12 grid-rows-6 gap-4 bg-gray-800 p-8 lg:col-span-12'>
      <article className='border-theme col-span-12 row-span-1 flex items-center justify-between border-b-2 border-primary-700 bg-gray-800'>
        <section className='p-4'>
          <h2 className='text-2xl font-bold uppercase tracking-wider'>
            {coach.name}
          </h2>
          <aside className='col-span-12 row-span-1'>{coach.title}</aside>
        </section>
        <section className='flex h-full flex-col md:flex-row'>
          <button className='border-theme h-full rounded-bl-none bg-gray-700 p-4 transition hover:brightness-110 md:rounded-tr-none'>
            <BsInstagram className='text-3xl' />
          </button>
          <button className='md:border-theme h-full bg-gray-700 p-4 transition hover:brightness-110 md:rounded-bl-none'>
            <BsFacebook className='text-3xl' />
          </button>
        </section>
      </article>
      <figure
        className={`border-theme ${
          even ? 'section-left' : 'section-right'
        } col-span-12 row-span-3 flex`}
      >
        <Image
          height='100%'
          src={portrait}
          className='border-theme h-fit object-cover'
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
        } col-span-12 row-span-2 flex items-start border-b-2 border-primary-700 bg-gray-800 p-4 pt-4`}
      >
        {coach.bio}
      </p>
    </li>
  );
};
export default CoachCard;
