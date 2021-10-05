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

  const fetchProduct = async () => {
    const response = await axios
      .get(`https://615b72374a360f0017a81635.mockapi.io/paintings/${id}`)
      .catch((err) => console.log("Error", err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProduct();
    return () => dispatch(removeSelectedProduct());
  }, [id]);

  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="p-1 border-2 w-24"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
