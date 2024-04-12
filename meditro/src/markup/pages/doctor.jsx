// // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // import dr1 from '../../images/doctor/dr1.jpg';
// // import dr2 from '../../images/doctor/dr2.jpg';
// // import dr3 from '../../images/doctor/dr3.jpg'; 

// // const Doctor = ({ name, speciality, experience, ratings, image, index }) => {
// //   // const navigate = useNavigate(); 

// //   const renderStars = (rating, starSize) => {
// //     const fullStar = '★';
// //     const emptyStar = '☆';
// //     const stars = [];
  
// //     for (let i = 0; i < 5; i++) {
// //       if (i < rating) {
// //         stars.push(<span key={i} style={{ color: 'yellow', fontSize: starSize }}>{fullStar}</span>);
// //       } else {
// //         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: starSize }}>{emptyStar}</span>);
// //       }
// //     }
  
// //     return stars;
// //   };
  
// //   const marginTop = index === 0 ? '130px' : '10px'; 

  
// //   return (
// //     <div style={{ ...styles.card, marginTop }}>
// //       <div style={styles.photoWrapper}>
// //         <img src={image} alt="Doctor" style={styles.photo} />
// //       </div>
// //       <div style={styles.details}>
// //         <h2 style={styles.name}> {name}</h2>
// //         <p style={styles.speciality}>{speciality}</p>
// //         <p style={styles.experience}>{experience} years of experience</p>
// //         <div style={styles.ratings}>
// //           {renderStars(ratings, '20px')} {ratings}  Reviews
// //         </div>
// //         <div style={styles.buttons}>
// //         <button style={styles.viewProfile} onClick={() => navigate(/viewprofile/${index})}>View Profile</button> 
// //           <button style={styles.bookVisit}>Book Visit</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   card: {
// //     display: 'flex',
// //     margin: '10px',
// //     padding: '10px',
// //     border: '1px solid #ccc',
// //     borderRadius: '10px',
// //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// //   },
// //   photoWrapper: {
// //     marginRight: '25px',
// //     marginLeft:'10px',
// //     width: '150px',
// //     height: '150px',
// //     marginTop:'13px',
// //     borderRadius: '50%',
// //     overflow: 'hidden',
// //   },
// //   photo: {
// //     width: '100%',
// //     height: '100%',
// //     objectFit: 'cover',
// //   },
// //   details: {
// //     flexGrow: '1',
// //     fontFamily: 'Arial, sans-serif', 
// //   },
// //   name: {
// //     margin: '0',
// //     fontSize: '1.5rem',
// //     color: '#1e90ff',
// //   },
// //   speciality: {
// //     margin: '6px 0',
// //     fontSize: '1rem',
// //     color: '#808080',
// //   },
// //   experience: {
// //     margin: '6px 0',
// //     fontSize: '0.8rem',
// //     color: '#808080',
// //   },
// //   ratings: {
// //     margin: '6px 0',
// //     fontSize: '0.8rem',
// //     color: '#808080',
// //   },
// //   buttons: {
// //     display: 'flex',
// //     marginTop: '10px',
// //   },
// //   viewProfile: {
// //     padding: '5px 25px',
// //     marginRight: '10px',
// //     border: 'none',
// //     borderRadius: '5px',
// //     backgroundColor: '#00aae4',
// //     color: '#fff',
// //     cursor: 'pointer',
// //   },
// //   bookVisit: {
// //     padding: '5px 30px',
// //     border: 'none',
// //     borderRadius: '5px',
// //     backgroundColor: '#00aae4',
// //     color: '#fff',
// //     cursor: 'pointer',
// //   },
// // };

// // const DoctorComponent = () => {
// //   const doctors = [
// //     { name: "Dr. Bennett", speciality: "Dermatologist", experience: 5, ratings: 4, image: dr1 },
// //     { name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3, image: dr2 },
// //     { name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 }
// //   ];

// //   return (
// //     <div className="doctor-list">
// //       {doctors.map((doctor, index) => (
// //         <Doctor 
// //           key={index}
// //           index={index}
// //           {...doctor}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default DoctorComponent;
// import React from 'react';
// import {Link} from 'react-router-dom';
// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg'; 

// const Doctor = ({ name, speciality, experience, ratings, image, index }) => {
//   const renderStars = (rating, starSize) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];
  
//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'yellow', fontSize: starSize }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: starSize }}>{emptyStar}</span>);
//       }
//     }
  
//     return stars;
//   };
  
