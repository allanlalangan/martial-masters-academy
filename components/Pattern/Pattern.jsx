const Pattern = (color) => {
  return (
    <svg
      width='16px'
      height='20px'
      viewBox='0 0 16 20'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs></defs>
      <g
        id='Page-1'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <g id='flipped-diamonds' fill={color}>
          <polygon
            id='Combined-Shape'
            points='8 -4.4408921e-16 8 20 0 10'
          ></polygon>
          <polygon id='Combined-Shape-Copy' points='16 0 16 10 8 0'></polygon>
          <polygon
            id='Combined-Shape-Copy-2'
            points='16 10 16 20 8 20'
          ></polygon>
        </g>
      </g>
    </svg>
  );
};
export default Pattern;
