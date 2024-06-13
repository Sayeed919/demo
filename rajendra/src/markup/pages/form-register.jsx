import { useSignUp, useClerk } from '@clerk/clerk-react';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from "../layout/header";
import Footer from "../layout/footer";
import Image from '../../images/signUp.png';

const FormRegister = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    phone: '+91',
    password: '',
    confirmPassword: '',
    phoneError: '',
    passwordError: '',
    confirmPasswordError: '',
    successMessage: '',
  });
  const { signUp } = useSignUp();
  const clerk = useClerk();

  useEffect(() => {
    let timer;
    if (state.successMessage) {
      timer = setTimeout(() => {
        setState(prevState => ({ ...prevState, successMessage: '' }));
        navigate('/form-login');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [state.successMessage, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'phone') {
      // Ensure +91 is always present
      let formattedValue = value.replace(/\D/g, '');
      if (!formattedValue.startsWith('91')) {
        formattedValue = '91' + formattedValue;
      }
      formattedValue = '+' + formattedValue;
  
      const phoneNumber = formattedValue.slice(3); // Remove +91 for validation
      const phoneRegex = /^[1-9]\d{9}$/;
      setState(prevState => ({
        ...prevState,
        [name]: formattedValue,
        phoneError: phoneRegex.test(phoneNumber) ? '' : 'Invalid Phone number. It must be 10 digits long.'
      }));
    } else if (name === 'password' || name === 'confirmPassword') {
      setState(prevState => ({
        ...prevState,
        [name]: value,
        passwordError: '',
        confirmPasswordError: name === 'confirmPassword' && state.password !== value ? 'Passwords do not match' : ''
      }));
    } else {
      setState(prevState => ({ ...prevState, [name]: value }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { phone, password, confirmPassword } = state;
  
  //   // Adjust the regex to validate phone number including +91 prefix
  //   const phoneRegex = /^\+91[1-9]\d{9}$/;
  //   if (!phoneRegex.test(phone)) {
  //     setState(prevState => ({ ...prevState, phoneError: 'Invalid phone number. It must be 10 digits long, starting with +91.' }));
  //     return;
  //   }
  
  //   if (password !== confirmPassword) {
  //     setState(prevState => ({ ...prevState, confirmPasswordError: 'Passwords do not match' }));
  //     return;
  //   }
  
  //   if (password.length < 6) {
  //     setState(prevState => ({ ...prevState, passwordError: 'Password must be at least 6 characters long' }));
  //     return;
  //   }
  
  //   try {
  //     const response = await signUp.create({
  //       phone_number: phone,
  //       password,
  //     });

  //     console.log(response);
      

  //     setState(prevState => ({ ...prevState, successMessage: 'Registration successful...!!!' }));

  //     if (response.status === "complete") {
  //       clerk.setActive({ session: response.createdSessionId })
  //     } 
   
  //   } catch (error) {
  //     console.error('Error object:', error);
  //     const errorMessage = error?.errors?.[0]?.message || error?.message || 'An error occurred';
  //     setState(prevState => ({ ...prevState, passwordError: errorMessage }));
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, password, confirmPassword } = state;
  
    // Adjust the regex to validate phone number including +91 prefix
    const phoneRegex = /^\+91[1-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setState(prevState => ({ ...prevState, phoneError: 'Invalid phone number. It must be 10 digits long, starting with +91.' }));
      return;
    }
  
    if (password !== confirmPassword) {
      setState(prevState => ({ ...prevState, confirmPasswordError: 'Passwords do not match' }));
      return;
    }
  
    if (password.length < 6) {
      setState(prevState => ({ ...prevState, passwordError: 'Password must be at least 6 characters long' }));
      return;
    }
  
    try {
      // Post data to Clerk API
      const clerkResponse = await signUp.create({
        phone_number: phone,
        password,
      });
  
      // Post data to your own database
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok && clerkResponse.status === "complete") {
        setState(prevState => ({ ...prevState, successMessage: 'Registration successful...!!!' }));
        clerk.setActive({ session: clerkResponse.createdSessionId });
        // navigate('/form-login');
      } else {
        // Handle error response
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error.message);
    }
  };
  
  
  
  const handleKeyPress = (e, nextField) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const nextElement = document.getElementById(nextField);
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  const { name, phone, phoneError, passwordError, confirmPasswordError, successMessage, password, confirmPassword } = state;

  return (
    <>
      <Header />

      <div className="container" style={{ marginTop: '60px', marginBottom: '30px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-6 d-none d-lg-block">
            <img src={Image} alt="Doctor" className="img-fluid d-block mx-auto mb-4" style={{ maxWidth: '100%' }} />
          </div>
          <div className="col-lg-6 col-12" style={{ marginTop: '4rem' }}>
            <div className="appointment-form form-wraper" style={{ width: '80%', margin: '0 auto', padding: '30px 20px' }}>
              <form onSubmit={handleSubmit}>
                <h3 className="text-center" style={{ marginBottom: '20px' }}>Sign Up</h3>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                    onKeyDown={(e) => handleKeyPress(e, 'phone')}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${phoneError && 'is-invalid'}`}
                    placeholder="Phone Number"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    required
                    id="phone"
                    onKeyDown={(e) => handleKeyPress(e, 'password')}
                  />
                  {phoneError && <div className="invalid-feedback">{phoneError}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={`form-control ${passwordError && 'is-invalid'}`}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                    id="password"
                    onKeyDown={(e) => handleKeyPress(e, 'confirmPassword')}
                  />
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className={`form-control ${confirmPasswordError && 'is-invalid'}`}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                    id="confirmPassword"
                  />
                  {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
                </div>

                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <div className="form-group">
                  <button type="submit" className="btn btn-warning btn-block" style={{ color: '#fff', height: '40px', padding: '8px 20px', fontSize: '16px' }}>Sign Up</button>
                </div>

                <div className="text-center" style={{ marginBottom: '10px' }}>
                  <p>Already have an account? <Link to="/form-login">Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormRegister;
