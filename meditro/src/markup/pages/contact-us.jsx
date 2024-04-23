// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';

// // Import Images
// import bnrImg1 from "../../images/banner/img1.jpg";
// import pic1 from "../../images/about/pic-1.jpg";
// import icon1 from "../../images/icon/icon1.png";
// import icon2 from "../../images/icon/icon2.png";
// import icon3 from "../../images/icon/icon3.png";
// import animateWave from "../../images/shap/wave-blue.png";
// import animate2 from "../../images/shap/circle-dots.png";
// import animateRotate from "../../images/shap/plus-blue.png";


// class ContactUs extends Component{
	
// 	render(){
// 		return (
// 			<>
				
// 				<div className="page-content bg-white">
					
// 					<div className="banner-wraper">
// 						<div className="page-banner banner-lg contact-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
// 							<div className="container">
// 								<div className="page-banner-entry text-center">
// 									<h1>Contact Us</h1>
// 									<nav aria-label="breadcrumb" className="breadcrumb-row">
// 										<ul className="breadcrumb">
// 											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
// 											<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
// 										</ul>
// 									</nav>
// 								</div>
// 							</div>
// 							<img className="pt-img1 animate-wave" src={animateWave} alt=""/>
// 							<img className="pt-img2 animate2" src={animate2} alt=""/>
// 							<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
// 						</div>
// 					</div>
					
// 					<section className="">
// 						<div className="container">
// 							<div className="contact-wraper">
// 								<div className="row">
// 									<div className="col-lg-6 mb-30">
// 										<form className="form-wraper contact-form ajax-form">
// 											<div className="ajax-message"></div>
// 											<div className="row">
// 												<div className="form-group col-md-12">
// 													<input name="name" type="text" required className="form-control" placeholder="Your Name"/>
// 												</div>
// 												<div className="form-group col-md-12">
// 													<input name="email" type="email" required className="form-control" placeholder="Email"/>
// 												</div>
// 												<div className="form-group col-md-12">
// 													<input name="phone" type="text" required className="form-control" placeholder="Phone Numbers"/>
// 												</div>
												
// 												<div className="form-group col-md-12">
// 													<textarea name="message" required className="form-control" placeholder="Type Message"></textarea>
// 												</div>
// 												<div className="col-lg-12">
// 													<button name="submit" type="submit" defaultValue="Submit" className="btn w-100 btn-secondary btn-lg">Submit</button>
// 												</div>
// 											</div>
// 										</form>
// 									</div>
// 									<div className="col-lg-6 mb-30">
// 										<div className="contact-info ovpr-dark" style={{backgroundImage: "url("+pic1+")"}}>
// 											<div className="info-inner">
// 												<h4 className="title mb-30">Contact Us for any Information</h4>
// 												<div className="icon-box">
//    													 <h6 className="title"><i className="ti-map-alt"></i>Location</h6>		
//   													  <p style={{ color: '#ff0000' }}><a href="https://maps.google.com/?q=Suratwala+Mark+Plazzo+5th+floor,+Office+no.+517,+Hinjewadi+phase+1,+Pune" style={{color: '#FFFFFF'}}>Suratwala Mark Plazzo 5th floor, Office no. 517, Hinjewadi phase 1, Pune.</a></p>
// 												</div>

// 												<div className="icon-box">
// 													<h6 className="title"><i className="ti-id-badge"></i>Website &amp; Phone</h6>		
// 													<Link to="https://trailique.com/" className="text-white">http://www.trailique.com/</Link>
// 													<p>+91-800-7806-555</p>
// 												</div>
// 												<div className="icon-box">
// 													<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
// 													<ul className="social-media">
// 														<li><a rel="https://www.youtube.com/channel/UCCORoavk-ADmBL6-dPn13JA" target="_blank" href="https://youtube.com/"><i className="fab fa-youtube"></i></a></li>
// 														<li><a rel="https://www.linkedin.com/company/trailiqueinfotech/" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
// 														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
// 													</ul>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
					
