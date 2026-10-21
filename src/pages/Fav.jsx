import React, { use, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { RecipeDataContext } from "../context/RecipeContext";

const Fav = () => {
  let favorite = [];
  //   localStorage.clear();
  try {
    favorite = JSON.parse(localStorage.getItem("fav")) || [];
  } catch (error) {
    console.error("Invalid favorite data:", error);
  }

  let renderrecipe = favorite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="sm:flex mt-[50px] flex-wrap gap-10 justify-around">
      {favorite.length > 0 ? renderrecipe : "No Favorite found!"}
    </div>
  );
};

export default Fav;
