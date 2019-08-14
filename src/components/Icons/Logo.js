import React from 'react';

const Logo = ({ className, color, size }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 60 60"
    className={className}
    height={size}
    width={size}
  >
    <g fill={color}>
      <rect x="5" y="10" width="3" height="40" />
      <rect x="52" y="10" width="3" height="40" />
      <rect x="57" y="14" width="3" height="32" />
      <rect x="0" y="14" width="3" height="32" />
      <path d="M10,6v48h40V6H10z M45,49H15V11h30V49z" />
    </g>
  </svg>
);

Logo.defaultProps = {
  color: 'currentColor',
  size: '16px',
};

export default Logo;
