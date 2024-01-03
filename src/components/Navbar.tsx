import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Iniciar</NavLink>
        </li>
        <li>
          <NavLink to="/register">Registrarse</NavLink>
        </li>
        <li>
          <NavLink to="/">Colaboraciones</NavLink>
        </li>
        <li>
          <NavLink to="/">Favoritos</NavLink>
        </li>
        <li>
          <NavLink to="/badges">Sellos</NavLink>
        </li>
        <li>
          <NavLink to="/">Ofertas</NavLink>
        </li>
        <li>
          <NavLink to="/">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
