import { CgShapeRhombus } from 'react-icons/cg';

const Membership = () => {
  return (
    <section className='border-theme m-8 grid grid-cols-12 grid-rows-6 lg:mx-16 2xl:mx-36'>
      <article className='pattern border-theme z-0 col-span-12 row-span-4 flex flex-col justify-evenly bg-gray-800 p-12 leading-loose shadow-lg sm:row-span-3 lg:col-span-8 lg:row-span-6 lg:rounded-tr-none'>
        <h2 className='text-3xl font-bold tracking-wide'>Monthly Membership</h2>
        <p className='leading-relaxed tracking-wide sm:py-8 lg:py-4'>
          Come in and try a few classes before you commit. Ask us about our 3
          free introductory classes! Our coaches also offer individual training
          sessions and packages. Contact a coach to get started!
        </p>
        <aside className='my-4 flex items-center'>
          <h3 className='w-[55%] text-[.80rem] font-semibold uppercase tracking-[3.5px]'>
            What&apos;s included
          </h3>
          <div className='h-[1px] w-full bg-primary-700'></div>
        </aside>
        <ul className='grid grid-cols-12 gap-2'>
          <li className='col-span-12 flex w-full items-baseline justify-start lg:col-span-6'>
            <CgShapeRhombus className='text-lg text-emerald-400' />
            <span className='pl-2'>Unlimited classes</span>
          </li>
          <li className='col-span-12 flex w-full items-baseline justify-start lg:col-span-6'>
            <CgShapeRhombus className='text-lg text-emerald-400' />
            <span className='pl-2'>Open gym access</span>
          </li>
          <li className='col-span-12 flex w-full items-baseline justify-start lg:col-span-6'>
            <CgShapeRhombus className='text-lg text-emerald-400' />
            <span className='pl-2'>Advanced and invitation only classes</span>
          </li>

          <li className='col-span-12 flex w-full items-baseline justify-start lg:col-span-6'>
            <CgShapeRhombus className='text-lg text-emerald-400' />
            <span className='pl-2'>Competition coaching</span>
          </li>
        </ul>
      </article>
      <article className='z-3 border-theme col-span-12 row-span-2 flex flex-col items-center bg-gray-700 p-12 sm:row-span-3 lg:col-span-4 lg:row-span-6 lg:rounded-bl-none'>
        <h2 className='pb-2 text-xl font-light tracking-wide'>Join us for</h2>
        <h2 className='flex items-start text-6xl font-extrabold tracking-wide'>
          <span className='my-auto h-full text-4xl'>$</span>99.99
          <span className='text-2xl font-light'>USD</span>
        </h2>
        <div className='flex w-full flex-col items-center'>
          <span className='p-2 underline'>Learn more</span>
          <button className='filled-button border-theme w-[75%]'>
            Contact a Coach
          </button>
          <button className='filled-button border-theme w-[75%]'>
            Visit Us
          </button>
        </div>
      </article>
    </section>
  );
};
export default Membership;
