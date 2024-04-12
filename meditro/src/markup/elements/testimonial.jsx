import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/shape.png"
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import testPic6 from "../../images/testimonials/pic6.jpg"
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"

class testimonialSection extends Component{
	
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
					
				
				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Testimonial</h6>
							<h2 className="title m-b0">See What Are The Patients <br/>Saying About us</h2>
						</div>
						<div className="row align-items-center">
							<div className="col-lg-6 text-center">
								<div className="thumb-wraper">
									<img className="bg-img" src={testShape} alt=""/>
									<ul>
										<li data-member="1"><Link to="#"><img src={testPic1} alt=""/></Link></li>
										<li data-member="2"><Link to="#"><img src={testPic2} alt=""/></Link></li>
										<li data-member="3"><Link to="#"><img src={testPic3} alt=""/></Link></li>
										<li data-member="4"><Link to="#"><img src={testPic4} alt=""/></Link></li>
										<li data-member="5"><Link to="#"><img src={testPic5} alt=""/></Link></li>
										<li data-member="6"><Link to="#"><img src={testPic6} alt=""/></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<Slider {...settings} className="testimonial-slide">
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. Who himself suspended the basketball? Laughter is a good way to hang a cartoon curtain.</p>
											</div>
											{/* <div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>patient</p>
											</div> */}
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Caring for one's health is akin to mastering the delicate art of balancing a spinning basketball – it requires focus, precision, and unwavering determination. Yet, amidst the whirlwind of daily life, it's all too easy to become ensnared in the web of responsibilities, neglecting the very foundation upon which our well-being rests.</p>
											</div>
											{/* <div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>patient</p>
											</div> */}
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Studies have shown that laughter not only reduces stress levels but also boosts immune function and promotes overall well-being. So, amidst the hustle and bustle of life, take a moment to indulge in the infectious joy of laughter. Whether it's sharing a joke with a loved one or enjoying a humorous movie, allow laughter to be your guide, leading you towards a healthier, happier existence.</p>
											</div>
											
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Think of this as healthy vegetarian cooking, made simple. Writer Alex is a registered dietitian, and her ingredient shopping tips and cooking videos — check out the one for vegan paella! — are the next best thing to an office visit. Vegetarians or anybody curious about the lifestyle can consider this blog their starter kit for plant-based recipes that range in ingredients and complexity.</p>
											</div>
											{/* <div className="client-info">
												<h5 className="name">John Deo</h5>
												
											</div> */}
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>He who has health has hope and he who has hope has everything.Let's build wellness rather than treat disease.A healthy outside starts from the inside.It is health that is real wealth and not pieces of gold and silver. </p>
											</div>
											
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
								</Slider>
							</div>	 
						</div>	 
					</div>
					<img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/>
				</section>
				
			</>
		);
	}
}

export default testimonialSection;