import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gray-800 text-white font-thin min-h-screen pb-4">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
