//npm install react-flip-toolkit

import React from 'react';
import { FaUserMd, FaTooth, FaVenus, FaHome, FaLeaf, FaStethoscope } from 'react-icons/fa';
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

const Categories = () => {
  const navigateTo = (route) => {
    window.location.href = route;
  };

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
    <section className="section-area section-sp1" style={{  backgroundImage: `url(${bnrImg1})`,marginTop:'-100px' }}>
      <div>
        <img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
        <img className="pt-img2 animate2" src={circleDots} alt=""/>
        <img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '150px' }}>
          {categories.map((category, index) => (
            <div key={category.id} className="category-container" style={{ 
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '10px',
              width: '400px',
              marginBottom: '10px',
              textAlign: 'center',
              color: '#025099',
              margin: '10px',
              animation: `fadeInUp 0.5s ease ${index * 0.1}s forwards`,
              backgroundImage: `url(${bnrImg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                {React.createElement(category.icon, { size: 50, style: { color: '#023a75' } })}
              </div>
              <h2 style={{ margin: '10px 0', color: '#023a75', fontSize: '20px' }}>{category.name}</h2>
              <p style={{ marginBottom: '20px', fontSize: '14px' }}>{category.description}</p>
              <button onClick={() => navigateTo(category.route)} style={{
                padding: '8px 12px',
                width: '200px',
                height: '50px',
                backgroundColor: '#025099',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}>Book Doctor</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaUserMd, FaTooth, FaVenus, FaHome, FaLeaf, FaStethoscope } from 'react-icons/fa';
// import bnrImg1 from "../../images/banner/img1.jpg";

// const Categories = () => {
//   const navigateTo = (route) => {
//     window.location.href = route;
//   };

//   const performTransactionalAction = () => {
//     console.log('Transactional action performed.');
//     // Perform the desired action within the "transaction"
//   };

//   const handleHover = () => {
//     performTransactionalAction();
//   };

//   const categories = [
//     { id: 1, name: 'Dermatologist', route: '/dermatologist', icon: FaUserMd, description: 'Specialists in diagnosing and treating skin conditions.' },
//     { id: 2, name: 'Dentist', route: '/dentist', icon: FaTooth, description: 'Experts in oral health and dental care.' },
//     { id: 3, name: 'Gynecologist', route: '/gynecologist', icon: FaVenus, description: 'Doctors specializing in women\'s reproductive health.' },
//     { id: 4, name: 'Homoeopath', route: '/homoeopath', icon: FaHome, description: 'Practitioners of homeopathy, a form of alternative medicine.' },
//     { id: 5, name: 'Ayurveda', route: '/ayurveda', icon: FaLeaf, description: 'Traditional Indian medicine focusing on holistic healing.' },
//     { id: 6, name: 'General Physician', route: '/general_physician', icon: FaStethoscope, description: 'Primary care doctors providing general medical treatment.' },
//     // Add more categories as needed
//   ];

//   return (
//     <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px', backgroundImage: `url(${bnrImg1})`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop:'150px' }}>
//         {categories.map(category => (
//           <div key={category.id} className="category-container" style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px', width: '300px',  marginBottom: '20px', textAlign: 'center', color: '#023a75', border: '2px solid #023a75', margin: '10px' }} onMouseEnter={handleHover}>
//             <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//               <category.icon size={50} style={{ color: '#023a75' }} />
//             </div>
//             <h2 style={{ margin: '10px 0', color: '#023a75', fontSize: '20px' }}>{category.name}</h2>
//             <p style={{ marginBottom: '20px', fontSize: '14px' }}>{category.description}</p>
//             <button onClick={() => navigateTo(category.route)} style={{
//               padding: '8px 12px',
//               width: '200px',
//               height: '50px',
//               backgroundColor: '#023a75',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s ease',
//               '&:hover': {
//                 backgroundColor: '#eb5409',
//               }
//             }}>Book Doctor</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
