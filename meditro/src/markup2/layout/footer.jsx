// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// // Images
// import Logo from '../../images/logo.png';
// import footerBg from '../../images/background/footer.jpg';
// import ptImg1 from '../../images/shap/wave-blue.png';
// import ptImg2 from '../../images/shap/circle-dots.png';
// import ptImg3 from '../../images/shap/plus-blue.png';
// import ptImg4 from '../../images/shap/wave-blue.png';

// // Social Images
// import facebook from '../../images/social/facebook.png';
// import twitter from '../../images/social/twitter.png';
// //import instagram from '../../images/social/instagram.png';
// import linkedin from '../../images/social/linkedin.png';

// class aboutSection extends Component{
// 	render(){
// 		return(
// 			<>
				
// 				<footer className="footer" style={{backgroundImage: "url("+footerBg+")"}}>
// 					<div className="footer-top">
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-xl-3 col-lg-3 col-md-6">
// 									<div className="widget widget_info">
// 										<div className="footer-logo">
// 											<Link to="/"><img src={Logo} alt=""/></Link>
// 										</div>
// 										<div className="ft-contact">
// 											<p>The patient himself is the patient, the patient will continue to be trained, and the pain will occur over time.</p>
// 											<div className="contact-bx">
// 												<div className="icon"><i className="fas fa-phone-alt"></i></div>
// 												<div className="contact-number">
// 													<span>Contact Us</span>
// 													<h4 className="number">+91842115290</h4>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="col-xl-3 col-lg-3 col-6">
// 									<div className="widget footer_widget ml-50">
// 										<h3 className="footer-title">Quick Links</h3>
// 										<ul>
// 											<li><Link to="/about-us"><span>About Us</span></Link></li>
// 											<li><Link to="/services"><span>Services</span></Link></li>
// 											<li><Link to="/booking"><span>Booking</span></Link></li>
// 											<li><Link to="/faq"><span>Faq's</span></Link></li>
// 											<li><Link to="/blog-grid"><span>Blogs</span></Link></li>
// 											<li><Link to="/team"><span>Out Team</span></Link></li>
// 										</ul>
// 									</div>
// 								</div>
// 								<div className="col-xl-3 col-lg-3 col-6">
// 									<div className="widget footer_widget">
// 										<h3 className="footer-title">Our Service</h3>
// 										<ul>
// 											<li><Link to="/service-detail"><span>Dental Care</span></Link></li>
// 											<li><Link to="/service-detail"><span>Cardiac Clinic</span></Link></li>
// 											<li><Link to="/service-detail"><span>Massege Therapy</span></Link></li>
// 											<li><Link to="/service-detail"><span>Cardiology</span></Link></li>
// 											<li><Link to="/service-detail"><span>Precise Diagnosis</span></Link></li>
// 											<li><Link to="/service-detail"><span>Abmbulance Services</span></Link></li>
// 										</ul>
// 									</div>
// 								</div>
// 								<div className="col-xl-3 col-lg-3 col-md-6">
// 									<div className="widget widget_form">
// 										<h3 className="footer-title">Subcribe</h3>
// 										<form className="subscribe-form subscription-form mb-30">
// 											<div className="ajax-message"></div>
// 											<div className="input-group">
// 												<input name="email" required="required" className="form-control" placeholder="Email Address" type="email"/>
// 											</div>
// 											<button name="submit" value="Submit" type="submit" className="btn btn-secondary shadow w-100">Subscribe Now</button>	
// 										</form>
// 										<div className="footer-social-link">
// 											<ul>
// 											     <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/search/top?q=trailique"><img src={facebook} alt=""/></a></li>
// 												<li><a target="_blank" rel="noreferrer" href="https://twitter.com/TrailiqueInfo"><img src={twitter} alt=""/></a></li>
// 												<li><a rel="https://www.youtube.com/results?search_query=trailique" target="_blank" href="https://youtube.com/"><i className="fab fa-youtube"></i></a></li>
// 												<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGW3FC5DPmzjgAAAY6Tm7Ew4fMz3UD-52CQBzoRNV_h3_yk-I52Fm1dF9CerEfxaODjhtDYVonF06fjiuj-ZUihEuWLpHWjoe5GS_vjgmlHAfCDvGLAoLjNhuQbE5t8kyYBeZw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftrailiqueinfotech%2Fmycompany%2F"><img src={linkedin} alt=""/></a></li>
// 											</ul>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="container">
// 						<div className="footer-bottom">
// 							<div className="row">
// 								<div className="col-12 text-center">
// 									<p className="copyright-text">Copyright © 2024 Design & Developed by <a href="https://trailique.com/" rel="noreferrer" target="_blank" className="text-secondary">Trailique Infotech</a></p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
// 					<img className="pt-img2 animate1" src={ptImg2} alt=""/>
// 					<img className="pt-img3 animate-rotate" src={ptImg3} alt=""/>
// 					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
// 				</footer>
			
