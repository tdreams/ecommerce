import React from "react";
import { useGlobalContext } from "../context";
import { useCartContext } from "../cart_context";

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
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <div className="flex justify-between w-full ">
                  <p className="mt-1 text-sm text-gray-500">
                    {/* {product.color[0]}-{product.color[1]} */}
                  </p>
                  <div className=" flex relative">
                    <button
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
                    </button>
                  </div>
                </div>
                <div
                  className="mt-5 justify-center ml-1 cursor-pointer relative"
                  onClick={() => add(product.id, product.amount, product)}
                >
                  <a className="btn bg-[#01588f] text-white absolute top-[-1rem]">
                    Add to card
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoes;
