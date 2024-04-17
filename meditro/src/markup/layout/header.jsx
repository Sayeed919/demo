  
// import React, { useState, useEffect, SyntheticEven, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import Sticky from 'react-stickynode';


// import logo from '../../images/logo.png';
// import logoWhite from '../../images/logo-white.png';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchFormOpen, setIsSearchBtn] = useState(false);
//   const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen);
//   const quikSearchClose = () => setIsSearchBtn(false);
//   const [activeItem, setActiveItem] = useState(null);
//   const [isMobileView, setIsMobileView] = useState(false);

//   const toggleSubmenu = (item) => {
//     setActiveItem(item === activeItem ? null : item);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const handleMenuLinkClick = () => {
//     if (window.innerWidth <= 991) {
//       setIsMenuOpen(false);
//     }
//   };

//   const handleMenuCloseClick = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth >= 768);
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const menuItems = [
//     {
//       id: 'home',
//       name: 'Home',
//       linkName: '#',
//     },
//     {
//       id: 'services',
//       name: 'Services',
//       linkName: 'services',
//     },
//     {
//       id: 'categories',
//       name: 'Categories',
//       linkName: '#',
//       subItems: [
//         {
//           id: 'dermat',
//           displayName: 'Dermatologist',
//           linkName: 'dermatologist',
//         },
//         {
//           id: 'dentist',
//           displayName: 'Dentist',
//           linkName: 'dentist',
//         },
//         {
//           id: 'gynac',
//           displayName: 'Gynecologist',
//           linkName: 'gynecologist',
//         },
//         {
//           id: 'homeo',
//           displayName: 'Homoeopath',
//           linkName: 'homoeopath',
//         },
//         {
//           id: 'ayurveda',
//           displayName: 'Ayurveda',
//           linkName: 'ayurveda',
//         },
//         {
//           id: 'generalphysician',
//           displayName: 'General Physician',
//           linkName: '#',
//         },
//       ],
//     },
//     {
//       id: 'blog',
//       name: 'Blog',
//       linkName: 'blog-details',
//     },
//     {
//       id: 'contactUs',
//       name: 'Contact Us',
//       linkName: 'contact-us',
//     },
//     {
//       id: 'pages',
//       name: 'Login',
//       linkName: '#',
//       subItems: [
//         {
//           id: 'formLogin',
//           displayName: 'Login / Register',
//           linkName: 'form-login',
//         },
//       ],
//     },
//   ];

//   return (
//     <header className="header header-transparent rs-nav">
//       <Sticky enabled={true} className="sticky-header navbar-expand-lg">
//         <div className="menu-bar clearfix">
//           <div className="container-fluid clearfix">
//             <div className="menu-logo logo-dark">
//               <Link to="/" style={{ display: 'block', position: 'relative', top: '15px' }}>
//                 <img src={logo} alt="" style={{ width: '250px', margin: '10px', marginTop: '20px' }} />
//               </Link>
//             </div>

//             <button
//               className={`navbar-toggler collapsed menuicon justify-content-end ${isMenuOpen ? 'open' : ''}`}
//               type="button"
//               onClick={toggleMenu}
//               aria-label="Toggle navigation"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>

//             <div className="secondary-menu">
//               <ul>
//                 <li className="search-btn">
//                   <button
//                     id="quikSearchBtn"
//                     type="button"
//                     className="btn-link"
//                     onClick={quikSearchBtn}
//                     style={{ transform: 'scaleX(-1)' }}
//                   >
//                     <i className="las la-search"></i>
//                   </button>
//                 </li>
//               </ul>
//             </div>

//             <div className={`menu-links navbar-collapse collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
//               <div className="menu-logo">
//                 <Link to="/">
//                   <img src={logoWhite} alt="" />
//                 </Link>
//               </div>

//               <ul className="nav navbar-nav">
//                 {menuItems.map((item) => (
//                   <li
//                     key={item.id}
//                     className={`${activeItem === item.id ? 'open' : ''}`}
//                     onClick={() => toggleSubmenu(item.id)}
//                   >
//                     {item.subItems ? (
//                       <Link to="#">
//                         {item.name}
//                         <i className={`fas fa-plus`}></i>
//                       </Link>
//                     ) : (
//                       <Link to={`/${item.linkName}`} onClick={handleMenuLinkClick}>
//                         {item.name}
//                       </Link>
//                     )}
//                     {(isMobileView || activeItem === item.id) && item.subItems && (
//                       <ul className="sub-menu">
//                         {item.subItems.map((subItem, index) => (
//                           <li key={subItem.id}>
//                             <Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick}>
//                               <span>{subItem.displayName}</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <ul className="social-media">
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary">
//                     <i className="fab fa-google"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div className="menu-close" onClick={handleMenuCloseClick}>
//                 <i className="ti-close"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Sticky>

//       <div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
//         <form>
//           <input type="text" className="form-control" placeholder="Search" />
//           <span>
//             <i className="ti-search"></i>
//           </span>
//         </form>
//         <span id="searchRemove" onClick={quikSearchClose}>
//           <i className="ti-close"></i>
//         </span>
//       </div>
//     </header>
//   );
// };

// export default Header;
























// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Sticky from 'react-stickynode';

// // Images
// import logo from '../../images/logo.png';
// import logoWhite from '../../images/logo-white.png';
// import profileIcon from '../../images/profile-icon.png';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchFormOpen, setIsSearchBtn] = useState(false);
//   const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen);
//   const quikSearchClose = () => setIsSearchBtn(false);
//   const [activeItem, setActiveItem] = useState(null);
//   const [isMobileView, setIsMobileView] = useState(false);

//   const toggleSubmenu = (item) => {
//     setActiveItem(item === activeItem ? null : item);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const handleMenuLinkClick = () => {
//     if (window.innerWidth <= 991) {
//       setIsMenuOpen(false);
//     }
//   };

//   const handleMenuCloseClick = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth >= 768);
//     };

//     // Check the screen size on initial render and whenever the window is resized
//     handleResize();

//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const menuItems = [
//     {
//       id: 'home',
//       name: 'Home',
//       linkName: '#',
//     },
//     {
//       id: 'services',
//       name: 'Services',
//       linkName: 'services',
//     },
//     {
//       id: 'categories',
//       name: 'Categories',
//       linkName: '#',
//       subItems: [
//         {
//           id: 'dermat',
//           displayName: 'Dermatologist',
//           linkName: 'dermatologist',
//         },
//         {
//           id: 'dentist',
//           displayName: 'Dentist',
//           linkName: 'dentist',
//         },
//         {
//           id: 'gynac',
//           displayName: 'Gynecologist',
//           linkName: 'gynecologist',
//         },
//         {
//           id: 'homeo',
//           displayName: 'Homoeopath',
//           linkName: 'homoeopath',
//         },
//         {
//           id: 'ayurveda',
//           displayName: 'Ayurveda',
//           linkName: '#',
//         },
//         {
//           id: 'generalphysician',
//           displayName: 'General Physician',
//           linkName: '#',
//         },
//       ],
//     },
//     {
//       id: 'blog',
//       name: 'Blog',
//       linkName: 'blog-details',
//     },
//     {
//       id: 'contactUs',
//       name: 'Contact Us',
//       linkName: 'contact-us',
//     },
//     {
//       id: 'pages',
//       name: 'Login',
//       linkName: '#',
//       subItems: [
//         {
//           id: 'formLogin',
//           displayName: 'Login / Register',
//           linkName: 'form-login',
//         },
//       ],
//     },
//   ];

//   return (
//     <header className="header header-transparent rs-nav">
//       <Sticky enabled={true} className="sticky-header navbar-expand-lg">
//         <div className="menu-bar clearfix">
//           <div className="container-fluid clearfix">
//             <div className="menu-logo logo-dark">
//               <Link to="/" style={{ display: 'block', position: 'relative', top: '15px' }}>
//                 <img src={logo} alt="" style={{ width: '250px', margin: '10px', marginTop: '20px' }} />
//               </Link>
//             </div>

//             <button
//               className={`navbar-toggler collapsed menuicon justify-content-end ${isMenuOpen ? 'open' : ''}`}
//               type="button"
//               onClick={toggleMenu}
//               aria-label="Toggle navigation"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>

//             <div className="secondary-menu">
//               <ul>
//                 <li className="search-btn">
//                   <button
//                     id="quikSearchBtn"
//                     type="button"
//                     className="btn-link"
//                     onClick={quikSearchBtn}
//                     style={{ transform: 'scaleX(-1)', marginRight: '120px' }}
//                   >
//                     <i className="las la-search"></i>
//                   </button>
//                 </li>
//                 <li className='="profile-icon'>
//                   <img src ={profileIcon} alt="Profile" style={{width:'35px', height: '35px', marginTop: '-3px56'}}>

//                   </img>
//                 </li>
//               </ul>
//             </div>

//             <div className={`menu-links navbar-collapse collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
//               <div className="menu-logo">
//                 <Link to="/">
//                   <img src={logoWhite} alt="" />
//                 </Link>
//               </div>

//               <ul className="nav navbar-nav">
//                 {menuItems.map((item) => (
//                   <li
//                     key={item.id}
//                     className={`${activeItem === item.id ? 'open' : ''}`}
//                     onClick={() => toggleSubmenu(item.id)}
//                   >
//                     {item.subItems ? (
//                       <Link to="#">
//                         {item.name}
//                         <i className={`fas fa-plus`}></i>
//                       </Link>
//                     ) : (
//                       <Link to={`/${item.linkName}`} onClick={handleMenuLinkClick}>
//                         {item.name}
//                       </Link>
//                     )}
//                     {(isMobileView || activeItem === item.id) && item.subItems && (
//                       <ul className="sub-menu">
//                         {item.subItems.map((subItem, index) => (
//                           <li key={subItem.id}>
//                             <Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick}>
//                               <span>{subItem.displayName}</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <ul className="social-media">
//                 <li>
//                   <a target="_blank" rel="https://www.facebook.com/" href="https://www.facebook.com/search/top?q=trailique" className="btn btn-primary">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="https://www.youtube.com/" href="https://www.youtube.com/channel/UCCORoavk-ADmBL6-dPn13JA" className="btn btn-primary">
//                     <i className="fab fa-youtube"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="https://www.linkedin.com/" href="https://in.linkedin.com/company/trailiqueinfotech" className="btn btn-primary">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="https://www.twitter.com" href="https://twitter.com/TrailiqueInfo" className="btn btn-primary">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div className="menu-close" onClick={handleMenuCloseClick}>
//                 <i className="ti-close"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Sticky>

//       <div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
//         <form>
//           <input type="text" className="form-control" placeholder="Search" />
//           <span>
//             <i className="ti-search"></i>
//           </span>
//         </form>
//         <span id="searchRemove" onClick={quikSearchClose}>
//           <i className="ti-close"></i>
//         </span>
//       </div>
//     </header>
//   );
// };

// export default Header;



















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Sticky from 'react-stickynode';

// // Images
// import logo from '../../images/logo.png';
// import logoWhite from '../../images/logo-white.png';
// import profileIcon from '../../images/profile-icon.png';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchFormOpen, setIsSearchBtn] = useState(false);
//   const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen);
//   const quikSearchClose = () => setIsSearchBtn(false);
//   const [activeItem, setActiveItem] = useState(null);
//   const [isMobileView, setIsMobileView] = useState(false);

//   const toggleSubmenu = (item) => {
//     setActiveItem(item === activeItem ? null : item);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const handleMenuLinkClick = () => {
//     if (window.innerWidth <= 991) {
//       setIsMenuOpen(false);
//     }
//   };

//   const handleMenuCloseClick = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth >= 768);
//     };

//     // Check the screen size on initial render and whenever the window is resized
//     handleResize();

//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const menuItems = [
//     {
//       id: 'home',
//       name: 'Home',
//       linkName: '#',
//     },
//     {
//       id: 'services',
//       name: 'Services',
//       linkName: 'services',
//     },
//     {
//       id: 'categories',
//       name: 'Categories',
//       linkName: '#',
//       subItems: [
//         {
//           id: 'dermat',
//           displayName: 'Dermatologist',
//           linkName: 'dermatologist',
//         },
//         {
//           id: 'dentist',
//           displayName: 'Dentist',
//           linkName: 'dentist',
//         },
//         {
//           id: 'gynac',
//           displayName: 'Gynecologist',
//           linkName: 'gynecologist',
//         },
//         {
//           id: 'homeo',
//           displayName: 'Homoeopath',
//           linkName: 'homoeopath',
//         },
//         {
//           id: 'Ayurveda',
//           displayName: 'ayurveda',
//           linkName: 'Ayurveda',
//         },
//         {
//           id: 'GeneralPhysician',
//           displayName: 'general_physician',
//           linkName: 'General_physician',
//         },
//       ],
//     },
//     {
//       id: 'blog',
//       name: 'Blog',
//       linkName: 'blog-details',
//     },
//     {
//       id: 'contactUs',
//       name: 'Contact Us',
//       linkName: 'contact-us',
//     },
//     {
//       id: 'pages',
//       name: 'Login',
//       linkName: '#',
//       subItems: [
//         {
//           id: 'formLogin',
//           displayName: 'Login / Register',
//           linkName: 'form-login',
//         },
//       ],
//     },
//     {
//       id: 'profile',
//       name: (
//         <div style={{display: 'flex', alignItems: 'center'}}>
//           <img src={profileIcon} alt='Profile' style={{width: '20px', height: '20px', marginTop:'-4px'}}/>
//           <span style={{ marginLeft: '5px', marginTop: '-1px' }}>Profile</span>
//         </div>
//       ),
      
//     }
    
    
//   ];

//   return (
//     <header className="header header-transparent rs-nav">
//       <Sticky enabled={true} className="sticky-header navbar-expand-lg">
//         <div className="menu-bar clearfix">
//           <div className="container-fluid clearfix">
//             <div className="menu-logo logo-dark">
//               <Link to="/" style={{ display: 'block', position: 'relative', top: '15px' }}>
//                 <img src={logo} alt="" style={{ width: '250px', margin: '10px', marginTop: '20px' }} />
//               </Link>
//             </div>

//             <button
//               className={`navbar-toggler collapsed menuicon justify-content-end ${isMenuOpen ? 'open' : ''}`}
//               type="button"
//               onClick={toggleMenu}
//               aria-label="Toggle navigation"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>

//             <div className="secondary-menu">
//               <ul>
//                 <li className="search-btn">
//                   <button
//                     id="quikSearchBtn"
//                     type="button"
//                     className="btn-link"
//                     onClick={quikSearchBtn}
//                     style={{ transform: 'scaleX(-1)' }}
//                   >
//                     <i className="las la-search"></i>
//                   </button>
                  
//                 </li>
//               </ul>
//             </div>

//             <div className={`menu-links navbar-collapse collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
//               <div className="menu-logo">
//                 <Link to="/">
//                   <img src={logoWhite} alt="" />
//                 </Link>
//               </div>

//               <ul className="nav navbar-nav">
//                 {menuItems.map((item) => (
//                   <li
//                     key={item.id}
//                     className={`${activeItem === item.id ? 'open' : ''}`}
//                     onClick={() => toggleSubmenu(item.id)}
//                   >
//                     {item.subItems ? (
//                       <Link to="#">
//                         {item.name}
//                         <i className={`fas fa-plus`}></i>
//                       </Link>
//                     ) : (
//                       <Link to={`/${item.linkName}`} onClick={handleMenuLinkClick}>
//                         {item.name}
//                       </Link>
//                     )}
//                     {(isMobileView || activeItem === item.id) && item.subItems && (
//                       <ul className="sub-menu">
//                         {item.subItems.map((subItem, index) => (
//                           <li key={subItem.id}>
//                             <Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick}>
//                               <span>{subItem.displayName}</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <ul className="social-media">
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary">
//                     <i className="fab fa-google"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div className="menu-close" onClick={handleMenuCloseClick}>
//                 <i className="ti-close"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Sticky>

//       <div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
//         <form>
//           <input type="text" className="form-control" placeholder="Search" />
//           <span>
//             <i className="ti-search"></i>
//           </span>
//         </form>
//         <span id="searchRemove" onClick={quikSearchClose}>
//           <i className="ti-close"></i>
//         </span>
//       </div>
      
      
//     </header>
//   );
// };

// export default Header;














// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Sticky from 'react-stickynode';

// // Images
// import logo from '../../images/logo.png';
// import logoWhite from '../../images/logo-white.png';
// import profileIcon from '../../images/profile-icon.png';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchFormOpen, setIsSearchBtn] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen);
//   const quikSearchClose = () => setIsSearchBtn(false);
//   const [activeItem, setActiveItem] = useState(null);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const profileRef = useRef(null);

//   const toggleSubmenu = (item) => {
//     setActiveItem(item === activeItem ? null : item);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const handleMenuLinkClick = () => {
//     if (window.innerWidth <= 991) {
//       setIsMenuOpen(false);
//     }
//   };

//   const handleMenuCloseClick = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth >= 768);
//     };

//     // Check the screen size on initial render and whenever the window is resized
//     handleResize();

//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setIsProfileDropdownOpen(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const menuItems = [
//     {
//       id: 'home',
//       name: 'Home',
//       linkName: '#',
//     },
//     {
//       id: 'services',
//       name: 'Services',
//       linkName: 'services',
//     },
//     {
//       id: 'categories',
//       name: 'Categories',
//       linkName: '#',
//       subItems: [
//         {
//           id: 'dermat',
//           displayName: 'Dermatologist',
//           linkName: 'dermatologist',
//         },
//         {
//           id: 'dentist',
//           displayName: 'Dentist',
//           linkName: 'dentist',
//         },
//         {
//           id: 'gynac',
//           displayName: 'Gynecologist',
//           linkName: 'gynecologist',
//         },
//         {
//           id: 'homeo',
//           displayName: 'Homoeopath',
//           linkName: 'homoeopath',
//         },
//         {
//           id: 'Ayurveda',
//           displayName: 'ayurveda',
//           linkName: 'Ayurveda',
//         },
//         {
//           id: 'GeneralPhysician',
//           displayName: 'general_physician',
//           linkName: 'General_physician',
//         },
//       ],
//     },
//     {
//       id: 'blog',
//       name: 'Blog',
//       linkName: 'blog-details',
//     },
//     {
//       id: 'contactUs',
//       name: 'Contact Us',
//       linkName: 'contact-us',
//     },
//     {
//       id: 'pages',
//       name: 'Login',
//       linkName: '#',
//       subItems: [
//         {
//           id: 'formLogin',
//           displayName: 'Login ',
//           linkName: 'form-login',
//         },
//         {
//           id: 'formLogin',
//           displayName: 'Register ',
//           linkName: 'form-login',
//         },
//       ],
//     },
//   //   {
//   //     id: 'profile',
//   //     name: (
//   //       <div
//   //         ref={profileRef}
//   //         style={{ position: 'relative' }}
//   //       >
//   //         <div
//   //           style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
//   //         >
//   //           <img src={profileIcon} alt="Profile" style={{ width: '20px', height: '20px', marginTop: '-4px', marginRight:'20px' }} />
//   //           <span style={{ marginLeft: '5px', marginTop: '-1px', marginRight:'40px' }}>Profile</span>
//   //         </div>
//   //       </div>
//   //     ),
//   //     // subItems: [
//   //     //   {
//   //     //   id: 'settings',
//   //     //   displayName: 'Settings',
//   //     //   linkName: 'form-login',
//   //     //   }

//   //     // ]
//     // },
//     {
//       id: 'profile',
//       name: 'Profile',
//       linkName: '#',
//       subItems: [
//         {
//           id: 'My Profile',
//           displayName: 'My Profile',
//           linkName: 'myprofile',
//         },
//         {
//           id: 'My Appointments',
//           displayName: 'My Appointments',
//           linkName: 'myappointment',
//         },
//         {
//           id: 'Prescription',
//           displayName: 'Prescription',
//           linkName: 'prescription',
//         },
//         { 
//           id: 'Settings',
//           displayName: 'Settings',
//           linkName: 'settings',
//         },
//         {
//           id: 'Logout',
//           displayName: 'Logout',
//           linkName: 'Logout',
//         },
       
//       ],
//     },
//   ];

//   return (
//     <header className="header header-transparent rs-nav">
//       <Sticky enabled={true} className="sticky-header navbar-expand-lg">
//         <div className="menu-bar clearfix">
//           <div className="container-fluid clearfix">
//             <div className="menu-logo logo-dark">
//               <Link to="/" style={{ display: 'block', position: 'relative', top: '15px' }}>
//                 <img src={logo} alt="" style={{ width: '250px', margin: '10px', marginTop: '20px' }} />
//               </Link>
//             </div>

//             <button
//               className={`navbar-toggler collapsed menuicon justify-content-end ${isMenuOpen ? 'open' : ''}`}
//               type="button"
//               onClick={toggleMenu}
//               aria-label="Toggle navigation"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>

//             <div className="secondary-menu">
//               <ul>
//                 <li className="search-btn">
//                   <button
//                     id="quikSearchBtn"
//                     type="button"
//                     className="btn-link"
//                     onClick={quikSearchBtn}
//                     style={{ transform: 'scaleX(-1)' }}
//                   >
//                     <i className="las la-search"></i>
//                   </button>
//                 </li>
//               </ul>
//             </div>

//             <div className={`menu-links navbar-collapse collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
//               <div className="menu-logo">
//                 <Link to="/">
//                   <img src={logoWhite} alt="" />
//                 </Link>
//               </div>

//               <ul className="nav navbar-nav">
//                 {menuItems.map((item) => (
//                   <li
//                     key={item.id}
//                     className={`${activeItem === item.id ? 'open' : ''}`}
//                     onClick={() => toggleSubmenu(item.id)}
//                   >
//                     {item.subItems ? (
//                       <Link to="#">
//                         {item.name}
//                         <i className={`fas fa-plus`}></i>
//                       </Link>
//                     ) : (
//                       <Link to={`/${item.linkName}`} onClick={handleMenuLinkClick}>
//                         {item.name}
//                       </Link>
//                     )}
//                     {(isMobileView || activeItem === item.id) && item.subItems && (
//                       <ul className="sub-menu">
//                         {item.subItems.map((subItem, index) => (
//                           <li key={subItem.id}>
//                             <Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick}>
//                               <span>{subItem.displayName}</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <ul className="social-media">
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary">
//                     <i className="fab fa-google"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div className="menu-close" onClick={handleMenuCloseClick}>
//                 <i className="ti-close"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Sticky>

//       <div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
//         <form>
//           <input type="text" className="form-control" placeholder="Search" />
//           <span>
//             <i className="ti-search"></i>
//           </span>
//         </form>
//         <span id="searchRemove" onClick={quikSearchClose}>
//           <i className="ti-close"></i>
//         </span>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import axios from 'axios';

// Images
import logo from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';
import profileIcon from '../../images/profile-icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFormOpen, setIsSearchBtn] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]); // State to hold search results
  const [searchQuery, setSearchQuery] = useState(''); // State to hold search query
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const profileRef = useRef(null);
  const searchRef = useRef(null);

  const toggleSubmenu = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  const handleSearch = async () => {
    try {
      console.log('Search query:', searchQuery);
      const response = await axios.get(`http://localhost:3030/search?q=${searchQuery}`); // Make GET request to /search endpoint
      console.log('Search results:', response.data);
      setSearchResults(response.data); // Set search results in state
    } catch (error) {
      console.error('Error searching:', error);
      // Handle error
    }
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

  const toggleSearchForm = () => {
    setIsSearchBtn(!isSearchFormOpen);
  };

  const closeSearchForm = () => {
    setIsSearchBtn(false);
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
          displayName: 'Login ',
          linkName: 'form-login',
        },
        {
          id: 'formLogin',
          displayName: 'Registration',
          linkName: 'form-register',
        },
      ],
    },
    {
      id: 'profile',
      name: 'Profile',
      linkName: '#',
      subItems: [
        {
          id: 'My Profile',
          displayName: 'My Profile',
          linkName: 'myprofile',
        },
        {
          id: 'My Appointments',
          displayName: 'My Appointments',
          linkName: 'myappointment',
        },
        {
          id: 'Doctor Profile',
          displayName: 'Doctor Profile',
          linkName: 'doc_profile',
        },
        {
          id: 'Nurse Profile',
          displayName: 'Nurse Profile',
          linkName: 'nurse_profile',
        },
        {
          id: 'Prescription',
          displayName: 'Prescription',
          linkName: 'prescription',
        },
        { 
          id: 'Settings',
          displayName: 'Settings',
          linkName: 'settings',
        },
        {
          id: 'Logout',
          displayName: 'Logout',
          linkName: 'Logout',
        },
      ],
    },
  ];

  return (
    <header className="header header-transparent rs-nav">
      <Sticky enabled={true} className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container-fluid clearfix">
            <div className="menu-logo logo-dark">
              <Link to="/" style={{ display: 'block', position: 'relative', top: '15px' }}>
                <img src={logo} alt="" style={{ width: '250px', margin: '10px', marginTop: '-30px' }} />
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
                    onClick={toggleSearchForm}
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
          <input type="text" 
          className="form-control" 
          placeholder="Search"
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)} //update search query state
          
          />
          <span onClick={handleSearch}> {/* Handle search when clicked */}
            <i className="ti-search"></i>
          </span>
        </form>
        <span id="searchRemove" onClick={closeSearchForm}>
          <i className="ti-close"></i>
        </span>

        {searchResults.length > 0 && (
          <ul className="search-results-list">
            {searchResults.map((result, index) => (
              <li key={index} className="search-result">
                <p>{result.name}</p>
                {/* <p>Brand: {result.brand}</p>
                <p>Price: {result.price}</p> */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );

};

export default Header;
