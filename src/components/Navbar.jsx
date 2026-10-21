import React from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="max-w-[1440px] m-auto flex justify-between flex-col gap-5 sm:flex-row px-4 py-4 sm:items-center">
      <NavLogo />
      <NavLinks />
    </div>
  );
};

export default Navbar;
