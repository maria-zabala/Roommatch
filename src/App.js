import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Favoritos from "./pages/Favoritos";
import Mensajes from "./pages/Mensajes";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/mensajes" element={<Mensajes />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}

export default App;