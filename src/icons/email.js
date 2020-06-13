import React from 'react';

export default function Email({ size, fill }) {
  return (
    <svg
      width={size}
      height="35px"
      id="Layer_1"
      enableBackground='new 0 0 512 512'
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <polygon
          fill={fill}
          points="448,384 448,141.8 316.9,241.6 385,319 383,321 304.1,251.4 256,288 207.9,251.4 129,321 127,319 195,241.6    64,142 64,384"
        />
        <polygon
          fill={fill}
          points="439.7,128 72,128 256,267.9"
        />
      </g>
    </svg>
  );
}

Email.defaultProps = {
  size: '35px',
  fill: '#1f77b4'
};
