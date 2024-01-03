import { NavLink } from 'react-router-dom';
import '../css/navbar.module.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/badges">Badges</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
