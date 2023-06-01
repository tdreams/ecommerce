import React from "react";
import { NavLink } from "react-router-dom";

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
    </>
  );
};

export default Feature;
