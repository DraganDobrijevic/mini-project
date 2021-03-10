import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='top-nav-bar'>
        <NavLink className='logo-container' to='/zadatak1'>
          <Logo className='logo' alt='logo' />
          <span className='logo-text'>Mini Project</span>
        </NavLink>
        <nav className='options'>
          <NavLink
            className='option'
            activeClassName='option--active'
            to='/zadatak1'
          >
            Zadatak 1
          </NavLink>
          <NavLink
            className='option'
            activeClassName='option--active'
            to='/zadatak2'
          >
            Zadatak 2
          </NavLink>
          <NavLink
            className='option'
            activeClassName='option--active'
            to='/zadatak3'
          >
            Zadatak 3
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
