'use client';

import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';  // Import PropTypes

const NavItem = ({ label, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true); 
  };

  return (
    <div className="flex flex-col items-center relative w-full">
     
      <Link href={href}>
        <div
          className={`text-base py-4 leading-6 font-normal ${isActive ? 'text-[#272c2a]' : 'text-[#272c2a]'} w-full`}
          onClick={handleClick}
        >
          {label}
        </div>
      </Link>

      {/* SVG Line */}
      <svg
        width="100"
        height="3"
        viewBox="0 0 76 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-300 transform ${isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} absolute bottom-0`}
      >
        <path
          d="M2 1.5L74 1.5"
          stroke={isActive ? 'black' : 'white'}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

     
      <div
        className="absolute inset-0 w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
    </div>
  );
};

// Add PropTypes to validate props
NavItem.propTypes = {
  label: PropTypes.string.isRequired, // `label` must be a string and is required
  href: PropTypes.string.isRequired,  // `href` must be a string and is required
};

export default NavItem;
