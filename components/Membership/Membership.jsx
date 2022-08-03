import { FaCheckCircle } from 'react-icons/fa';

const Membership = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-6 m-8 mx-16 2xl:mx-36'>
      <article className='flex flex-col justify-evenly rounded-tr-lg lg:rounded-r-none lg:rounded-bl-lg col-span-12 row-span-3 lg:col-span-8 lg:row-span-6 bg-gray-800 p-12 shadow-md'>
        <h2 className='font-bold tracking-wide text-3xl'>Monthly Membership</h2>
        <p className='tracking-wide'>
          New members are eligible for 3 free introductory classes!
        </p>
        <aside className='flex items-center my-4'>
          <h3 className='w-[55%] tracking-widest uppercase text-center'>{`What's Included`}</h3>
          <div className='w-full h-[1px] bg-primary-700'></div>
        </aside>
        <ul className='grid grid-cols-12 gap-2'>
          <li className='col-span-12 lg:col-span-6 flex justify-start items-center w-full'>
            <FaCheckCircle className='text-emerald-400' />
            <span className='pl-2'>Full body workout in 60 minutes</span>
          </li>
          <li className='col-span-12 lg:col-span-6 flex justify-start items-center w-full'>
            <FaCheckCircle className='text-emerald-400' />
            <span className='pl-2'>Unlimited access to all classes</span>
          </li>
          <li className='col-span-12 lg:col-span-6 flex justify-start items-center w-full'>
            <FaCheckCircle className='text-emerald-400' />
            <span className='pl-2'>
              Personalized training with our coaches!
            </span>
          </li>

          <li className='col-span-12 lg:col-span-6 flex justify-start items-center w-full'>
            <FaCheckCircle className='text-emerald-400' />
            <span className='pl-2'>Refer-a-friend rewards</span>
          </li>
        </ul>
      </article>
      <article className='flex flex-col items-center rounded-bl-lg lg:rounded-l-none lg:rounded-tr-lg col-span-12 row-span-3 lg:col-span-4 lg:row-span-6 bg-gray-700 p-12'>
        <h2 className='pb-2 text-xl font-light tracking-wide'>Join us for</h2>
        <h2 className='text-6xl font-extrabold flex items-start tracking-wide'>
          <span className='text-4xl h-full my-auto'>$</span>99.99
          <span className='font-light text-2xl'>USD</span>
        </h2>
        <div className='w-full flex flex-col items-center'>
          <span className='underline p-2'>Learn more</span>
          <button className='w-[75%] rounded-bl-lg rounded-br-sm rounded-tr-lg rounded-tl-sm bg-gray-800 px-8 py-4 hover:brightness-110 my-2 mx-auto transition tracking-widest'>
            Contact a Coach
          </button>
          <button className='w-[75%] rounded-bl-lg rounded-br-sm rounded-tr-lg rounded-tl-sm bg-gray-800 px-8 py-4 hover:brightness-110 my-2 mx-auto transition tracking-widest'>
            Visit Us
          </button>
        </div>
      </article>
    </section>
  );
};
export default Membership;
