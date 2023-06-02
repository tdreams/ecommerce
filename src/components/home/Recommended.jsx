import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGlobalContext } from "../../context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute left-0 top-0 text-3xl"
      onClick={() => onClick()}
    >
      <FaChevronLeft />
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute right-0 top-0 text-3xl"
      onClick={() => onClick()}
    >
      <FaChevronRight />
    </button>
  );
};

const Recommended = () => {
  const { amount, products, addToCart, inc, dec } = useGlobalContext();
  return (
    <>
      <h2 className="flex justify-center font-bold mt-10 text-xl text-gray-800">
        RECOMMENDED FOR YOU
      </h2>
      <Carousel
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        centerMode={true}
        responsive={responsive}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[220px] bg-slate-400 bg-opacity-5 mt-10 shadow-xl hover:shadow-sky-200"
          >
            <div className="group relative hover:transition-all min-w-fit">
              <NavLink to={`/shoes/${product.id}`}>
                <div>
                  <img
                    src={product.image}
                    alt={product.image}
                    className="h-full w-full object-contain lg:h-full lg:w-full group-hover:shadow-blue-950"
                  />
                </div>
                <div className="bg-white p-2">
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p className="mt-1 text-sm text-gray-500"></p>
                    <div className="flex relative">
                      <p className="text-sm font-medium text-gray-900">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Recommended;
