import { useContext } from "react";
import { RecipeDataContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(RecipeDataContext);
  const renderrecipe = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="sm:flex mt-[50px] flex-wrap gap-10 justify-around">
      {data.length > 0 ? renderrecipe : "Recipes not found!"}
    </div>
  );
};

export default Recipes;
