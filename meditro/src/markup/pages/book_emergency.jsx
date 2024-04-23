
import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSlotPopup: false,
      selectedSlot: '',
      phone: '',
      name: '',
      email: '',
      date: '',
      bookingSuccess: false,
    };
  }

  toggleSlotPopup = () => {
    this.setState((prevState) => ({
      showSlotPopup: !prevState.showSlotPopup,
    }));
  };

  selectSlot = (slot) => {
    this.setState({
      selectedSlot: slot,
      showSlotPopup: false,
    });
  };

  handlePhoneChange = (value) => {
    this.setState({
      phone: value,
    });
  };

  // handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   const { name, email, phone, date, selectedSlot } = this.state;

  //   if (!name || !email || !phone || !date || !selectedSlot) {
  //     alert('Please fill all the fields');
  //     return;
  //   }

  //   try {
  //     // Make a POST request to the booking API
  //     const bookingResponse = await fetch('http://localhost:5050/booking', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         phone,
  //         date,
  //         slot: selectedSlot,
  //       }),
  //     });

  //     if (bookingResponse.ok) {
  //       // Handle successful booking
  //       this.setState({ bookingSuccess: true,
  //         name: "",
  //         email: "",
  //         phone: "",
  //         date: "",
  //         selectedSlot: ""

  //       });

  //       // Make a POST request to the email API
  //       const emailResponse = await fetch('http://localhost:4040/appointment', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           name,
  //           email,
  //           phone,
  //           date,
  //           selectedSlot,
  //         }),
  //       });

  //       if (!emailResponse.ok) {
  //         console.error('Error sending email');
  //         // Handle error in sending email if needed
  //       }

  //       setTimeout(() => {
  //         this.setState({ bookingSuccess: false,
  //         name: "",
  //         email: "",
  //         phone: "",
  //         date: "",
  //         selectedSlot: ""
          
  //         });
  //       }, 3000); 
  //     } else {
  //       // Handle error in booking
  //       console.error('Booking failed');
  //     }
  //   } catch (error) {
  //     console.error('Error occurred:', error);
  //   }
  // };



  handleFormSubmit = async (event) => {
    event.preventDefault();
  
    const { name, email, phone, date, selectedSlot } = this.state;
  
    if (!name || !email || !phone || !date || !selectedSlot) {
      alert('Please fill all the fields');
      return;
    }
  
    try {
      // Make a POST request to the booking API
      const bookingResponse = await fetch('http://localhost:3030/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          slot: selectedSlot,
        }),
      });
  
      if (bookingResponse.ok) {
        // Handle successful booking
        console.log('Booking successful');
        this.setState({
          bookingSuccess: true,
        });
  
        // Make a POST request to the email API
        const emailResponse = await fetch('http://localhost:3030/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            date,
            selectedSlot,
          }),
        });
  
        if (emailResponse.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Error sending email:', emailResponse.statusText);
        }
  
        // Reset input fields and success message after a delay (optional)
        setTimeout(() => {
          this.setState({
            bookingSuccess: false,
            name: '',
            email: '',
            phone: '',
            date: '',
            selectedSlot: ''
          });
        }, 3000); // Reset after 3 seconds
      } else {
        // Handle error in booking
        console.error('Booking failed:', bookingResponse.statusText);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  
  
  

  render() {
    const { showSlotPopup, selectedSlot, phone, bookingSuccess } = this.state;
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
      <>
        <div className="appointment-form form-wraper">
          <h3 className="title">Book Appointment</h3>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <PhoneInput
                country={'in'} // Default country
                enableSearch={true}
                value={phone}
                onChange={this.handlePhoneChange}
                inputStyle={{
                  width: '100%',
                  height: '60px',
                  borderRadius: '10px',
                  alignItems: 'center',
                  fontSize: '18px',
                }} //
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                onChange={(e) => this.setState({ date: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Slot"
                onClick={this.toggleSlotPopup}
                value={selectedSlot}
                readOnly
              />
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
                          onClick={() => this.selectSlot(slot.time)}
                          onMouseEnter={(e) => (e.target.style.backgroundColor = 'orange')}
                          onMouseLeave={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
                        >
                          {slot.time}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={this.toggleSlotPopup}
                      style={{
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
            <button type="submit" className="btn btn-secondary btn-lg">
              Book Appointment
            </button>
          </form>
          {bookingSuccess && <div className="success-message" style={{ backgroundColor: '#5734bf', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>Appointment booked successfully!</div>}
        </div>
      </>
    );
  }
}

export default AppointmentForm;
