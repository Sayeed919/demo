import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function DoctorDetails({ doctor, onAccept, onReject }) {
  const { id } = useParams();
  
  const [showPopup, setShowPopup] = useState(false);
  const [popupImgSrc, setPopupImgSrc] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleImageClick = (imgSrc) => {
    setPopupImgSrc(imgSrc);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleAccept = (doctor) => {
    onAccept(doctor);
    navigate("/Header"); // Navigate back to the Doctors page
  };

  const handleReject = (doctor) => {
    onReject(doctor);
    navigate("/Header"); // Navigate back to the Doctors page
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ marginBottom: "20px", color: "#333", borderBottom: "2px solid #333", paddingBottom: "10px" }}>Doctor Details</h3>
      <img src={doctor.doctorProfilepic} alt="Doctor" style={{ width: "150px", height: "150px", marginRight: "50px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", cursor: "pointer" }} onClick={() => handleImageClick(doctor.doctorProfilepic)} />
      <div style={{ display: "flex", marginBottom: "100px", marginLeft: "200px", marginTop: "-150px" }}>
        <div>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}><strong>Name:</strong> {doctor.doctorName}</p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}><strong>Email:</strong> {doctor.emailAddress}</p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}><strong>Contact Number:</strong> {doctor.contactNumber}</p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}><strong>Address:</strong> {doctor.address}</p>
        </div>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <p style={{ marginBottom: "5px", fontSize: "18px" }}><strong>Availability:</strong> {doctor.doctorAvailability}</p>
        <p style={{ marginBottom: "5px", fontSize: "18px" }}><strong>Fees:</strong> {doctor.price}</p>
        <p style={{ marginBottom: "5px", fontSize: "18px" }}><strong>Speciality:</strong> {doctor.speciality}</p>
        <p style={{ marginBottom: "5px", fontSize: "18px" }}><strong>Experience:</strong> {doctor.experience}</p>
        <p style={{ marginBottom: "5px", fontSize: "18px" }}><strong>Gender:</strong> {doctor.gender}</p>
        <p style={{ marginBottom: "5px", fontSize: "18px" }}><strong>Education:</strong> {doctor.education}</p>
      </div>

      {/* Render Medical Registration */}
      <div style={{ marginBottom: "40px" }}>
        <h4 style={{ marginBottom: "10px", color: "#333", borderBottom: "1px solid #eee", paddingBottom: "5px" }}>Medical Registration</h4>
        {doctor.MedicalRegistration.map((registration, index) => (
          <div key={index} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #eee", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <p style={{ marginBottom: "5px", fontSize: "16px" }}><strong>Registration Number:</strong> {registration.RegistrationNumber}</p>
            <p style={{ marginBottom: "5px", fontSize: "16px" }}><strong>Registration Council:</strong> {registration.RegistrationCouncil}</p>
            <p style={{ marginBottom: "5px", fontSize: "16px" }}><strong>Registration Year:</strong> {registration.RegistrationYear}</p>
            <p style={{ marginBottom: "5px", fontSize: "16px" }}><strong>Medical Certificate:</strong></p>
            <img src={registration.MedicalCertificate} alt="Medical Certificate" style={{ maxWidth: "300px", borderRadius: "10px", cursor: "pointer" }} onClick={() => handleImageClick(registration.MedicalCertificate)} />
          </div>
        ))}
      </div>

      {/* Render Clinic Details */}
      <div style={{ marginBottom: "60px" }}>
        <h4 style={{ marginBottom: "10px", color: "#333", borderBottom: "1px solid #eee", paddingBottom: "5px" }}>Clinic Details</h4>
        {doctor.ClinicDetails.map((clinic, index) => (
          <div key={index} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #eee", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <p style={{ marginBottom: "5px", fontSize: "16px" }}><strong>Clinic Name:</strong> {clinic.ClinicName}</p>
            <p style={{ marginBottom: "5px", fontSize: "16px" }}><strong>Location:</strong> {clinic.ClinicLocation}</p>
            <p style={{ marginBottom: "5px", fontSize: "16px" }}><strong>City:</strong> {clinic.ClinicCity}</p>
          </div>
        ))}
      </div>

      {/* Identity Proof */}
      <div>
        <h4 style={{ marginBottom: "10px", color: "#333", borderBottom: "1px solid #eee", paddingBottom: "5px" }}>Identity Proof</h4>
        <img src={doctor.IdentityProof} alt="Identity proof" style={{ maxWidth: "200px", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", cursor: "pointer" }} onClick={() => handleImageClick(doctor.IdentityProof)} />
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", position: "relative", maxWidth: "80%", maxHeight: "80vh" }}>
            <span style={{ position: "absolute", top: "-1px", right: "10px", fontSize: "24px", cursor: "pointer" }} onClick={closePopup}>&times;</span>
            <img src={popupImgSrc} alt="Popup" style={{ width: "100%", maxHeight: "100%", borderRadius: "5px" }} />
          </div>
        </div>
      )}

      {/* Accept and Reject Buttons */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={() => handleAccept(doctor)} style={{ marginRight: "10px", padding: "10px 20px", fontSize: "16px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Accept</button>
        <button onClick={() => handleReject(doctor)} style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Reject</button>
      </div>
    </div>
  );
}

export default DoctorDetails;
