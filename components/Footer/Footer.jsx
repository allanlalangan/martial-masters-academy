import { MdMail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='h-[50vh] mt-8 pattern z-0 bg-gray-800 grid grid-cols-12 gap-4 px-16 py-8'>
      <figure className='flex justify-center items-center col-span-6 row-span-2 border-2 border-theme bg-gray-800 border-gray-700'>
        <span>Map</span>
      </figure>
      <section className='text-sm leading-relaxed tracking-wider col-span-6 flex flex-col justify-evenly'>
        <article>
          {/* <p>5405 SE Alexander St. Unit D</p>
          <p>Hillsboro, OR 97123</p> */}
          <p>1234 Street Name</p>
          <p>City, ST 98765</p>
        </article>
        <ul>
          <li className='flex pb-2'>
            <MdMail className='text-xl' />
            <span className='pl-2'>e-mail</span>
          </li>
          <li className='flex pb-2'>
            <BsInstagram className='text-xl' />
            <span className='pl-2'>instagram</span>
          </li>
          <li className='flex pb-2'>
            <FaFacebookF className='text-xl' />
            <span className='pl-2'>facebook</span>
          </li>
        </ul>
      </section>
      <article className='col-start-7 col-end-13 flex flex-col justify-center items-start font-["Mirza"] uppercase text-xl tracking-[.275rem]'>
        <aside>martial masters academy © 2022</aside>
      </article>
    </footer>
  );
};
export default Footer;
