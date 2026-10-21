import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { RecipeDataContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(RecipeDataContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      desc: recipe?.desc,
      chef: recipe?.chef,
      category: recipe?.category,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
    },
  });

  const [favorite, setfavorite] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("fav")) || [];
    } catch (error) {
      return [];
    }
  });

  const favHandler = () => {
    let copyfav = [...favorite];
    copyfav.push(recipe);
    setfavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };
  const unfavHandler = () => {
    const filerFav = favorite.filter((f) => f.id != recipe?.id);
    setfavorite(filerFav);
    localStorage.setItem("fav", JSON.stringify(filerFav));
  };

  const updateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setData(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));

    toast.success("Recipe Updated!");
  };
  const deleteHandler = () => {
    const filterData = data.filter((r) => r.id != params.id);
    setData(filterData);
    localStorage.setItem("recipes", JSON.stringify(filterData));

    console.log(filterData);

    toast.success("Recipe Deleted!");
    navigate("/recipes");

    const favorite = JSON.parse(localStorage.getItem("fav")) || [];

    const updatedFavorite = favorite.filter(
      (recipe) => String(recipe.id) !== String(params.id),
    );

    console.log(updatedFavorite);

    localStorage.setItem("fav", JSON.stringify(updatedFavorite));
  };

  return recipe ? (
    <div className="w-full md:flex ">
      <div className="relative left md:w-1/2 flex flex-wrap gap-3 items-center px-10">
        {favorite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={unfavHandler}
            className=" active:scale-90 absolute top-3 right-2 cursor-pointer text-3xl text-red-400 ri-poker-hearts-fill"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className="active:scale-90 absolute top-3 right-2 cursor-pointer text-3xl text-red-400 ri-poker-hearts-line"
          ></i>
        )}

        <h1 className="text-5xl font-semibold">{recipe.title}</h1>
        <img
          className="w-[100%] h-[300px] object-cover rounded"
          src={recipe.image}
          alt=""
        />
        <p className="text-red-300 text-2xl ">{recipe.chef}</p>
        <p className="">{recipe.desc}</p>
      </div>
      <form
        onSubmit={handleSubmit(updateHandler)}
        className=" m-auto text-center md:w-[50vw] px-10 py-4 rounded-md flex flex-col gap-2"
      >
        <input
          {...register("image")}
          className="w-full outline-0 border-b-1 p-1 text-xl"
          type="url"
          placeholder="Enter Recipe URL"
        />
        {errors.image && (
          <small className="text-start text-red-300">Enter URL Here...</small>
        )}
        <input
          {...register("title")}
          className="w-full outline-0 border-b-1 p-1 text-xl"
          type="text"
          placeholder="Recipe Title"
        />
        {errors.title && (
          <small className="text-start text-red-300">
            Enter Recipe Title...
          </small>
        )}
        <input
          {...register("chef")}
          className="w-full outline-0 border-b-1 p-1 text-xl"
          type="text"
          placeholder="Chef Name"
        />
        {errors.chef && (
          <small className="text-start text-red-300">
            Enter Recipe Title...
          </small>
        )}
        <textarea
          {...register("desc")}
          className="w-full outline-0 border-b-1 p-1 text-xl"
          placeholder="Recipe Description"
          rows={3}
        ></textarea>
        {errors.desc && (
          <small className="text-start text-red-300">
            Enter Recipe Description...
          </small>
        )}
        <textarea
          {...register("ingr")}
          className="w-full outline-0 border-b-1 p-1 text-xl"
          placeholder="Write Ingredients seperated by comma"
          rows={3}
        ></textarea>
        {errors.ingr && (
          <small className="text-start text-red-300">
            Enter Recipe Ingredients...
          </small>
        )}
        <textarea
          {...register("inst")}
          className="w-full outline-0 border-b-1 p-1 text-xl"
          placeholder="Write Instructions seperated by comma"
          rows={3}
        ></textarea>
        {errors.inst && (
          <small className="text-start text-red-300">
            Enter Recipe Ingredients...
          </small>
        )}
        <select
          {...register("category")}
          className="w-fit outline-0 border-b-1 p-1 text-xl"
        >
          <option className="bg-gray-700" value="breakfast">
            Breakfast
          </option>
          <option className="bg-gray-700" value="lunch">
            Lunch
          </option>
          <option className="bg-gray-700" value="supper">
            Supper
          </option>
          <option className="bg-gray-700" value="dinner">
            Dinner
          </option>
        </select>
        {errors.category && (
          <small className="text-start text-red-300">
            Please Select Category...
          </small>
        )}
        <div className="flex gap-5 ">
          <button className=" text-xl cursor-pointer active:scale-95 bg-blue-900 px-4 py-2 rounded-md w-fit sm:mt-4 mt-4 ">
            Update Recipe
          </button>
          <button
            onClick={deleteHandler}
            className=" text-xl cursor-pointer active:scale-95 bg-red-900 px-4 py-2 rounded-md w-fit sm:mt-4 mt-4 "
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
