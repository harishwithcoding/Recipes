import React from "react";
import { NavLink } from "react-router";
const NavLinks = () => {
  return (
    <div className="flex gap-2 sm:gap-10 justify-between items-center">
      <NavLink
        className={(e) =>
          `${e.isActive ? "text-red-300" : ""} text-xl hidden sm:block`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) =>
          `${e.isActive ? "text-red-300" : ""} text-xl hidden sm:block`
        }
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => `${e.isActive ? "text-red-300" : ""} text-xl`}
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={(e) =>
          `${e.isActive ? "text-red-300" : ""} text-xl text-nowrap bg-gray-900 px-4 py-2 rounded-md`
        }
        to="/create-recipe"
      >
        Create Recipe
      </NavLink>
      <NavLink
        className={(e) =>
          `${e.isActive ? "text-gray-900" : ""} text-xl font-semibold bg-red-300 px-4 py-2 rounded-md`
        }
        to="/fav"
      >
        Favorite
      </NavLink>
    </div>
  );
};

export default NavLinks;
