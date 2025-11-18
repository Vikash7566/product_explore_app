"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { categoryUrl } from "@/api/server";

const CategoryFilter = ({ category, setCategory, dark }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(categoryUrl);
      const json = await res.json();
      setCategories(json);
      setError(false);
    } catch (err) {
      console.error("Category fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const categoryOptions = useMemo(() => {
    return ["All", ...categories];
  }, [categories]);

  return (
    <div className="p-4 flex flex-wrap gap-3 items-center">
      <span className={`font-medium whitespace-nowrap ${dark?"text-white" : "text-gray-900"}`}>Select Category:</span>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={loading}
        className={`p-2 border rounded-lg outline-none transition w-40 sm:w-52 ${
          dark
            ? "bg-gray-700 text-white border-gray-600"
            : "bg-white text-black border-gray-300"
        }`}
      >
        {loading && <option>Loading...</option>}
        {error && <option>Error loading categories</option>}

        {!loading &&
          !error &&
          categoryOptions.map((item) => (
            <option
              key={item}
              value={item}
              className={dark ? "bg-gray-700 text-white" : "bg-white text-black"}
            >
              {item}
            </option>
          ))}
      </select>

      <button
        onClick={() => setCategory("All")}
        className={`px-3 py-2 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
          dark
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-white text-black border border-gray-300 hover:bg-gray-100"
        }`}
      >
        Reset Category
      </button>
    </div>
  );
};

export default CategoryFilter;
