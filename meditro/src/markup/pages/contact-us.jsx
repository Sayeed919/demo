import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            department: '',
            message: '',
            errors: {
                name: '',
                email: '',
                phone: '',
                department: '',
                message: ''
            },
            success: ''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    validateField = (name, value) => {
        let error = '';
        switch(name) {
            case 'name':
                error = value.trim() === '' ? 'Name is required' : '';
                break;
            case 'email':
                error = value.trim() === '' ? 'Email is required' : !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
                break;
            case 'phone':
                error = value.trim() === '' ? 'Phone number is required' : !/^\d{10}$/.test(value) ? 'Invalid phone number' : '';
                break;
            case 'department':
                error = value === '' ? 'Service selection is required' : '';
                break;
            case 'message':
                error = value.trim() === '' ? 'Message is required' : '';
                break;
            default:
                break;
        }
        this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                [name]: error
            }
        }));
        return error;
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, department, message } = this.state;
        const errors = {
            name: this.validateField('name', name),
            email: this.validateField('email', email),
            phone: this.validateField('phone', phone),
            department: this.validateField('department', department),
            message: this.validateField('message', message)
        };
        if (Object.values(errors).every(error => error === '')) {
            try {
                const response = await axios.post("http://localhost:3030/contact", this.state);
                console.log(response.data);
                if (response.status === 201) {
                    const emailResponse = await axios.post("http://localhost:3030/contact-us", {
                        firstName: this.state.name,
                        email: this.state.email,
                    });
                    console.log(emailResponse.data);
                    this.setState({ success: 'Message sent successfully!' });
                }
            } catch (error) {
                this.setState({ success: '', errors: { ...errors, message: 'Something went wrong. Please try again later.' } });
            }
        }
    }

    handleBlur = (e) => {
        const { name, value } = e.target;
        this.validateField(name, value);
    }

    render() {
        const { errors, success } = this.state;
        return (
            <div className="page-content bg-white">
                <div className="banner-wraper">
                    <div className="page-banner banner-lg contact-banner" style={{ backgroundImage: `url(${bnrImg1})` }}>
                        <div className="container">
                            <div className="page-banner-entry text-center">
                                <h1 style={{ fontSize: '300%', marginTop: '-100px' }}>Contact Us</h1>
                            </div>
                        </div>
                        <img className="pt-img1 animate-wave" src={animateWave} alt="" />
                        <img className="pt-img2 animate2" src={animate2} alt="" />
                        <img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
                    </div>
                </div>

                <section className="" style={{ marginTop: '110px' }}>
                    <div className="container" >
                        <div className="contact-wraper"style={{ marginTop: '-390px' }}>
                            <div className="row">
                                <div className="col-lg-6 mb-30">
                                    <form className="form-wraper contact-form ajax-form" onSubmit={this.handleSubmit}>
                                        <div className="ajax-message"></div>
                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <input name="name" type="text" required className="form-control" placeholder="Your Name" onBlur={this.handleBlur} onChange={this.handleChange} />
                                                {errors.name && <div className="text-danger">{errors.name}</div>}
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input name="email" type="email" required className="form-control" placeholder="Email" onBlur={this.handleBlur} onChange={this.handleChange} />
                                                {errors.email && <div className="text-danger">{errors.email}</div>}
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input name="phone" type="text" required className="form-control" placeholder="Phone Numbers" onBlur={this.handleBlur} onChange={this.handleChange} />
                                                {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                            </div>
                                            <div className="form-group col-md-12">
                                                <select name="department" className="form-select form-control" onChange={this.handleChange}>
                                                    <option defaultValue="">Select Service</option>
                                                    <option value="1">Governess</option>
                                                    <option value="2">Pathology</option>
                                                    <option value="3">Home-Nurse</option>
                                                    <option value="4">Ambulance</option>
                                                    <option value="5">Physiotherapist</option>
                                                </select>
                                                {errors.department && <div className="text-danger">{errors.department}</div>}
                                            </div>
                                            <div className="form-group col-md-12">
                                                <textarea name="message" required className="form-control" placeholder="Type Message" onBlur={this.handleBlur} onChange={this.handleChange}></textarea>
                                                {errors.message && <div className="text-danger">{errors.message}</div>}
                                            </div>
                                            <div className="col-lg-12">
                                                <button name="submit" type="submit" defaultValue="Submit" className="btn w-100 btn-secondary btn-lg">Submit</button>
                                                {success && <div className="alert alert-success mt-3">{success}</div>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <div className="contact-info ovpr-dark" style={{ backgroundImage: `url(${pic1})` }}>
                                        <div className="info-inner">
                                            <h4 className="title mb-30">Contact Us For Any Informations</h4>
                                            <div className="icon-box">
                                                <h6 className="title">Location</h6>
                                                <p style={{ color: '#ff0000' }}><a href="https://maps.google.com/?q=Suratwala+Mark+Plazzo+5th+floor,+Office+no.+517,+Hinjewadi+phase+1,+Pune" style={{ color: '#FFFFFF' }}><FontAwesomeIcon icon={faMapMarkerAlt} /> Suratwala Mark Plazzo 5th floor, Office no. 517, Hinjewadi phase 1, Pune.</a></p>
                                            </div>

                                            <div className="icon-box">
                                                <h6 className="title"><i className="ti-id-badge"></i>Website &amp; Phone</h6>
                                                <Link to="https://trailique.com/" className="text-white">http://www.trailique.com/</Link>
                                                <p className="number"><a href="tel:+918007806555" style={{ color: '#FFFFFF' }}><FontAwesomeIcon icon={faPhone} /> +91-800-7806-555</a></p>
                                            </div>
                                            
                                            <div className="icon-box">
                                                <h6 className="title"><i className="ti-world"></i>Follow Us</h6>
                                                <ul className="social-media">
                                                    <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/search/top?q=trailique"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a rel="https://www.linkedin.com/company/trailiqueinfotech/" target="_blank" href="https://in.linkedin.com/company/trailiqueinfotech"><i className="fab fa-linkedin"></i></a></li>
                                                    <li><a rel="https://www.youtube.com/channel/UCCORoavk-ADmBL6-dPn13JA" target="_blank" href="https://www.youtube.com/channel/UCCORoavk-ADmBL6-dPn13JA"><i className="fab fa-youtube"></i></a></li>
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
                                        <img src={icon1} alt="" />
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
                                        <img src={icon3} alt="" />
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
        );
    }
}


export default ContactUs;
