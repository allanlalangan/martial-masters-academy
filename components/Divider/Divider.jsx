import { BsDiamond, BsXDiamond } from 'react-icons/bs';
import { CgShapeRhombus } from 'react-icons/cg';

const Divider = () => {
  return (
    <div className='flex justify-center items-center'>
      {['xl', '4xl', 'xl'].map((iconSize, i) => (
        <CgShapeRhombus
          key={i}
          className={`text-${iconSize} text-primary-700 mx-[.15rem]`}
        />
      ))}
    </div>
  );
};
export default Divider;
