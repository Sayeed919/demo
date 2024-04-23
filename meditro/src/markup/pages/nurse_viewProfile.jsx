import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import nurse1 from '../../images/nurse/nurse1.jpg'; // Import nurse image here
import nurse2 from '../../images/nurse/nurse2.jpg'; // Import nurse image here
import nurse3 from '../../images/nurse/nurse1.jpg'; // Import nurse image here

const ViewNurseProfile = () => {
  const nurses = [
    {
      id: "1",
      name: "Nurse Jane",
      speciality: "Emergency Medicine",
      experience: 7,
      ratings: 4,
      image: nurse1, // Assign nurse image here
      bio: "Nurse Jane is an experienced nurse specializing in emergency medicine. She has been serving patients for 7 years and has received positive ratings from her patients.",
      fees: "₹500",   
      thumb: " Thumb URL",
      address: "123 Street, City, Country",
      education: "Bachelor's Degree in Nursing",
      timings: "Mon - Fri: 9:00 AM - 5:00 PM",
      contact : "+1234567890",
      services: [
        "Emergency Care", "First Aid", "Patient Monitoring", "Medication Administration", "Wound Care", "Health Education"
      ],
      reviews: [
        { id: 1, user: "John Doe", comment: "Very skilled and caring nurse." },
        { id: 2, user: "Jane Smith", comment: "Highly recommended for emergency care." }
      ]
    },
    {
      id: "2",
      name: "Nurse John",
      speciality: "Pediatrics",
      experience: 5,
      ratings: 5,
      image: nurse2, // Assign nurse image here
      bio: "Nurse John is a dedicated pediatric nurse with 5 years of experience. He is known for his exceptional care and compassion towards children.",
      fees: "₹600",   
      thumb: " Thumb URL",
      address: "456 Street, City, Country",
      education: "Master's Degree in Pediatric Nursing",
      timings: "Mon - Fri: 9:00 AM - 5:00 PM",
      contact : "+1234567890",
      services: [
        "Routine Checkups", "Vaccinations", "Child Development Assessment", "Pediatric Emergency Care"
      ],
      reviews: [
        { id: 1, user: "Emily Brown", comment: "Amazing nurse for kids. Highly recommended." },
        { id: 2, user: "Michael Johnson", comment: "Very friendly and knowledgeable about pediatric care." }
      ]
    },
    {
      id: "3",
      name: "Nurse Sarah",
      speciality: "Critical Care",
      experience: 8,
      ratings: 4.5,
      image: nurse1, // Assign nurse image here
      bio: "Nurse Sarah is an experienced critical care nurse with 8 years of experience. She specializes in handling critical medical conditions with precision and care.",
      fees: "₹700",   
      thumb: " Thumb URL",
      address: "789 Street, City, Country",
      education: "Bachelor's Degree in Critical Care Nursing",
      timings: "Mon - Fri: 9:00 AM - 5:00 PM",
      contact : "+1234567890",
      services: [
        "ICU Care", "Ventilator Management", "Critical Medication Administration", "Emergency Interventions"
      ],
      reviews: [
        { id: 1, user: "David Wilson", comment: "Exceptional nurse for critical patients." },
        { id: 2, user: "Sophia Martinez", comment: "Very professional and attentive in critical care situations." }
      ]
    }
    // Add more nurse profiles as needed...
  ];

  const { id } = useParams();
  const nurse = nurses.find(nurse => nurse.id === id);
  const [showAllServices, setShowAllServices] = useState(false);
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState(nurse.reviews);

  const toggleShowAllServices = () => {
    setShowAllServices(!showAllServices);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.trim() !== '') {
      const newReviewObject = {
        id: reviews.length + 1,
        user: "Anonymous",
        comment: newReview
      };
      setReviews([...reviews, newReviewObject]);
      setNewReview('');
    }
  };

  const renderStars = (rating) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} style={{ color: 'green', fontSize: '24px', margin: '0', padding: '0' }}>{fullStar}</span>);
      } else {
        stars.push(<span key={i} style={{ color: 'lightgray', fontSize: '24px', margin: '0', padding: '0' }}>{emptyStar}</span>);
      }
    }

    return stars;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4">
              {nurse && (
                <img
                  src={nurse.image}
                  alt="Nurse"
                  className="rounded-circle img-fluid"
                  style={{
                    width: '230px',
                    height: '225px',
                    marginTop: '150px',
                    marginRight: '5px'
                  }}
                />
              )}
            </div>
            <div className="col-md-8" style={{ marginTop: '140px', padding: '0' }}>
              {nurse && (
                <>
                  <h2 style={{ margin: '0', marginBottom: '15px', marginLeft: '25px' }}>{nurse.name}</h2>
                  <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>{nurse.education}</p>
                  <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>{nurse.speciality}</p>
                  <p style={{ margin: '0', marginBottom: '10px', marginLeft: '35px' }}>{nurse.experience} Years Experience</p>
                  <p style={{ margin: '0', marginTop: 'auto', marginLeft: '35px', marginBottom: '15px' }}> {renderStars(nurse.ratings)}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="nurse-details">
              {nurse && (
                <>
                  <p style={{ marginTop: '40px' }}>
                    {nurse.bio}
                  </p>
                  
                  <div style={{ marginBottom: '20px' }}>
                     <h3 style={{ fontWeight: 'bold', fontSize: '20px', color: '#12214a', marginLeft: '2px', marginBottom: '20px', marginTop: '30px' }}>Services Offered:</h3>
                     <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {nurse && (showAllServices ? 
                        nurse.services.map((service, index) => (
                          <p key={index} style={{ margin: '0', paddingLeft: '0px' }}>{service}</p>
                        )) : 
                        nurse.services.slice(0, 5).map((service, index) => (
                          <p key={index} style={{ margin: '0', paddingLeft: '0px' }}>{service}</p>
                        ))
                      )}
                      {nurse && nurse.services.length > 5 && (
                        <button onClick={toggleShowAllServices} style={{ backgroundColor: 'transparent', border: 'none', color: 'blue', cursor: 'pointer', marginTop: '20px',marginRight: '600px' }}>
                          {showAllServices ? 'Show less' : 'Show more'}
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '20px', color: '#12214a', marginLeft: '2px', marginBottom: '20px', marginTop: '30px' }}>Comments:</h3>
                    <form onSubmit={handleSubmitReview}>
                      <input
                        type="text"
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        placeholder="Write a review..."
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                      />
                      <button type="submit" style={{ backgroundColor: 'blue', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Submit</button>
                    </form>
                    {reviews.map((review) => (
                      <div key={review.id} style={{ marginTop: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        <p style={{ margin: '0', fontWeight: 'bold' }}>{review.user}</p>
                        <p style={{ margin: '0' }}>{review.comment}</p>
                      </div>
                    ))}
                  </div>

                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4" style={{marginTop:'-20px'}}>
          <table className="table" style={{ marginBottom: '10px', marginTop: '150px' }}>
            <thead>
              <tr>
                <th scope="col" style={{ fontWeight: 'bold', color: '#12214a',fontSize: '20px' }}>Working Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{nurse && nurse.timings}</td>
              </tr>
            </tbody>
          </table>
          <table className="table" style={{ marginBottom: '50px' }}>
            <thead>
              <tr>
                <th scope="col" style={{ fontWeight: 'bold', fontSize: '20px', color: '#12214a', }}>Location</th>
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td>
                  {nurse && nurse.address}
                </td>
                
              </tr>
              <thead>
              <tr>
                <th scope="col" style={{ fontWeight: 'bold', fontSize: '20px', color: '#12214a', }}>Contact Number</th>
              </tr>
            </thead>
              <tr>
                <td>
                  {nurse && nurse.contact}
                </td>
              </tr>
              
            </tbody>
            
            
          </table>
         
          <Link to="/booking">
            <button 
              className="btn btn-secondary btn-lg" 
              style={{ 
                margineTop:'-200px',
                marginLeft: '30px', 
                marginRight:'40px',
                fontSize: '20px', // Increased font size
                backgroundColor: 'transparent', // Changed background color to transparent
                color: 'blue', // Changed text color to blue
                border: '2px solid blue', // Added border with blue color
                borderRadius: '20px', 
                padding: '10px 20px', // Increased padding for larger button
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s' // Added transition for smooth color change
              }}
            >
             Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewNurseProfile;
