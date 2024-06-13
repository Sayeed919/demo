// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

// const AppointmentForm = () => {
//   const navigate = useNavigate();
//   const nameInput = useRef(null);
//   const phoneInput = useRef(null);
//   const slotInput = useRef(null);

//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [bookingSuccess, setBookingSuccess] = useState(false);

//   const handlePhoneChange = (value) => {
//     setPhone(value);
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!name.trim()) {
//       alert('Please fill the Name field');
//       return;
//     }

//     if (!phone.trim()) {
//       alert('Please fill the Phone number field');
//       return;
//     }

//     if (!date) {
//       alert('Please select a Date');
//       return;
//     }

//     try {
//       const bookingResponse = await fetch('http://localhost:4000/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           phone,
//           date,
//         }),
//       });

//       if (bookingResponse.ok) {
//         console.log('Booking successful');
//         setBookingSuccess(true);
//         navigate('/token');
//       } else {
//         console.error('Booking failed:', bookingResponse.statusText);
//       }
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   };

//   return (
//     <>
//       <div className="appointment-form form-wraper">
//         <h3 className="title">Book Appointment</h3>
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <input
//               ref={nameInput}
//               type="text"
//               className="form-control"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <PhoneInput
//               ref={phoneInput}
//               country={'in'}
//               enableSearch={true}
//               value={phone}
//               onChange={handlePhoneChange}
//               inputStyle={{
//                 width: '100%',
//                 height: '60px',
//                 borderRadius: '10px',
//                 alignItems: 'center',
//                 fontSize: '18px',
//               }}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               ref={slotInput}
//               type="date"
//               className="form-control"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>
//           <Link to='/token'>
//           <button type="submit" className="btn btn-secondary btn-lg"
//           onChange={handleFormSubmit}>
//             Book Appointment
//           </button>
//           </Link>
//         </form>
//         {bookingSuccess && (
//           <div className="success-message">
//             Appointment booked successfully!
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default AppointmentForm;


// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';


// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';


// const AppointmentForm = () => {
//   const navigate = useNavigate();
//   const nameInput = useRef(null);
//   const phoneInput = useRef(null);
//   const slotInput = useRef(null);

//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [token, setToken] = useState('');


//   const handlePhoneChange = (value) => {
//     setPhone(value);

//   const handlePhoneChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'phone') {
//       const formattedValue = value.replace(/\D/g, '').slice(0, 10);
//       setPhone(formattedValue);

//       const phoneRegex = /^\d{10}$/;
//       setPhoneError(phoneRegex.test(formattedValue) ? '' : 'Invalid Phone number');
//     }

//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!name.trim()) {
//       alert('Please fill the Name field');
//       return;
//     }

//     if (!phone.trim()) {
//       alert('Please fill the Phone number field');
//       return;
//     }

//     if (!date) {
//       alert('Please select a Date');
//       return;
//     }

//     try {
//       const bookingResponse = await fetch('http://localhost:4000/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           phone,
//           date,
//         }),
//       });

//       if (bookingResponse.ok) {
//         const bookingData = await bookingResponse.json();
//         console.log('Booking successful:', bookingData);

//         // Request to generate the token
//         const tokenResponse = await fetch('http://localhost:4000/generate', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             name,
//             contact: phone,
//             reason: 'Appointment', // Replace with actual reason if available
//             bookDate: date,
//           }),
//         });

//         if (tokenResponse.ok) {
//           const tokenData = await tokenResponse.json();
//           console.log('Token generated:', tokenData.token);
//           setToken(tokenData.token);
//           setBookingSuccess(true);
//           navigate('/token');
//         } else {
//           console.error('Token generation failed:', tokenResponse.statusText);
//         }
//       } else {
//         console.error('Booking failed:', bookingResponse.statusText);
//       }
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   };
// };

//   return (
//     <>
//       <div className="appointment-form form-wraper">
//         <h3 className="title">Book Appointment</h3>
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <input
//               ref={nameInput}
//               type="text"
//               className="form-control"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <PhoneInput
//               ref={phoneInput}
//               country={'in'}
//               enableSearch={true}
//               value={phone}
//               onChange={handlePhoneChange}
//               inputStyle={{
//                 width: '100%',
//                 height: '60px',
//                 borderRadius: '10px',
//                 alignItems: 'center',
//                 fontSize: '18px',
//               }}
//               name="phone" 
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               ref={slotInput}
//               type="date"
//               className="form-control"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-secondary btn-lg" style={{backgroundColor: '#FF7A00',border:'none'}}>
//             Book Appointment
//           </button>
//         </form>
//         {bookingSuccess && (
//           <div className="success-message">
//             Appointment booked successfully! Your token number is {token}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default AppointmentForm;



// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// const AppointmentForm = () => {
//   const navigate = useNavigate();
//   const nameInput = useRef(null);
//   const phoneInput = useRef(null);
//   const slotInput = useRef(null);

//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [token, setToken] = useState('');

//   const handlePhoneChange = (value) => {
//     setPhone(value);
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!name.trim()) {
//       alert('Please fill the Name field');
//       return;
//     }

//     if (!phone.trim()) {
//       alert('Please fill the Phone number field');
//       return;
//     }

//     if (!date) {
//       alert('Please select a Date');
//       return;
//     }

//     try {
//       const bookingResponse = await fetch('http://localhost:4000/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           phone,
//           date,
//         }),
//       });

//       if (bookingResponse.ok) {
//         const bookingData = await bookingResponse.json();
//         console.log('Booking successful:', bookingData);

//         const tokenResponse = await fetch('http://localhost:4000/generate', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             name,
//             contact: phone,
//             reason: 'Appointment',
//             bookDate: date,
//           }),
//         });

//         if (tokenResponse.ok) {
//           const tokenData = await tokenResponse.json();
//           console.log('Token generated:', tokenData.token);
//           setToken(tokenData.token);
//           setBookingSuccess(true);
//           navigate('/token');
//         } else {
//           console.error('Token generation failed:', tokenResponse.statusText);
//         }
//       } else {
//         console.error('Booking failed:', bookingResponse.statusText);
//       }
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   };

//   return (
//     <>
//       <div className="appointment-form form-wrapper">
//         <h3 className="title">Book Appointment</h3>
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <input
//               ref={nameInput}
//               type="text"
//               className="form-control"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <PhoneInput
//               ref={phoneInput}
//               country={'in'}
//               enableSearch={true}
//               value={phone}
//               onChange={handlePhoneChange}
//               inputStyle={{
//                 width: '100%',
//                 height: '60px',
//                 borderRadius: '10px',
//                 alignItems: 'center',
//                 fontSize: '18px',
//               }}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               ref={slotInput}
//               type="date"
//               className="form-control"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-secondary btn-lg" style={{ backgroundColor: '#FF7A00', border: 'none' }}>
//             Book Appointment
//           </button>
//         </form>
//         {bookingSuccess && (
//           <div className="success-message">
//             Appointment booked successfully! Your token number is {token}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default AppointmentForm;





// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// const AppointmentForm = () => {
//   const navigate = useNavigate();
//   const nameInput = useRef(null);
//   const phoneInput = useRef(null);
//   const dateInput = useRef(null);

//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [tokenNumber, setTokenNumber] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [phoneError, setPhoneError] = useState('');

//   const handlePhoneChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'phone') {
//       const formattedValue = value.replace(/\D/g, '').slice(0, 10);
//       setPhone(formattedValue);

