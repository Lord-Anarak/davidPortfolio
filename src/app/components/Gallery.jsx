"use client";
import React, { useState } from "react";

const Gallery = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const handleImageClick = (src) => {
    openModal(<img src={src} className="w-full" />);
  };

  const handleVideoClick = (src) => {
    openModal(
      <video className="w-full" controls>
        <source src={src} type="video/mp4" />
      </video>
    );
  };

  return (
    <div>
      <div id="gallery" className="container mx-auto">
        <img
          src="assets/image00001.jpeg"
          className="img-responsive"
          onClick={handleImageClick}
        />
        <img src="assets/image00002.jpeg" className="img-responsive" />
        <img src="assets/image00003.jpeg" className="img-responsive" />
        <video className="vid" controls>
          <source src="assets/Ball.mp4" type="video/mp4"></source>
        </video>
        <img src="assets/image00004.jpeg" className="img-responsive" />
        <img src="assets/image00005.jpeg" className="img-responsive" />
        <img src="assets/image00006.jpeg" className="img-responsive" />
        <img src="assets/image00007.jpeg" className="img-responsive" />
        <video className="vid" controls>
          <source src="assets/Coffee First.mp4" type="video/mp4"></source>
        </video>
        <img src="assets/image00008.jpeg" className="img-responsive" />
        <img src="assets/image00009.jpeg" className="img-responsive" />
        <img src="assets/image00010.jpeg" className="img-responsive" />
        <img src="assets/BluetoothSpeaker.jpg" className="img-responsive" />

        <img src="assets/Device0090.png" className="img-responsive" />
        <video className="vid" controls>
          <source src="assets/Cosmetic Loop.mp4" type="video/mp4"></source>
        </video>
        <img src="assets/EnergyNight.jpg" className="img-responsive" />
        <img src="assets/Grinder.jpg" className="img-responsive" />
        <img src="assets/KenwoodModel.png" className="img-responsive" />
        <img src="assets/Model008.jpg" className="img-responsive" />
        <img src="assets/Model009.jpg" className="img-responsive" />
        <video className="vid" controls>
          <source src="assets/Device IG_1.mp4" type="video/mp4"></source>
        </video>
        <img src="assets/Model010.jpg" className="img-responsive" />
        <img src="assets/Model011.jpg" className="img-responsive" />
        <img src="assets/Nivea1.png" className="img-responsive" />
        <video className="vid" controls>
          <source src="assets/Motion 1.mp4" type="video/mp4"></source>
        </video>
        <img src="assets/Nivea2.png" className="img-responsive" />
        <img src="assets/PTAdapt.jpg" className="img-responsive" />
        <img src="assets/WatchModel.jpg" className="img-responsive" />
        <video className="vid" controls>
          <source
            src="assets/Flash Energy Booster 3D Reel.mp4"
            type="video/mp4"></source>
        </video>
      </div>

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
