import React from 'react';

function HeaderImage() {
  return (
    <div className="relative">
      <img src="https://i.imgur.com/HeimDoK.png" alt="header" className="mx-auto" />
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="text-3xl font-bold text-black">Kaity Hayes</h1>
        <p className="text-gray-600 text-lg">full-stack developer</p>
      </div>
    </div>
  );
}

export default HeaderImage;

