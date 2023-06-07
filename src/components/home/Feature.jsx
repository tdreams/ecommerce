import React from "react";
import { NavLink } from "react-router-dom";
import category from "../category";

const Feature = () => {
  return (
    <>
      <div className="grid grid-cols-4 divide-gray-400 divide-x mt-6 mb-6 border-t-2 border-b-2 border-gray-400 text-center p-4">
        <div>
          <NavLink to="/">Men's Shoes</NavLink>
        </div>
        <div>
          <NavLink to="/">Women's Shoes</NavLink>
        </div>
        <div>
          <NavLink to="/">Boys' Shoes</NavLink>
        </div>
        <div>
          <NavLink to="/">Girls' Shoes</NavLink>
        </div>
      </div>
      <div>
        <h2 className="flex justify-center font-bold mt-10">
          SHOP BY CATEGORY
        </h2>
        <div className="mt-6 grid grid-cols-1gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8 ">
          {category.map((brand) => {
            return (
              <div
                key={brand.id}
                className="group relative hover:underline transition-all"
              >
                <div className="max-w-sm max-h-[325px] overflow-hidden rounded-md bg-[#EDEDED] lg:aspect-none lg:h-80">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className=" object-cover object-center lg:h-full lg:w-full "
                  />
                </div>
                <div className="flex mt-4 justify-center">
                  <div>
                    <h3 className="flex w-full text-sm text-gray-700">
                      <NavLink to="/">{brand.name}</NavLink>
                    </h3>
                  </div>
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
