import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='top-nav-bar'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' alt='logo' />
          <span className='logo-text'>Mini Project - Planet Soft</span>
        </Link>
        <div className='options'>
          <Link className='option' to='/'>
            Zadatak 1
          </Link>
          <Link className='option' to='/zadatak2'>
            Zadatak 2
          </Link>
          <Link className='option' to='/zadatak3'>
            Zadatak 3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
