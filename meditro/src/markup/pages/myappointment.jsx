import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'; // Import Card and Button from react-bootstrap

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic1 from "../../images/services/pic1.jpg";

const MyAppointment = () => {
  const navigate = useNavigate(); // Change useHistory to useNavigate

  // State for booked and past appointments
  const [bookedAppointments, setBookedAppointments] = useState([
    { id: 1, date: '2024-04-10', time: '10:00 AM', doctor: 'Dr. Smith' },
    { id: 2, date: '2024-04-15', time: '02:30 PM', doctor: 'Dr. Johnson' },
  ]);

  const [pastAppointments, setPastAppointments] = useState([
    { id: 3, date: '2024-03-25', time: '11:45 AM', doctor: 'Dr. Brown' },
    { id: 4, date: '2024-03-30', time: '03:15 PM', doctor: 'Dr. Davis' },
  ]);

  const [showSlotPopup, setShowSlotPopup] = useState(false); // State for popup visibility
  const [selectedSlot, setSelectedSlot] = useState(""); // State for selected slot

  const handleCancelAppointment = (id, type) => {
    // Logic to cancel appointment
    if (type === "booked") {
      setBookedAppointments(prevAppointments =>
        prevAppointments.filter(appointment => appointment.id !== id)
      );
    } else {
      // Handle cancellation for past appointments if needed
    }
  };

  const handleRescheduleAppointment = (id) => {
    // Here you can add logic to navigate to a rescheduling page or show a modal for rescheduling
    console.log(`Reschedule appointment with ID: ${id}`);
    // Example: You can redirect to a rescheduling page using React Router
    // navigate(`/reschedule/${id}`); // Change history.push to navigate
    setShowSlotPopup(true); // Show slot selection popup
  };

  // Function to toggle slot selection popup visibility
  const toggleSlotPopup = () => {
    setShowSlotPopup(!showSlotPopup);
  };

  // Function to handle slot selection
  const selectSlot = (time) => {
    setSelectedSlot(time);
    // Here you can add logic to handle the selected slot
    // For example, you can update the state or perform any necessary actions
    toggleSlotPopup(); // Close the slot popup after selecting a slot
  };

  // Sample time slots data
  const timeSlots = [
    { time: '9:00 AM', appointments: [] },
    { time: '10:00 AM', appointments: [] },
    { time: '11:00 AM', appointments: [] },
    { time: '12:00 PM', appointments: [] },
    { time: '1:00 PM', appointments: [] },
    { time: '2:00 PM', appointments: [] },
    { time: '3:00 PM', appointments: [] },
    { time: '4:00 PM', appointments: [] },
    { time: '5:00 PM', appointments: [] },
  ];

  return (
    <div className="page-content bg-white">
      <div className="container-fluid p-0">
        <div className="banner-wraper">
          <div className="page-banner" style={{ backgroundImage: `url(${bnrImg1})` }}>
            <div className="container">
              <div className="page-banner-entry text-center" >
                <h1 style={{ fontSize: '40px',color:'#12214a' }}>My Appointments</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Service Details</li>
                  </ul>
                </nav>
              </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
            <img className="pt-img2 animate2" src={circleDots} alt="" />
            <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h2 style={{ color: '#12214a' }}>Booked Appointments</h2>
              {bookedAppointments.map(appointment => (
                <Card key={appointment.id} style={{ marginBottom: '20px' }}>
                  <Card.Body>
                    
                    <Card.Subtitle className="mb-2 text-muted"> {appointment.doctor}</Card.Subtitle>
                    <Card.Title>{appointment.date} at {appointment.time}</Card.Title>
                    <div className="d-flex justify-content-between">
                      <Button variant="primary" onClick={() => handleCancelAppointment(appointment.id, "booked")}>Cancel Appointment</Button>
                      <Button variant="secondary" onClick={() => handleRescheduleAppointment(appointment.id)}>Reschedule</Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
      </div>
      {/* Slot selection popup */}
      {showSlotPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
               // Apply blur effect to the background
            }}
          >
            <h3>Select Slot</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '10px',
              }}
            >
              {timeSlots.map((slot, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#f0f0f0',
                    padding: '10px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    borderRadius: '5px',
                  }}
                  onClick={() => selectSlot(slot.time)}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = 'orange')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
                >
                  {slot.time}
                </div>
              ))}
            </div>
            {/* Close button */}
            <button
              onClick={toggleSlotPopup}
              style={{
                marginLeft:'110px',
                marginTop: '10px',
                padding: '8px 12px',
                backgroundColor: '#12214a',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAppointment;
