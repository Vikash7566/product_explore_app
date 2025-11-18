"use client";
import React, { useEffect, useState, useMemo } from "react";
import Header from "./header/Header";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import { api } from "@/api/server";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(api);
      const data = await res.json();

      setProducts(data);
      setError(false);
    } catch (err) {
      console.error("API Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [products, search, category]);

  if (loading) return <p className="text-center py-10">Loading…</p>;
  if (error)
    return (
      <p className="text-center text-red-500 py-10">
        Something went wrong!
      </p>
    );

  return (
    <div
      className={`min-h-screen p-6 ${
        dark ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <div className="mb-4">
        <Header search={search} setSearch={setSearch} dark={dark} setDark={setDark} />
        <CategoryFilter category={category} setCategory={setCategory} dark={dark} />
      </div>

      <h1 className={`text-lg font-semibold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
        Products
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} dark={dark} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
