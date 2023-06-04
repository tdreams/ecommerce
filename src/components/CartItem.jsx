import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCartContext } from "../cart_context";

const CartItem = () => {
  const { amount, cart, clear, decProd, incProd, del } = useCartContext();
  return (
    <>
      {cart.map((product) => (
        <div className="flex py-5 gap-3 md:gap-5 border-b" key={product.id}>
          {/* IMAGE START */}
          <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
            <img src={product.image} alt={product.image} />
          </div>
          {/* IMAGE END */}
          <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between">
              {/* PRODUCT TITLE */}
              <div className="text-lg md:text-2xl font-semibold text-black">
                {product.name}
              </div>
              {/* PRODUCT PRICE */}
              <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                ${product.price * product.amount}
              </div>
            </div>
            {/* PRODUCT SUBTITLE */}
            <div className="text-md font-medium text-black/[0.5] hidden md:block">
              Men's shoes
            </div>
            <div className="flex items-baseline justify-between mt-4">
              <div className="flex items-baseline gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                <div className="flex items-center gap-1">
                  <div className="font-semibold">Size</div>
                  <select className="hover:text-black">
                    <option value="1">US 6</option>
                    <option value="2">US 6.5</option>
                    <option value="3">US 7</option>
                    <option value="4">US 7.5</option>
                    <option value="5">US 8</option>
                    <option value="6">US 8.5</option>
                  </select>
                </div>
                <div className="flex items-baseline gap-2">
                  <button
                    className="p-2  w-8 h-8 rounded-full bg-[#40a9ffef] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center"
                    onClick={() => decProd(product.id)}
                  >
                    -
                  </button>
                  <div className="font-semibold">Quantiy</div>
                  {product.amount}
                  <button
                    className="p-2  w-8 h-8 rounded-full bg-[#40a9ffef] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center"
                    onClick={() => incProd(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <RiDeleteBin6Line
                className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                onClick={() => del(product.id, product.amount, product)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
