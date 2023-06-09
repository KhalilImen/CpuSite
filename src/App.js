import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Accueil from "./pages/Accueil"
import NoPage from "./pages/NoPage"
import AccueilComite from "./pages/AccueilComite"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/accueilcomite" element={<AccueilComite />} />
        <Route path="*" element={<NoPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