//       const phoneRegex = /^\d{10}$/;
//       setPhoneError(phoneRegex.test(formattedValue) ? '' : 'Invalid Phone number');
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!name.trim()) {
//       setNameError('Please fill the Name field');
//       return;
//     } else {
//       setNameError('');
//     }

//     if (!phone.trim()) {
//       setPhoneError('Please fill the Phone number field');
//       return;
//     } else if (phoneError) {
//       return;
//     }

//     if (!date) {
//       alert('Please select a Date');
//       return;
//     }

//     try {
//       const bookingResponse = await fetch('http://localhost:4000/book-and-generate-token', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           phone,
//           date,
//         }),
//       });

//       if (bookingResponse.ok) {
//         const responseJson = await bookingResponse.json();
//         console.log('Booking successful');
//         setTokenNumber(responseJson.token);
//         setBookingSuccess(true);
//         setShowModal(true);
//       } else {
//         console.error('Booking failed:', bookingResponse.statusText);
//       }
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     navigate('/token');
//   };

//   return (
//     <>
//       <div className="appointment-form form-wraper">
//         <h3 className="title">Book Appointment</h3>
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <input
//               ref={nameInput}
//               type="text"
//               className="form-control"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             {nameError && <div className="error-message">{nameError}</div>}
//           </div>

//           <div className="form-group">
//             <input
//               ref={phoneInput}
//               type="tel"
//               pattern="[0-9]*"
//               className="form-control"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={handlePhoneChange}
//               name="phone"
//               required
//             />
//             {phoneError && <div className="error-message" style={{ color: 'Red' }}>{phoneError}</div>}
//           </div>
//           <div className="form-group">
//             <input
//               ref={dateInput}
//               type="date"
//               className="form-control"
//               value={date}
//               onFocus={(e) => e.target.showPicker && e.target.showPicker()}
//               onClick={(e) => e.target.showPicker && e.target.showPicker()}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-secondary btn-lg" style={{ backgroundColor: '#FF7A00', border: 'none' }}>
//             Book Appointment
//           </button>
//         </form>
//         {bookingSuccess && (
//           <div className="success-message">
//             Appointment booked successfully!
//           </div>
//         )}
//       </div>

//       <Modal show={showModal} onHide={handleModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Booking Successful</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Your appointment has been booked successfully!</p>
//           <p>Your token number: <strong>{tokenNumber}</strong></p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleModalClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default AppointmentForm;
























// this is the code
// import axios from 'axios';
// import React, { useState, useRef } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// const AppointmentForm = ({ onSubmit }) => {
//   const nameInput = useRef(null);
//   const phoneInput = useRef(null);
//   const dateInput = useRef(null);

//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [showModal, setShowModal] = useState(false);
//   const [tokenNumber, setTokenNumber] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [phoneError, setPhoneError] = useState('');

//   const handlePhoneChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'phone') {
//       const formattedValue = value.replace(/\D/g, '').slice(0, 10);
//       setPhone(formattedValue);
//       const phoneRegex = /^\d{10}$/;
//       setPhoneError(phoneRegex.test(formattedValue) ? '' : 'Invalid Phone number');
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     if (!name.trim()) {
//       setNameError('Please fill the Name field');
//       return;
//     } else {
//       setNameError('');
//     }

//     if (!phone.trim()) {
//       setPhoneError('Please fill the Phone number field');
//       return;
//     } else if (phoneError) {
//       return;
//     }

//     if (!date) {
//       alert('Please select a Date');
//       return;
//     }

//     // Format date to DD-MM-YYYY
//     const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').join('-');

//     // Pass data to parent component
//     onSubmit({ name, phone, date: formattedDate });
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       <div className="appointment-form form-wraper">
//         <h3 className="title">Book Appointment</h3>
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <input
//               ref={nameInput}
//               type="text"
//               className="form-control"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             {nameError && <div className="error-message">{nameError}</div>}
//           </div>
//           <div className="form-group">
//             <input
//               ref={phoneInput}
//               type="tel"
//               pattern="[0-9]*"
//               className="form-control"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={handlePhoneChange}
//               name="phone"
//               required
//             />
//             {phoneError && <div className="error-message" style={{ color: 'Red' }}>{phoneError}</div>}
//           </div>
//           <div className="form-group">
//             <input
//               ref={dateInput}
//               type="date"
//               className="form-control"
//               value={date}
//               onFocus={(e) => e.target.showPicker && e.target.showPicker()}
//               onClick={(e) => e.target.showPicker && e.target.showPicker()}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-secondary btn-lg" style={{ backgroundColor: '#FF7A00', border: 'none' }}>
//             Book Appointment
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AppointmentForm;






//chatgpt
import axios from 'axios';
import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AppointmentForm = () => {
  const nameInput = useRef(null);
  const phoneInput = useRef(null);
  const dateInput = useRef(null);

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [showModal, setShowModal] = useState(false);
  const [tokenNumber, setTokenNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const formattedValue = value.replace(/\D/g, '').slice(0, 10);
      setPhone(formattedValue);
      const phoneRegex = /^\d{10}$/;
      setPhoneError(phoneRegex.test(formattedValue) ? '' : 'Invalid Phone number');
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setNameError('Please fill the Name field');
      return;
    } else {
      setNameError('');
    }

    if (!phone.trim()) {
      setPhoneError('Please fill the Phone number field');
      return;
    } else if (phoneError) {
      return;
    }

    if (!date) {
      alert('Please select a Date');
      return;
    }

    // Format date to DD-MM-YYYY
    const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').join('-');

    try {
      const response = await axios.post('http://localhost:4000/post-appointment', { name, phone, date: formattedDate });
      if (response.status === 201) {
        setTokenNumber(response.data.token);
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error posting appointment and generating token:', error);
      alert('Failed to book appointment and generate token. Please try again.');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="appointment-form form-wraper">
        <h3 className="title">Book Appointment</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              ref={nameInput}
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {nameError && <div className="error-message">{nameError}</div>}
          </div>
          <div className="form-group">
            <input
              ref={phoneInput}
              type="tel"
              pattern="[0-9]*"
              className="form-control"
              placeholder="Phone Number"
              value={phone}
              onChange={handlePhoneChange}
              name="phone"
              required
            />
            {phoneError && <div className="error-message" style={{ color: 'Red' }}>{phoneError}</div>}
          </div>
          <div className="form-group">
            <input
              ref={dateInput}
              type="date"
              className="form-control"
              value={date}
              onFocus={(e) => e.target.showPicker && e.target.showPicker()}
              onClick={(e) => e.target.showPicker && e.target.showPicker()}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary btn-lg" style={{ backgroundColor: '#FF7A00', border: 'none' }}>
            Book Appointment
          </button>
        </form>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your appointment has been booked successfully. Your token number is {tokenNumber}.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AppointmentForm;
