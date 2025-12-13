import React, { useState } from "react";

const ProductCard = ({ data }) => {
  const {
    title,
    brand,
    price,
    discountPercentage,
    rating,
    thumbnail,
    stock,
  } = data;

  const [qty, setQty] = useState(1);

  const discountedPrice = (
    price -
    (price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative">
      {/* Wishlist */}
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition">
        ❤️
      </button>

      {/* Image */}
      <div className="h-52 bg-gray-100 flex items-center justify-center">
        <img
          src={thumbnail}
          alt={title}
          className="h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-500">{brand}</p>

        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          ⭐ <span>{rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-sky-700">
            ₹{discountedPrice}
          </span>
          <span className="text-sm line-through text-gray-400">
            ₹{price}
          </span>
          <span className="text-xs text-green-600">
            {discountPercentage}% OFF
          </span>
        </div>

        {/* Quantity + Cart */}
        <div className="flex items-center gap-3 pt-2">
          {/* Quantity Selector */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={() => setQty((p) => Math.max(1, p - 1))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
            >
              −
            </button>
            <span className="px-4 text-sm">{qty}</span>
            <button
              onClick={() => setQty((p) => Math.min(stock, p + 1))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button className="flex-1 bg-sky-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-sky-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
