import React from "react";
import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutScreen";
import RequirementsScreen from "screens/RequirementsScreen";

const App = () => {
  return (
    <div>
      <MainScreen />
      <AboutScreen />
      <RequirementsScreen />
    </div>
  );
};

export default App;
