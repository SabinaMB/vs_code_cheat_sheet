import "./App.css";
import MacShortcut from "./MacShortcut";
import WindowsShortcut from "./WindowsShortcut";
import Home from "./Home";
import {Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/windows" element={<WindowsShortcut />} />
        <Route path="/mac" element={<MacShortcut />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
