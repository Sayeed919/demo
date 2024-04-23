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
// 											<input type="text" className="form-control" placeholder="Name"/>
// 										</div>
// 										<div className="form-group">
// 											<input type="email" className="form-control" placeholder="Email"/>
// 										</div>
// 										<div className="form-group">
// 											<input type="text" className="form-control" placeholder="Username"/>
// 										</div>
// 										<div className="form-group">
// 											<input type="password" className="form-control" placeholder="Password"/>
// 										</div>	
// 										<div className="form-group">
// 											<Link to="/" type="button" className="btn btn-primary w-100 radius-xl">Register Now</Link>
// 										</div>
// 										<div className="text-center mt-40">						
// 											<p className="mt-0">Already have an account?</p>
// 											<Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/form-login">Login</Link>
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


//Integrated code by Ajinkya


// import React, { useState } from 'react'; // Import useState hook
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import axios from 'axios';

// import logo from "../../images/logo.png";

// const FormLogin = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook
//   const [state, setState] = useState({
//     firstName: '',
//     email: '',
//     username: '',
//     password: '',
//     error: '',
//     successMessage: ''
//   });

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { firstName, email, username, password } = state;

//     try {
//       const response = await axios.post('http://localhost:4000/users', {
//         firstName,
//         email,
//         username,
//         password
//       });

//       console.log(response.data); // Log response from server
//       setState({...state, successMessage: 'Registration successful...!!!'})
//       // setState(prevState => ({...prevState, successMessage: 'Registration successful...!!!'})); // Update success message
//       await axios.post('http://localhost:4040/email', {
//       email,
//       firstName
//     });

//       navigate('/form-login'); // Navigate to form-login page
//     } catch (error) {
//       console.error('Error:', error.response?.data); // Log error response, using optional chaining to handle undefined error.response
//       const errorMessage = error.response?.data?.error || 'An error occurred'; // Use optional chaining to handle undefined error.response.data.error
//       setState({ ...state, error: errorMessage });
//     }
//   };
  
//   const { firstName, email, username, password, error } = state;

//   return (
//     <>
//       <div className="section-area account-wraper2">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-5 col-lg-6 col-md-8">
//               <div className="appointment-form form-wraper">
//                 <div className="logo">
//                   <img src={logo} alt="" />
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Name"
//                       name="firstName"
//                       value={firstName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Email"
//                       name="email"
//                       value={email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Username"
//                       name="username"
//                       value={username}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="password"
//                       className="form-control"
//                       placeholder="Password"
//                       name="password"
//                       value={password}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   {error && <div className="alert alert-danger">{error}</div>}
//                   {successMessage && <div className="alert alert-success">{successMessage}</div>}
//                   <div className="form-group">
//                     <button type="submit" className="btn btn-primary w-100 radius-xl">Register Now</button>
//                   </div>
//                   <div className="text-center mt-40">
//                     <p className="mt-0">Already have an account?</p>
//                     <Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/form-login">Login</Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FormLogin;



//33


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../../images/logo.png";
import Header from "../layout/header";
import Footer from "../layout/footer";
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
//import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";



const FormLogin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    firstName: '',
    email: '',
    username: '',
    password: '',
    error: '',
    successMessage: ''
  });

  useEffect(() => {
    let timer;
    if (state.successMessage) {
      timer = setTimeout(() => {
        setState(prevState => ({...prevState, successMessage: ''}));
        navigate('/form-login');
      }, 5000); // 5000 milliseconds delay, adjust as needed
    }
    return () => clearTimeout(timer);
  }, [state.successMessage]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, username, password } = state;

    try {
      const response = await axios.post('http://51.79.225.216:3030/users', {
        firstName,
        email,
        username,
        password
      });

      console.log(response.data);
      setState(prevState => ({...prevState, successMessage: 'Registration successful...!!!'}));

      await axios.post('http://51.79.225.216:3030/email', {
        email,
        firstName
      });

      

    } catch (error) {
      console.error('Error:', error.response?.data);
      const errorMessage = error.response?.data?.error || 'An error occurred';
      setState({ ...state, error: errorMessage });
    }
  };

  const { firstName, email, username, password, error, successMessage } = state;

  return (
    <>
    <Header />
    <div className="banner-wraper">
						<div className="page-banner banner-lg contact-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Registration Page</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Registration</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={animateWave} alt=""/>
							<img className="pt-img2 animate2" src={animate2} alt=""/>
							<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
						</div>
					</div>
      <div className="section-area account-wraper2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-30">
              <div className="appointment-form form-wraper">
                {/* <div className="logo">
                  <img src={logo} alt="" />
                </div> */}
                <form onSubmit={handleSubmit}>
                <h5>Join TeleHealth-Trail</h5>
                
                <div style={{marginLeft:'200px'}}>
                    <a href="/form-login"><small>Are you a Doctor ?</small></a>
                  </div>
                  <br/>
                  <div className="form-group">
                    
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="phone"
                      className="form-control"
                      placeholder="Phone"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary w-100 radius-xl">Register Now</button>
                    
                  </div>
                  <div className="text-center mt-40">
                    <p className="mt-0">Already have an account?</p>
                    <Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/form-login">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormLogin;


