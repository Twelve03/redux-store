import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
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
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log("Error", err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProduct();
    return () => dispatch(removeSelectedProduct());
  }, [id]);

  return (
    <>
      {Object.keys(product).length === "0" ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={image} alt="" />
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      )}
    </>
  );
};

export default Product;
