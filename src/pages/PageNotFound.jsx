import React from "react";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-70">
      <h1 className="text-red-500 text-7xl ">404 | Page Not Found.</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="text-xl bg-gray-900 px-4 py-2 rounded-md active:scale-95 cursor-pointer"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default PageNotFound;
