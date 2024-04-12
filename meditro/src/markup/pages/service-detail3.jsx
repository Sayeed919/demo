import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic3 from "../../images/services/pic3.jpg";

class ServiceDetail3 extends Component {
    render() {
        return (
         <div className="container-fluid p-0">
            <div className="text-center">
                <div className="page-content bg-white">
                    <div className="banner-wraper">
                        <div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
                            <div className="container">
                                <div className="page-banner-entry text-center">
                                    <h1>Trail-Health Pathology</h1>
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
                            <div className="row justify-content-center"> {/* Center align the row */}
                                <div className="col-lg-8 mb-30">
                                    <div className="ttr-media mb-30">
                                        <img src={servicesPic3} className="rounded" alt=""/>
                                    </div>
                                    <div className="clearfix">
                                        <div className="head-text mb-30">
                                            <h2 className="title mb-15">Understanding Pathology in Healthcare</h2>
                                            <p className="mb-0">Pathology plays a crucial role in healthcare by providing insights into disease processes, diagnosis, and treatment. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mb-30">
                                                <ul className="list-check-squer mb-0">
                                                    <li>Learn about disease mechanisms</li>
                                                    <li>Understand diagnostic procedures</li>
                                                    <li>Explore treatment options</li>
                                                    <li>Interpret laboratory results</li>
                                                    <li>Stay informed about medical advancements</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 mb-30">
                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">Advanced Technology</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{width: "96%"}}></p>
                                                        <span className="skill-bar-percent">96%</span>
                                                    </div>
                                                </div>
                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">Certified Pathologists</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{width: "79%"}}></p>
                                                        <span className="skill-bar-percent">79%</span>
                                                    </div>
                                                </div>
                                                <div className="skillbar-box mb-0">
                                                    <h6 className="title">Years of Expertise</h6>
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
                                            <p className="mb-0">Explore common questions about pathology and healthcare.</p>
                                        </div>
                                        <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>How does pathology contribute to diagnosis?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Pathologists analyze tissue samples and laboratory tests to diagnose diseases and conditions.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>What role do pathologists play in patient care?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Pathologists work closely with other healthcare professionals to provide accurate diagnoses and treatment recommendations.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>How is pathology evolving with technological advancements?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Advances in technology are enhancing pathology practices, allowing for more precise diagnoses and personalized treatment plans.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            {/* Add more questions as needed */}
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        );
    }
}

export default ServiceDetail3;
