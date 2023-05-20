import React, { useEffect } from "react";

import img1 from "../../../assets/Image/galleryImg/gallery-1.jpg";
import img2 from "../../../assets/Image/galleryImg/gallery-2.jpg";
import img3 from "../../../assets/Image/galleryImg/gallery-3.jpg";
import img4 from "../../../assets/Image/galleryImg/gallery-4.jpg";
import img5 from "../../../assets/Image/galleryImg/gallery-5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto my-20 " data-aos="fade-down">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 ">
        Our <span className="text-[#32c770] border-[#32c770]">Gallery</span>
      </h1>
      <div>
        <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto">
          <div data-aos="fade-down">
            <LazyLoadImage
              src={img1}
              className="lg:w-2/3 mx-auto m-3 mb-3"
              loading="lazy"
              effect="blur"
              alt=""
              placeholderSrc={img1.blurhash}
            />
          </div>
          <div data-aos="fade-down">
            <LazyLoadImage
              src={img4}
              className="lg:w-2/3 mx-auto m-3 mb-3"
              loading="lazy"
              effect="blur"
              alt=""
              placeholderSrc={img4.blurhash}
            />
          </div>
          <div data-aos="fade-down">
            <LazyLoadImage
              src={img5}
              className="lg:w-2/3 mx-auto m-3 mb-3"
              loading="lazy"
              effect="blur"
              alt=""
              placeholderSrc={img5.blurhash}
            />
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="lg:flex lg:justify-center lg:items-center "
        >
          <img className="lg:w-3/12 lg:m-5 mb-3 lg:mx-14" src={img3} alt="" />
          <img className="lg:w-3/12 lg:m-5 mb-3 lg:mx-14" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
