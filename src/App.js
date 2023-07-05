import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import MainPage from "./pages/MainPage";
import WorksPage from "./pages/WorksPage";
import CvPage from "./pages/CVPage";

import DayNightContext from "./context/DayNightContext";

import Button from "./components/Button";

import "./App.css";

function App() {
  const [isDay, setIsDay] = useState(true);
  const theme = isDay ? "day" : "night";

  return (
    <DayNightContext.Provider
      value={{ isDay, toggleDayNight: () => setIsDay(!isDay) }}
    >
      <div className={theme}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/cv" element={<CvPage />} />
        </Routes>
      </div>
    </DayNightContext.Provider>
  );
}

export default App;
