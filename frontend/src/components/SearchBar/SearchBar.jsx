import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="flex items-center px-4 rounded-md w-80 bg-slate-100">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="mr-3 text-xl cursor-pointer text-slate-500 hover:text-black"
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className="cursor-pointer text-slate-400 hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
