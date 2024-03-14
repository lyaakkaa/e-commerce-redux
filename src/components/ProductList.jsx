import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../store/actions/productAction";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  // console.log(products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col">
        <h1 className="mt-4 mb-4 font-bold text-gray-900 text-5xl">Products</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          You can buy everything
        </p>
      </div>
      <div className="container mx-auto">
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
