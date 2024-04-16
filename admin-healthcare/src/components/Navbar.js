import React from "react"
import { Link } from 'react-router-dom';
import "./Navbar.css";
function Navbar(){
      
    return (
        <div className="navbar-container">
    <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-4 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        {/* Content of the navbar */}

        <div className="container-fluid">
            
            {/* Toggler */}
            <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Brand */}
            <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
            </a>
            {/* User menu (mobile) */}
            <div className="navbar-user d-lg-none">
                {/* Dropdown */}
                <div className="dropdown">
                    {/* Toggle */}
                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar-parent-child">

                            <span className="avatar-child avatar-badge bg-success"></span>
                        </div>
                    </a>
                    
                </div>
            </div>
            {/* Collapse */}
            
            <div className="collapse navbar-collapse" id="sidebarCollapse">
            <h1 style={{ fontStyle:'Alice', color: 'blue', textAlign: 'center', fontSize: '30px', marginTop: '-30px',  }}>Telehealth-Trail</h1>


                {/* Navigation */}
                <ul className="navbar-nav mt-4">
                <li className="nav-item"  style={{ marginBottom: '10px' }}>
                    <Link className="nav-link" to="/Header"> {/* Use Link instead of a tag */}
                        <i className="bi bi-house"></i> Dashboard
                    </Link>
                </li>
                    <li className="nav-item"  style={{ marginBottom: '9px' }}>
                    <Link className="nav-link" to="/doctors"> {/* Update the link */}
                    <i className="bi bi-bar-chart"></i> Manage Doctors
                     </Link>
                    </li>

                    <li className="nav-item"  style={{ marginBottom: '10px' }}>
                        <Link className="nav-link" to="/patients">
                            <i className="bi bi-chat"></i> Manage Patients
                            <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                        </Link>
                    </li>
                    <li className="nav-item"  style={{ marginBottom: '10px' }}>
                        <Link className="nav-link" to="/nurses">
                            <i className="bi bi-file-medical"></i> Manage Nurses
                        </Link>
                    </li>
                    <li className="nav-item"  style={{ marginBottom: '10px' }}>
                        < Link className="nav-link" to="/pathology">
                            <i className="bi bi-plus-circle"></i>  Manage Pathology
                        </Link>
                    </li>
                    <li className="nav-item"  style={{ marginBottom: '10px' }}>
                        <Link className="nav-link" to="home-nurse">
                            <i className="bi bi-person-circle"></i> Manage Home-Nurses
                        </Link>
                    </li>
                    <li className="nav-item"  style={{ marginBottom: '10px' }}>
                        <Link className="nav-link" to="physiotherapist">
                            <i className="bi bi-people"></i> Manage Physiotherapists
                        </Link>
                    </li>
                    <li className="nav-item"  style={{ marginBottom: '10px' }}>
                    <Link className="nav-link" to="appointments">
                            <i className="bi bi-person-circle"></i> Manage Appointments
                        </Link>
                    </li>
                    <li className="nav-item dropdown"  style={{ marginBottom: '10px' }}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-people"></i> User Management
                            
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to="/about_us" className="dropdown-item">Manage Users</Link></li>
                            <li><Link to="/manage-roles" className="dropdown-item">Manage Roles</Link></li>
                        </ul>
                    </li>

                    
                    <li className="nav-item"  style={{ marginBottom: '10px' }}>
                        <Link className="nav-link" to="offers">
                            <i className="bi bi-cash-stack"></i> Manage Offers
                        </Link>
                    </li>
                    <li className="nav-item dropdown"  style={{ marginBottom: '10px' }}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-gear"></i> Settings
                            
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to="/about_us" className="dropdown-item">About Us</Link></li>
                            <li><Link to="/contact-us" className="dropdown-item">Contact Us</Link></li>
                            <li><Link to="/faqs" className="dropdown-item">FAQs</Link></li>
                            <li><Link to="/t-and-c" className="dropdown-item">Terms and Conditions</Link></li>
                            <li><Link to="/privacy" className="dropdown-item" >Privacy Policy</Link></li>
                            <li><Link to="/support" className="dropdown-item" >Help</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"  style={{ marginBottom: '10px' }}>
                        <Link className="nav-link" to="feedbacks">
                            <i className="bi bi-file-earmark-person"></i> Feedbacks
                        </Link>
                    </li>
                    
                    <li className="nav-item"  style={{ marginBottom: '10px' }}>
                        <a className="nav-link" href="#">
                            <i className="bi bi-file-earmark-medical-fill"></i> Reports
                        </a>
                    </li>
                    
                </ul>
                {/* User (md) */}
                <ul className="navbar-nav"  style={{ marginBottom: '10px' }}>
                    <li className="nav-item">
                        <a className="nav-link" href="admin_profile.html">
                            <i className="bi bi-person-square"></i> Admin Account
                        </a>
                    </li>
                    <li className="nav-item"  style={{ marginBottom: '20px' }}>
                        <a className="nav-link" href="#" onclick="return confirm('Are you sure you want to logout?')">
                            <i className="bi bi-box-arrow-left"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
    </div>
    );
}
export default Navbar;