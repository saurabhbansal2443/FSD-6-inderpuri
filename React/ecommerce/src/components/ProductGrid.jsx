import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [productData, setProductData] = useState([]);

  async function getData() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProductData(data.products);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-10 py-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Featured Products
      </h2>

      <div
        className="grid gap-6
                   grid-cols-1
                   sm:grid-cols-2
                   md:grid-cols-3
                   lg:grid-cols-4"
      >
        {productData.map((productObj) => (
          <ProductCard data={productObj} key={productObj.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
