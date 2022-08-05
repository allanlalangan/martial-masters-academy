import { CgShapeRhombus } from 'react-icons/cg';

const Membership = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-6 m-8 lg:mx-16 2xl:mx-36 border-theme'>
      <article className='leading-loose pattern border-theme lg:rounded-tr-none z-0 flex flex-col justify-evenly col-span-12 row-span-4 sm:row-span-3 lg:col-span-8 lg:row-span-6 p-12 bg-gray-800 shadow-lg'>
        <h2 className='font-bold tracking-wide text-3xl'>Monthly Membership</h2>
        <p className='tracking-wide leading-relaxed sm:py-8 lg:py-4'>
          Come in and try a few classes before you commit. Ask us about our 3
          free introductory classes! Our coaches also offer individual training
          sessions and packages. Contact a coach to get started!
        </p>
        <aside className='flex items-center my-4'>
          <h3 className='w-[55%] tracking-[3.5px] uppercase font-semibold text-[.80rem]'>
            What&apos;s included
          </h3>
          <div className='w-full h-[1px] bg-primary-700'></div>
        </aside>
        <ul className='grid grid-cols-12 gap-2'>
          <li className='col-span-12 lg:col-span-6 flex justify-start items-baseline w-full'>
            <CgShapeRhombus className='text-emerald-400 text-lg' />
            <span className='pl-2'>Unlimited classes</span>
          </li>
          <li className='col-span-12 lg:col-span-6 flex justify-start items-baseline w-full'>
            <CgShapeRhombus className='text-emerald-400 text-lg' />
            <span className='pl-2'>Open gym access</span>
          </li>
          <li className='col-span-12 lg:col-span-6 flex justify-start items-baseline w-full'>
            <CgShapeRhombus className='text-emerald-400 text-lg' />
            <span className='pl-2'>Advanced and invitation only classes</span>
          </li>

          <li className='col-span-12 lg:col-span-6 flex justify-start items-baseline w-full'>
            <CgShapeRhombus className='text-emerald-400 text-lg' />
            <span className='pl-2'>Competition coaching</span>
          </li>
        </ul>
      </article>
      <article className='z-3 border-theme lg:rounded-bl-none flex flex-col items-center col-span-12 row-span-2 sm:row-span-3 lg:col-span-4 lg:row-span-6 bg-gray-700 p-12'>
        <h2 className='pb-2 text-xl font-light tracking-wide'>Join us for</h2>
        <h2 className='text-6xl font-extrabold flex items-start tracking-wide'>
          <span className='text-4xl h-full my-auto'>$</span>99.99
          <span className='font-light text-2xl'>USD</span>
        </h2>
        <div className='w-full flex flex-col items-center'>
          <span className='underline p-2'>Learn more</span>
          <button className='w-[75%] filled-button border-theme'>
            Contact a Coach
          </button>
          <button className='w-[75%] filled-button border-theme'>
            Visit Us
          </button>
        </div>
      </article>
    </section>
  );
};
export default Membership;
