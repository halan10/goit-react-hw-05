import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) => {
  return isActive ? css.linkActive : css.link;
};
export default function Navigation() {
  return (
    <nav className={css.container}>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getNavLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
}
