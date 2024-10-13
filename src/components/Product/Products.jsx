import React, { useState } from "react";
import ProductItem from "./ProductItem";
import NewProduct from "../ProductForm/NewProduct";
import { productData } from "../../data/data";

export default function Products() {
  const [products, setProducts] = useState(productData); 
  const [cart, setCart] = useState(0);



  const addToCart = () => {
    setCart(cart + 1);
  };

  const resetCart = () => {
    setCart(0);
  };

  return (
    <div className="">
      <div className="flex justify-between mx-6">
        <h1 className="font-bold text-4xl ">Products</h1>
        <h1 className="font-bold text-xl">
          Cart: <span className="text-purple-600 font-semibold">{cart}</span>
        </h1>
        <NewProduct setProducts={setProducts} products={products} />
      </div>
      <div className="flex flex-wrap items-center gap-5 mx-5 my-5">
        <ProductItem products={products} addToCart={addToCart} setProducts={setProducts} />
      </div>
      <div className="text-center">
        <button
          onClick={resetCart}
          className="text-white bg-red-500 h-14 w-16 rounded-xl"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
