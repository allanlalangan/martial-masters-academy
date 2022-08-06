import { BsInstagram } from 'react-icons/bs';

const CoachCard = () => {
  return (
    <article>
      <li className='pattern flex flex-col items-start justify-center bg-gray-700 p-8'>
        <h2 className=''>Name</h2>
        <figure className='border-theme border border-primary-700 bg-gray-700 p-4'>
          Portrait
        </figure>
        <h2 className=''>Head Coach</h2>
        <ul className='flex items-center justify-evenly'>
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
