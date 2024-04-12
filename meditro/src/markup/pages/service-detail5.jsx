// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Accordion } from 'react-bootstrap';

// // Import Images
// import bnrImg1 from "../../images/banner/img1.jpg";
// import waveBlue from "../../images/shap/wave-blue.png";
// import circleDots from "../../images/shap/circle-dots.png";
// import plusBlue from "../../images/shap/plus-blue.png";
// import servicesPic5 from "../../images/services/pic5.jpg";

// class ServiceDetail5 extends Component {
//     render() {
//         return (
//             <div className="text-center">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-8">
//                             <div className="page-content bg-white">
//                                 <div className="banner-wraper">
//                                     <div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
//                                         <div className="container">
//                                             <div className="page-banner-entry text-center">
//                                                 <h1>Home-Nurse</h1>
//                                                 <nav aria-label="breadcrumb" className="breadcrumb-row">
//                                                     <ul className="breadcrumb">
//                                                         <li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
//                                                         <li className="breadcrumb-item active" aria-current="page">Service Details</li>
//                                                     </ul>
//                                                 </nav>
//                                             </div>
//                                         </div>
//                                         <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
//                                         <img className="pt-img2 animate2" src={circleDots} alt="" />
//                                         <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
//                                     </div>
//                                 </div>

//                                 <section className="section-area section-sp1">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-lg-12 mb-30">
//                                                 <div className="ttr-media mb-30">
//                                                     <img src={servicesPic5} className="rounded" alt="" />
//                                                 </div>
//                                                 <div className="clearfix">
//                                                     <div className="head-text mb-30">
//                                                         <h2 className="title mb-15">Why choose our nurse?</h2>
//                                                         <p className="mb-0">Nurses that truly care</p>
//                                                     </div>
//                                                     <div className="row align-items-center">
//                                                         <div className="col-md-6 mb-30">
//                                                             <ul className="list-check-squer mb-0">
//                                                                 <li>Then along come two they</li>
//                                                                 <li>That’s just a little bit more than</li>
//                                                                 <li>Standard dummy text ever since</li>
//                                                                 <li>Simply dummy text of the printing</li>
//                                                                 <li>Make a type specimen book</li>
//                                                             </ul>
//                                                         </div>
//                                                         <div className="col-md-6 mb-30">
//                                                             <div className="skillbar-box mb-30">
//                                                                 <h6 className="title">Advanced Technology</h6>
//                                                                 <div className="skillbar appear">
//                                                                     <p className="skillbar-bar" style={{ width: "96%" }}></p>
//                                                                     <span className="skill-bar-percent">96%</span>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="skillbar-box mb-30">
//                                                                 <h6 className="title">Certified Engineers</h6>
//                                                                 <div className="skillbar appear">
//                                                                     <p className="skillbar-bar" style={{ width: "79%" }}></p>
//                                                                     <span className="skill-bar-percent">79%</span>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="skillbar-box mb-0">
//                                                                 <h6 className="title">6 years Experience</h6>
//                                                                 <div className="skillbar appear">
//                                                                     <p className="skillbar-bar" style={{ width: "75%" }}></p>
//                                                                     <span className="skill-bar-percent">75%</span>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="clearfix">
//                                                     <div className="head-text mb-30">
//                                                         <h4 className="title mb-10">Popular Questions</h4>
//                                                         <p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
//                                                     </div>
//                                                     <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
//                                                         <Accordion.Item eventKey="0">
//                                                             <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
//                                                             <Accordion.Body>
//                                                                 <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                                                             </Accordion.Body>
//                                                         </Accordion.Item>
//                                                         <Accordion.Item eventKey="1">
//                                                             <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
//                                                             <Accordion.Body>
//                                                                 <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                                                             </Accordion.Body>
//                                                         </Accordion.Item>
//                                                         <Accordion.Item eventKey="2">
//                                                             <Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
//                                                             <Accordion.Body>
//                                                                 <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                                                             </Accordion.Body>
//                                                         </Accordion.Item>
//                                                         <Accordion.Item eventKey="3">
//                                                             <Accordion.Header>What types of systems do you support?</Accordion.Header>
//                                                             <Accordion.Body>
//                                                                 <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                                                             </Accordion.Body>
//                                                         </Accordion.Item>
//                                                         <Accordion.Item eventKey="4">
//                                                             <Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
//                                                             <Accordion.Body>
//                                                                 <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                                                             </Accordion.Body>
//                                                         </Accordion.Item>
//                                                         <Accordion.Item eventKey="5">
//                                                             <Accordion.Header>How Can I Contact You?</Accordion.Header>
//                                                             <Accordion.Body>
//                                                                 <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                                                             </Accordion.Body>
//                                                         </Accordion.Item>
//                                                     </Accordion>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </section>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default ServiceDetail5;












import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic5 from "../../images/services/pic5.jpg";

class ServiceDetail5 extends Component {
    render() {
        return (
        <div className="container-fluid p-0">
            <div className="text-center">
                <div className="container-fluid p-0">
                    <div className="row justify-content-center">
                        <div className="col-lg-40">
                            <div className="page-content bg-white">
                                <div className="banner-wraper">
                                    <div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
                                        <div className="container">
                                            <div className="page-banner-entry text-center">
                                                <h1>Home-Nurse</h1>
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
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12 mb-30">
                                                <div className="ttr-media mb-30">
                                                    <img src={servicesPic5} className="rounded" alt="" />
                                                </div>
                                                <div className="clearfix">
                                                    <div className="head-text mb-30">
                                                        <h2 className="title mb-15">Why choose our nurse?</h2>
                                                        <p className="mb-0">Nurses that truly care</p>
                                                    </div>
                                                    <div className="row align-items-center">
                                                        <div className="col-md-6 mb-30">
                                                            <ul className="list-check-squer mb-0">
                                                                <li>Then along come two they</li>
                                                                <li>That’s just a little bit more than</li>
                                                                <li>Standard dummy text ever since</li>
                                                                <li>Simply dummy text of the printing</li>
                                                                <li>Make a type specimen book</li>
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
                                                                <h6 className="title">Certified Engineers</h6>
                                                                <div className="skillbar appear">
                                                                    <p className="skillbar-bar" style={{ width: "79%" }}></p>
                                                                    <span className="skill-bar-percent">79%</span>
                                                                </div>
                                                            </div>
                                                            <div className="skillbar-box mb-0">
                                                                <h6 className="title">6 years Experience</h6>
                                                                <div className="skillbar appear">
                                                                    <p className="skillbar-bar" style={{ width: "75%" }}></p>
                                                                    <span className="skill-bar-percent">75%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="head-text mb-30">
                                                        <h4 className="title mb-10">Popular Questions</h4>
                                                        <p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                                    </div>
                                                    <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header>What types of systems do you support?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="5">
                                                            <Accordion.Header>How Can I Contact You?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ServiceDetail5;
