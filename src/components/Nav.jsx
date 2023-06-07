import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCartContext } from "../context/cart_context";
import { HiShoppingBag } from "react-icons/hi";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCartContext();
  const totalItems = cart.reduce((total, product) => total + product.amount, 0);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(totalItems);
  return (
    <div>
      <nav className={`primary-color ${isSticky ? "stickyN top-0 z-40" : ""}`}>
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <p className="text-white text-2xl">
                <NavLink to="/">
                  <img src={logo} alt="Logo" />
                </NavLink>
              </p>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4 align-baseline">
                  <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <NavLink to="/">Home</NavLink>
                  </a>
                  <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <NavLink to="/shoes">Shoes</NavLink>
                  </a>

                  <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </div>
              </div>
              <button>
                <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-3 rounded-md text-md t-2 font-medium flex align-baseline text-2xl">
                  <NavLink to="/cart">
                    <div className="relative flex">
                      <HiShoppingBag />
                      <div className="absolute top-[-8px] -right-3">
                        {totalItems > 0 && (
                          <span className="text-sm bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-1">
                            {totalItems}
                          </span>
                        )}
                      </div>
                    </div>
                  </NavLink>
                </a>
              </button>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={handleMenuToggle}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              <NavLink to="/">Home</NavLink>
            </a>
            <a
              className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              <NavLink to="/shoes">Shoes</NavLink>
            </a>

            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              <NavLink to="">Contact</NavLink>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
