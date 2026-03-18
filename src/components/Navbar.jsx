// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaYoutube } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#0f0f0f] sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <FiMenu className="text-white text-xl cursor-pointer hidden md:block" />
        <Link to="/" className="flex items-center gap-1">
          <FaYoutube className="text-red-500 text-3xl" />
          <h1 className="font-semibold text-xl tracking-tighter text-white font-sans">YouTube</h1>
        </Link>
      </div>

      <div className="flex-1 flex justify-center px-4 md:px-12 w-full max-w-3xl">
        <SearchBar />
      </div>

      {/* Excluded the sign-in button specifically as requested by leaving right-side empty! */}
      <div className="w-10"></div>
    </div>
  );
};

export default Navbar;
