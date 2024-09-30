import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/signin");
  };

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white drop-shadow">
      <h2 className="py-2 text-xl font-medium text-black">Notes</h2>

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
