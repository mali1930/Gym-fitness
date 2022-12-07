import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import ExerciseId from "./pages/ExerciseId";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-red-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseId />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
