import React from "react";
import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutScreen";
import RequirementsScreen from "screens/RequirementsScreen";
import FeaturesScreen from "screens/FeaturesScreen";
import RealisationScreen from "screens/RealisationScreen";
import ResultsScreen from "screens/ResultsScreen";
import RoadmapScreen from "screens/RoadmapScreen";

const App = () => {
  return (
    <div>
      <MainScreen />
      <AboutScreen />
      <RequirementsScreen />
      <FeaturesScreen />
      <RealisationScreen />
      <ResultsScreen />
      <RoadmapScreen />
    </div>
  );
};

export default App;
