import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div
        className="w-1/4 p-4 transform transition-transform duration-300 hover:scale-105"
        key={id}
      >
        <Link to={`/product/${id}`}>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <div
              className="w-full h-64 bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              alt={title}
            ></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <div className="text-gray-700 mb-2">$ {price}</div>
              <div className="text-gray-700">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="flex flex-wrap">{renderList}</div>;
};

export default Product;