// 					<section className="section-area section-sp1">
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-lg-6 col-md-7 mb-50">
// 									<div className="feature-container feature-bx4 feature4">
// 										<div className="icon-md feature-icon">
// 											<img src={icon1} alt=""/>
// 										</div>
// 										<div className="icon-content">
//   										  <h5 className="ttr-title">Contact Number</h5>
//     										<a href="tel:+918007806555">+91-800-7806-555</a>
// 										</div>

// 									</div>
// 								</div>
// 								<div className="col-lg-6 col-md-7 mb-50">
// 									<div className="feature-container feature-bx4 feature3">
// 										<div className="icon-md feature-icon">
// 											<img src={icon3} alt=""/>
// 										</div>
// 										<div className="icon-content">
//                                            <h5 className="ttr-title">Email Address</h5>
//                                             <a href="mailto:info@trailique.com">info@trailique.com</a>
// 									</div>

// 									</div>
// 								</div>
								
// 							</div>
// 						</div>
// 					</section>
				
// 				</div>
				
// 			</>
// 		);
// 	}
// }

// export default ContactUs;


//Integrated code by Ajinkya

// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// // Import Images
// import bnrImg1 from "../../images/banner/img1.jpg";
// import pic1 from "../../images/about/pic-1.jpg";
// import icon1 from "../../images/icon/icon1.png";
// import icon2 from "../../images/icon/icon2.png";
// import icon3 from "../../images/icon/icon3.png";
// import animateWave from "../../images/shap/wave-blue.png";
// import animate2 from "../../images/shap/circle-dots.png";
// import animateRotate from "../../images/shap/plus-blue.png";


// class ContactUs extends Component{
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: '',
// 			email: '',
// 			phone: '',
// 			department:'',
// 			message: '',
// 			error:'',
// 			success:''
// 		};
// 	}
	
// 	handleChange = (e) => {
// 		this.setState({ [e.target.name]: e.target.value });
// 	}

// 	handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const response = await axios.post("http://localhost:3001/contact", this.state);
// 			console.log(response.data);
// 			if(response.status === 201){
// 				this.setState({success:'Message sent successfully!', error:''});
// 			}
// 		} catch (error){
// 			this.setState({error: 'Something went wrong. Please try again later.', success:''});
// 		}
// 	}

// 	render(){
// 		return (
// 			<>
				
// 				<div className="page-content bg-white">
					
// 					<div className="banner-wraper">
// 						<div className="page-banner banner-lg contact-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
// 							<div className="container">
// 								<div className="page-banner-entry text-center">
// 									<h1>Contact Us</h1>
// 									<nav aria-label="breadcrumb" className="breadcrumb-row">
// 										<ul className="breadcrumb">
// 											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
// 											<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
// 										</ul>
// 									</nav>
// 								</div>
// 							</div>
// 							<img className="pt-img1 animate-wave" src={animateWave} alt=""/>
// 							<img className="pt-img2 animate2" src={animate2} alt=""/>
// 							<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
// 						</div>
// 					</div>
					
// 					<section className="">
// 						<div className="container">
// 							<div className="contact-wraper">
// 								<div className="row">
// 									<div className="col-lg-6 mb-30">
// 										<form className="form-wraper contact-form ajax-form" onSubmit={this.handleSubmit}>
// 											<div className="ajax-message"></div>
// 											<div className="row">
// 												<div className="form-group col-md-12">
// 													<input name="name" type="text" required className="form-control" placeholder="Your Name" onChange={this.handleChange} />
// 												</div>
// 												<div className="form-group col-md-12">
// 													<input name="email" type="email" required className="form-control" placeholder="Email" onChange={this.handleChange}/>
// 												</div>
// 												<div className="form-group col-md-12">
// 													<input name="phone" type="number" required className="form-control" placeholder="Phone Numbers" onChange={this.handleChange}/>
// 												</div>
// 												<div className="form-group col-md-12">
// 													<select name= "department" className ="form-select form-control" onChange={this.handleChange}>
// 														<option defaultValue="Selecty Department">Select Service</option>
// 														<option defaultValue="1">Governess</option>
// 														<option defaultValue="2">Pathology</option>
// 														<option defaultValue="3">Home-Nurse</option>
// 														<option defaultValue="4">Ambulance</option>
// 														<option defaultValue="4">Physiotherapist</option>
// 													</select>
// 												</div>
// 												<div className="form-group col-md-12">
// 													<textarea name="message" required className="form-control" placeholder="Type Message" onChange={this.handleChange}></textarea>
// 												</div>
// 												<div className="col-lg-12">
// 													<button name="submit" type="submit" defaultValue="Submit" className="btn w-100 btn-secondary btn-lg">Submit</button>
// 													{this.state.success && <div className="alert alert-success">{this.state.success}</div>}

