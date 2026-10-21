import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import CreateRecipe from "../pages/CreateRecipe";
import SingleRecipe from "../pages/SingleRecipe";
import PageNotFound from "../pages/PageNotFound";
import Fav from "../pages/Fav";

const Mainroutes = () => {
  return (
    <div className="max-w-[1440px] m-auto px-4 my-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
