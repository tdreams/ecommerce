import React from "react";
import { NavLink } from "react-router-dom";
import category from "../category";

const Feature = () => {
  return (
    <>
      <div className="grid grid-cols-4 divide-gray-400 divide-x mt-6 mb-6 border-t-2 border-b-2 border-gray-400 text-center p-4">
        <div>
          <a>
            <NavLink>Men's Shoes</NavLink>
          </a>
        </div>
        <div>
          <a>
            <NavLink>Women's Shoes</NavLink>
          </a>
        </div>
        <div>
          <a>
            <NavLink>Boys' Shoes</NavLink>
          </a>
        </div>
        <div>
          <a>
            <NavLink>Girls' Sgoes</NavLink>
          </a>
        </div>
      </div>
      <div>
        <h2>SHOP BY CATEGORY</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {category.map((brand) => {
            return (
              <div key={brand.id} className="group relative ">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-[#EDEDED] lg:aspect-none  lg:h-80">
                  <img
                    src={brand.image}
                    alt={brand.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full  "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feature;
