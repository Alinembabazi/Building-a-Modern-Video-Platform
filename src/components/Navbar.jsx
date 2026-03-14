// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-50">
      <Link to="/">
        <h1 className="font-bold text-2xl text-red-600">VideoHub</h1>
      </Link>

      <SearchBar />
    </div>
  );
};

export default Navbar;
