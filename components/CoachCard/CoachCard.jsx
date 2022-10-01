import portrait from '../../public/assets/johann-walter-bantz-HG1pkXN7SVA-unsplash.jpg';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import Image from 'next/image';
import { CgShapeRhombus } from 'react-icons/cg';

const CoachCard = ({ coach, index }) => {
  const even = index % 2 == 0;
  return (
    <li className='pattern border-theme col-span-12 mb-8 grid h-full grid-cols-12 grid-rows-6 gap-4 bg-gray-800 p-4 sm:p-8 md:grid-rows-4 lg:col-span-12'>
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
          even ? 'coach-card-left' : 'coach-card-right'
        } col-span-12 row-span-3 flex md:row-span-3`}
      >
        <Image
          height='100%'
          src={coach.photo}
          className='border-theme object-cover'
          alt=''
        />
      </figure>
      <p
        className={`border-theme ${
          even ? 'coach-card-right' : 'coach-card-left'
        } col-span-12 row-span-2 flex items-start border-b-2 border-primary-700 bg-gray-800 p-4 pt-4`}
      >
        {coach.bio}
      </p>
    </li>
  );
};
export default CoachCard;
