import { Routes, Route, Link } from "react-router-dom";

import MainPage from "./pages/MainPage";
import WorksPage from "./pages/WorksPage";
import CvPage from "./pages/CVPage";

import Button from "./components/Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/cv" element={<CvPage />} />
      </Routes>
    </div>
  );
}

export default App;
