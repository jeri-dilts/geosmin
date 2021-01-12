import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../services/Products";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsResponse = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    productsResponse();
  }, []);

  const PRODUCTS = products.map((product, index) =>
      <ProductCard
        _id={product._id}
        itemName={product.itemName}
        imgURL={product.imgURL}
        key={index}
      />
  );
  return <>{PRODUCTS}</>;
};

export default ProductCards;
