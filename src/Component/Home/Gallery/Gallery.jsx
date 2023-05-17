import React from "react";

import img1 from "../../../assets/Image/galleryImg/gallery-1.jpg";
import img2 from "../../../assets/Image/galleryImg/gallery-2.jpg";
import img3 from "../../../assets/Image/galleryImg/gallery-3.jpg";
import img4 from "../../../assets/Image/galleryImg/gallery-4.jpg";
import img5 from "../../../assets/Image/galleryImg/gallery-5.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <img src={img1} alt="" />
        </div>
        <div className="col-span-6">
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="col-span-3">
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
