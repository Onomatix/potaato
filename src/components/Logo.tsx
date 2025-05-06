
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="flex items-center">
        <h1 className="text-4xl sm:text-5xl font-serif text-potaato-brown tracking-wide">
          Potaato
        </h1>
        <img 
          src="/lovable-uploads/cf6b9ea2-be02-4b5d-82b3-81ddc733ee98.png" 
          alt="Potaato Logo" 
          className="w-12 h-12 md:w-14 md:h-14 ml-2 hidden sm:block"
        />
      </div>
    </div>
  );
};

export default Logo;
