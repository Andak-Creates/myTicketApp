import React from "react";
import "./CSS/index.css";
import NavBar from "./Components/NavBar";
import FormDisplay from "./Components/FormDisplay";

const App = () => {
  return (
    <div>
      <NavBar />
      <FormDisplay />
      <div className="torchlight"></div>
    </div>
  );
};

export default App;
