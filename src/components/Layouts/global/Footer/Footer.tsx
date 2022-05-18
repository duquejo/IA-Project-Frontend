import React from 'react';

export const Footer = ():  JSX.Element | null => {
  return (
    <div className="absolute bottom-0 bg-white w-screen text-center py-2 font-light shadow-xl text-xs">
      Demo { new Date().getFullYear() }
    </div>
  )
};
