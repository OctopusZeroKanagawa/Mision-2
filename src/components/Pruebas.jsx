import { Outlet, Link } from "react-router-dom";

export default function Pruebas() {
  return (
    <main>
      <h2>Pruebas SQL</h2>
      <nav>
        <Link to="insert">Insert</Link> | 
        <Link to="update">Update</Link> | 
        <Link to="delete">Delete</Link>
      </nav>
      <Outlet />
    </main>
  );
}
