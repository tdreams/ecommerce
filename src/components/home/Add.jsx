import React from "react";
import adds from "../adds";

const Add = () => {
  return (
    <div>
      {adds.map((add) => {
        return (
          <div key={add.id}>
            <div className="mt-10 relative">
              <img
                src={add.image}
                alt={add.image}
                className="h-full w-full object-contain lg:h-full lg:w-full group-hover:shadow-blue-950"
              />
              <p className=" text-7xl w-[400px] absolute top-16 left-10 text-neutral-50 stroke-white stroke-1">
                Just{" "}
                <span className="bg-black w-60 h-24 bg-opacity-70   align-middle ">
                  perfect
                </span>{" "}
                for your active{" "}
                <span className="bg-black w-60 h-24 bg-opacity-70   align-middle flex rotate-[-4deg] ">
                  lifestyle!
                </span>
              </p>
              <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute botto[125px] md:bottom-[175px] left-10 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                Shop now
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Add;
