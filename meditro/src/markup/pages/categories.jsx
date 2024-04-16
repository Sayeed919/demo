import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaTooth, FaVenus, FaHome, FaLeaf, FaStethoscope } from 'react-icons/fa';
import bnrImg1 from "../../images/banner/img1.jpg";
const Categories = () => {
  const navigateTo = (route) => {
    window.location.href = route;
  };

  // Assuming these are your categories
  const categories = [
    { id: 1, name: 'Dermatologist', route: '/dermatologist', icon: FaUserMd, description: 'Specialists in diagnosing and treating skin conditions.' },
    { id: 2, name: 'Dentist', route: '/dentist', icon: FaTooth, description: 'Experts in oral health and dental care.' },
    { id: 3, name: 'Gynecologist', route: '/gynecologist', icon: FaVenus, description: 'Doctors specializing in women\'s reproductive health.' },
    { id: 4, name: 'Homoeopath', route: '/homoeopath', icon: FaHome, description: 'Practitioners of homeopathy, a form of alternative medicine.' },
    { id: 5, name: 'Ayurveda', route: '/ayurveda', icon: FaLeaf, description: 'Traditional Indian medicine focusing on holistic healing.' },
    { id: 6, name: 'General Physician', route: '/general_physician', icon: FaStethoscope, description: 'Primary care doctors providing general medical treatment.' },
    // Add more categories as needed
  ];

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px', backgroundImage: `url(${bnrImg1})` }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '180px', flexWrap: 'wrap' }}>
        {categories.map(category => (
          <div key={category.id} className="category-container" style={{ backgroundColor: '#ffffff', padding: '80px', borderRadius: '10px', width: '400px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.9)', marginBottom: '20px', textAlign: 'center', color: '#12214a' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <category.icon size={50} style={{ color: '#12214a' }} />
            </div>
            <h2 style={{ margin: '10px 0', color: 'black' }}>{category.name}</h2>
            <p style={{ marginBottom: '20px', fontSize: '14px' }}>{category.description}</p>
            <button onClick={() => navigateTo(category.route)} style={{
              marginTop: '20px',
              padding: '8px 12px',
              width: '200px', // Adjust width as needed
              height: '50px', // Adjust height as needed
              backgroundColor: '#12214a', // Background color for the button
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease', // Add transition for smooth hover effect
              '&:hover': { // Add hover effect
                backgroundColor: '#eb5409', // Change background color on hover
              }
            }}
            > Book Doctor</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
