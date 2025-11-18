"use client";
import React from "react";

const ProductCard = ({ product, dark }) => {
  return (
    <div
      className={`p-4 rounded-lg border transition ${
        dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
      }`}
    >
      <img
        src={product?.image}
        alt={product?.title}
        className="w-48 h-48 object-contain mx-auto"
      />

      <div className="px-4 py-3">
        <h2
          className={`font-bold text-lg mb-2 ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          {product?.title}
        </h2>
      </div>
      <div className="px-4 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Price: ${product?.price}
        </span>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {product?.category}
        </span>

        <button className="inline-block bg-blue-500 text-white px-3 py-1 mt-3 text-sm rounded-md hover:bg-blue-600">
          Add to Favorite
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
