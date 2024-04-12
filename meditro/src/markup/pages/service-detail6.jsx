import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic6 from "../../images/services/pic6.jpg";

class ServiceDetail6 extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="page-content bg-white">
                    <div className="banner-wraper">  
                        <div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
                            <div className="container">
                                <div className="page-banner-entry text-center">
                                    <h1>Trail-Health Physiotherapy</h1>
                                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Service Details</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
                            <img className="pt-img2 animate2" src={circleDots} alt=""/>
                            <img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
                        </div>
                    </div>
                    
                    <section className="section-area section-sp1">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 mb-30">
                                    <div className="ttr-media mb-30">
                                        <img src={servicesPic6} className="rounded" alt=""/>
                                    </div>
                                    <div className="clearfix">
                                        <div className="head-text mb-30">
                                            <h2 className="title mb-15">Trail-Health Physiotherapy Services</h2>
                                            <p className="mb-0">Trail-Health Physiotherapy offers a range of services aimed at restoring, maintaining, and optimizing patients' mobility, function, and overall well-being. Our highly skilled physiotherapists utilize evidence-based practices to address a variety of conditions and injuries, helping patients recover and achieve their health goals.</p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mb-30">
                                                <ul className="list-check-squer mb-0">
                                                    <li>Personalized treatment plans</li>
                                                    <li>Manual therapy techniques</li>
                                                    <li>Therapeutic exercises</li>
                                                    <li>Modalities such as ultrasound and electrical stimulation</li>
                                                    <li>Patient education and home exercise programs</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 mb-30">
                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">Experienced Team</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{width: "96%"}}></p>
                                                        <span className="skill-bar-percent">96%</span>
                                                    </div>
                                                </div>
                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">Patient-Centered Care</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{width: "79%"}}></p>
                                                        <span className="skill-bar-percent">79%</span>
                                                    </div>
                                                </div>
                                                <div className="skillbar-box mb-0">
                                                    <h6 className="title">Proven Results</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{width: "75%"}}></p>
                                                        <span className="skill-bar-percent">75%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="head-text mb-30">
                                            <h4 className="title mb-10">Frequently Asked Questions</h4>
                                            <p className="mb-0">Here are some common questions about physiotherapy answered:</p>
                                        </div>
                                        <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Is physiotherapy suitable for everyone?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Yes, physiotherapy can benefit people of all ages and fitness levels. Whether you're recovering from an injury, managing a chronic condition, or looking to improve your mobility and function, our physiotherapy services are tailored to meet your individual needs.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            {/* Other Accordion items */}
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default ServiceDetail6;
