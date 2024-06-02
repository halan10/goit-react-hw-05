import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) => {
  return isActive ? css.linkActive : css.link;
};
export default function Navigation() {
  return (
    <Box className={css.mainBox}>
      <nav className={css.container}>
        <Toolbar className={css.toolbar}>
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={getNavLinkClass}>
            Movies
          </NavLink>
        </Toolbar>
      </nav>
    </Box>
  );
}
