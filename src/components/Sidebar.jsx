// src/components/Sidebar.jsx

import { categories } from "../constants/categories";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="px-4 py-2 bg-white w-48 hidden md:block">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`w-full text-left p-2 mb-2 rounded ${
            category === selectedCategory
              ? "bg-red-500 text-white"
              : "hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
