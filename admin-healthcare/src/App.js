import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import Header from './components/Header';
import Doctors from './components/Doctors';
import DoctorDetails from './components/DoctorDetails';
import ContactUs from './components/ContactUs'; // Import ContactUs component
import Patients from './components/Patients';
import Nurses from './components/Nurses';
import Pathology from './components/Pathology';
import Homenurse from './components/Homenurse';
import TermsAndConditions  from './components/TermsAndConditions';
import Faqs from './components/Faqs';
import Appointments from './components/Appointments';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import Policy from './components/Policy';
import Physiotherapists from './components/Physiotherapists';
import Offers from './components/Offers';
import ManageRoles from './components/ManageRoles';
import Feedbacks from './components/Feedbacks';
function App() {
  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path="/Header" element={<Header />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctor/" element={<DoctorDetails/>} />
            <Route path="/contact-us" element={<ContactUs />} /> {/* Route for ContactUs */}
            <Route path="/patients" element={<Patients/>} />
            <Route path="/nurses" element={<Nurses/>} />
            <Route path="/pathology" element={<Pathology/>} />
            <Route path="/home-nurse" element={<Homenurse/>} />
            <Route path="/t-and-c" element={<TermsAndConditions />} />
            <Route path="/faqs" element={<Faqs/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
            <Route path="/about_us" element={<AboutUs/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/privacy" element={<Policy/>}/>
            <Route path="/physiotherapist" element={<Physiotherapists/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/manage-roles" element={<ManageRoles/>}/>
            <Route path="/feedbacks" element={<Feedbacks/>}/>
          </Routes>
        </div>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link to="/about_us" className="dropdown-item">About Us</Link></li>
          <li><Link to="/contact-us" className="dropdown-item">Contact Us</Link></li> {/* Update link to point to /contact-us */}
          <li><Link to="/faqs" className="dropdown-item" >FAQs</Link></li>
          <li><Link to="/t-and-c" className="dropdown-item">Terms and Conditions</Link></li>
          <li><Link to="/privacy" className="dropdown-item" >Privacy Policy</Link></li>
          <li><Link to="/support" className="dropdown-item">Help</Link></li>
        </ul>
      </div>
       <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
       <li><Link to="/about_us" className="dropdown-item">Manage Users</Link></li>
       <li><Link to="/manage-roles" className="dropdown-item">Manage Roles</Link></li>
   </ul>  
    </Router>
  );
}

export default App;