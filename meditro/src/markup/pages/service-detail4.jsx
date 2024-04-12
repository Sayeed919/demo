import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic4 from "../../images/services/pic4.jpg";

class ServiceDetail4 extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="page-content bg-white">
                    <div className="banner-wraper">
                        <div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
                            <div className="container">
                                <div className="page-banner-entry text-center">
                                    <h1>Emergency Services</h1>
                                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Emergency Services</li>
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
                                        <img src={servicesPic4} className="rounded" alt=""/>
                                    </div>
                                    <div className="clearfix">
                                        <div className="head-text mb-30">
                                            <h2 className="title mb-15">WHY CHOOSE OUR EMERGENCY SERVICES</h2>
                                            <p className="mb-0">Our emergency services are designed to provide immediate medical assistance in critical situations. We prioritize patient care and ensure that our highly trained professionals are equipped to handle any emergency medical condition.</p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mb-30">
                                                <ul className="list-check-squer mb-0">
                                                    <li>Immediate response to emergency calls</li>
                                                    <li>Expert medical care by certified professionals</li>
                                                    <li>State-of-the-art equipment and facilities</li>
                                                    <li>Compassionate and efficient patient care</li>
                                                    <li>Effective coordination with emergency response teams</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 mb-30">
                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">Expert Medical Care</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{width: "96%"}}></p>
                                                        <span className="skill-bar-percent">96%</span>
                                                    </div>
                                                </div>
                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">State-of-the-art Facilities</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{width: "79%"}}></p>
                                                        <span className="skill-bar-percent">79%</span>
                                                    </div>
                                                </div>
                                                <div className="skillbar-box mb-0">
                                                    <h6 className="title">Efficient Coordination</h6>
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
                                            <p className="mb-0">Here are some common questions about our emergency services:</p>
                                        </div>
                                        <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>What medical conditions do you treat in emergencies?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">We treat a wide range of medical emergencies including cardiac arrest, stroke, trauma injuries, and respiratory distress.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>How quickly can you respond to an emergency call?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Our emergency response teams are available 24/7 and strive to reach the location of the emergency within minutes of receiving the call.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Do you accept all types of insurance for emergency services?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Yes, we accept most major insurance plans for emergency medical services. Please contact us for specific details regarding insurance coverage.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Can I visit your facility for emergency care without an appointment?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Yes, our emergency department is open 24/7 and does not require an appointment. Patients can walk in at any time for immediate medical attention.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
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

export default ServiceDetail4;
