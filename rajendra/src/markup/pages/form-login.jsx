import Cookies from 'js-cookie';
import { useClerk, useSignIn, useAuth, useSessionList } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../images/signIn.png';
import Footer from "../layout/footer";
import Header from "../layout/header";

function FormLogin() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signIn } = useSignIn();
    const { isSignedIn } = useAuth();
    const { isLoaded, sessions } = useSessionList();
    const clerk = useClerk();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let signUpAttempt;
        try {
          
            // Prefix the phone number with +91
            const formattedPhone = `+91${phone}`;

            signUpAttempt = await signIn.create({
                identifier: formattedPhone,
                password: password
            });

            if (signUpAttempt.status === "complete") {
                clerk.setActive({ session: signUpAttempt.createdSessionId })

                Cookies.set('phoneNumber', formattedPhone, { expires: 7 });
            } else {
                setError("Something went wrong. Please try again later.");
            }
        } catch (error) {
            // console.error('Error object:', error);
            if (error.errors[0].code) {
                // Correctly fetch and handle the error code
                const errorMessage = error.errors[0].message;
                const errorCode = error.errors[0].code;
                if (errorCode === 'session_exists') {
                    if (!isLoaded) {
                        // handle loading state
                        setError(errorMessage);
                        return null;
                    }
                    clerk.setActive({ session: sessions[0].id })
                    navigate('/home');  // Change '/home' to the desired route
                } else {
                    setError(errorMessage);
                }
            } else {
                if (error.errors && error.errors.length > 0) {
                    setError(error.errors[0].message);
                } else {
                    setError('An unexpected error occurred');
                }
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const formattedValue = value.replace(/\D/g, '').slice(0, 10);
            setPhone(formattedValue);

            const phoneRegex = /^\d{10}$/;
            setError(phoneRegex.test(formattedValue) ? '' : 'Invalid Phone number');
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes('android');
    const isIOS = /iphone|ipad|ipod/.test(userAgent);

    return (
        <div className="container mt-5">
            <Header />
            <div className="row justify-content-center">
                {!(isAndroid || isIOS) && (
                    <div className="col-lg-6" style={{ marginBottom: '20px' }}>
                        <img src={Image} alt="Doctor" className="img-fluid d-block mx-auto mb-4" style={{ maxWidth: '100%' }} />
                    </div>
                )}
                <div className={(isAndroid || isIOS) ? 'col-lg-12' : 'col-lg-5 col-md-8'} style={{ marginTop: (isAndroid || isIOS) ? '130px' : '6rem' }}>
                    <div className="appointment-form form-wraper mt-16">
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-center mb-4">Login</h3>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={`form-control ${error && 'is-invalid'}`}
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={phone}
                                    onChange={handleChange}
                                    required
                                />
                                {error && <div className="invalid-feedback">{error}</div>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />
                                {error && <div className="invalid-feedback">{error}</div>}
                            </div>
                            <div className="form-group text-center">
                                <Link to="/confirm_password" className="text-warning">Forgot Password?</Link>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-warning btn-block" style={{ color: '#fff', height: '40px', padding: '8px 20px', fontSize: '16px' }}>Login</button>
                            </div>
                            <div className="text-center mt-4">
                                <p className="mt-0">Don't have an account?</p>
                                <Link className="btn btn-lg btn-warning" data-toggle="tab" to="/form-register" style={{ color: '#fff', height: '40px', padding: '8px 20px', fontSize: '16px', width: '40%' }}>Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FormLogin;
