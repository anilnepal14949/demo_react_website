import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [activeMenu, setActiveMenu] = useState("home");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
              DEMOREACT
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item' onClick={() => setActiveMenu("home")}>
                <Link to='/' className={ activeMenu === 'home' ? 'nav-links active-menu' : 'nav-links'} onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item' onClick={() => setActiveMenu("services")}>
                <Link
                  to='/services'
                  className={ activeMenu === 'services' ? 'nav-links active-menu' : 'nav-links'}
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item' onClick={() => setActiveMenu("products")}>
                <Link
                  to='/products'
                  className={ activeMenu === 'products' ? 'nav-links active-menu' : 'nav-links'}
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-btn' onClick={() => setActiveMenu("signup")}>
                {button ? (
                  <Link to='/sign-up' className={ activeMenu === 'signup' ? 'btn-link active-button' : 'btn-link'}>
                    <Button buttonStyle='btn--outline' onClick={closeMobileMenu}>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className={ activeMenu === 'signup' ? 'btn-link active-button' : 'btn-link'}>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;