import React from "react";

const Product = ({
  product: { title, price, description, category, image },
}) => {
  return (
    <div className="bg-white w-full mb-5 flex shadow-sm rounded-lg">
      <div className="w-5/12 p-2">
        <div style={{ backgroundImage: `url(${image})` }} className="bg-contain bg-no-repeat bg-center w-full h-full"></div>
      </div>
      <div className="w-7/12 p-5">
        <h1 className="md:text-2xl">{title.substr(0, 50)}</h1>
        <h3 className="text-gray-400">{category}</h3>
        <p className="md:text-4xl sm:text-xl text-red-500 mt-4">${price}</p>
        <div className="mt-4">{description.substr(0, 100)}</div>
      </div>
    </div>
  );
};

export default Product;
