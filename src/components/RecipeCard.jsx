import React from "react";
import { Link } from "react-router";

const RecipeCard = (props) => {
  const { id, recipe, title, image, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="hover:scale-102  duration-150 active:scale-95 flex flex-col  gap-1 overflow-hidden lg:w-[30%]"
      key={recipe}
    >
      <img
        className=" w-[400px] h-[250px] object-cover rounded"
        src={image}
        alt=""
      />
      <h1 className="text-2xl font-semibold px-2">{title}</h1>
      <small className="px-2 text-xl text-red-300">{chef}</small>
      <p className="w-[400px] text-xl px-2">
        {desc.slice(0, 100)}...<small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