//   const marginTop = index === 0 ? '130px' : '10px'; 
//   return (
//     <div style={{ ...styles.card, marginTop }}>
//       <div style={styles.photoWrapper}>
//         <img src={image} alt="Doctor" style={styles.photo} />
//       </div>
//       <div style={styles.details}>
//         <h2 style={styles.name}> {name}</h2>
//         <p style={styles.speciality}>{speciality}</p>
//         <p style={styles.experience}>{experience} years of experience</p>
//         <div style={styles.ratings}>
//           {renderStars(ratings, '20px')} {ratings}  Reviews
//         </div>
//         <div style={styles.buttons}>
//           {/* <button style={styles.viewProfile}>View Profile</button> */}
//           {/* <Link to="/view_profile"   >View Profile</Link> */}
//           <Link to="/view_profile
//           " style={styles.viewProfile}>
//             View Profile
//         </Link>
//         <Link to="/book_visit" style={styles.bookVisit}>
//             Book Visit
//         </Link>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     display: 'flex',
//     margin: '10px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   photoWrapper: {
//     marginRight: '25px',
//     marginLeft:'10px',
//     width: '150px',
//     height: '150px',
//     marginTop:'13px',
//     borderRadius: '50%',
//     overflow: 'hidden',
//   },
//   photo: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   details: {
//     flexGrow: '1',
//     fontFamily: 'Arial, sans-serif', 
//   },
//   name: {
//     margin: '0',
//     fontSize: '1.5rem',
//     color: '#1e90ff',
//   },
//   speciality: {
//     margin: '6px 0',
//     fontSize: '1rem',
//     color: '#808080',
//   },
//   experience: {
//     margin: '6px 0',
//     fontSize: '0.8rem',
//     color: '#808080',
//   },
//   ratings: {
//     margin: '6px 0',
//     fontSize: '0.8rem',
//     color: '#808080',
//   },
//   buttons: {
//     display: 'flex',
//     marginTop: '10px',
//   },
//   viewProfile: {
//     padding: '5px 25px',
//     marginRight: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     backgroundColor: '#00aae4',
//     color: '#fff',
//     cursor: 'pointer',
//   },
//   bookVisit: {
//     padding: '5px 30px',
//     border: 'none',
//     borderRadius: '5px',
//     backgroundColor: '#00aae4',
//     color: '#fff',
//     cursor: 'pointer',
//   },
// };

// const DoctorComponent = () => {
//   const doctors = [
//     { name: "Dr. Bennett", speciality: "Dermatologist", experience: 5, ratings: 4, image: dr1 },
//     { name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3, image: dr2 },
//     { name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 }
//   ];

//   return (
//     <div className="doctor-list">
//       {doctors.map((doctor, index) => (
//         <Doctor 
//           key={index}
//           index={index}
//           {...doctor}
//         />
//       ))}
//     </div>
//   );
// };

// export default DoctorComponent;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg'; 

// const DoctorComponent = () => {
//   const doctors = [
//     { id:1,name: "Dr. Bennett", speciality: "Dermatologist", experience: 5, ratings: 4, image: dr1 },
//     { id:2,name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3, image: dr2 },
//     { id:3,name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 }
//   ];

//   const renderStars = (rating, starSize) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];
  
//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'yellow', fontSize: starSize }}>{fullStar}</span>);
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
//       padding: '10px',
//       border: '1px solid #ccc',
//       borderRadius: '10px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
//     bookVisit: {
//       padding: '5px 30px',
//       border: 'none',
//       borderRadius: '5px',
//       backgroundColor: '#00aae4',
//       color: '#fff',
//       cursor: 'pointer',
//     },
//   };
//   return (
//     <div className="doctor-list">
//       {doctors.map((doctor, id) => (
//         <div key={doctor.id} style={{ ...styles.card, marginTop: id === 0 ? '130px' : '10px' }}>
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
//               {/* <Link to="/view_profile" style={styles.viewProfile}>View Profile</Link> */}
//               {/* <Link to={/view_profile/${doctor.id}} style={styles.viewProfile}>View Profile</Link> */}
//               <Link to={`/view_profile/${doctor.id}`} style={styles.viewProfile}>View Profile</Link>


//               <Link to="/book_visit" style={styles.bookVisit}>Book Visit</Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DoctorComponent;









import React from 'react';
import { Link } from 'react-router-dom';
import dr1 from '../../images/doctor/dr1.jpeg';
import dr2 from '../../images/doctor/dr2.jpg';
import dr3 from '../../images/doctor/dr3.jpg'; 

const DoctorComponent = () => {
  const doctors = [
    { id:1,name: "Dr. Bhavesh C. Jain", speciality: "Family Physician & Homeopathic Consultant", experience: 5, ratings: 5, image: dr1 },
    { id:2,name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3, image: dr2 },
    { id:3,name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 }
  ];

  const renderStars = (rating, starSize) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} style={{ color: 'yellow', fontSize: starSize }}>{fullStar}</span>);
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
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
      color: '#1e90ff',
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
      backgroundColor: '#00aae4',
      color: '#fff',
      cursor: 'pointer',
    },
    bookVisit: {
      padding: '5px 30px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#00aae4',
      color: '#fff',
      cursor: 'pointer',
    },
  };

  return (
    <div className="doctor-list">
      {doctors.map((doctor, id) => (
        <div key={doctor.id} style={{ ...styles.card, marginTop: id === 0 ? '130px' : '10px' }}>
          <div style={styles.photoWrapper}>
            <img src={doctor.image} alt="Doctor" style={styles.photo} />
          </div>
          <div style={styles.details}>
            <h2 style={styles.name}>{doctor.name}</h2>
            <p style={styles.speciality}>{doctor.speciality}</p>
            <p style={styles.experience}>{doctor.experience} years of experience</p>
            <div style={styles.ratings}>
              {renderStars(doctor.ratings, '20px')} {doctor.ratings} Reviews
            </div>
            <div style={styles.buttons}>
              {/* <Link to="/view_profile" style={styles.viewProfile}>View Profile</Link> */}
              {/* <Link to={/view_profile/${doctor.id}} style={styles.viewProfile}>View Profile</Link>

              <Link to={/book_visit/${doctor.id}}  style={styles.bookVisit}>Book Visit</Link> */}

              <Link to={`/view_profile/${doctor.id}`} style={styles.viewProfile}>View Profile</Link>
              <Link to={`/book_visit/${doctor.id}`} style={styles.viewProfile}>Book Visit</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorComponent;