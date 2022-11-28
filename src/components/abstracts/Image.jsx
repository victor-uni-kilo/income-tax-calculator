import React from 'react';

const Image = ({ src, alt, className }) => {
  return (
    <div className={`pl-1 ${className}`}>
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
};

export default Image;
