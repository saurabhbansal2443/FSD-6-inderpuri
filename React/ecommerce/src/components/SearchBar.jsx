import React, { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const timerRef = useRef(null);

  const getData = async () => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    setSuggestions(data.products);
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      getData();
    }, 400);

    return () => clearTimeout(timerRef.current);
  }, [query]);

  return (
    <div className="relative w-[350px]">
      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 
                    text-white outline-0 "
      />

      {/* Suggestions */}
      {query.trim() && suggestions.length > 0 && (
        <div
          className="absolute top-12 left-0 w-full bg-white rounded-lg
                     shadow-lg max-h-72 overflow-y-auto z-50"
        >
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="px-4 py-2 cursor-pointer 
                         hover:bg-sky-50 border-b last:border-none"
            >
              <p className="text-sm text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
