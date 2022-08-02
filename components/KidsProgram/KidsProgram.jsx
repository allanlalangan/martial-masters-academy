const KidsProgram = () => {
  return (
    <section className='grid grid-cols-12 2xl:mx-36 p-8'>
      <figure className='col-span-12 md:col-span-6 2xl:col-span-8'>
        image
      </figure>
      <article className='col-span-12 md:col-span-6 2xl:col-span-4'>
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
      <ul className='col-span-12 sm:col-span-6 md:col-span-12'>
        <li>feature</li>
        <li>feature</li>
        <li>feature</li>
        <li>feature</li>
      </ul>
      <div className='col-span-12 sm:col-span-6 md:col-span-12 flex justify-center'>
        <button className='action-button'>Explore our kids program</button>
      </div>
    </section>
  );
};
export default KidsProgram;
