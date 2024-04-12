
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';
import profileIcon from '../../images/profile-icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFormOpen, setIsSearchBtn] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen);
  const quikSearchClose = () => setIsSearchBtn(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const profileRef = useRef(null);

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

    // Check the screen size on initial render and whenever the window is resized
    handleResize();

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      id: 'home',
      name: 'Home',
      linkName: '#',
    },
    {
      id: 'services',
      name: 'Services',
      linkName: 'services',
    },
    {
      id: 'categories',
      name: 'Categories',
      linkName: '#',
      subItems: [
        {
          id: 'dermat',
          displayName: 'Dermatologist',
          linkName: 'dermatologist',
        },
        {
          id: 'dentist',
          displayName: 'Dentist',
          linkName: 'dentist',
        },
        {
          id: 'gynac',
          displayName: 'Gynecologist',
          linkName: 'gynecologist',
        },
        {
          id: 'homeo',
          displayName: 'Homoeopath',
          linkName: 'homoeopath',
        },
        {
          id: 'Ayurveda',
          displayName: 'ayurveda',
          linkName: 'Ayurveda',
        },
        {
          id: 'GeneralPhysician',
          displayName: 'general_physician',
          linkName: 'General_physician',
        },
      ],
    },
    {
      id: 'blog',
      name: 'Blog',
      linkName: 'blog-details',
    },
    {
      id: 'contactUs',
      name: 'Contact Us',
      linkName: 'contact-us',
    },
    {
      id: 'pages',
      name: 'Login',
      linkName: '#',
      subItems: [
        {
          id: 'formLogin',
          displayName: 'Login / Register',
          linkName: 'form-login',
        },
      ],
    },
    {
      id: 'profile',
      name: (
        <div
          ref={profileRef}
          style={{ position: 'relative' }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <img src={profileIcon} alt="Profile" style={{ width: '20px', height: '20px', marginTop: '-4px', marginRight:'20px' }} />
            <span style={{ marginLeft: '5px', marginTop: '-1px', marginRight:'40px' }}>Profile</span>
          </div>
        </div>
      ),
      subItems: [
        {
        id: 'settings',
        displayName: 'Settings',
        linkName: 'form-login',
        }

      ]
    },
  ];

  return (
    <header className="header header-transparent rs-nav">
      <Sticky enabled={true} className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container-fluid clearfix">
            <div className="menu-logo logo-dark">
              <Link to="/" style={{ display: 'block', position: 'relative', top: '15px' }}>
                <img src={logo} alt="" style={{ width: '250px', margin: '10px', marginTop: '20px' }} />
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

            <div className="secondary-menu">
              <ul>
                <li className="search-btn">
                  <button
                    id="quikSearchBtn"
                    type="button"
                    className="btn-link"
                    onClick={quikSearchBtn}
                    style={{ transform: 'scaleX(-1)' }}
                  >
                    <i className="las la-search"></i>
                  </button>
                </li>
              </ul>
            </div>

            <div className={`menu-links navbar-collapse collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
              <div className="menu-logo">
                <Link to="/">
                  <img src={logoWhite} alt="" />
                </Link>
              </div>

              <ul className="nav navbar-nav">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={`${activeItem === item.id ? 'open' : ''}`}
                    onClick={() => toggleSubmenu(item.id)}
                  >
                    {item.subItems ? (
                      <Link to="#">
                        {item.name}
                        <i className={`fas fa-plus`}></i>
                      </Link>
                    ) : (
                      <Link to={`/${item.linkName}`} onClick={handleMenuLinkClick}>
                        {item.name}
                      </Link>
                    )}
                    {(isMobileView || activeItem === item.id) && item.subItems && (
                      <ul className="sub-menu">
                        {item.subItems.map((subItem, index) => (
                          <li key={subItem.id}>
                            <Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick}>
                              <span>{subItem.displayName}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <ul className="social-media">
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary">
                    <i className="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>

              <div className="menu-close" onClick={handleMenuCloseClick}>
                <i className="ti-close"></i>
              </div>
            </div>
          </div>
        </div>
      </Sticky>

      <div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
        <form>
          <input type="text" className="form-control" placeholder="Search" />
          <span>
            <i className="ti-search"></i>
          </span>
        </form>
        <span id="searchRemove" onClick={quikSearchClose}>
          <i className="ti-close"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;