// 												</div>
// 											</div>
// 										</form>
// 									</div>
// 									<div className="col-lg-6 mb-30">
// 										<div className="contact-info ovpr-dark" style={{backgroundImage: "url("+pic1+")"}}>
// 											<div className="info-inner">
// 												<h4 className="title mb-30">Contact Us For Any Informations</h4>
// 												<div className="icon-box">
// 													<h6 className="title"><i className="ti-map-alt"></i>Location</h6>		
// 													<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
// 												</div>
// 												<div className="icon-box">
// 													<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>		
// 													<Link to="#" className="text-white">info@yourdomain.com</Link>
// 													<p>(+68) 120034509</p>
// 												</div>
// 												<div className="icon-box">
// 													<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
// 													<ul className="social-media">
// 														<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
// 														<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
// 														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
// 													</ul>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
					
// 					<section className="section-area section-sp1">
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-lg-4 col-md-6 mb-30">
// 									<div className="feature-container feature-bx4 feature4">
// 										<div className="icon-md feature-icon">
// 											<img src={icon1} alt=""/>
// 										</div>
// 										<div className="icon-content">
// 											<h5 className="ttr-title">Contact Number</h5>
// 											<p>+001 123 456 790</p>
// 											<p>+002 3424 44 00</p>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="col-lg-4 col-md-6 mb-30">
// 									<div className="feature-container feature-bx4 feature3">
// 										<div className="icon-md feature-icon">
// 											<img src={icon3} alt=""/>
// 										</div>
// 										<div className="icon-content">
// 											<h5 className="ttr-title">Email Address</h5>
// 											<p>info@yourdomain.com</p>
// 											<p>example@support.com</p>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="col-lg-4 col-md-6 mb-30">
// 									<div className="feature-container feature-bx4 feature2">
// 										<div className="icon-md feature-icon">
// 											<img src={icon2} alt=""/>
// 										</div>
// 										<div className="icon-content">
// 											<h5 className="ttr-title">Address</h5>
// 											<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
				
// 				</div>
				
// 			</>
// 		);
// 	}
// }

// export default ContactUs;







import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
//import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";


