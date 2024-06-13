import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Sticky from 'react-stickynode';
import axios from 'axios';
import logo from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 768);
  const [currentToken, setCurrentToken] = useState(null);
  const profileRef = useRef(null);

  const { isSignedIn } = useUser();

  const getDeviceType = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) {
      return 'android';
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      return 'ios';
    } else if (userAgent.includes('mobile')) {
      return 'mobile';
    }
    return 'desktop';
  };

  const deviceType = getDeviceType();

  const toggleSubmenu = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuLinkClick = () => {
    if (window.innerWidth <= 991) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuCloseClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        // Handle outside click for profile dropdown if needed
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fetchToken = async () => {
    try {
      const response = await axios.get('http://localhost:4000/token'); // Update the URL as per your server configuration
      if (response.data) {
        setCurrentToken(response.data.value);
      }
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  useEffect(() => {
    fetchToken(); // Fetch the token on mount
    const interval = setInterval(fetchToken, 1000); // Fetch the token every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const menuItems = [
    {
      id: 'home',
      name: 'Home',
      linkName: 'home',
      style: { color: 'black' },
    },
    {
      id: 'pages',
      name: isSignedIn ? 'Profile' : 'Login',
      linkName: '#',
      subItems: isSignedIn
        ? [
            {
              id: 'MyProfile',
              displayName: 'My Profile',
              linkName: 'myprofile',
            },
            {
              id: 'MyAppointments',
              displayName: 'Appointment History',
              linkName: 'myappointment',
            },
            {
              id: 'PatientAppointment',
              displayName: 'My Appointments',
              linkName: 'appointmentuser',
            },
            {
              id: 'SignOut',
              displayName: 'Sign Out',
              linkName: 'signout',
            },
          ]
        : [
            {
              id: 'formLogin',
              displayName: 'Login',
              linkName: 'form-login',
            },
            {
              id: 'formRegister',
              displayName: 'Register',
              linkName: 'form-register',
            },
          ],
      style: { color: 'black' },
    },
  ];

  return (
    <header className="header header-transparent rs-nav">
      <Sticky enabled={true} className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container clearfix" style={{ paddingRight: '50px' }}>
            <div className="menu-logo logo-dark">
              <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src={logo} alt="Logo" style={{ width: '250px', margin: '10px', marginTop: '10px', marginLeft: '-40px' }} />
                <button
                  style={{
                    backgroundColor: '#FA9225',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    padding: deviceType === 'android' ? '10px' : deviceType === 'ios' ? '8px' : '5px',
                    width: deviceType === 'android' ? '500px' : deviceType === 'ios' ? '450px' : '350px',
                    height: deviceType === 'android' ? '45px' : deviceType === 'ios' ? '40px' : '35px',
                    fontSize: '15px',
                    marginLeft: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    marginTop: '-10px',
                  }}
                >
                  {deviceType === 'android'
                    ? currentToken !== null ? currentToken : 'Loading...'
                    : deviceType === 'ios'
                    ? currentToken !== null ? currentToken : 'Loading...'
                    : `Current Token: ${currentToken !== null ? currentToken : 'Loading...'}`}
                </button>
              </Link>
            </div>

            <button
              className={`navbar-toggler collapsed menuicon justify-content-end ${isMenuOpen ? 'open' : ''}`}
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`menu-links navbar-collapse collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
              <div className="menu-logo">
                <Link to="/">
                  <img src={logoWhite} alt="Logo White" />
                </Link>
              </div>

              <ul className="nav navbar-nav">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={`${activeItem === item.id ? 'open' : ''}`}
                    onClick={() => toggleSubmenu(item.id)}
                    style={{ color: item.style.color }}
                  >
                    {item.subItems ? (
                      <Link to="#" style={{ color: item.style.color }}>
                        {item.name}
                        <i className="fas fa-plus"></i>
                      </Link>
                    ) : (
                      <Link to={`/${item.linkName}`} onClick={handleMenuLinkClick} style={{ color: item.style.color }}>
                        {item.name}
                      </Link>
                    )}
                    {(isMobileView || activeItem === item.id) && item.subItems && (
                      <ul className="sub-menu">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick} style={{ color: item.style.color }}>
                              {subItem.displayName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="menu-close" onClick={handleMenuCloseClick}>
                <i className="ti-close"></i>
              </div>
            </div>
          </div>
        </div>
      </Sticky>
    </header>
  );
};

export default Header;
