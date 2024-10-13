import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";

// eslint-disable-next-line react/prop-types
const Navbar = ({ userInfo, onSearchNote }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white drop-shadow">
      <h2 className="py-2 text-xl font-medium text-black">Notes</h2>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
