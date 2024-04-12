import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic1 from "../../images/services/pic1.jpg";

class ServiceDetail extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="container-fluid p-0">
            <div className="banner-wraper">
              <div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
                <div className="container">
                  <div className="page-banner-entry text-center">
                    <h1>Trail-Health Diagnostics</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Service Details</li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
                <img className="pt-img2 animate2" src={circleDots} alt="" />
                <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
              </div>
            </div>

            <section className="section-area section-sp1">
              <div className="row justify-content-center">
                <div className="col-lg-8 mb-30">
                  <div className="ttr-media mb-30">
                    <img src={servicesPic1} className="rounded" alt="" />
                  </div>
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h2 className="title mb-15">Why choose Trail-Health Diagnostics?</h2>
                      <p className="mb-0">We provide accurate and reliable diagnostic services to help you make informed healthcare decisions. Our team of experienced professionals ensures timely and efficient delivery of results.</p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>Accurate and reliable testing</li>
                          <li>State-of-the-art equipment</li>
                          <li>Experienced professionals</li>
                          <li>Timely delivery of results</li>
                          <li>Comprehensive diagnostic services</li>
                        </ul>
                      </div>
                      <div className="col-md-6 mb-30">
                        <div className="skillbar-box mb-30">
                          <h6 className="title">Advanced Technology</h6>
                          <div className="skillbar appear">
                            <p className="skillbar-bar" style={{ width: "96%" }}></p>
                            <span className="skill-bar-percent">96%</span>
                          </div>
                        </div>
                        <div className="skillbar-box mb-30">
                          <h6 className="title">Certified Professionals</h6>
                          <div className="skillbar appear">
                            <p className="skillbar-bar" style={{ width: "79%" }}></p>
                            <span className="skill-bar-percent">79%</span>
                          </div>
                        </div>
                        <div className="skillbar-box mb-0">
                          <h6 className="title">Fast Turnaround</h6>
                          <div className="skillbar appear">
                            <p className="skillbar-bar" style={{ width: "90%" }}></p>
                            <span className="skill-bar-percent">90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">Frequently Asked Questions</h4>
                      <p className="mb-0">Here are some common questions about diagnostic services:</p>
                    </div>
                    <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>What types of diagnostic tests do you offer?</Accordion.Header>
                        <Accordion.Body>
                          <p>We offer a wide range of diagnostic tests including blood tests, imaging studies (X-rays, CT scans, MRI), genetic testing, and more.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>How long does it take to get test results?</Accordion.Header>
                        <Accordion.Body>
                          <p>The turnaround time for test results depends on the type of test. Some tests may provide results within hours, while others may take several days.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Do I need to prepare for a diagnostic test?</Accordion.Header>
                        <Accordion.Body>
                          <p>Some tests may require specific preparations such as fasting or avoiding certain medications. Your healthcare provider will provide instructions before the test.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Are diagnostic tests covered by insurance?</Accordion.Header>
                        <Accordion.Body>
                          <p>Many diagnostic tests are covered by health insurance, but coverage may vary depending on your plan and the specific test. It's best to check with your insurance provider for coverage details.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>How accurate are your diagnostic tests?</Accordion.Header>
                        <Accordion.Body>
                          <p>Our diagnostic tests are conducted using state-of-the-art equipment and are performed by experienced professionals to ensure accuracy and reliability.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default ServiceDetail;
