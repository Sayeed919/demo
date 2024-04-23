import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaTimes, FaSyncAlt,FaCalendarAlt, FaClock,FaCalendarCheck, FaVideo, FaPhone} from 'react-icons/fa';


// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic1 from "../../images/services/pic1.jpg";

const MyAppointment = () => {
  const navigate = useNavigate();

  const [bookedAppointments, setBookedAppointments] = useState([
    { date: '2024-04-10', time: '10:00 AM', doctor: 'Dr. Smith'},
  ]);

  const [showSlotPopup, setShowSlotPopup] = useState(false);
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleCancelAppointment = (id, type) => {
    // Logic to cancel appointment
  };

  const handleRescheduleAppointment = () => {
    setShowDatePopup(true);
  };

  const toggleDatePopup = () => {
    setShowDatePopup(!showDatePopup);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    toggleDatePopup();
    setShowSlotPopup(true);
  };

  const toggleSlotPopup = () => {
    setShowSlotPopup(!showSlotPopup);
  };

  const selectSlot = (time) => {
    setSelectedSlot(time);
    toggleSlotPopup();

    // Create a new appointment object
    const newAppointment = {
      id: bookedAppointments.length + 1,
      date: selectedDate,
      time: time,
      doctor: bookedAppointments[0].doctor, 
    };

    // Remove the previous appointment
    setBookedAppointments([newAppointment]);
  };

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
    <div className="page-content bg-white" style={{backgroundImage: `url(${bnrImg1})`}}>
      <div className="container mt-3" style={{justifyContent: 'center', marginLeft: '500px'}}>
        <div className="row">
          <div className="col-md-6">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Card style={{ padding: '80px', borderRadius: '10px', boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.1)',justifyContent: 'center', alignItems: 'center' }}>
                   <h2 style={{ color: '#12214a', fontSize: '30px', marginBottom: '20px' }}>
                     <FaCalendarCheck style={{ marginRight: '10px' }} /> Booked Appointment
                     </h2>
                      {bookedAppointments.map((appointment, index) => (
                  <div key={index} style={{ marginBottom: '50px' }}>
                    <p><strong>{appointment.doctor}</strong></p>
                    <p>Date: {appointment.date}</p>
                    <p>Time: {appointment.time}</p>
                    <div className="d-flex justify-content-between align-items-center" style={{ marginTop: '40px' }}>
                    
                      <Button variant="danger" onClick={() => handleCancelAppointment(appointment.id, "booked")} >
                        <FaTimes style={{ marginRight: '5px' }} /> Cancel Appointment
                      </Button>
                      <Button variant="info" onClick={handleRescheduleAppointment} style={{ marginLeft: '10px' }}>
                        <FaSyncAlt style={{ marginRight: '5px' }} /> Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      {showDatePopup && (
        <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 777,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              height: '200px',
              width: '300px',
              textAlign: 'center',
            }}
          >
            <h3><FaCalendarAlt /> Select Date</h3>
            <input type="date" onChange={(e) => handleDateSelection(e.target.value)} />
            <button
              onClick={toggleDatePopup}
              style={{
                marginTop: '30px',
                padding: '10px 12px',
                backgroundColor: '#12214a',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              className="close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
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
            }}
          >
             <h3><FaClock /> Select Slot</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '10px',
              }}
              className="slot-container"
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
                  className="time-slot"
                  onClick={() => selectSlot(slot.time)}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = 'orange')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
                >
                  {slot.time}
                </div>
              ))}
            </div>
            <button
              onClick={toggleSlotPopup}
              style={{
                marginLeft: '110px',
                marginTop: '10px',
                padding: '8px 12px',
                backgroundColor: '#12214a',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              className="close-btn"
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