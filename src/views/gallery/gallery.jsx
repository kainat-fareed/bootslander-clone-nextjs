import Image from "next/image";
import React from "react";

// Custom Import
import Gallery1 from "../../../public/gallery-1.jpg";
import Gallery2 from "../../../public/gallery-2.jpg";
import Gallery3 from "../../../public/gallery-3.jpg";
import Gallery4 from "../../../public/gallery-4.jpg";
import Gallery5 from "../../../public/gallery-5.jpg";
import Gallery6 from "../../../public/gallery-6.jpg";
import Gallery7 from "../../../public/gallery-7.jpg";
import Gallery8 from "../../../public/gallery-8.jpg";

const Gallery = () => {
  return (
    <div className="custom-container">
      <h1 className="gallery-section-heading">Check our Gallery</h1>
      <div className="gallery-images">
        <div className="gallery-item">
          <Image src={Gallery1} alt="" />
        </div>
        <div className="gallery-item">
          <Image src={Gallery2} alt="" />
        </div>
        <div className="gallery-item">
          <Image src={Gallery3} alt="" />
        </div>
        <div className="gallery-item">
          <Image src={Gallery4} alt="" />
        </div>
        <div className="gallery-item">
          <Image src={Gallery5} alt="" />
        </div>
        <div className="gallery-item">
          <Image src={Gallery6} alt="" />
        </div>
        <div className="gallery-item">
          <Image src={Gallery7} alt="" />
        </div>
        <div className="gallery-item">
          <Image src={Gallery8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
