import React from "react";
import { useCartContext } from "../cart_context";
import "../index.css";

const Cart = () => {
  /* const { cart } = useGlobalContext(); */
  const { amount, cart, clear, decProd, incProd, del } = useCartContext();

  return (
    <>
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <div className="flex gap-10 justify-items-center">
            <h2 className="text-2xl font-bold tracking-tight dark-blue">
              Shopping cart item
            </h2>
            <div className="mt-5 justify-center cursor-pointer relative">
              <button
                className="btn-card bg-[#01588f] text-white absolute top-[-1rem] w-40"
                onClick={clear}
              >
                clear
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-start gap-4 p-10 pl-0  ">
            {cart.map((product) => (
              <div key={product.id} className="group relative w-40 mb-10">
                <div className="aspect-h-1 aspect-w-1 w-40 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40 ">
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
                    <button onClick={() => decProd(product.id)}>-</button>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.amount}
                    </p>
                    <button onClick={() => incProd(product.id)}>+</button>
                  </div>
                </div>
                <div className="mt-5 justify-center cursor-pointer relative">
                  <button
                    className="btn-card bg-[#01588f] text-white absolute top-[-1rem] w-40"
                    onClick={() => del(product.id, product.amount, product)}
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
