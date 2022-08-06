import { BsInstagram } from 'react-icons/bs';

const CoachCard = () => {
  return (
    <article>
      <li className='pattern flex flex-col items-start justify-center bg-gray-700 p-8'>
        <h2 className=''>Name</h2>
        <figure className='bg-gray-700 border border-theme p-4 border-primary-700'>
          Portrait
        </figure>
        <h2 className=''>Head Coach</h2>
        <ul className='flex justify-evenly items-center'>
          <li className='mr-4'>Boxing</li>
          <li className='mr-4'>Muay Thai</li>
          <li className='mr-4'>Boot Camp</li>
        </ul>
        <p className=''>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ex
          sit! Illo aspernatur magni, vel asperiores cumque pariatur vero
          delectus eius saepe ipsam labore.
        </p>
        <aside className=''>
          <BsInstagram />
        </aside>
      </li>
    </article>
  );
};
export default CoachCard;
