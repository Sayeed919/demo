import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { faThumbsUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import dr1 from '../../images/doctor/dr1.jpeg';
import dr2 from '../../images/doctor/dr2.jpg';
import dr3 from '../../images/doctor/dr3.jpg';

const ViewProfile = () => {
  const doctors = [
    {
      id: "1",
      name: "Dr. Bhavesh C. Jain",
      speciality: "Family Physician & Homeopathic Consultant",
      experience:  "20",
      ratings: 5,
      image: dr1,
      bio: "Dr. Bhavesh C. Jain MD ( Homeopathy. Medicine), is a Consulting Homeopath in Pingle Vasti, Pune, India. He has more than 20 yrs of experience in treating various patients with acute and chronic diseases with homeopathy treatment. He completed her graduation from Maharashtra University of Health Sciences Nashik. He is very much popular among his patients for her kind gesture, sympathetic nature and proper listening , and caring for patients. He has conducted various free health checkup camps for poor and needy people in slum, School health checkup camps. Book an appointment online with Dr. Bhavesh C. Jain",
      fees: "₹700",   
      thumb: " Thumb URL",
      address: " Mantri Aangan Complex, Pingle vasti, Mundhawa Road, Pune - 411036.",
      education: "BHMS, MD-Homeopathy",
      timings: "Mon - Sat: 9:00 AM - 7:00 PM",
      contact : "9766645349",

      services: [
        "Vaccinations", " Hair Treatment","Digestive Disorders",
        "Cold","Allergy Treatment",
        "Hypothyroid Treatment",
        "Fever","Cough","Immunization",
       
      ],
      reviews: [
        { id: 1, user: "John Doe", comment: "Great experience with the doctor!" },
        { id: 2, user: "Jane Smith", comment: "Very knowledgeable and friendly." }
      ]
    },
    // Add dummy reviews for other doctors as needed...
  ];

  const { id } = useParams();
  const doctor = doctors.find(doctor => doctor.id === id);
  const [isThumbsUpSelected, setIsThumbsUpSelected] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState(doctor.reviews);

  const toggleThumbsUp = () => {
    setIsThumbsUpSelected(!isThumbsUpSelected);
  };
  
  const toggleShowAllServices = () => {
    setShowAllServices(!showAllServices);
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4">
              {doctor && (
                <img
                  src={doctor.image}
                  alt="Doctor"
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
              {doctor && (
                <>
                  <h2 style={{ margin: '0', marginBottom: '15px', marginLeft: '25px' }}>{doctor.name}</h2>
                  <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>{doctor.education}</p>
                  <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>{doctor.speciality}</p>
                  <p style={{ margin: '0', marginBottom: '10px', marginLeft: '35px' }}>{doctor.experience} Years Experience</p>
                  <div style={{ marginLeft: '35px', marginTop: '15px', marginBottom: '15px' }}>
                    <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '15px', fontSize: '18px', margin: '0', padding: '0', color: 'green' }} />
                    Medical Registration Verified
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="doctor-details">
              {doctor && (
                <>
                  <p style={{ marginTop: '40px' }}>
                    <span style={{ marginRight: '5px' }}>{doctor.bio.split(' ')[0]}</span>
                    {doctor.bio.split(' ').slice(1).join(' ')}
                  </p>
                  <p style={{ margin: '0', marginTop: 'auto', marginLeft: '2px', marginBottom: '15px' }}>
                    Ratings: {renderStars(doctor.ratings)}
                  </p>
                  <p style={{ margin: '0', marginBottom: '15px', marginLeft: '2px' }}>
                    <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '24px', margin: '0', padding: '0', color: 'green' }} /> <strong>80%</strong> (283 patients)
                  </p>
                  
                  <div style={{ marginBottom: '20px' }}>
                     <h3 style={{ fontWeight: 'bold', fontSize: '20px', color: '#12214a', marginLeft: '2px', marginBottom: '20px', marginTop: '30px' }}>Services Offered:</h3>
                     <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {doctor && (showAllServices ? 
                        doctor.services.map((service, index) => (
                          <p key={index} style={{ margin: '0', paddingLeft: '0px' }}>{service}</p>
                        )) : 
                        doctor.services.slice(0, 5).map((service, index) => (
                          <p key={index} style={{ margin: '0', paddingLeft: '0px' }}>{service}</p>
                        ))
                      )}
                      {doctor && doctor.services.length > 5 && (
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
                <th scope="col" style={{ fontWeight: 'bold', color: '#12214a',fontSize: '20px' }}>Clinic Timings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{doctor && doctor.timings}</td>
              </tr>
            </tbody>
          </table>
          <table className="table" style={{ marginBottom: '50px' }}>
            <thead>
              <tr>
                <th scope="col" style={{ fontWeight: 'bold', fontSize: '20px', color: '#12214a', }}>Clinic Address</th>
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td>
                  {doctor && (
                    <a href={`https://maps.google.com/?q=${doctor.address}`} target="_blank" rel="noopener noreferrer">
                     
                      {doctor.address}
                     
                      
                    </a>
                  )}
                </td>
                
              </tr>
              <thead>
              <tr>
                <th scope="col" style={{ fontWeight: 'bold', fontSize: '20px', color: '#12214a', }}>Contact Number</th>
              </tr>
            </thead>
              <tr>
                <td>
                  {doctor && (
                    <a href={`tel:${doctor.contact}`}>
                      {doctor.contact}
                    </a>
                  )}
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
             Book Video Consult
            </button>
          </Link>
          <Link to="/booking">
            <button 
              className="btn btn-secondary btn-lg" 
              style={{ 
                marginTop: '30px',
                marginLeft: '30px', 
                fontSize: '20px', // Increased font size
                backgroundColor: 'transparent', // Changed background color to transparent
                color: 'blue', // Changed text color to blue
                border: '2px solid blue', // Added border with blue color
                borderRadius: '20px', 
                padding: '10px 20px', // Increased padding for larger button
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 10s' // Added transition for smooth color change
              }}
            >
             Book Clinic Visit
            </button>
          </Link>
           

          


        </div>
      </div>
    </div>
  );
};

export default ViewProfile;






// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg';

// const ViewProfile = () => {
//   const doctors = [
//     {
//       id: "1",
//       name: "Dr. Bennett",
//       speciality: "Dermatologist",
//       experience: 5,
//       ratings: 4,
//       image: dr1,
//       bio: "Dr. Bennett a Dermatologist, Cosmetologist, Aesthetic Dermatologist, Pediatric Dermatologist and Hair Transplant Specialist. Best known for Advanced Acne Treatment, Laser Hair Removal, Skin Whitening, Anti-Aging Skin Rejuvination, Face Threadlift and Face Filler Enhancement. Dr. Bennett practices at Skinhance Clinic in Pimple Saudagar, Pune.",
//       fees: "₹700",   
//       thumb: "Thumb URL",
//       address: "Pimple Saudagar, Pune.",
//       education: "MD, Dermatology",
//       timings: "Mon - Sat: 9:00 AM - 7:00 PM"
//     },
//     {
//       id: "2",
//       name: "Dr. Davis Engel",
//       speciality: "Dentist",
//       experience: 19,
//       ratings: 5,
//       image: dr2,
//       bio: "   Dr. Davis Engel is a Periodontist, Dentist, and Cosmetic/Aesthetic Dentist in Kalyani Nagar, Pune and has an experience of 19 years in these fields. Dr. Davis Engel practices at Dr. Thareja's 32 Perfect Dental Care in Kalyani Nagar, Pune and Dr. Thareja's 32 Perfect Dental Care in Nigdi, Pune. She completed BDS from Bharti Vidyapeeth's Dental College and Hospital in 2005 and MDS - Periodontics from Dr. D.Y. Patil Dental College Hospital, Pune in 2010. ",
//       fees: "₹410",
//       thumb: "Thumb URL",
//       address: "Kalyani Nagar, Pune.",
//       education: "BDS, MDS - Periodontics",
//       timings: "Mon - Sat: 10:00 AM - 8:00 PM"
//     },
//     {
//       id: "3",
//       name: "Dr. Mark",
//       speciality: "Pediatrics",
//       experience: 8, 
//       ratings: 3,
//       image: dr3,
//       bio: "Dr. Mark is a pediatrician in Hadapsar, Pune and has an experience of 11 years in these fields. Dr. Mark practices at Rainbow Children's Clinic And Vaccination Center in Hadapsar, Pune. She completed MBBS from Grant Medical College, JJ Group Of Hospitals Mumbai in 2004 and DNB (Pediatrics) from the national board of examinations, New Delhi in 2012. She is a member of Medical Council Of India (MCI).",
//       fees: "₹600",
//       thumb: "Thumb URL",
//       address: "C Wing,C/O PAARASMANI HOSPITAL Palacino Apartments,Near Mahesh Bank,Behind Vaibhav Theater,Pune.",
//       education: "MBBS, DNB - Paediatrics",
//       timings: "Mon - Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 12:00 PM"
//     }
//   ];

//   const { id } = useParams();
//   const doctor = doctors.find(doctor => doctor.id === id);
//   const [isThumbsUpSelected, setIsThumbsUpSelected] = useState(false);

//   const toggleThumbsUp = () => {
//     setIsThumbsUpSelected(!isThumbsUpSelected);
//   };

//   const renderStars = (rating) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];

//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'green', fontSize: '24px', margin: '0', padding: '0' }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: '24px', margin: '0', padding: '0' }}>{emptyStar}</span>);
//       }
//     }

//     return stars;
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="row">
//             <div className="col-md-4">
//               {doctor && (
//                 <img
//                   src={doctor.image}
//                   alt="Doctor"
//                   className="rounded-circle img-fluid"
//                   style={{
//                     width: '232px',
//                     height: '225px',
//                     marginTop: '150px',
//                     marginRight: '5px'
//                   }}
//                 />
//               )}
//               {/* Your doctor's profile image */}
//             </div>
//             <div className="col-md-8" style={{ marginTop: '140px', padding: '0' }}>
//               {doctor && (
//                 <>
//                   <h2 style={{ margin: '0', marginBottom: '15px', marginLeft: '25px' }}>{doctor.name}</h2>
//                   <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>{doctor.education}</p>
//                   <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>{doctor.speciality}</p>
//                   <p style={{ margin: '0', marginBottom: '10px', marginLeft: '35px' }}>{doctor.experience} Years Experience</p>
//                   <p style={{ margin: '0', marginBottom: '35px', marginLeft: '35px' }}>Ratings: {renderStars(doctor.ratings)}</p>
//                   <p style={{ margin: '0', marginBottom: '15px', marginLeft: '35px' }}>
//                     <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '15px', fontSize: '18px', margin: '0', padding: '0', color: 'green' }} />
//                     Medical Registration Verified
//                   </p>
//                   <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>
//                     <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '24px', margin: '0', padding: '0', color: 'green' }} /> <strong>80%</strong> (283 patients)
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="doctor-details">
//               {doctor && (
//                 <>
//                   <p style={{ marginTop: '80px' }}>
//                     <span style={{ marginRight: '5px' }}>{doctor.bio.split(' ')[0]}</span>
//                     {doctor.bio.split(' ').slice(1).join(' ')}
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//         {/* Table Section */}
//         <div className="col-md-4">
//           <table className="table" style={{ marginBottom: '10px', marginTop: '150px' }}>
//             <thead>
//               <tr>
//                 <th scope="col" style={{ fontWeight: 'bold', color: 'blue',fontSize: '20px'  }}>Clinic Timings</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{doctor && doctor.timings}</td>
//               </tr>
//             </tbody>
//           </table>
//           <table className="table" style={{ marginBottom: '50px' }}>
//             <thead>
//               <tr>
//                 <th scope="col" style={{ fontWeight: 'bold', color: 'blue',fontSize: '20px'  }}>Clinic Address</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{doctor && doctor.address}</td>
//               </tr>
//             </tbody>
//           </table>
//           <Link to="/appointment-form">
//           <button 
//   className="btn btn-secondary btn-lg" 
//   style={{ 
//     marginLeft: '35px', 
//     fontSize: '24px', // Increased font size
//     backgroundColor: '#f74711', 
//     color: '#fff', 
//     border: 'none', 
//     borderRadius: '10px', 
//     padding: '14px 28px', // Increased padding for larger button
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//     cursor: 'pointer'
//   }}
// >
//   Book Appointment
// </button>
// </Link>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;



// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg';

// const ViewProfile = () => {
//   const doctors = [
//     {
//       id: "1",
//       name: "Dr. Bennett",
//       speciality: "Dermatologist",
//       experience: 5,
//       ratings: 4,
//       image: dr1,
//       bio: "Dr. Bennett a Dermatologist, Cosmetologist, Aesthetic Dermatologist, Pediatric Dermatologist and Hair Transplant Specialist. Best known for Advanced Acne Treatment, Laser Hair Removal, Skin Whitening, Anti-Aging Skin Rejuvination, Face Threadlift and Face Filler Enhancement. Dr. Bennett practices at Skinhance Clinic in Pimple Saudagar, Pune.",
//       fees: "₹700",   
//       thumb: "Thumb URL",
//       address: "Pimple Saudagar, Pune.",
//       education: "MD, Dermatology",
//     },
//     {
//       id: "2",
//       name: "Dr. Davis Engel",
//       speciality: "Dentist",
//       experience: 19,
//       ratings: 5,
//       image: dr2,
//       bio: "   Dr. Davis Engel is a Periodontist, Dentist, and Cosmetic/Aesthetic Dentist in Kalyani Nagar, Pune and has an experience of 19 years in these fields. Dr. Davis Engel practices at Dr. Thareja's 32 Perfect Dental Care in Kalyani Nagar, Pune and Dr. Thareja's 32 Perfect Dental Care in Nigdi, Pune. She completed BDS from Bharti Vidyapeeth's Dental College and Hospital in 2005 and MDS - Periodontics from Dr. D.Y. Patil Dental College Hospital, Pune in 2010. ",
//       fees: "₹410",
//       thumb: "Thumb URL",
//       address: "Kalyani Nagar, Pune.",
//       education: "BDS, MDS - Periodontics",
//     },
//     {
//       id: "3",
//       name: "Dr. Mark",
//       speciality: "Pediatrics",
//       experience: 8, 
//       ratings: 3,
//       image: dr3,
//       bio: "Dr. Mark is a pediatrician in Hadapsar, Pune and has an experience of 11 years in these fields. Dr. Mark practices at Rainbow Children's Clinic And Vaccination Center in Hadapsar, Pune. She completed MBBS from Grant Medical College, JJ Group Of Hospitals Mumbai in 2004 and DNB (Pediatrics) from the national board of examinations, New Delhi in 2012. She is a member of Medical Council Of India (MCI).",
//       fees: "₹600",
//       thumb: "Thumb URL",
//       address: "C Wing,C/O PAARASMANI HOSPITAL Palacino Apartments,Near Mahesh Bank,Behind Vaibhav Theater,Pune.",
//       education: "MBBS, DNB - Paediatrics",
//     }
//   ];

//   const { id } = useParams();
//   const doctor = doctors.find(doctor => doctor.id === id);
//   const [isThumbsUpSelected, setIsThumbsUpSelected] = useState(false);

//   const toggleThumbsUp = () => {
//     setIsThumbsUpSelected(!isThumbsUpSelected);
//   };

//   const renderStars = (rating) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];

//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'green', fontSize: '24px', margin: '0', padding: '0' }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: '24px', margin: '0', padding: '0' }}>{emptyStar}</span>);
//       }
//     }

//     return stars;
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="row">
//             <div className="col-md-4">
//               {doctor && (
//                 <img
//                   src={doctor.image}
//                   alt="Doctor"
//                   className="rounded-circle img-fluid"
//                   style={{
//                     width: '232px',
//                     height: '225px',
//                     marginTop: '150px',
//                     marginRight: '5px'
//                   }}
//                 />
//               )}
//               {/* Your doctor's profile image */}
//             </div>
//             <div className="col-md-8" style={{ marginTop: '140px', padding: '0' }}>
//               {doctor && (
//                 <>
//                   <h2 style={{ margin: '0', marginBottom: '15px', marginLeft: '25px' }}>{doctor.name}</h2>
//                   <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>{doctor.education}</p>
//                   <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>{doctor.speciality}</p>
//                   <p style={{ margin: '0', marginBottom: '10px', marginLeft: '35px' }}>{doctor.experience} Years Experience</p>
//                   <p style={{ margin: '0', marginBottom: '35px', marginLeft: '35px' }}>Ratings: {renderStars(doctor.ratings)}</p>
//                   <p style={{ margin: '0', marginBottom: '15px', marginLeft: '35px' }}>
//                     <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '15px', fontSize: '18px', margin: '0', padding: '0', color: 'green' }} />
//                     Medical Registration Verified
//                   </p>
//                   <p style={{ margin: '0', marginBottom: '5px', marginLeft: '35px' }}>
//                     <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '24px', margin: '0', padding: '0', color: 'green' }} /> <strong>80%</strong> (283 patients)
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="doctor-details">
//               {doctor && (
//                 <>
//                   <p style={{ marginTop: '80px' }}>
//                     <span style={{ marginRight: '5px' }}>{doctor.bio.split(' ')[0]}</span>
//                     {doctor.bio.split(' ').slice(1).join(' ')}
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;






// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg';

// const daysInMonth = (month, year) => {
//   return new Array(new Date(year, month, 0).getDate()).fill(0).map((_, idx) => idx + 1);
// };

// const timeSlots = [
//   { time: '9:00 AM', appointments: [] },
//   { time: '10:00 AM', appointments: [] },
//   { time: '11:00 AM', appointments: [] },
//   { time: '12:00 PM', appointments: [] },
//   { time: '1:00 PM', appointments: [] },
//   { time: '2:00 PM', appointments: [] },
//   { time: '3:00 PM', appointments: [] },
//   { time: '4:00 PM', appointments: [] },
//   { time: '5:00 PM', appointments: [] },
// ];

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const formattedDate = (date, monthIndex) => {
//   return `${date} ${months[monthIndex - 1]}`;
// };

// const AppointmentScheduler = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setSelectedTime('');
//   };

//   const handleTimeChange = (time) => {
//     setSelectedTime(time);
//   };

//   const slotsPerRow = Math.ceil(timeSlots.length / 4);

//   const handleBookAppointment = () => {
//     console.log('Redirect to booking page:', selectedDate, selectedTime);
//   };

  // const currentDate = new Date();
  // const currentMonth = currentDate.getMonth() + 1;
  // const currentYear = currentDate.getFullYear();
  // const dates = daysInMonth(currentMonth, currentYear);

  // return (
  //   <div>
  //     <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {/* {dates.map((date) => (
          <button
            key={date}
            onClick={() => handleDateChange(date)}
            style={{
              marginRight: '10px',
              backgroundColor: selectedDate === date ? '#3D3AFF' : 'white',
              color: selectedDate === date ? 'white' : 'blue',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              padding: '5px',
              width: '70px'
            }}
          >
            {formattedDate(date, currentMonth)}
          </button> */}
        {/* ))}
      </div>
      <div> */}
        {/* {selectedDate && (
          <>
            <h3 style={{ fontSize: '20px', color: '#025099', marginTop: '20px' }}>Select a time for {formattedDate(selectedDate, currentMonth)}:</h3>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {timeSlots.map((slot, index) => (
                <button
                  key={slot.time}
                  disabled={!selectedDate}
                  onClick={() => handleTimeChange(slot.time)}
                  style={{
                    margin: '5px',
                    width: 'calc(100% / ' + slotsPerRow + ' - 10px)',
                    backgroundColor: selectedTime === slot.time ? '#3D3AFF' : 'white',
                    color: selectedTime === slot.time ? 'white' : 'blue',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
        {selectedTime && (
          <Link to="/Booking" style={{ textDecoration: 'none' }}>
            <button
              onClick={handleBookAppointment}
              style={{
                backgroundColor: '#ff8d03',
                color: 'white',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Book Appointment
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}; */}

// const ViewProfile = () => {
//   const doctors = [
//     {
//       id: "1",
//       name: "Dr. Bennett",
//       speciality: "Dermatologist",
//       experience: 5,
//       ratings: 4,
//       image: dr1,
//       bio: "Dr. Bennett a Dermatologist, Cosmetologist, Aesthetic Dermatologist, Pediatric Dermatologist and Hair Transplant Specialist. Best known for Advanced Acne Treatment, Laser Hair Removal, Skin Whitening, Anti-Aging Skin Rejuvination, Face Threadlift and Face Filler Enhancement. Dr. Bennett practices at Skinhance Clinic in Pimple Saudagar, Pune.",
//       fees: "₹700",
//       thumb: "Thumb URL",
//       address: "Pimple Saudagar, Pune.",
//       education: "MD, Dermatology",
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "07:00 PM - 09:00 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "11:00 AM - 02:00 PM" }
//       ]
//     },
//     {
//       id: "2",
//       name: "Dr. Davis Engel",
//       speciality: "Dentist",
//       experience: 19,
//       ratings: 5,
//       image: dr2,
//       bio: "   Dr. Davis Engel is a Periodontist, Dentist, and Cosmetic/Aesthetic Dentist in Kalyani Nagar, Pune and has an experience of 19 years in these fields. Dr. Davis Engel practices at Dr. Thareja's 32 Perfect Dental Care in Kalyani Nagar, Pune and Dr. Thareja's 32 Perfect Dental Care in Nigdi, Pune. She completed BDS from Bharti Vidyapeeth's Dental College and Hospital in 2005 and MDS - Periodontics from Dr. D.Y. Patil Dental College Hospital, Pune in 2010. ",
//       fees: "₹410",
//       thumb: "Thumb URL",
//       address: "Kalyani Nagar, Pune.",
//       education: "BDS, MDS - Periodontics",
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "05:00 PM - 08:00 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "11:00 AM - 02:00 PM" }
//       ]
//     },
//     {
//       id: "3",
//       name: "Dr. Mark",
//       speciality: "Pediatrics",
//       experience: 8, 
//       ratings: 3,
//       image: dr3,
//       bio: "Dr. Mark is a pediatrician in Hadapsar, Pune and has an experience of 11 years in these fields. Dr. Mark practices at Rainbow Children's Clinic And Vaccination Center in Hadapsar, Pune. She completed MBBS from Grant Medical College, JJ Group Of Hospitals Mumbai in 2004 and DNB (Pediatrics) from the national board of examinations, New Delhi in 2012. She is a member of Medical Council Of India (MCI).",
//       fees: "₹600",
//       thumb: "Thumb URL",
//       address: "C Wing,C/O PAARASMANI HOSPITAL Palacino Apartments,Near Mahesh Bank,Behind Vaibhav Theater,Pune.",
//       education: "MBBS, DNB - Paediatrics",
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "09:00 AM - 01:45 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "02:00 PM - 09:00 PM" }
//       ]
//     }
//   ];

//   const { id } = useParams();
//   const doctor = doctors.find(doctor => doctor.id === id);
//   const [isThumbsUpSelected, setIsThumbsUpSelected] = useState(false);
//   // const [selectedDay, setSelectedDay] = useState('today');
//   // const [showTimes, setShowTimes] = useState({
//   //   today: false,
//   //   tomorrow: false,
//   //   wednesday: false
//   // });

//   const toggleThumbsUp = () => {
//     setIsThumbsUpSelected(!isThumbsUpSelected);
//   };

//   const renderStars = (rating) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];

//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'green', fontSize: '24px', margin: '0', padding: '0' }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: '24px', margin: '0', padding: '0' }}>{emptyStar}</span>);
//       }
//     }

//     return stars;
//   };

//   // const handleDaySelection = (day) => {
//   //   setSelectedDay(day);
//   //   setShowTimes(prevState => ({
//   //     ...prevState,
//   //     [day]: true
//   //   }));
//   // };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="row">
//             <div className="col-md-4">
//             {doctor && (
//                 <img
//                   src={doctor.image}
//                   alt="Doctor"
//                   className="rounded-circle img-fluid"
//                   style={{
//                     width: '232px',
//                     height: '225px',
//                     marginTop: '150px',
//                     marginRight: '5px'
//                   }}
//                 />
//               )}
            
//               {/* Your doctor's profile image */}
//             </div>
//             <div className="col-md-8" style={{ marginTop: '140px', padding: '0' }}>
//             {doctor && (
//                 <>
//                   <h2 style={{ margin: '0', marginBottom: '15px' ,marginLeft:'25px'}}>{doctor.name}</h2>
//                   <p style={{ margin: '0', marginBottom: '5px',marginLeft:'35px' }}>{doctor.education}</p>
//                   <p style={{ margin: '0', marginBottom: '5px' ,marginLeft:'35px' }}>{doctor.speciality}</p>
//                   <p style={{ margin: '0', marginBottom: '10px',marginLeft:'35px'  }}>{doctor.experience} Years Experience</p>
                  
//                   <p style={{ margin: '0', marginBottom: '15px',marginLeft:'35px'  }}>
//                       <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '15px', fontSize: '18px', margin: '0', padding: '0', color: 'green' }} />
//                       Medical Registration Verified
//                   </p>
//                   <p style={{ margin: '0', marginBottom: '5px',marginLeft:'35px'  }}>
//                     <FontAwesomeIcon icon={faThumbsUp} style={{fontSize: '24px', margin: '0', padding: '0', color: 'green' }} /> <strong>80%</strong> (283 patients)
//                   </p>
                
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="doctor-details">
//               {doctor && (
//                 <>
//                   <p style={{ marginTop: '80px' }}>
//                     <span style={{ marginRight: '5px' }}>{doctor.bio.split(' ')[0]}</span>
//                     {doctor.bio.split(' ').slice(1).join(' ')}
//                   </p>
//                   <p style={{ margin: '0', marginBottom: '35px' }}>Ratings: {renderStars(doctor.ratings)}</p>

//                   <p style={{ margin: '0', marginBottom: '25px', fontWeight: 'bold' }}>Address: <span style={{ fontWeight: 'normal' }}>{doctor.address}</span></p>
//                   <p style={{ margin: '0', marginBottom: '55px',fontWeight: 'bold' }}>Fees: <span style={{ fontWeight: 'normal' }}>{doctor.fees}</span></p>
//                   <p style={{ margin: '0', marginBottom: '15px', fontWeight: 'bold' }}>Clinic Timings: </p>
//                   {doctor.clinicTimings.map((timing, index) => (
//                     <p key={index}>
//                       {timing.days.join(", ")}: {timing.timing}
//                     </p>
//                   ))}
//                 </>
//               )}
//             </div>
//             </div>
//         </div>
//         <div className="col-md-4">
//           {/* Clinic Appointment Card
//           <div style={{ padding: '20px', flex: 1, marginTop: '130px', width: '100%', background: '#f4f4f4', height: '70%' }}>
//             <div style={{ padding: '10px', width: '100%' }}>
//               <h3 style={{ fontSize: '25px', color: '#025099' }}>Appointment Booking</h3>
//             </div>
//             <div style={{ padding: '20px' }}>
//               {/* Render the AppointmentScheduler component */}
             
//           </div>
//         </div>
//     /   </div>
//     // </div>
            
//   );
// };

// export default ViewProfile;






// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg';

// const ViewProfile = () => {
//   const doctors = [
//     { 
//       id: "1", 
//       name: "Dr. Bennett", 
//       speciality: "Dermatologist", 
//       experience: 5, 
//       ratings: 4, 
//       image: dr1, 
//       bio: "Dr. Bennett a Dermatologist, Cosmetologist, Aesthetic Dermatologist, Pediatric Dermatologist and Hair Transplant Specialist. Best known for Advanced Acne Treatment, Laser Hair Removal, Skin Whitening, Anti-Aging Skin Rejuvination, Face Threadlift and Face Filler Enhancement. Dr. Bennett practices at Skinhance Clinic in Pimple Saudagar, Pune.", 
//       fees: "₹700", 
//       thumb: "Thumb URL", 
//       address: "Pimple Saudagar, Pune.", 
//       education: "MD, Dermatology" ,
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "07:00 PM - 09:00 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "11:00 AM - 02:00 PM" }
//       ]
//     },
//     { 
//       id: "2", 
//       name: "Dr. Davis Engel", 
//       speciality: "Dentist", 
//       experience: 3, 
//       ratings: 3, 
//       image: dr2, 
//       bio: "   Dr. Davis Engel is a Periodontist, Dentist, and Cosmetic/Aesthetic Dentist in Kalyani Nagar, Pune and has an experience of 19 years in these fields. Dr. Davis Engel practices at Dr. Thareja's 32 Perfect Dental Care in Kalyani Nagar, Pune and Dr. Thareja's 32 Perfect Dental Care in Nigdi, Pune. She completed BDS from Bharti Vidyapeeth's Dental College and Hospital in 2005 and MDS - Periodontics from Dr. D.Y. Patil Dental College Hospital, Pune in 2010. ", 
//       fees: "₹410", 
//       thumb: "Thumb URL", 
//       address: "Kalyani Nagar, Pune.", 
//       education: "BDS, MDS - Periodontics" ,
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "05:00 PM - 08:00 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "11:00 AM - 02:00 PM" }
//       ]
//     },
//     { 
//       id: "3", 
//       name: "Dr. Mark", 
//       speciality: "Pediatrics", 
//       experience: 8, 
//       ratings: 5, 
//       image: dr3, 
//       bio: "Dr. Mark is a pediatrician in Hadapsar, Pune and has an experience of 11 years in these fields. Dr. Mark practices at Rainbow Children's Clinic And Vaccination Center in Hadapsar, Pune. She completed MBBS from Grant Medical College, JJ Group Of Hospitals Mumbai in 2004 and DNB (Pediatrics) from the national board of examinations, New Delhi in 2012. She is a member of Medical Council Of India (MCI).", 
//       fees: "₹600", 
//       thumb: "Thumb URL", 
//       address: "C Wing,C/O PAARASMANI HOSPITAL Palacino Apartments,Near Mahesh Bank,Behind Vaibhav Theater,Pune.", 
//       education: "MBBS, DNB - Paediatrics" ,
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "09:00 AM - 01:45 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "02:00 PM - 09:00 PM" }
//       ]
//     }
//   ];

//   const { id } = useParams();
//   const doctor = doctors.find(doctor => doctor.id === id);
//   const [isThumbsUpSelected, setIsThumbsUpSelected] = useState(false);
//   const [selectedDay, setSelectedDay] = useState('today'); // State to manage which day is selected
//   const [showTimes, setShowTimes] = useState({
//     today: false,
//     tomorrow: false,
//     wednesday: false
//   }); // State to control the visibility of time slots

//   const toggleThumbsUp = () => {
//     setIsThumbsUpSelected(!isThumbsUpSelected);
//   };

//   const renderStars = (rating) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];
  
//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'green', fontSize: '24px', margin: '0', padding: '0' }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: '24px', margin: '0', padding: '0' }}>{emptyStar}</span>);
//       }
//     }
  
//     return stars;
//   };

//   const handleDaySelection = (day) => {
//     setSelectedDay(day);
//     // Show times for the selected day
//     setShowTimes(prevState => ({
//       ...prevState,
//       [day]: true
//     }));
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="row">
//             <div className="col-md-4">
//               {doctor && (
//                 <img
//                   src={doctor.image}
//                   alt="Doctor"
//                   className="rounded-circle img-fluid"
//                   style={{
//                     width: '232px',
//                     height: '225px',
//                     marginTop: '150px',
//                     marginRight: '5px'
//                   }}
//                 />
//               )}
//             </div>
//             <div className="col-md-8" style={{ marginTop: '140px', padding: '0' }}>
//               {doctor && (
//                 <>
//                   <h2 style={{ margin: '0', marginBottom: '15px' }}>{doctor.name}</h2>
//                   <p style={{ margin: '0', marginBottom: '5px' }}>{doctor.education}</p>
//                   <p style={{ margin: '0', marginBottom: '5px' }}>{doctor.speciality}</p>
//                   <p style={{ margin: '0', marginBottom: '10px' }}>{doctor.experience} Years Experience</p>
                  
//                   <p style={{ margin: '0', marginBottom: '15px' }}>
//                       <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '15px', fontSize: '18px', margin: '0', padding: '0', color: 'green' }} />
//                       Medical Registration Verified
//                   </p>
//                   <p style={{ margin: '0', marginBottom: '5px' }}>
//                     <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '24px', margin: '0', padding: '0', color: 'green' }} /> <strong>80%</strong> (283 patients)
//                   </p>
                
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="doctor-details">
//             {doctor && (
//               <>
//                 <p style={{ marginTop: '80px' }}>
//                   <span style={{ marginRight: '5px' }}>{doctor.bio.split(' ')[0]}</span>
//                   {doctor.bio.split(' ').slice(1).join(' ')}
//                 </p>
//                 <p style={{ margin: '0', marginBottom: '35px' }}>Ratings: {renderStars(doctor.ratings)}</p>

//                 <p style={{ margin: '0', marginBottom: '25px', fontWeight: 'bold' }}>Address: <span style={{ fontWeight: 'normal' }}>{doctor.address}</span></p>
//                 <p style={{ margin: '0', marginBottom: '55px',fontWeight: 'bold' }}>Fees: <span style={{ fontWeight: 'normal' }}>{doctor.fees}</span></p>
//                 <p style={{ margin: '0', marginBottom: '15px', fontWeight: 'bold' }}>Clinic Timings: </p>
//                 {doctor.clinicTimings.map((timing, index) => (
//                   <p key={index}>
//                     {timing.days.join(", ")}: {timing.timing}
//                   </p>
//                 ))}
//               </>
//             )}
//           </div>
//         </div>
//         <div className="col-md-4">
//           {/* Clinic Appointment Card */}
//           <div style={{ padding: '20px', flex: 1, marginTop: '130px', width: '100%',background: '#f4f4f4',height:'70%' }}>
//             <div style={{ padding: '10px', width: '100%' }}>
//               <h3>Clinic Appointment</h3>
//             </div>
//             <div style={{ padding: '20px' }}>
//             </div>

//             <div style={{ padding: '20px', overflowX: 'auto' }}> {/* Wrap the slots in a container with overflow-x: auto */}
//               <div style={{ whiteSpace: 'nowrap', display: 'flex', flexDirection: 'row' }}>
//                 <div style={{ flex: '0 0 auto', marginRight: '20px' }}>
//                   <h5 onClick={() => handleDaySelection('today')} style={{cursor: 'pointer'}}>Today</h5>
//                   {showTimes.today && (
//                     <div>
//                       {/* Render time slots for today */}
//                       {[...Array(10).keys()].map((index) => (
//                         <button 
//                           key={index} 
//                           style={{ padding: '5px 10px', backgroundColor: '#3D3AFF', color: 'white', border: 'none', marginRight: '10px', marginBottom: '5px' }}
//                         >
//                           {`${index + 9}:00 AM`}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <div style={{ marginRight: '20px' }}>
//                   <h5 onClick={() => handleDaySelection('tomorrow')} style={{cursor: 'pointer'}}>Tomorrow</h5>
//                   {showTimes.tomorrow && (
//                     <div>
//                       {/* Render time slots for tomorrow */}
//                       {[...Array(10).keys()].map((index) => (
//                         <button 
//                           key={index} 
//                           style={{ padding: '5px 10px', backgroundColor: '#3D3AFF', color: 'white', border: 'none', marginRight: '10px', marginBottom: '5px' }}
//                         >
//                           {`${index + 9}:00 AM`}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <div style={{ marginRight: '20px' }}>
//                   <h5 onClick={() => handleDaySelection('wednesday')} style={{cursor: 'pointer'}}>Wed, 3 Apr</h5>
//                   {showTimes.wednesday && (
//                     <div>
//                       {/* Render time slots for Wednesday */}
//                       {[...Array(10).keys()].map((index) => (
//                         <button 
//                           key={index} 
//                           style={{ padding: '5px 10px', backgroundColor: '#3D3AFF', color: 'white', border: 'none', marginRight: '10px', marginBottom: '5px' }}
//                         >
//                           {`${index + 9}:00 AM`}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 {/* Render the rest of the slots here */}
//               </div>
//             </div>
//           </div> 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;













































// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg';

// const ViewProfile = () => {
//   const doctors = [
//     { 
//       id: "1", 
//       name: "Dr. Bennett", 
//       speciality: "Dermatologist", 
//       experience: 5, 
//       ratings: 4, 
//       image: dr1, 
//       bio: "Dr. Bennett a Dermatologist, Cosmetologist, Aesthetic Dermatologist, Pediatric Dermatologist and Hair Transplant Specialist. Best known for Advanced Acne Treatment, Laser Hair Removal, Skin Whitening, Anti-Aging Skin Rejuvination, Face Threadlift and Face Filler Enhancement. Dr. Bennett practices at Skinhance Clinic in Pimple Saudagar, Pune.", 
//       fees: "₹700", 
//       thumb: "Thumb URL", 
//       address: "Pimple Saudagar, Pune.", 
//       education: "MD, Dermatology" ,
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "07:00 PM - 09:00 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "11:00 AM - 02:00 PM" }
//       ]
//     },
//     { 
//       id: "2", 
//       name: "Dr. Davis Engel", 
//       speciality: "Dentist", 
//       experience: 3, 
//       ratings: 3, 
//       image: dr2, 
//       bio: "   Dr. Davis Engel is a Periodontist, Dentist, and Cosmetic/Aesthetic Dentist in Kalyani Nagar, Pune and has an experience of 19 years in these fields. Dr. Davis Engel practices at Dr. Thareja's 32 Perfect Dental Care in Kalyani Nagar, Pune and Dr. Thareja's 32 Perfect Dental Care in Nigdi, Pune. She completed BDS from Bharti Vidyapeeth's Dental College and Hospital in 2005 and MDS - Periodontics from Dr. D.Y. Patil Dental College Hospital, Pune in 2010. ", 
//       fees: "₹410", 
//       thumb: "Thumb URL", 
//       address: "Kalyani Nagar, Pune.", 
//       education: "BDS, MDS - Periodontics" ,
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "05:00 PM - 08:00 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "11:00 AM - 02:00 PM" }
//       ]
//     },
//     { 
//       id: "3", 
//       name: "Dr. Mark", 
//       speciality: "Pediatrics", 
//       experience: 8, 
//       ratings: 5, 
//       image: dr3, 
//       bio: "Dr. Mark is a pediatrician in Hadapsar, Pune and has an experience of 11 years in these fields. Dr. Mark practices at Rainbow Children's Clinic And Vaccination Center in Hadapsar, Pune. She completed MBBS from Grant Medical College, JJ Group Of Hospitals Mumbai in 2004 and DNB (Pediatrics) from the national board of examinations, New Delhi in 2012. She is a member of Medical Council Of India (MCI).", 
//       fees: "₹600", 
//       thumb: "Thumb URL", 
//       address: "C Wing,C/O PAARASMANI HOSPITAL Palacino Apartments,Near Mahesh Bank,Behind Vaibhav Theater,Pune.", 
//       education: "MBBS, DNB - Paediatrics" ,
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "09:00 AM - 01:45 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "02:00 PM - 09:00 PM" }
//       ]
//     }
//   ];

//   const { id } = useParams();
//   const doctor = doctors.find(doctor => doctor.id === id);
//   const [isThumbsUpSelected, setIsThumbsUpSelected] = useState(false);
//   const [selectedDay, setSelectedDay] = useState('today'); // State to manage which day is selected
//   const [showTimes, setShowTimes] = useState({
//     today: false,
//     tomorrow: false,
//     wednesday: false
//   }); // State to control the visibility of time slots

//   const toggleThumbsUp = () => {
//     setIsThumbsUpSelected(!isThumbsUpSelected);
//   };

//   const renderStars = (rating) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];
  
//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'green', fontSize: '24px', margin: '0', padding: '0' }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: '24px', margin: '0', padding: '0' }}>{emptyStar}</span>);
//       }
//     }
  
//     return stars;
//   };

//   const handleDaySelection = (day) => {
//     setSelectedDay(day);
//     // Show times for the selected day
//     setShowTimes(prevState => ({
//       ...prevState,
//       [day]: true
//     }));
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="row">
//             <div className="col-md-4">
//               {doctor && (
//                 <img
//                   src={doctor.image}
//                   alt="Doctor"
//                   className="rounded-circle img-fluid"
//                   style={{
//                     width: '232px',
//                     height: '225px',
//                     marginTop: '150px',
//                     marginRight: '5px'
//                   }}
//                 />
//               )}
//             </div>
//             <div className="col-md-8" style={{ marginTop: '140px', padding: '0' }}>
//               {doctor && (
//                 <>
//                   <h2 style={{ margin: '0', marginBottom: '15px' }}>{doctor.name}</h2>
//                   <p style={{ margin: '0', marginBottom: '5px' }}>{doctor.education}</p>
//                   <p style={{ margin: '0', marginBottom: '5px' }}>{doctor.speciality}</p>
//                   <p style={{ margin: '0', marginBottom: '10px' }}>{doctor.experience} Years Experience</p>
                  
//                   <p style={{ margin: '0', marginBottom: '15px' }}>
//                       <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '15px', fontSize: '18px', margin: '0', padding: '0', color: 'green' }} />
//                       Medical Registration Verified
//                   </p>
//                   <p style={{ margin: '0', marginBottom: '5px' }}>
//                     <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '24px', margin: '0', padding: '0', color: 'green' }} /> <strong>80%</strong> (283 patients)
//                   </p>
                
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="doctor-details">
//             {doctor && (
//               <>
//                 <p style={{ marginTop: '80px' }}>
//                   <span style={{ marginRight: '5px' }}>{doctor.bio.split(' ')[0]}</span>
//                   {doctor.bio.split(' ').slice(1).join(' ')}
//                 </p>
//                 <p style={{ margin: '0', marginBottom: '35px' }}>Ratings: {renderStars(doctor.ratings)}</p>

//                 <p style={{ margin: '0', marginBottom: '25px', fontWeight: 'bold' }}>Address: <span style={{ fontWeight: 'normal' }}>{doctor.address}</span></p>
//                 <p style={{ margin: '0', marginBottom: '55px',fontWeight: 'bold' }}>Fees: <span style={{ fontWeight: 'normal' }}>{doctor.fees}</span></p>
//                 <p style={{ margin: '0', marginBottom: '15px', fontWeight: 'bold' }}>Clinic Timings: </p>
//                 {doctor.clinicTimings.map((timing, index) => (
//                   <p key={index}>
//                     {timing.days.join(", ")}: {timing.timing}
//                   </p>
//                 ))}
//               </>
//             )}
//           </div>
//         </div>
//         <div className="col-md-4">
//           {/* Clinic Appointment Card */}
//           <div style={{ padding: '20px', flex: 1, marginTop: '130px', width: '100%',background: '#f4f4f4',height:'70%' }}>
//             <div style={{ padding: '10px', width: '100%' }}>
//               <h3>Clinic Appointment</h3>
//             </div>
//             <div style={{ padding: '20px' }}>
//               <p style={{ margin: '0', marginBottom: '15px', fontWeight: 'bold' }}>Fees: <span style={{ fontWeight: 'normal' }}>{doctor.fees}</span></p>
//               <div style={{ overflowX: 'auto' }}>
//                 <h5 style={{cursor: 'pointer'}}>Today</h5>
//                 <h5 style={{cursor: 'pointer'}}>Tomorrow</h5>
//                 <h5 style={{cursor: 'pointer'}}>Wednesday, 3 Apr</h5>
//                 {/* Add more days here */}
//               </div>
//             </div>

//             <div style={{ padding: '20px', overflowX: 'auto' }}> {/* Wrap the slots in a container with overflow-x: auto */}
//               <div style={{ whiteSpace: 'nowrap', display: 'flex', flexDirection: 'row' }}>
//                 <div style={{ flex: '0 0 auto', marginRight: '20px' }}>
//                   {showTimes.today && (
//                     <div>
//                       {/* Render time slots for today */}
//                       {[...Array(10).keys()].map((index) => (
//                         <button 
//                           key={index} 
//                           style={{ padding: '5px 10px', backgroundColor: '#3D3AFF', color: 'white', border: 'none', marginRight: '10px', marginBottom: '5px' }}
//                         >
//                           {`${index + 9}:00 AM`}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <div style={{ marginRight: '20px' }}>
//                   {showTimes.tomorrow && (
//                     <div>
//                       {/* Render time slots for tomorrow */}
//                       {[...Array(10).keys()].map((index) => (
//                         <button 
//                           key={index} 
//                           style={{ padding: '5px 10px', backgroundColor: '#3D3AFF', color: 'white', border: 'none', marginRight: '10px', marginBottom: '5px' }}
//                         >
//                           {`${index + 9}:00 AM`}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <div style={{ marginRight: '20px' }}>
//                   {showTimes.wednesday && (
//                     <div>
//                       {/* Render time slots for Wednesday */}
//                       {[...Array(10).keys()].map((index) => (
//                         <button 
//                           key={index} 
//                           style={{ padding: '5px 10px', backgroundColor: '#3D3AFF', color: 'white', border: 'none', marginRight: '10px', marginBottom: '5px' }}
//                         >
//                           {`${index + 9}:00 AM`}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 {/* Render the rest of the slots here */}
//               </div>
//             </div>
//           </div> 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;


// import React, { useState } from 'react';

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const timeSlots = [
//   { time: '9:00 AM', appointments: [] },
//   { time: '10:00 AM', appointments: [] },
//   { time: '11:00 AM', appointments: [] },
//   { time: '12:00 PM', appointments: [] },
//   { time: '1:00 PM', appointments: [] },
//   { time: '2:00 PM', appointments: [] },
//   { time: '3:00 PM', appointments: [] },
//   { time: '4:00 PM', appointments: [] },
//   { time: '5:00 PM', appointments: [] },
// ];

// const AppointmentScheduler = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setSelectedTime('');
//   };

//   const handleTimeChange = (time) => {
//     setSelectedTime(time);
//   };

//   const handleBookAppointment = () => {
//     // Redirect to booking page with selectedDate and selectedTime
//     // You can implement this based on your routing setup
//     console.log('Redirect to booking page:', selectedDate, selectedTime);
//   };

//   return (
//     <div>
//       <h2>Book Appointment</h2>
//       <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
//         {days.map((day) => (
//           <button key={day} onClick={() => handleDateChange(day)} style={{ marginRight: '10px' }}>
//             {day}
//           </button>
//         ))}
//       </div>
//       <div>
//         {selectedDate && (
//           <>
//             <h3>Select a time for {selectedDate}:</h3>
//             <div style={{ display: 'flex', flexDirection: 'row' }}>
//               {timeSlots.map((slot) => (
//                 <button
//                   key={slot.time}
//                   disabled={!selectedDate} // Disable time slots until a date is selected
//                   onClick={() => handleTimeChange(slot.time)}
//                   style={{ margin: '5px', backgroundColor: selectedTime === slot.time ? 'green' : 'white' }}
//                 >
//                   {slot.time}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//       {selectedTime && (
//         <button onClick={handleBookAppointment}>Book Appointment</button>
//       )}
//     </div>
//   );
// };

// export default AppointmentScheduler;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// import dr1 from '../../images/doctor/dr1.jpg';
// import dr2 from '../../images/doctor/dr2.jpg';
// import dr3 from '../../images/doctor/dr3.jpg';

// const daysInMonth = (month, year) => {
//   return new Array(new Date(year, month, 0).getDate()).fill(0).map((_, idx) => idx + 1);
// };
// const timeSlots = [
//   { time: '9:00 AM', appointments: [] },
//   { time: '10:00 AM', appointments: [] },
//   { time: '11:00 AM', appointments: [] },
//   { time: '12:00 PM', appointments: [] },
//   { time: '1:00 PM', appointments: [] },
//   { time: '2:00 PM', appointments: [] },
//   { time: '3:00 PM', appointments: [] },
//   { time: '4:00 PM', appointments: [] },
//   { time: '5:00 PM', appointments: [] },
// ];

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const formattedDate = (date, monthIndex) => {
//   return `${date} ${months[monthIndex - 1]}`;
// };

// const AppointmentScheduler = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setSelectedTime('');
//   };

//   const handleTimeChange = (time) => {
//     setSelectedTime(time);
//   };

//   const slotsPerRow = Math.ceil(timeSlots.length / 4);

//   const handleBookAppointment = () => {
//     console.log('Redirect to booking page:', selectedDate, selectedTime);
//   };

//   const currentDate = new Date();
//   const currentMonth = currentDate.getMonth() + 1;
//   const currentYear = currentDate.getFullYear();
//   const dates = daysInMonth(currentMonth, currentYear);

//   return (
//     <div>
//       <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
//         {dates.map((date) => (
//           <button
//             key={date}
//             onClick={() => handleDateChange(date)}
//             style={{
//               marginRight: '10px',
//               backgroundColor: selectedDate === date ? '#3D3AFF' : 'white',
//               color: selectedDate === date ? 'white' : 'blue',
//               border: 'none',
//               borderRadius: '3px',
//               cursor: 'pointer',
//               padding:'5px',
//               width:'70px'
//             }}
//           >
//             {formattedDate(date, currentMonth)}
//           </button>
//         ))}
//       </div>
//       <div>
//         {selectedDate && (
//           <>
//             <h3 style={{ fontSize: '20px', color: '#025099', marginTop: '20px' }}>Select a time for {formattedDate(selectedDate, currentMonth)}:</h3>
//             <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//               {timeSlots.map((slot, index) => (
//                 <button
//                   key={slot.time}
//                   disabled={!selectedDate}
//                   onClick={() => handleTimeChange(slot.time)}
//                   style={{
//                     margin: '5px',
//                     width: 'calc(100% / ' + slotsPerRow + ' - 10px)',
//                     backgroundColor: selectedTime === slot.time ? '#3D3AFF' : 'white',
//                     color: selectedTime === slot.time ? 'white' : 'blue',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   {slot.time}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//       <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
//   {selectedTime && (
//     <Link to="/Booking" style={{ textDecoration: 'none' }}>
//     <button
//         onClick={handleBookAppointment}
//         style={{
//           backgroundColor: '#ff8d03',
//           color: 'white',
//           padding: '5px 10px',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer'
//         }}
//       >
//         Book Appointment
//       </button>
//       </Link>
//   )}
// </div>

//     </div>
//   );
// };

// const ViewProfile = () => {
//   const doctors = [
//     {
//       id: "1",
//       name: "Dr. Bennett",
//       speciality: "Dermatologist",
//       experience: 5,
//       ratings: 4,
//       image: dr1,
//       bio: "Dr. Bennett a Dermatologist, Cosmetologist, Aesthetic Dermatologist, Pediatric Dermatologist and Hair Transplant Specialist. Best known for Advanced Acne Treatment, Laser Hair Removal, Skin Whitening, Anti-Aging Skin Rejuvination, Face Threadlift and Face Filler Enhancement. Dr. Bennett practices at Skinhance Clinic in Pimple Saudagar, Pune.",
//       fees: "₹700",
//       thumb: "Thumb URL",
//       address: "Pimple Saudagar, Pune.",
//       education: "MD, Dermatology",
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "07:00 PM - 09:00 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "11:00 AM - 02:00 PM" }
//       ]
//     },
//     {
//       id: "2",
//       name: "Dr. Davis Engel",

//       speciality: "Dentist",
//       experience: 19,
//       ratings: 5,
//       image: dr2,
//       bio: "   Dr. Davis Engel is a Periodontist, Dentist, and Cosmetic/Aesthetic Dentist in Kalyani Nagar, Pune and has an experience of 19 years in these fields. Dr. Davis Engel practices at Dr. Thareja's 32 Perfect Dental Care in Kalyani Nagar, Pune and Dr. Thareja's 32 Perfect Dental Care in Nigdi, Pune. She completed BDS from Bharti Vidyapeeth's Dental College and Hospital in 2005 and MDS - Periodontics from Dr. D.Y. Patil Dental College Hospital, Pune in 2010. ",
//       fees: "₹410",
//       thumb: "Thumb URL",
//       address: "Kalyani Nagar, Pune.",
//       education: "BDS, MDS - Periodontics",
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "05:00 PM - 08:00 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "11:00 AM - 02:00 PM" }
        
//       ]
//     },
//     {
//       id: "3",
//       name: "Dr. Mark",
//       speciality: "Pediatrics",
//       experience: 8,
//       ratings: 3,
//       image: dr3,
//       bio: "Dr. Mark is a pediatrician in Hadapsar, Pune and has an experience of 11 years in these fields. Dr. Mark practices at Rainbow Children's Clinic And Vaccination Center in Hadapsar, Pune. She completed MBBS from Grant Medical College, JJ Group Of Hospitals Mumbai in 2004 and DNB (Pediatrics) from the national board of examinations, New Delhi in 2012. She is a member of Medical Council Of India (MCI).",
//       fees: "₹600",
//       thumb: "Thumb URL",
//       address: "C Wing,C/O PAARASMANI HOSPITAL Palacino Apartments,Near Mahesh Bank,Behind Vaibhav Theater,Pune.",
//       education: "MBBS, DNB - Paediatrics",
//       clinicTimings: [
//         { days: ["Mon", "Wed", "Fri"], timing: "09:00 AM - 01:45 PM" },
//         { days: ["Tue", "Thu", "Sat"], timing: "02:00 PM - 09:00 PM" }
//       ]
//     }
//   ];

//   const { id } = useParams();
//   const doctor = doctors.find(doctor => doctor.id === id);
//   const [isThumbsUpSelected, setIsThumbsUpSelected] = useState(false);
//   const [selectedDay, setSelectedDay] = useState('today');
//   const [showTimes, setShowTimes] = useState({
//     today: false,
//     tomorrow: false,
//     wednesday: false
//   });

//   const toggleThumbsUp = () => {
//     setIsThumbsUpSelected(!isThumbsUpSelected);
//   };

//   const renderStars = (rating) => {
//     const fullStar = '★';
//     const emptyStar = '☆';
//     const stars = [];

//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(<span key={i} style={{ color: 'green', fontSize: '24px', margin: '0', padding: '0' }}>{fullStar}</span>);
//       } else {
//         stars.push(<span key={i} style={{ color: 'lightgray', fontSize: '24px', margin: '0', padding: '0' }}>{emptyStar}</span>);
//       }
//     }

//     return stars;
//   };

//   const handleDaySelection = (day) => {
//     setSelectedDay(day);
//     setShowTimes(prevState => ({
//       ...prevState,
//       [day]: true
//     }));
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="row">
//             <div className="col-md-4">
//               {/* Your doctor's profile image */}
//             </div>
//             <div className="col-md-8" style={{ marginTop: '140px', padding: '0' }}>
//               {/* Doctor's information */}
//             </div>
//           </div>
//           <div className="doctor-details">
//             {/* Doctor's details */}
//           </div>
//         </div>
//         <div className="col-md-4">
//           {/* Clinic Appointment Card */}
//           <div style={{ padding: '20px', flex: 1, marginTop: '130px', width: '100%', background: '#f4f4f4', height: '70%' }}>
//             <div style={{ padding: '10px', width: '100%' }}>
//               <h3 style={{ fontSize: '25px', color: '#025099' }}>Appointment Booking</h3>
//             </div>
//             <div style={{ padding: '20px' }}>
//               {/* Render the AppointmentScheduler component */}
//               <AppointmentScheduler />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;
