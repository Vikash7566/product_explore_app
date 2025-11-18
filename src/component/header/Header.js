"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";

const Header = React.memo(({ search, setSearch, dark, setDark }) => {
  return (
    <header
      className={`rounded-md w-full flex flex-wrap items-center gap-4 p-4 shadow-md justify-between ${
        dark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-lg font-semibold whitespace-nowrap">
        Product Explorer
      </h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`flex-1 min-w-[180px] p-2 border rounded-lg focus:outline-none transition
          ${dark ? "bg-gray-700 text-white border-gray-600" : "bg-white border-gray-300"}`}
      />
      <button
        onClick={() => setDark((prev) => !prev)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition whitespace-nowrap
          ${dark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
      >
        {dark ? (
          <>
            Light <Sun size={18} />
          </>
        ) : (
          <>
            Dark <Moon size={18} />
          </>
        )}
      </button>
    </header>
  );
});

export default Header;
