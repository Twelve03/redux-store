import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart,
} from "../redux/actions/productAction";
import { useSelector } from "react-redux";
import axios from "axios";

const Product = () => {
  const product = useSelector((state) => state.product);
  const { image, title, description, price } = product;
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios
        .get(`https://615b72374a360f0017a81635.mockapi.io/paintings/${id}`)
        .catch((err) => console.log("Error", err));

      dispatch(selectedProduct(response.data));
    };

    if (id && id !== "") fetchProduct();
    return () => dispatch(removeSelectedProduct());
  }, [id, dispatch]);

  return (
    <div className="p-4 max-width md:p-10 md:flex md:flex-col md:items-center">
      <img
        src={image}
        alt={title}
        className="md:mt-10 md:w-3/5 lg:w-2/5 xl:w-1/4"
      />
      <h1 className="mt-4 text-xl font-semibold">{title}</h1>
      <p
        className="mt-1 leading-7 text-lg text-gray-500 md:w-3/5 md:text-center 
                    lg:w-2/4 xl:w-2/5"
      >
        {description}
      </p>
      <p className="mt-2 text-xl font-medium">${price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="py-2 px-7 mt-6 bg-black font-semibold text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
