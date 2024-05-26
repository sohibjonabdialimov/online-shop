import React from "react";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";
import i3 from "../assets/3.jpg";
import i4 from "../assets/4.jpg";
import i5 from "../assets/5.jpg";
import i6 from "../assets/6.jpg";
import i7 from "../assets/7.jpg";
import i8 from "../assets/8.jpg";
import i9 from "../assets/9.jpg";
import i10 from "../assets/10.jpg";
import i11 from "../assets/11.jpg";
import i12 from "../assets/12.jpg";

const Gallery = () => {
  return (
    <div className="sm:p-24 p-8 pb-10">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Zamonaviy mebellar
      </h1>
      <div className="gallery mt-5 sm:mt-0">
        <img className="i1" src={i1} alt="" />
        <img className="i2 sm:block hidden" src={i2} alt="" />
        <img className="i3" src={i3} alt="" />
        <img className="i4" src={i4} alt="" />
        <img className="i5 sm:block hidden" src={i5} alt="" />
        <img className="i6" src={i6} alt="" />
        <img className="i7" src={i7} alt="" />
        <img className="i8 sm:block hidden" src={i8} alt="" />
        <img className="i9" src={i9} alt="" />
        <img className="i10" src={i10} alt="" />
        <img className="i11 sm:block hidden" src={i11} alt="" />
        <img className="i12" src={i12} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
