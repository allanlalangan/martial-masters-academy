const KidsProgram = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-6'>
      <figure className='lg:col-span-6 lg:row-span-4'>image</figure>
      <article className='lg:col-span-6 lg:row-span-4'>
        <p>Give your kids the tools to feel empowered, present and confident</p>
        <p>
          Being a kid can be tough! We believe children should feel empowered to
          be themselves. For over five years, coaches Fernando and Kelani have
          been teaching kids ways to defend themselves and the confidence to
          de-escalate situations, should they encounter any bullies. Our Lone
          Warrior Program gives your children a safe and healthy space to
          release energy and have fun!
        </p>
      </article>
      <ul className='lg:col-span-6 lg:row-start-5 lg:row-end-7'>
        <li>feature</li>
        <li>feature</li>
        <li>feature</li>
        <li>feature</li>
      </ul>
      <button className='bg-inherit lg:col-span-6 lg:row-start-5 lg:row-end-7 hover:brightness-110 shadow-md hover:shadow-lg mx-auto transition uppercase tracking-widest px-8 py-4 border rounded-bl-lg rounded-tr-lg border-primary-700'>
        Explore our kids program
      </button>
    </section>
  );
};
export default KidsProgram;
