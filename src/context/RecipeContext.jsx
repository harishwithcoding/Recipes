import { createContext, useEffect, useState } from "react";
export const RecipeDataContext = createContext(null);

const RecipeContext = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <RecipeDataContext.Provider value={{ data, setData }}>
      {props.children}
    </RecipeDataContext.Provider>
  );
};

export default RecipeContext;
