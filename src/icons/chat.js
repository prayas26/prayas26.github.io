import React from 'react';

export default function Chat({ size, fill }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height="auto"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path fill={fill} d="M32,3C15.4,3,0,16.2,0,30c0,7.8,6.3,14.7,13,19.3c-0.1,1.2-0.9,5.3-5.7,9.8c-0.7,0.7-0.2,1.8,0.8,1.7 c8.6-1,15.5-5.8,16.7-6.7c1.4,0.3,4.6,0.8,7.2,0.8c16.6,0,32-11.2,32-25S48.6,3,32,3z" />
        </g>
      </g>
    </svg >
  );
}

Chat.defaultProps = {
  size: '35px',
  fill: '#1f77b4'
};
