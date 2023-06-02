import React from "react";
import catalogs from "../catalogs";
import { NavLink } from "react-router-dom";

const Catalogs = () => {
  return (
    <div>
      <div className="mt-10 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6 ">
        {catalogs.map((catalog) => {
          return (
            <NavLink>
              <div key={catalog.id} className="group relative ">
                <div className=" max-w-sm overflow-hidden rounded-md bg-[#EDEDED] lg:aspect-none  lg:h-80">
                  <img
                    src={catalog.image}
                    alt={catalog.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full  "
                  />
                </div>
                <div className="flex mt-2  justify-left ">
                  <div>
                    <h3 className="flex w-full text-sm text-gray-700  ">
                      <a className="text-lg font-normal underline">
                        {catalog.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogs;
