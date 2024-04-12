// import React from 'react';
// import {Link} from 'react-router-dom';
// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg'; 

// const Dermatologist = ({ name, speciality, experience, ratings, image, index }) => {
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
//           <Link to="/view_profile" style={styles.viewProfile}>
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

// const HomoeopathComponent = () => {
//   const doctors = [
//     { name: "Dr. Bennett", speciality: "Dermatologist", experience: 5, ratings: 4, image: dr1 },
//     { name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3, image: dr2 },
//     { name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 }
//   ];

//   return (
//     <div className="doctor-list">
//       {doctors.map((doctor, index) => (
//         <Homoeopath
//           key={index}
//           index={index}
//           {...doctor}
//         />
//       ))}
//     </div>
//   );
// };

// export default HomoeopathComponent;






















// import React from 'react';
// import { Link } from 'react-router-dom';
// // import dr1 from '../../images/doctor/dr1.jpg';
// // import dr2 from '../../images/doctor/dr2.jpg';
// // import dr3 from '../../images/doctor/dr3.jpg';
// import doctorsData from '../../data/doctors.json'


// const DoctorComponent = () => {
//   // const doctors = [
//   //   { id:1,name: "Dr. Bennett", speciality: "Dermatologist", experience: 5, ratings: 4, image: dr1 },
//   //   { id:2,name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3, image: dr2 },
//   //   { id:3,name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 },
//   //   { id:4,name: "Dr. Furtado", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 },
//   //   { id:5,name: "Dr. Irani", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 },
//   //   { id:6,name: "Dr. Mehta", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 }
//   // ];

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
//       marginTop: '20px', // Reduce marginTop to decrease space between rows
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
//       color: '#025099 ',
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
//       backgroundColor: '#025099',
//       color: '#fff',
//       cursor: 'pointer',
//     },
//     tagline: {
//       // textAlign: 'center',
//       fontSize: '1.4rem',
//       color: 'orange',
//       marginBottom: '20px',
//       marginTop: '120px', // Add top margin here
//       marginLeft:'40px',

//     }
//   };

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
//               {/* <Link to="/chat" style={styles.chatButton}>Chat</Link> */}
//               {/* <Link to="/doc_profile" style={styles.chatButton}>Profile</Link> */}

//                 <Link to={`/view_profile/${doctorsData.id}`} style={styles.viewProfile}>View Profile</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorComponent;





import React from 'react';
import { Link } from 'react-router-dom';
import dr1 from '../../images/doctor/dr1.jpeg';
import dr2 from '../../images/doctor/dr2.jpg';
import dr3 from '../../images/doctor/dr3.jpg'; 

const Dermatologist = ({ name, speciality, experience, ratings, image }) => {
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

  return (
    <div style={styles.card}>
      <div style={styles.photoWrapper}>
        <img src={image} alt="Doctor" style={styles.photo} />
      </div>
      <div style={styles.details}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.speciality}>{speciality}</p>
        <p style={styles.experience}>{experience} years of experience</p>
        <div style={styles.ratings}>
          {renderStars(ratings, '20px')} {ratings} Reviews
        </div>
        <div style={styles.buttons}>
          <Link to="/view_profile" style={styles.viewProfile}>
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    margin: '10px',
    marginTop: '10px',
    padding: '7px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: 'calc(33.33% - 20px)',
    boxSizing: 'border-box',
  },
  photoWrapper: {
    marginRight: '25px',
    marginLeft: '10px',
    width: '150px',
    height: '150px',
    marginTop: '13px',
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
    color: '#025099 ',
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
    fontSize: '1.4rem',
    color: 'orange',
    marginBottom: '20px',
    marginBottom: '0', 
    marginTop: '120px',
    marginLeft: '40px',
  },
};

const HomoeopathComponent = () => {
  const doctors = [
    { name: "Dr. Bhavesh C. Jain", speciality: "Family Physician & Homeopathic Consultant", experience: 20, ratings: 5, image: dr1 },
    { name: "Dr. Davis Engel", speciality: "Dentist", experience: 3, ratings: 3, image: dr2 },
    { name: "Dr. Mark", speciality: "Pediatrics", experience: 8, ratings: 5, image: dr3 }
  ];

  return (
    <div>
      <h1 style={styles.tagline}>Book appointments with minimum wait-time <br/> verified doctor details</h1>
      <div className="doctor-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '60px' }}>
        {doctors.map((doctor, index) => (
          <Dermatologist
            key={index}
            {...doctor}
          />
        ))}
      </div>
    </div>
  );
};

export default HomoeopathComponent;
