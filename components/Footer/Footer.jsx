import { MdMail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div>Map</div>
      <section>
        <article>
          <p>5405 SE Alexander St. Unit D</p>
          <p>Hillsboro, OR 97123</p>
        </article>
        <ul>
          <li>
            <MdMail />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <FaFacebookF />
          </li>
        </ul>
      </section>
    </footer>
  );
};
export default Footer;
