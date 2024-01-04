import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

const LINKS = [
  { id: 0, link: '/home', literal: 'Home' },
  { id: 1, link: '/login', literal: 'Login' },
  { id: 2, link: '/register', literal: 'Registrarse' },
  { id: 3, link: '/colaboraciones', literal: 'Colaboraciones' },
  { id: 4, link: '/fav', literal: 'Favoritos' },
  { id: 6, link: '/badges', literal: 'Sellos' },
  { id: 7, link: '/ofertas', literal: 'Ofertas' },
  { id: 8, link: '/blog', literal: 'Blog' },
  { id: 9, link: '/contact', literal: 'Contacto' },
];

function Navbar() {
  return (
    <nav>
      <ul>
        {LINKS.map((item) => (
          <li key={item.id}>
            <NavLink to={item.link}>{item.literal}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
