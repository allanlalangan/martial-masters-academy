import { BsDiamond, BsXDiamond } from 'react-icons/bs';
import { CgShapeRhombus } from 'react-icons/cg';

const Divider = () => {
  return (
    <div className='my-8 flex items-center justify-center'>
      {['xl', '3xl', 'xl'].map((iconSize, i) => (
        <CgShapeRhombus
          key={i}
          className={`text-${iconSize} mx-[.15rem] text-primary-700`}
        />
      ))}
    </div>
  );
};
export default Divider;
