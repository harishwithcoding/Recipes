import React from "react";
import { useNavigate } from "react-router";

const NavLogo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/");
      }}
      className="text-2xl font-semibold cursor-pointer   "
    >
      Recipes
    </div>
  );
};

export default NavLogo;
