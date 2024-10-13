export default function ProductItem({ products, addToCart, setProducts }) {
  const deleteHandler = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts); 
  };

  return (
    <>
      {products.length === 0 ? (
        <div className="text-red-500 text-center font-bold text-2xl">
          No Product!
        </div>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="h-60 w-60 border shadow-xl rounded-b-xl"
          >
            <img className="h-40 w-60 object-cover" src={product.img} alt="" />
            <div className="flex mt-4 justify-between mx-3">
              <div>
                <h2 className="text-lg font-bold">{product.name}</h2>
                <span className="text-sm text-blue-600 font-bold">
                  {product.price}$
                </span>
              </div>
              <div className="">
                <button
                  onClick={addToCart}
                  className="h-10 w-10 bg-green-500 text-white rounded-xl"
                >
                  Buy
                </button>
                <button
                  onClick={() => deleteHandler(product.id)} 
                  className="h-10 w-10 bg-red-500 text-white rounded-xl"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
