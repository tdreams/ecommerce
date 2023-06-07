import React from "react";
import { useGlobalContext } from "../context/context";
import { useCartContext } from "../context/cart_context";
import { NavLink } from "react-router-dom";

const Shoes = () => {
  const { amount, products, addToCart, inc, dec } = useGlobalContext();
  const { add } = useCartContext();

  /* const handleAddToCart = (item) => {
    addToCart(item);
  }; */
  console.log(products);
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight dark-blue">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative hover:transition-all"
              >
                <NavLink to={`/shoes/${product.id}`}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-[#EDEDED] lg:aspect-none group-hover:opacity-75  lg:h-80">
                    <img
                      src={product.image}
                      alt={product.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:p-3 "
                    />
                  </div>
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

                    {/* <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p> */}
                  </div>
                  <div className="flex w-full ">
                    <p className="mt-1 text-sm text-gray-500">
                      {/* {product.color[0]}-{product.color[1]} */}
                    </p>
                    <div className=" flex relative">
                      <p className="text-sm font-medium text-gray-900">
                        ${product.price}
                      </p>
                      {/* <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg"
                      onClick={() => dec(product.id)}
                    >
                      -
                    </button>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.amount}
                    </p>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg"
                      onClick={() => inc(product.id)}
                    >
                      +
                    </button> */}
                    </div>
                  </div>
                  {/* <div
                  className="mt-5 justify-center ml-1 cursor-pointer relative"
                  onClick={() => add(product.id, product.amount, product)}
                >
                  <a className="btn bg-[#01588f] text-white absolute top-[-1rem]">
                    Add to card
                  </a>
                </div> */}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoes;
