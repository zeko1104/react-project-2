import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const imageHandler = (event) => {
    setImage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newProductData = {
      id: props.products.length + 1,
      name,
      price,
      img: image,
    };

    props.setProducts((prevState) => [...prevState, newProductData]);

    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div>
      <form className="" onSubmit={submitHandler}>
        <div className="my-2">
          <label className="text-white">Product Name:</label>
          <input
            value={name}
            onChange={nameHandler}
            className="border-2 border-black focus:outline-none rounded-lg"
            type="text"
            placeholder="Product Name"
          />
        </div>
        <div className="my-2">
          <label className="text-white">Product Price:</label>
          <input
            value={price}
            onChange={priceHandler}
            className="border-2 border-black focus:outline-none rounded-lg"
            type="number"
            placeholder="Product Price"
          />
        </div>
        <div className="my-2">
          <label className="text-white">Product Image:</label>
          <input
            value={image}
            onChange={imageHandler}
            className="border-2 border-black focus:outline-none rounded-lg"
            type="text"
            placeholder="Product Image"
          />
        </div>
        <div className="flex justify-between">
          <button className="bg-green-500 text-white w-28 rounded-lg ">
            Add Product
          </button>
          <button onClick={()=>props.setIsOpen(false)} type="button" className="bg-red-500 text-white w-28 rounded-lg ">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
