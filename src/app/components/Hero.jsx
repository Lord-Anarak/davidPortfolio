import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gray-300">
      <div className="max-w-7xl mx-auto p-10 flex justify-between items-center">
        <div className="mt-40">
          <h1 className="text-xl ml-1">Hi, there</h1>
          <h2 className="text-7xl font-black mt-5">I am David</h2>
          <p className="text-xl mt-5 ml-1">3D Product Designer</p>
        </div>
        <div>Bello</div>
        <div className="absolute bottom-5 flex gap-3 items-center ml-2">
          <div className="w-2 h-2 rounded-full bg-purple-700 animate-pulse duration-1000"></div>
          <p>Located in Dubai</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
