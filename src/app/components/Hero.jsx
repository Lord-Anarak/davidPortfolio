import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gray-300">
      <div className="p-10 flex justify-between items-center">
        <div className="mt-40">
          <h1 className="text-[4vw] ml-1">Hi, there</h1>
          <h2 className="text-[8vw] font-black">I am David</h2>
          <p className="text-xl mt-5 ml-1">3D Product Designer</p>
        </div>
        <div>Bello</div>
        <div className="absolute bottom-5 flex gap-3 items-center ml-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse duration-1000"></div>
          <p>Located in Dubai</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