class ContactUs extends Component{
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phone: '',
			department:'',
			message: '',
			error:'',
			success:''
		};
	}
	
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	// handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await axios.post("http://localhost:3030/contact", this.state);
	// 		console.log(response.data);
	// 		if(response.status === 201){
	// 			this.setState({success:'Message sent successfully!', error:''});
	// 		}
	// 	} catch (error){
	// 		this.setState({error: 'Something went wrong. Please try again later.', success:''});
	// 	}
	// }

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Send the contact form data to your backend API endpoint
			const response = await axios.post("http://51.79.225.216:3030/contact", this.state);
			console.log(response.data);
			if (response.status === 201) {
				// If the contact form submission is successful, send an email to the user
				const emailResponse = await axios.post("http://51.79.225.216:3030/email", {
					// Include necessary data for sending the email (e.g., user's name and email)
					firstName: this.state.name,
					email: this.state.email,
					// Add any other relevant data for the email content
				});
				console.log(emailResponse.data);
				// Update the state to display a success message to the user
				this.setState({ success: 'Message sent successfully!', error: '' });
			}
		} catch (error) {
			// If an error occurs, display an error message to the user
			this.setState({ error: 'Something went wrong. Please try again later.', success: '' });
		}
	}
	

	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner banner-lg contact-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Contact Us</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={animateWave} alt=""/>
							<img className="pt-img2 animate2" src={animate2} alt=""/>
							<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
						</div>
					</div>
					
					<section className="" style={{margineTop:'110px'}}>
						<div className="container">
							<div className="contact-wraper">
								<div className="row">
									<div className="col-lg-6 mb-30">
										<form className="form-wraper contact-form ajax-form" onSubmit={this.handleSubmit}>
											<div className="ajax-message"></div>
											<div className="row">
												<div className="form-group col-md-12">
													<input name="name" type="text" required className="form-control" placeholder="Your Name" onChange={this.handleChange} />
												</div>
												<div className="form-group col-md-12">
													<input name="email" type="email" required className="form-control" placeholder="Email" onChange={this.handleChange}/>
												</div>
												<div className="form-group col-md-12">
													<input name="phone" type="number" required className="form-control" placeholder="Phone Numbers" onChange={this.handleChange}/>
												</div>
												<div className="form-group col-md-12">
													<select name= "department" className ="form-select form-control" onChange={this.handleChange}>
														<option defaultValue="Selecty Department">Select Service</option>
														<option defaultValue="1">Governess</option>
														<option defaultValue="2">Pathology</option>
														<option defaultValue="3">Home-Nurse</option>
														<option defaultValue="4">Ambulance</option>
														<option defaultValue="4">Physiotherapist</option>
													</select>
												</div>
												<div className="form-group col-md-12">
													<textarea name="message" required className="form-control" placeholder="Type Message" onChange={this.handleChange}></textarea>
												</div>
												<div className="col-lg-12">
													<button name="submit" type="submit" defaultValue="Submit" className="btn w-100 btn-secondary btn-lg">Submit</button>
													{this.state.success && <div className="alert alert-success">{this.state.success}</div>}

												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-6 mb-30">
										<div className="contact-info ovpr-dark" style={{backgroundImage: "url("+pic1+")"}}>
											<div className="info-inner">
												<h4 className="title mb-30">Contact Us For Any Informations</h4>
												<div className="icon-box">
													<h6 className="title"><i className="ti-map-alt"></i>Location</h6>		
													<p style={{ color: '#ff0000' }}><a href="https://maps.google.com/?q=Suratwala+Mark+Plazzo+5th+floor,+Office+no.+517,+Hinjewadi+phase+1,+Pune" style={{color: '#FFFFFF'}}>Suratwala Mark Plazzo 5th floor, Office no. 517, Hinjewadi phase 1, Pune.</a></p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-id-badge"></i>Website &amp; Phone</h6>		
													<Link to="https://trailique.com/" className="text-white">http://www.trailique.com/</Link>
													<p href="tel:+918421152910" className="number">+91-800-7806-555</p>
												</div>
												<div className="icon-box">
													<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
													<ul className="social-media">														
													    <li><a rel="https://www.youtube.com/channel/UCCORoavk-ADmBL6-dPn13JA" target="_blank" href="https://www.youtube.com/channel/UCCORoavk-ADmBL6-dPn13JA"><i className="fab fa-youtube"></i></a></li>
														<li><a rel="https://www.linkedin.com/company/trailiqueinfotech/" target="_blank" href="https://in.linkedin.com/company/trailiqueinfotech"><i className="fab fa-linkedin"></i></a></li>
													    <li><a rel="https://twitter.com/TrailiqueInfo" target="_blank" href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
												</ul>
											</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-7 mb-50">
									<div className="feature-container feature-bx4 feature4">
										<div className="icon-md feature-icon">
											<img src={icon1} alt=""/>
										</div>
										<div className="icon-content">
  										  <h5 className="ttr-title">Contact Number</h5>
    										<a href="tel:+918007806555">+91-800-7806-555</a>
										</div>

									</div>
								</div>
								<div className="col-lg-6 col-md-7 mb-50">
									<div className="feature-container feature-bx4 feature3">
										<div className="icon-md feature-icon">
											<img src={icon3} alt=""/>
										</div>
 										<div className="icon-content">
                                            <h5 className="ttr-title">Email Address</h5>
                                             <a href="mailto:info@trailique.com">info@trailique.com</a>
 									</div>

 									</div>
 								</div>
								
							</div>
						</div>
 					</section>
				
				</div>
				
 			</>
 		);
 	}
 }

export default ContactUs;