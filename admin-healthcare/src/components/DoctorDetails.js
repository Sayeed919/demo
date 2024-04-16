// import React from "react";
// import { useLocation } from 'react-router-dom';

// const DoctorDetails = () => {
//   const location = useLocation();
//   const doctor = location.state?.doctor;

//   if (!doctor) {
//     return <div>Doctor not found</div>;
//   }
//   console.log('Doctor:', doctor); 
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card shadow-lg">
//             <img src={doctor.doctorProfilepic} alt={doctor.doctorName} className="card-img-top rounded-circle" style={{ objectFit: 'cover', height: '300px', width: '300px', margin: 'auto' }} />
//             <div className="card-body">
//               <h5 className="card-title">{doctor.doctorName}</h5>
//               <p className="card-text text-muted">Email: {doctor.emailAddress}</p>
//               <p className="card-text text-muted">Contact: {doctor.contactNumber}</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-8">
//           <div className="card shadow-lg">
//             <div className="card-body">
//               <h5 className="card-title">Qualifications</h5>
//               <p className="card-text">{doctor.qualifications}</p>
//               <h5 className="card-title">Experience</h5>
//               <p className="card-text">{doctor.experience}</p>
//               <h5 className="card-title">Skills</h5>
//               <p className="card-text">{doctor.skills}</p>
//               <h5 className="card-title">Brief Description</h5>
//               <p className="card-text">{doctor.description}</p>
//               <h5 className="card-title">Ratings</h5>
//               <p className="card-text">{doctor.ratings}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorDetails;


import React from "react";

function DoctorDetails({ doctor }) {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row mb-4">
            <div className="col-md-4 text-center">
              <img alt="Doctor Profile" src={doctor.doctorProfilepic} className="avatar avatar-xl rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
            </div>
            <div className="col-md-8">
              <div className="text-center mb-3">
                <h2 style={{ color: 'blue' }}>{doctor.doctorName}</h2>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <p><strong>Email Address:</strong> <span className="text-muted">{doctor.emailAddress}</span></p>
            </div>
            <div className="col-md-6">
              <p><strong>Contact Number:</strong> <span className="text-muted">{doctor.contactNumber}</span></p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <p><strong>Doctor's Availability:</strong> <span className="text-muted">{doctor.doctorAvailability}</span></p>
            </div>
            <div className="col-md-6">
              <p><strong>Status:</strong> <span className={`badge bg-${doctor.status === 'Active' ? 'success' : 'warning'}`}>{doctor.status}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;

