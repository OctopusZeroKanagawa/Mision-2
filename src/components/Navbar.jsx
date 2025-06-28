import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/proyecto">Proyecto</Link>
      <Link to="/desarrollador">Desarrollador</Link>
      <Link to="/descripcion">Descripción</Link>
      <Link to="/modelo-er">Modelo ER</Link>
      <Link to="/pruebas">Pruebas SQL</Link>
      <Link to="/despliegue">Render</Link>
    </nav>
  );
}
