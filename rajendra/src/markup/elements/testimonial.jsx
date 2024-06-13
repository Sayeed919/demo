import React, { Component } from 'react';
import testShape from "../../images/testimonials/review.png"

class TestimonialSection extends Component {
    render() {
        return (
            <section className="section-area section-sp3 testimonial-wraper" style={{marginTop:'-170px'}}>
                <div className="container">
                    <div className="heading-bx text-center">
                        <h2 className="title m-b0" style={{color:'#273F61',marginTop:'100px'}}>What our patients say</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center">
                            <div className="thumb-wraper">
                                <img className="bg-img" src={testShape} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="slider-item">
                                <div className="testimonial-bx">
                                    <div className="testimonial-content">
                                        <div>
                                            <p>I've been seeing Dr. Bhavesh for my heart condition for the past two years, and I couldn't be happier with the care I've received. He always takes the time to listen to my concerns and explains things in a way that's easy to understand. The staff at his office is also friendly and efficient.</p>
                                            <div className="quote-icon">
                                                <i className="fas fa-quote-left"></i>
                                            </div>
                                        </div>
                                        <div className="read-more-link" >
                                            <a href="https://www.google.co.in/maps/place/Rajendra+Clinic/@18.5306956,73.9109168,17z/data=!4m8!3m7!1s0x3bc2c18132a7ad73:0xa9c90dcb69fb00b5!8m2!3d18.5306956!4d73.9109168!9m1!1b1!16s%2Fg%2F1tfg638h?entry=ttu" target="_blank" rel="noopener noreferrer" style={{color:'#FA9225'}}>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonialSection;
