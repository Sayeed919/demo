// import React, { Component } from 'react';
// import axios from 'axios'; 
// import Image from '../../images/booking.jpg'; 

// import AppointmentForm from '../elements/appointment-form';

// class Booking extends Component {
//     handleSubmit = async (formData) => {
//         try {
//             const response = await axios.post('http://localhost:4000/book-and-generate-token', formData);
//             console.log('Booking successful:', response.data);
//         } catch (error) {
//             console.error('Error booking appointment:', error);
//         }
//     }

//     render() {
//         const userAgent = navigator.userAgent.toLowerCase();
//         const isAndroid = userAgent.includes('android');
//         const isIOS = /iphone|ipad|ipod/i.test(userAgent);

//         return (
//             <div className="page-content bg-white">
//                 <div className="container">
//                     <section className="section-area section-sp2 appointment-wraper" style={{ marginTop: '5rem' }}>
//                         <div className="row">
//                             {!(isAndroid || isIOS) && (
//                                 <div className="col-lg-6">
//                                     <img src={Image} alt="Doctor" className="img-fluid d-block mx-auto mb-4" style={{ marginTop: '1rem', maxWidth: '100%' }} />
//                                 </div>
//                             )}
//                             <div className={(isAndroid || isIOS) ? 'col-lg-12' : 'col-lg-6'} style={{ marginTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
//                                 <AppointmentForm onSubmit={this.handleSubmit} />
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Booking;
















// import React, { Component } from 'react';
// import axios from 'axios'; 
// import Image from '../../images/booking.jpg'; 

// import AppointmentForm from '../elements/appointment-form';

// class Booking extends Component {
//     handleSubmit = async (formData) => {
//         try {
//             const response = await axios.post('http://51.79.225.216:3030/booking', formData);
//             console.log('Booking successful:', response.data);
//         } catch (error) {
//             console.error('Error booking appointment:', error);
//         }
//     }

//     render() {
//         const userAgent = navigator.userAgent.toLowerCase();
//         const isAndroid = userAgent.includes('android');
//         const isIOS = /iphone|ipad|ipod/i.test(userAgent);

//         return (
//             <div className="page-content bg-white">
//                 <div className="container">
//                     <section className="section-area section-sp2 appointment-wraper" style={{ marginTop: '5rem' }}>
//                         <div className="row">
//                             {!(isAndroid || isIOS) && (
//                                 <div className="col-lg-6">
//                                     <img src={Image} alt="Doctor" className="img-fluid d-block mx-auto mb-4" style={{ marginTop: '1rem', maxWidth: '100%' }} />
//                                 </div>
//                             )}
//                             <div className={(isAndroid || isIOS) ? 'col-lg-12' : 'col-lg-6'} style={{ marginTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
//                                 <AppointmentForm onSubmit={this.handleSubmit} />
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Booking;


























//33

// import React, { Component } from 'react';
// import axios from 'axios'; 
// import Image from '../../images/booking.jpg'; 
// import AppointmentForm from '../elements/appointment-form';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import { withRouter } from 'react-router-dom';

// class Booking extends Component {
//   state = {
//     showModal: false,
//     tokenNumber: '',
//   };

//   handleSubmit = async (formData) => {
//     try {
//       const response = await axios.post('http://localhost:4000/book-and-generate-token', formData);
//       if (response.status === 200) {
//         this.setState({
//           showModal: true,
//           tokenNumber: response.data.token,
//         });
//       } else {
//         console.error('Booking failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//     }
//   };

//   handleModalClose = () => {
//     this.setState({ showModal: false });
//     this.props.history.push('/token');
//   };

//   render() {
//     const userAgent = navigator.userAgent.toLowerCase();
//     const isAndroid = userAgent.includes('android');
//     const isIOS = /iphone|ipad|ipod/i.test(userAgent);
//     const { showModal, tokenNumber } = this.state;

//     return (
//       <div className="page-content bg-white">
//         <div className="container">
//           <section className="section-area section-sp2 appointment-wraper" style={{ marginTop: '5rem' }}>
//             <div className="row">
//               {!(isAndroid || isIOS) && (
//                 <div className="col-lg-6">
//                   <img src={Image} alt="Doctor" className="img-fluid d-block mx-auto mb-4" style={{ marginTop: '1rem', maxWidth: '100%' }} />
//                 </div>
//               )}
//               <div className={(isAndroid || isIOS) ? 'col-lg-12' : 'col-lg-6'} style={{ marginTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
//                 <AppointmentForm onSubmit={this.handleSubmit} />
//               </div>
//             </div>
//           </section>
//         </div>
//         <Modal show={showModal} onHide={this.handleModalClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Booking Successful</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>Your appointment has been booked successfully!</p>
//             <p>Your token number: <strong>{tokenNumber}</strong></p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.handleModalClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default withRouter(Booking);

















//444
import React, { useState } from 'react';
import axios from 'axios'; 
import Image from '../../images/booking.jpg'; 
import AppointmentForm from '../elements/appointment-form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [showModal, setShowModal] = useState(false);
  const [tokenNumber, setTokenNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:4000/post-appointment', formData);
      if (response.status === 200) {
        setShowModal(true);
        setTokenNumber(response.data.token);
      } else {
        console.error('Booking failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/token');
  };

  const userAgent = navigator.userAgent.toLowerCase();
  const isAndroid = userAgent.includes('android');
  const isIOS = /iphone|ipad|ipod/i.test(userAgent);

  return (
    <div className="page-content bg-white">
      <div className="container">
        <section className="section-area section-sp2 appointment-wraper" style={{ marginTop: '5rem' }}>
          <div className="row">
            {!(isAndroid || isIOS) && (
              <div className="col-lg-6">
                <img src={Image} alt="Doctor" className="img-fluid d-block mx-auto mb-4" style={{ marginTop: '1rem', maxWidth: '100%' }} />
              </div>
            )}
            <div className={(isAndroid || isIOS) ? 'col-lg-12' : 'col-lg-6'} style={{ marginTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
              <AppointmentForm onSubmit={handleSubmit} />
            </div>
          </div>
        </section>
      </div>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your appointment has been booked successfully!</p>
          <p>Your token number: <strong>{tokenNumber}</strong></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Booking;
