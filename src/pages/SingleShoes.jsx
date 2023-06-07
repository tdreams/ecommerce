import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useCartContext } from "../context/cart_context";
import ShoeDetailsCarousel from "../components/ShoeDetailsCarousel";
import RelatedShoes from "../components/RelatedShoes";

const SingleShoes = () => {
  const [selectedSize, setSelectedSize] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  const { products, inc, dec, res } = useGlobalContext();
  const { add } = useCartContext();
  const newItem = products.find((product) => product.id === id);
  const handleDecQuantiy = () => {
    if (newItem.amount > 1) {
      dec(newItem.id);
    }
  };

  const handleIncQuantiy = () => {
    if (newItem.amount <= newItem.stock) {
      inc(newItem.id);
    }
  };
  const handleAddToCart = () => {
    if (selectedSize) {
      add(newItem.id, newItem.amount, selectedSize, newItem);
      res(newItem.id);
      setErrorMessage("");
    } else {
      setErrorMessage("Please select a size");
    }
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            {/*  <img src={newItem.image} alt="product" /> */}
            <ShoeDetailsCarousel images={newItem.images} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {newItem.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              {/* {p.subtitle} */}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-xl font-semibold">$ {newItem.price}</p>
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* QUANTITY START */}
            <div className="flex justify-between mb-2">
              <div className="flex mb-2">
                <div className="text-md font-semibold">Quantity</div>
              </div>

              <div className="">
                <div className="flex flex-row text-md font-medium text-black/[0.5] cursor-pointer gap-4 align-middle">
                  <button
                    className="p-2  w-6 h-6  rounded-full bg-[#40a9ffef] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center align-middle"
                    onClick={handleDecQuantiy}
                  >
                    <div className="text-xl align-middle flex justify-center mb-1">
                      -
                    </div>
                  </button>
                  {newItem.amount}
                  <button
                    className="p-2  w-6 h-6 rounded-full bg-[#40a9ffef] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center"
                    onClick={handleIncQuantiy}
                  >
                    <div className="text-xl align-middle flex justify-center mb-1">
                      +
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* QUANTITY END */}
            {/* ERROR MESSAGE */}
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {newItem.sizes.map((size) => (
                  <div
                    key={size.value}
                    className={`border rounded-md text-center py-3 font-medium ${
                      size.enabled
                        ? "hover:border-[#40A9FF] cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === size.value ? "border-[#40A9FF]" : ""}`}
                    onClick={() => {
                      setSelectedSize(size.value);
                    }}
                  >
                    {size.value}
                  </div>
                ))}
              </div>
              {/* SIZE END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-[#40A9FF] text-white text-lg font-medium transition-transform active:scale-95 mb-10 hover:opacity-75"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <p>{newItem.description}</p>
                {/* <ReactMarkdown>{p.description}</ReactMarkdown> */}
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        <RelatedShoes />
        {/* <RelatedProducts products={products} /> */}
      </Wrapper>
    </div>
  );
};

export default SingleShoes;