// 			</>
// 		);
// 	}
// }

// export default aboutSection;
















import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import Logo from '../../images/logo.png';
import footerBg from '../../images/background/footer.jpg';
import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';

// Social Images
//import facebook from '../../images/social/facebook.png';
//import twitter from '../../images/social/twitter.png';
//import instagram from '../../images/social/instagram.png';
//import linkedin from '../../images/social/linkedin.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<footer className="footer" style={{backgroundImage: "url("+footerBg+")"}}>
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<div className="footer-logo">
											<Link to="/"><img src={Logo} alt=""/></Link>
										</div>
										<div className="ft-contact">
											<p>The patient himself is the patient, the patient will continue to be trained and the pain will occur over time.</p>
											<div className="contact-bx">
												
											<div className="contact-number">
 												 <span>Contact Us</span>
  												<a href="tel:+918421152910" className="number">+91 84211 52910</a>
											</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget ml-50">
										<h3 className="footer-title">Quick Links</h3>
										<ul>
											<li><Link to="/about-us"><span>About Us</span></Link></li>
											<li><Link to="/services"><span>Services</span></Link></li>
											<li><Link to="/booking"><span>Booking</span></Link></li>
											<li><Link to="/faq"><span>FAQ's</span></Link></li>
											<li><Link to="/blog-grid"><span>Blogs</span></Link></li>
											<li><Link to="/team"><span>Our Team</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget">
										<h3 className="footer-title">Our Services</h3>
										<ul>
											<li><Link to="/service-detail"><span>Diagnostics</span></Link></li>
											<li><Link to="/service-detail2"><span>Treatment</span></Link></li>
											<li><Link to="/service-detail5"><span>Home-Nurse</span></Link></li>
											<li><Link to="/service-detail4"><span>Emergency</span></Link></li>
											<li><Link to="/service-detail3"><span>Pathlogy</span></Link></li>
											<li><Link to="/service-detail6"><span>Physiotherapy</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_form">
										<h3 className="footer-title">Subscribe</h3>
										{/* <form className="subscribe-form subscription-form mb-30">
											<div className="ajax-message"></div>
											<div className="input-group">
												<input name="email" required="required" className="form-control" placeholder="Email Address" type="email"/>
											</div>
											<button name="submit" value="Submit" type="submit" className="btn btn-secondary shadow w-100">Subscribe Now</button>	
										</form> */}
										<div className="footer-social-link">
											<ul>
											     
												 <li><a rel="https://twitter.com/" target="_blank" href="https://twitter.com/" ><i className="fab fa-x-twitter"></i></a></li> 
												 <li><a rel="https://www.facebook.com/" target="_blank" href="https://www.facebook.com/people/Trailique-Infotech/pfbid02YpevR9TyBsUCjwE1Mq9S4hjHNT7HgL9gof5FediV9r95voSg9LBxXT24hS8Zz6tYl/"><i className="fab fa-facebook"></i></a></li> 
												 <li><a rel="https://in.linkedin.com/" target="_blank" href="https://in.linkedin.com/company/trailiqueinfotech"><i className="fab fa-linkedin"></i></a></li>
												<li><a rel="https://www.youtube.com/" target="_blank" href="https://www.youtube.com/channel/UCCORoavk-ADmBL6-dPn13JA"><i className="fab fa-youtube"></i></a></li>
												
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="footer-bottom">
							<div className="row">
								<div className="col-12 text-center">
									<p className="copyright-text">Copyright © 2024 Design & Developed by <a href="https://trailique.com/" rel="noreferrer" target="_blank" className="text-secondary">Trailique Infotech</a></p>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
					<img className="pt-img2 animate1" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg3} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
				</footer>
			
			</>
		);
	}
}

export default aboutSection;