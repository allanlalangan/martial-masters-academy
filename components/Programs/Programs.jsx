import Image from 'next/image';
import boxingImg from '../../public/assets/logan-weaver-lgnwvr-9D_rUDe7xvA-unsplash.jpg';
import muayThaiImg from '../../public/assets/xuan-nguyen-tWVCsBJEKrU-unsplash.jpg';
import advancedImg from '../../public/assets/metin-ozer-ofLmXDQKPTA-unsplash.jpg';
import sparringImg from '../../public/assets/jonathan-tomas-misTB4pmevc-unsplash.jpg';

const Programs = () => {
  return (
    <ul className='grid grid-cols-12 grid-rows-4 gap-8 px-8 lg:px-16'>
      <li className='flex flex-col justify-center items-center col-span-12 row-span-1 md:col-span-6 md:row-span-2 lg:col-span-3 lg:row-span-4'>
        <h2>Boxing</h2>
        <figure className='h-[40vh] flex align-center justify-center'>
          <Image className='object-cover' src={boxingImg} alt='' />
        </figure>
      </li>
      <li className='flex flex-col justify-center items-center col-span-12 row-span-1 md:col-span-6 md:row-span-2 lg:col-span-3 lg:row-span-4'>
        <h2>Muay Thai</h2>
        <figure className='h-[40vh] flex align-center justify-center'>
          <Image className='object-cover' src={muayThaiImg} alt='' />
        </figure>
      </li>
      <li className='flex flex-col justify-center items-center col-span-12 row-span-1 md:col-span-6 md:row-span-2 lg:col-span-3 lg:row-span-4'>
        <h2>Advanced Classes</h2>
        <figure className='h-[40vh] flex align-center justify-center'>
          <Image className='object-cover' src={advancedImg} alt='' />
        </figure>
      </li>
      <li className='flex flex-col justify-center items-center col-span-12 row-span-1 md:col-span-6 md:row-span-2 lg:col-span-3 lg:row-span-4'>
        <h2>Sparring</h2>
        <figure className='h-[40vh] flex align-center justify-center'>
          <Image className='object-cover' src={sparringImg} alt='' />
        </figure>
      </li>
    </ul>
  );
};
export default Programs;
