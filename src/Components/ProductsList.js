import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://615b72374a360f0017a81635.mockapi.io/paintings")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="pt-12 flex flex-col items-center">
      <h1 className="mt-32 text-4xl text-center">My Art Collection. Limited.</h1>
      <div className="mt-12 p-2 w-full flex flex-wrap items-center justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
