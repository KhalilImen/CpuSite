import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home"
import Accueil from "./pages/Accueil"
import NoPage from "./pages/NoPage"
import AccueilComite from "./pages/AccueilComite"
import AboutUs from "./secondpage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/accueilcomite" element={<AccueilComite />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NoPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
