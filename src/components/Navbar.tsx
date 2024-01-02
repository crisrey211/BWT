import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
}
export default Navbar;
