import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { RecipeDataContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(RecipeDataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    const copyData = [...data];
    copyData.push(recipe);
    setData(copyData);

    localStorage.setItem("recipes", JSON.stringify(copyData));

    toast.success("New Recipe Created!");
    reset();
    navigate("/recipes");
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className=" m-auto text-center sm:w-[50vw] px-10 py-4 rounded-md flex flex-col gap-2"
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
          rows={5}
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
          <option className="bg-gray-700" value="">
            Select Category
          </option>
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
        <button className=" text-xl cursor-pointer active:scale-95 bg-gray-900 px-4 py-2 rounded-md w-fit sm:mt-4 mt-4 sm:m-auto ">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
