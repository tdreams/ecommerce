import React from "react";
import brands from "../brands";
import { NavLink } from "react-router-dom";

const Brands = () => {
  return (
    <>
      <h2 className="flex justify-center font-bold mt-10">SHOP BY Brand</h2>
      <div
        className="grid grid-cols-2
      lg:grid-cols-5 lg:divide-gray-400 lg:divide-x lg:mt-6 lg:mb-6 lg:border-gray-400 text-center p-4"
      >
        {brands.map((brand) => {
          return (
            <div key={brand.id}>
              <div>
                <a>
                  <NavLink>
                    <div className="text-6xl flex justify-center">
                      {brand.logo}
                    </div>
                  </NavLink>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {category.map((brand) => {
            return (
              <NavLink>
                <div
                  key={brand.id}
                  className="group relative hover:underline transition-all"
                >
                  <div className=" max-w-sm max-h-[245px] overflow-hidden rounded-md bg-[#EDEDED] lg:aspect-none  lg:h-80">
                    <img
                      src={brand.image}
                      alt={brand.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full  "
                    />
                  </div>
                  <div className="flex mt-4  justify-center ">
                    <div>
                      <h3 className="flex w-full text-sm text-gray-700  ">
                        <a>{brand.name}</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default Brands;
