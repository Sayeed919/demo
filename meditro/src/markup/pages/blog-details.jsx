import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import blogDefaultPic1 from "../../images/blog/default/pic1.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";

class BlogDetails extends Component {

    render() {
        return (
            <>
                <div className="page-content bg-white">
                    <div className="container-fluid  p-0">
                        <div className="row justify-content-center m-0 align-items-center"> {/* Centering the content */}
                            <div className="col-lg-12 p-0">
                                <div className="banner-wraper">
                                    <div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
                                    <div className="container">
                                <div className="page-banner-entry text-center">
                                    <h1>Trail-Health Blogs</h1>
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

                                <section className="section-area section-sp1 bg-white">
                                    <div className="row justify-content-center m-0">
                                        <div className="col-md-10 col-lg-8 col-xl-7 p-0">
                                            <div className="blog-card blog-single">
                                                <div className="post-media">
                                                    <img src={blogDefaultPic1} alt="" />
                                                </div>
                                                <div className="info-bx">
                                                    <div className="ttr-post-title">
                                                        <h2 className="post-title">Precious Tips To Help You Get Better.</h2>
                                                    </div>
                                                    <div className="ttr-post-text">
                                                        <p>Your overall health and well-being are among our most cherished treasures, and prioritizing good health is paramount for holistic wellness. In this blog post, we delve into the significance of comprehensive healthcare, optimal hygiene practices, and strategies for averting prevalent health concerns.</p>
                                                        <blockquote className="wp-block-quote">
                                                            <p>Just as the eyes are a reflection of your soul, the mouth is the mirror to your overall well being. Your teeth, gums and tongue are integral part of your mouth that speaks volumes about your internal health. </p>
                                                        </blockquote>
                                                        <p>Embrace the art of self-care as a daily ritual, tenderly nurturing your body, mind, and soul with compassion, grace, and reverence, fostering a sanctuary of well-being within.</p>
                                                        <ul className="wp-block-gallery columns-6 is-cropped">
                                                            <li className="blocks-gallery-item"><img alt="" src={galleryPic2} /></li>
                                                            <li className="blocks-gallery-item"><img alt="" src={galleryPic5} /></li>
                                                        </ul>
                                                        <p>Enhanced Quality of Life: Healthy teeth and gums contribute to improved chewing ability, speech clarity, and self-confidence, allowing you to enjoy a vibrant, active lifestyle free from dental discomfort or embarrassment.</p>
                                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                    <div className="ttr-post-footer">
                                                        <div className="post-tags">
                                                            <strong>Tags:</strong>
                                                            <Link to="#">Health</Link>
                                                            <Link to="#">Growth</Link>
                                                            <Link to="#">Life</Link>
                                                        </div>
                                                        <div className="share-post ml-auto">
                                                            <ul className="social-media mb-0">
                                                                <li><strong>Share:</strong></li>
                                                                <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/search/top?q=trailique"><i className="fab fa-facebook-f"></i></a></li>
                                                                
                                                                <li><a rel="noreferrer" target="_blank" href="https://in.linkedin.com/company/trailiqueinfotech"><i className="fab fa-linkedin-in"></i></a></li>
                                                                <li><a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCCORoavk-ADmBL6-dPn13JA"><i className="fab fa-youtube"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogDetails;