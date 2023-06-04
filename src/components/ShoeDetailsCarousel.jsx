import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ShoeDetailsCarousel = ({ images }) => {
  const imageArray = Array.isArray(images) ? images : [images];

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={80}
        className="productCarousel"
      >
        {images.map((image) =>
          image.attributes.map((attribute) => (
            <img key={attribute.id} src={attribute.url} alt={attribute.name} />
          ))
        )}
        {/* <img src="/p2.png" />
        <img src="/p3.png" />
        <img src="/p4.png" />
        <img src="/p5.png" />
        <img src="/p6.png" />
        <img src="/p7.png" /> */}
      </Carousel>
    </div>
  );
};

export default ShoeDetailsCarousel;
