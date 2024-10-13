import React from "react";
import Form from "./Form";
import { useState } from "react";
import AddProduct from "./AddProduct";

const NewProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-yellow-500 border-8 bg-purple-700">
      {isOpen ? (
        <Form setIsOpen={setIsOpen} setProducts={props.setProducts} products={props.products} />
      ) : (
        <AddProduct setIsOpen={setIsOpen}/>
      )}
    </div>
  );
};

export default NewProduct;
