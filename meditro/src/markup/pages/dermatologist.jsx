// import React from 'react';
// import { Link } from 'react-router-dom';
// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg'; 

// const DoctorComponent = () => {
//   const doctors = [
//     { id:1,name: "Dr. Bennett", speciality: "Dermatologist", experience: 5, ratings: 4, image: dr1 },
//     { id:2,name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3, image: dr2 },
//     { id:3,name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 },
//     { id:4,name: "Dr. Furtado", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 },
//     { id:5,name: "Dr. Irani", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 },
//     { id:6,name: "Dr. Mehta", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 }
//   ];

//   const renderStars = (rating, starSize) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];
  
//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'orange', fontSize: starSize }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: starSize }}>{emptyStar}</span>);
//       }
//     }
  
//     return stars;
//   };

//   const styles = {
//     card: {
//       display: 'flex',
//       margin: '10px',
//       marginTop: '50px', // Reduce marginTop to decrease space between rows
//       padding: '7px',
//       border: '1px solid #ccc',
//       borderRadius: '10px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       width: 'calc(33.33% - 20px)', // Adjust the width to fit 3 cards in a row
//       boxSizing: 'border-box', // Include padding and border in width
//     },
//     photoWrapper: {
//       marginRight: '25px',
//       marginLeft:'10px',
//       width: '150px',
//       height: '150px',
//       marginTop:'13px',
//       borderRadius: '50%',
//       overflow: 'hidden',
//     },
//     photo: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//     },
//     details: {
//       flexGrow: '1',
//       fontFamily: 'Arial, sans-serif', 
//     },
//     name: {
//       margin: '0',
//       fontSize: '1.5rem',
//       color: '#1e90ff',
//     },
//     speciality: {
//       margin: '6px 0',
//       fontSize: '1rem',
//       color: '#808080',
//     },
//     experience: {
//       margin: '6px 0',
//       fontSize: '0.8rem',
//       color: '#808080',
//     },
//     ratings: {
//       margin: '6px 0',
//       fontSize: '0.8rem',
//       color: '#808080',
//     },
//     buttons: {
//       display: 'flex',
//       marginTop: '10px',
//     },
//     viewProfile: {
//       padding: '5px 25px',
//       marginRight: '10px',
//       border: 'none',
//       borderRadius: '5px',
//       backgroundColor: '#00aae4',
//       color: '#fff',
//       cursor: 'pointer',
//     },
//     // bookVisit: {
//     //   padding: '5px 30px',
//     //   border: 'none',
//     //   borderRadius: '5px',
//     //   backgroundColor: '#00aae4',
//     //   color: '#fff',
//     //   cursor: 'pointer',
//     // },
//   };

//   return (
//     <div className="doctor-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '60px', }}>
//       {doctors.map((doctor, id) => (
//         <div key={doctor.id} style={styles.card}>
//           <div style={styles.photoWrapper}>
//             <img src={doctor.image} alt="Doctor" style={styles.photo} />
//           </div>
//           <div style={styles.details}>
//             <h2 style={styles.name}>{doctor.name}</h2>
//             <p style={styles.speciality}>{doctor.speciality}</p>
//             <p style={styles.experience}>{doctor.experience} years of experience</p>
//             <div style={styles.ratings}>
//               {renderStars(doctor.ratings, '20px')} {doctor.ratings} Reviews
//             </div>
//             <div style={styles.buttons}>
//               <Link to={`/view_profile/${doctor.id}`} style={styles.viewProfile}>View Profile</Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
    
//   );
// };

// export default DoctorComponent;












import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg';
import doctorsData from '../../data/doctors.json'


