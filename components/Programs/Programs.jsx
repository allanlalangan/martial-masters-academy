const Programs = () => {
  return (
    <ul className='grid grid-cols-12 grid-rows-6'>
      <li className='h-full col-span-12 sm:col-span-6 sm:row-start-1 sm:row-end-4 lg:col-span-3 lg:row-span-6  flex justify-center items-center'>
        <h2>Boxing</h2>
      </li>
      <li className='h-full col-span-12 sm:col-span-6 sm:row-start-1 sm:row-end-4 lg:col-span-3 lg:row-span-6  flex justify-center items-center'>
        <h2>Muay Thai</h2>
      </li>
      <li className='h-full col-span-12 sm:col-span-6 sm:row-start-4 sm:row-end-7 lg:col-span-3 lg:row-span-6  flex justify-center items-center'>
        <h2>Advanced Classes</h2>
      </li>
      <li className='h-full col-span-12 sm:col-span-6 sm:row-start-4 sm:row-end-7 lg:col-span-3 lg:row-span-6  flex justify-center items-center'>
        <h2>Sparring</h2>
      </li>
    </ul>
  );
};
export default Programs;
