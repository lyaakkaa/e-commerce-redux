import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../store/actions/productAction";
import axios from "axios";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="container mx-auto">
      {Object.keys(product).length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-gray-600 text-xl">Loading...</div>
        </div>
      ) : (
        <div className="bg-gray-100 h-screen py-12 px-6 sm:px-0">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white shadow-xl sm:rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                <img className="w-full h-full max-w-lg object-contain" src={image} alt={title} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {category}
                  </div>
                  <h2 className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {title}
                  </h2>
                  <div className="mt-2 text-gray-600">${price}</div>
                  <p className="mt-4 text-gray-500">{description}</p>
                  <div className="mt-6">
                    <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
