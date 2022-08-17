import { MdMail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='pattern mt-16 grid h-[50vh] grid-cols-12 gap-4 bg-gray-800 px-16 py-8'>
      <figure className='border-theme col-span-12 row-span-2 flex items-center justify-center border-2 border-gray-700 bg-gray-800 sm:col-span-6'>
        <span>Map</span>
      </figure>
      <section className='col-span-6 flex flex-col justify-evenly text-sm leading-relaxed tracking-wider'>
        <article>
          {/* <p>5405 SE Alexander St. Unit D</p>
          <p>Hillsboro, OR 97123</p> */}
          <p>1234 Street Name</p>
          <p>City, ST 98765</p>
        </article>
        <ul>
          <li className='flex pb-2'>
            <MdMail className='text-xl' />
            <span className='pl-2 capitalize'>e-mail</span>
          </li>
          <li className='flex pb-2'>
            <BsInstagram className='text-xl' />
            <span className='pl-2 capitalize'>instagram</span>
          </li>
          <li className='flex pb-2'>
            <FaFacebookF className='text-xl' />
            <span className='pl-2 capitalize'>facebook</span>
          </li>
        </ul>
      </section>
      <article className='col-start-7 col-end-13 flex flex-col items-start justify-center font-["Mirza"] text-xl uppercase tracking-[.275rem]'>
        <aside>
          martial masters academy <br className='sm:hidden' />© 2022
        </aside>
      </article>
    </footer>
  );
};
export default Footer;
