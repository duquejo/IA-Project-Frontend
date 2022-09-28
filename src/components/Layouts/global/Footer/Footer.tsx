import React from 'react';

export const Footer = ():  JSX.Element | null => {
  return (
    <div className="fixed bottom-0 bg-white w-screen text-center py-2 font-light shadow-xl text-xs md:absolute">
      Demo { new Date().getFullYear() }
    </div>
  )
};
