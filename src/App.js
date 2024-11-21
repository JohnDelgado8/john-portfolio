import React, { useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Projects from "./Projects";

function App() {
  const { theme } = useTheme();

  // Set the theme class on body element
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    
  );
}

export default App;
