import { FaCheckCircle } from 'react-icons/fa';

const Membership = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-6 p-8'>
      <article className='rounded-l-lg lg:col-span-6 lg:row-span-6 bg-slate-700 p-4'>
        <h1>{`Monthly Membership`}</h1>
        <h2>New members are eligilble for 3 free introductory classes!</h2>
        <aside>
          <h3>{`What's Included`}</h3>
          <div className='h-[1px] bg-primary-700 mt-2 mb-4'></div>
        </aside>
        <ul className='grid grid-cols-12 grid-rows-6'>
          <li className='lg:col-span-6 lg:row-span-3 flex'>
            <FaCheckCircle className='text-emerald-400' />
            <span className='pl-2'>Full body workout in 60 minutes</span>
          </li>
          <li className='lg:col-span-6 lg:row-span-3 flex'>
            <FaCheckCircle className='text-emerald-400' />
            <span className='pl-2'>Unlimited access to all classes</span>
          </li>
          <li className='lg:col-span-6 lg:row-span-3 flex'>
            <FaCheckCircle className='text-emerald-400' />
            <span className='pl-2'>
              Personalized training with our coaches!
            </span>
          </li>
          <li className='lg:col-span-6 lg:row-span-3 flex'>
            <FaCheckCircle className='text-emerald-400' />
            <span className='pl-2'>Refer-a-friend rewards</span>
          </li>
        </ul>
      </article>
      <article className='rounded-r-lg lg:col-span-6 lg:row-span-6 bg-slate-600 p-4'>
        <h2>Join us for a fixed price of</h2>
        <h1>
          <span>$</span>99.99
        </h1>
        <div>
          <span>Learn more</span>
          <button>Contact a Coach</button>
          <button>Visit Us</button>
        </div>
      </article>
    </section>
  );
};
export default Membership;
