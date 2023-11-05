import React from "react";
import Overlay from "../components/common/Overlay";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="flex h-[80vh] justify-center items-center mb-10">
        <h1 className="text-[5vw] px-[20vw] leading-tight">
          Empowering brands to excel in the digital realm
        </h1>
        <hr />
      </div>
      <div className="bg-white relative z-10">
        <div className="flex justify-between relative max-w-7xl mx-auto">
          <div className="w-1/4 ml-32">
            <p>
              I assist companies globally by providing custom-tailored
              solutions. With every project, I push the boundaries of my craft,
              prioritizing quality above all else.
            </p>
          </div>
          <div className="w-2/4 h-[80vh] overflow-hidden">
            <img
              src="assets/davidprof.jpg"
              alt="Profile_pic"
              className="w-full h-auto -mt-10"
            />
          </div>
        </div>
      </div>

      <Overlay />
      <Footer />
    </div>
  );
};

export default AboutPage;
