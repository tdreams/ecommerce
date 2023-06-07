import React from "react";
import { useCartContext } from "../context/cart_context";
import "../index.css";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";

const Cart = () => {
  /* const { cart } = useGlobalContext(); */
  const { amount, cart, clear, decProd, incProd, del } = useCartContext();

  // Calculate the total amount
  const total = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.amount;
  }, 0);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cart.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
                Shopping Cart
              </div>
            </div>
            {/* HEADING AND PARAGRAPH END */}
            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {<CartItem />}
              </div>
              {/* CART ITEMS END */}

              {/* CART SUMMARY START */}
              <div className="flex-[1]">
                <div div className="text-lg font-bold">
                  Purchase Summary
                </div>
                <div className="p-5 my-5 bg-[#40a9ff6a] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-[1rem] md:text-lg font-medium text-black">
                      Total
                    </div>
                    <div>${total.toFixed(2)}</div>
                  </div>
                  <div className="text-sm md:text-[1rem] py-5 border-t mt-5 border-gray-400 text-gray-800 font-normal">
                    The subtotal of your order displays the overall price,
                    encompassing duties and taxes, before any discounts are
                    applied. Please note that it does not cover delivery costs
                    and international transaction fees.
                  </div>
                </div>
                {/* BUTTON START */}
                <button className="w-full py-4 rounded-full bg-[#40a9ffef] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                  Checkout
                </button>
                {/* BUTTON START */}
              </div>
              {/* CART SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        )}
        {/* This is empty screen */}
        {cart.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-24">
            <img
              src="https://cdn.dribbble.com/users/2058104/screenshots/4198771/dribbble.jpg"
              alt="empty image of cart"
              className="w-[300px] md:w-[800px] sm:w-auto"
            />
            <span className="text-center mt-4">Your cart is empty</span>
          </div>
        )}
      </Wrapper>
    </div>
  );
};
export default Cart;

{
  /* <div className="bg-white ">
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
                  <p className="mt-1 text-sm text-gray-500"></p>
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
      </div> */
}
