
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdMic } from "react-icons/md";

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
  <div className="flex items-center gap-4 w-full">
    <form onSubmit={handleSubmit} className="flex flex-1 items-center border border-zinc-700 rounded-full overflow-hidden bg-[#121212]">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent px-5 py-2 text-white placeholder-zinc-400 focus:outline-none focus:ml-4 transition-all"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="px-5 py-2.5 bg-zinc-800 border-l border-zinc-700 hover:bg-zinc-700 hover:text-white transition">
        <FiSearch className="text-zinc-400" size={20} />
      </button>
    </form>
    <div className="hidden sm:flex items-center justify-center bg-zinc-800 p-2.5 rounded-full hover:bg-zinc-700 transition cursor-pointer">
      <MdMic className="text-white" size={20} />
    </div>
  </div>
);
};

export default SearchBar;
