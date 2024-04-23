// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';

// // Import Images
// import logo from "../../images/logo.png";

// class FormLogin extends Component{
	
// 	render(){
// 		return (
// 			<>
// 				<div className="section-area account-wraper2">
// 					<div className="container">
// 						<div className="row justify-content-center">
// 							<div className="col-xl-5 col-lg-6 col-md-8">
// 								<div className="appointment-form form-wraper">
// 									<div className="logo">
// 										<img src={logo} alt=""/>
// 									</div>
// 									<form action="#">
// 										<div className="form-group">
// 											<input type="text" className="form-control" placeholder="Username"/>
// 										</div>
// 										<div className="form-group">
// 											<input type="password" className="form-control" placeholder="Password"/>
// 										</div>
// 										<div className="form-group">
// 											<Link to="/" type="button" className="btn mb-30 btn-lg btn-primary w-100">login</Link>
// 											<Link to="/form-forget-password" data-toggle="tab">Forgot Password</Link>
// 										</div>
// 										<div className="text-center mt-40">
// 											<p className="mt-0">Dont have any account?</p>
// 											<Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/form-register">Register</Link>
// 										</div>											
// 									</form>
// 								</div>
// 							</div>
// 						</div>					
// 					</div>
// 				</div>
				
// 			</>
// 		);
// 	}
// }

// export default FormLogin;

// Integrated Code by Ajinkya

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import logo from "../../images/logo.png";
import Header from "../layout/header";
import Footer from "../layout/footer";

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Make POST request to login API
            const response = await axios.post('http://51.79.225.216:3030/login', { email, password });
            console.log(response.data);
            // Redirect to services page upon successful login
            navigate('/services');
        } catch (error) {
            // Handle error - Display error message to the user
            console.error('Error:', error); // Log error
            console.error('Error Response:', error.response); // Log error response
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    }

    return (
        <>
        <Header/>
            <div className="section-area account-wraper2" style={{marginTop:'60px'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="appointment-form form-wraper">
                                {/* <div className="logo">
                                    <img src={logo} alt=""/>
                                </div> */}
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                                    </div>
                                    {error && <p className="text-danger">{error}</p>}
                                    <div className="form-group">
                                        <button type="submit" className="btn mb-30 btn-lg btn-primary w-100">Login</button>
                                        <Link to="/form-forget-password" data-toggle="tab">Forgot Password</Link>
                                    </div>
                                    <div className="text-center mt-40">
                                        <p className="mt-0">Don't have an account?</p>
                                        <Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/form-register">Register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default FormLogin;
