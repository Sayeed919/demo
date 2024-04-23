import React from 'react';
import { Link } from 'react-router-dom';
import nurse1 from '../../images/nurse/nurse1.jpg';
import nurse2 from '../../images/nurse/nurse2.jpg';

const Nurse = () => {
  // Nurse data in JSON format
  const nursesData = [
    {
      id: 1,
      name: "Nurse Jane",
      speciality: "Emergency Medicine",
      experience: 7,
      ratings: 4,
      image: nurse1 // Using the imported nurse1 image
    },
    {
      id: 2,
      name: "Nurse John",
      speciality: "Pediatrics",
      experience: 5,
      ratings: 5,
      image: nurse2 // Using the imported nurse2 image
    },
    {
      id: 3,
      name: "Nurse Sarah",
      speciality: "Surgery",
      experience: 10,
      ratings: 4,
      image: nurse1 // Using the same image as nurse1 for demonstration
    }
  ];
  
  // Add more nurse data if needed
  
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
    // card: {
    //   display: 'flex',
    //   margin: '10px',
    //   padding: '15px',
    //   border: '1px solid #ccc',
    //   borderRadius: '10px',
    //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    //   width: 'calc(33.33% - 20px)',
    //   boxSizing: 'border-box',
    //   marginTop: '20px',
    // },
    card: {
      display: 'flex',
      margin: '10px',
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
      marginTop: '20px',
      '@media (min-width: 769px)': {
        width: 'calc(33.33% - 20px)',
      },
      '@media (max-width: 768px)': {
        width: 'calc(100%)',
      },
    },
    photoWrapper: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      overflow: 'hidden',
      marginBottom: '15px',
      marginTop:'10px',
      marginLeft:'10px',
      flex: '0 0 150px', // Set flex-basis to control the width
    },
    photo: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      maxWidth: '100%', // Ensures the photo is responsive
    },
    details: {
      flexGrow: '1',
      fontFamily: 'Arial, sans-serif',
      marginLeft: '20px', // Adjusted margin for better alignment
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
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#025099',
      color: '#fff',
      cursor: 'pointer',
      textAlign: 'center',
      textDecoration: 'none',
      marginRight: '10px', // Added margin-right for spacing
    },
    bookNow: {
      padding: '5px 25px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#025099', // Changed background color to orange
      color: '#fff',
      cursor: 'pointer',
      textAlign: 'center',
      textDecoration: 'none',
    },
    tagline: {
      fontSize: '1.4rem',
      color: 'orange',
      marginBottom: '20px',
      marginTop: '20px',
      textAlign: 'center',
      marginTop: '150px',
    },
  };

  return (
    <div>
      <h1 style={styles.tagline}>Book appointments with minimum wait-time <br/> verified nurse details</h1>
      <div className="nurse-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '60px', }}>
        {nursesData.map((nurse, id) => (
          <div key={nurse.id} style={styles.card}>
            <div style={styles.photoWrapper}>
              <img src={nurse.image} alt="Nurse" style={styles.photo} />
            </div>
            <div style={styles.details}>
              <h2 style={styles.name}>{nurse.name}</h2>
              <p style={styles.speciality}>{nurse.speciality}</p>
              <p style={styles.experience}>{nurse.experience} years of experience</p>
              <div style={styles.ratings}>
                {renderStars(nurse.ratings, '20px')} {nurse.ratings} Reviews
              </div>
              <div style={styles.buttons}>
                <Link to={`/nurse_viewprofile/${nurse.id}`} style={styles.viewProfile}>View Profile</Link>
                <Link to="/booking" style={styles.bookNow}>Book Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nurse;