const DoctorComponent = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:3030/dermatologist')
    .then(response => response.json())
    .then(data => setDoctors(data))
    .catch(err => console.error(err));
  }, []);



  // const doctors = [
  //   { id:1,name: "Dr. Bennett", speciality: "Dermatologist", experience: 5, ratings: 4, image: dr1 },
  //   { id:2,name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3, image: dr2 },
  //   { id:3,name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 },
  //   { id:4,name: "Dr. Furtado", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 },
  //   { id:5,name: "Dr. Irani", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 },
  //   { id:6,name: "Dr. Mehta", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 }
  // ];

  const renderStars = (rating, starSize) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} style={{ color: 'orange', fontSize: starSize }}>{fullStar}</span>);
      } else {
        stars.push(<span key={i} style={{ color: 'lightgray', fontSize: starSize }}>{emptyStar}</span>);
      }
    }
  
    return stars;
  };

  const styles = {
    card: {
      display: 'flex',
      margin: '10px',
      marginTop: '20px', // Reduce marginTop to decrease space between rows
      padding: '7px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: 'calc(33.33% - 20px)', // Adjust the width to fit 3 cards in a row
      boxSizing: 'border-box', // Include padding and border in width
    },
    photoWrapper: {
      marginRight: '25px',
      marginLeft:'10px',
      width: '150px',
      height: '150px',
      marginTop:'13px',
      borderRadius: '50%',
      overflow: 'hidden',
    },
    photo: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    details: {
      flexGrow: '1',
      fontFamily: 'Arial, sans-serif', 
    },
    name: {
      margin: '0',
      fontSize: '1.5rem',
      color: '#025099',
    },
    speciality: {
      margin: '6px 0',
      fontSize: '1rem',
      color: '#808080',
    },
    experience: {
      margin: '6px 0',
      fontSize: '0.8rem',
      color: '#808080',
    },
    ratings: {
      margin: '6px 0',
      fontSize: '0.8rem',
      color: '#808080',
    },
    buttons: {
      display: 'flex',
      marginTop: '10px',
    },
    viewProfile: {
      padding: '5px 25px',
      marginRight: '10px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#025099',
      color: '#fff',
      cursor: 'pointer',
    },
    tagline: {
      // textAlign: 'left',
      fontSize: '1.4rem',
      color: 'orange',
      marginBottom: '10px',
      marginTop: '120px', // Add top margin here
      marginLeft:'40px',

    }
  };

//   return (
//     <div>
//       <h1 style={styles.tagline}>Book appointments with minimum wait-time <br/> verified doctor details</h1>
//       <div className="doctor-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '60px', }}>
//         {doctorsData.map((doctorsData, id) => (
//           <div key={doctorsData.id} style={styles.card}>
//             <div style={styles.photoWrapper}>
//               <img src={doctorsData.image} alt="Doctor" style={styles.photo} />
//             </div>
//             <div style={styles.details}>
//               <h2 style={styles.name}>{doctorsData.name}</h2>
//               <p style={styles.speciality}>{doctorsData.speciality}</p>
//               <p style={styles.experience}>{doctorsData.experience} years of experience</p>
//               <div style={styles.ratings}>
//                 {renderStars(doctorsData.ratings, '20px')} {doctorsData.ratings} Reviews
//               </div>
//               <div style={styles.buttons}>
//                 <Link to={`/view_profile/${doctorsData.id}`} style={styles.viewProfile}>View Profile</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

