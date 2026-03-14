// src/components/SearchBar.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Search Videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
