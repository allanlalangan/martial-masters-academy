import portrait from '../../public/assets/marvin-cors-FBnlCT-cGUQ-unsplash.jpeg';
import { BsInstagram } from 'react-icons/bs';
import Image from 'next/image';
import { CgShapeRhombus } from 'react-icons/cg';

const CoachCard = () => {
  return (
    <li className='border-theme grid-rows-[repeat(6, 1fr)] col-span-12 grid grid-cols-12 gap-4 bg-gray-700 p-8 sm:col-span-6 lg:col-span-12'>
      <article className='col-span-12 row-start-1 row-end-2 flex items-center justify-between'>
        <h2 className='text-2xl font-bold tracking-wide'>First Last</h2>
        <aside className=''>
          <BsInstagram className='text-3xl' />
        </aside>
      </article>
      <figure className='border-theme col-span-12 row-start-2 row-end-3 flex h-[50vh] bg-gray-700 p-4'>
        <Image src={portrait} className='object-cover' alt='' />
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
      <div className='divider'></div>
      <aside className='col-span-12 row-start-4 row-end-5'>Head Coach</aside>
      <p className='col-span-12 row-start-5 row-end-7'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ex sit!
        Illo aspernatur magni, vel asperiores cumque pariatur vero delectus eius
        saepe ipsam labore.
      </p>
    </li>
  );
};
export default CoachCard;