return (
  <div>
    <h1 style={styles.tagline}>Book appointments with minimum wait-time <br/> verified doctor details</h1>
    <div className="doctor-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '60px' }}>
      {doctors.map((doctor, id) => (
        <div key={id} style={styles.card}>
          <div style={styles.photoWrapper}>
            <img src={doctor.imageUrl} alt="Doctor" style={styles.photo} />
          </div>
          <div style={styles.details}>
            <h2 style={styles.name}>{doctor.name}</h2>
            <p style={styles.speciality}>{doctor.category}</p>
            <p style={styles.experience}>{doctor.experience} experience</p>
            <div style={styles.buttons}>
              <Link to={`/view_profile/${doctor.name}`} style={styles.viewProfile}>View Profile</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default DoctorComponent;















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const DoctorComponent = () => {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         // Replace 'YOUR_API_ENDPOINT' with the actual URL of your backend API
//         const response = await axios.get('YOUR_API_ENDPOINT'); 
//         setDoctors(response.data);
//       } catch (error) {
//         console.error('Error fetching doctors:', error);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   const renderStars = (rating, starSize) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];
  
//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'orange', fontSize: starSize }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: starSize }}>{emptyStar}</span>);
//       }
//     }
  
//     return stars;
//   };

//   const styles = {
//     card: {
//       display: 'flex',
//       margin: '10px',
//       marginTop: '80px',
//       padding: '10px',
//       border: '1px solid #ccc',
//       borderRadius: '10px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       width: 'calc(33.33% - 20px)',
//       boxSizing: 'border-box',
//     },
//     photoWrapper: {
//       marginRight: '25px',
//       marginLeft:'10px',
//       width: '150px',
//       height: '150px',
//       marginTop:'13px',
//       borderRadius: '50%',
//       overflow: 'hidden',
//     },
//     photo: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//     },
//     details: {
//       flexGrow: '1',
//       fontFamily: 'Arial, sans-serif', 
//     },
//     name: {
//       margin: '0',
//       fontSize: '1.5rem',
//       color: '#1e90ff',
//     },
//     speciality: {
//       margin: '6px 0',
//       fontSize: '1rem',
//       color: '#808080',
//     },
//     experience: {
//       margin: '6px 0',
//       fontSize: '0.8rem',
//       color: '#808080',
//     },
//     ratings: {
//       margin: '6px 0',
//       fontSize: '0.8rem',
//       color: '#808080',
//     },
//     buttons: {
//       display: 'flex',
//       marginTop: '10px',
//     },
//     viewProfile: {
//       padding: '5px 25px',
//       marginRight: '10px',
//       border: 'none',
//       borderRadius: '5px',
//       backgroundColor: '#00aae4',
//       color: '#fff',
//       cursor: 'pointer',
//     },
//   };

//   return (
//     <div className="doctor-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//       {doctors.map((doctor) => (
//         <div key={doctor.id} style={styles.card}>
//           <div style={styles.photoWrapper}>
//             <img src={doctor.image} alt="Doctor" style={styles.photo} />
//           </div>
//           <div style={styles.details}>
//             <h2 style={styles.name}>{doctor.name}</h2>
//             <p style={styles.speciality}>{doctor.speciality}</p>
//             <p style={styles.experience}>{doctor.experience} years of experience</p>
//             <div style={styles.ratings}>
//               {renderStars(doctor.ratings, '20px')} {doctor.ratings} Reviews
//             </div>
//             <div style={styles.buttons}>
//               <Link to={`/view_profile/${doctor.id}`} style={styles.viewProfile}>View Profile</Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DoctorComponent;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import doctorsData from './data/doctors.json';

// const DoctorComponent = () => {
//   const renderStars = (rating, starSize) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];
  
//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'orange', fontSize: starSize }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: starSize }}>{emptyStar}</span>);
//       }
//     }
  
//     return stars;
//   };

//   const styles = {
//     // Styles for cards, photo, details, etc.
//   };

//   return (
//     <div className="doctor-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '60px', }}>
//       {doctorsData.map((doctor) => (
//         <div key={doctor.id} style={styles.card}>
//           <div style={styles.photoWrapper}>
//           <img src={require(`../../images/doctor/${doctor.image}`).default} alt="Doctor" style={styles.photo} />
//             {/* <img src={require(`../../images/doctor/${doctor.image}`).default} alt="Doctor" style={styles.photo} /> */}

//           </div>
//           <div style={styles.details}>
//             <h2 style={styles.name}>{doctor.name}</h2>
//             <p style={styles.speciality}>{doctor.speciality}</p>
//             <p style={styles.experience}>{doctor.experience} years of experience</p>
//             <div style={styles.ratings}>
//               {renderStars(doctor.ratings, '20px')} {doctor.ratings} Reviews
//             </div>
//             <div style={styles.buttons}>
//               <Link to={'/view_profile/${doctors.id}'} style={styles.viewProfile}>View Profile</Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DoctorComponent;