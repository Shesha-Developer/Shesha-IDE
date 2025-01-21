import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import CodeEditor from "./components/CodeEditor";
import CircuitVisualizer from "./components/CircuitVisualizer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/editor" element={<CodeEditor />} />
        <Route path="/visualizer" element={<CircuitVisualizer />} />
      </Routes>
    </Router>
  );
};

export default App;
