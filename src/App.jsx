import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Proyecto from "./components/Proyecto";
import Desarrollador from "./components/Desarrollador";
import Descripcion from "./components/Descripcion";
import ModeloER from "./components/ModeloER";
import Despliegue from "./components/Despliegue";
import Pruebas from "./components/Pruebas";
import Insert from "./components/Insert";
import Update from "./components/Update";
import Delete from "./components/Delete";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/desarrollador" element={<Desarrollador />} />
        <Route path="/descripcion" element={<Descripcion />} />
        <Route path="/modelo-er" element={<ModeloER />} />
        <Route path="/despliegue" element={<Despliegue />} />
        <Route path="/pruebas" element={<Pruebas />}>
          <Route path="insert" element={<Insert />} />
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
