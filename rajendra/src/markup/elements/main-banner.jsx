import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import doctorImg from '../../images/main-banner/doc.png';

class AboutSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false 
        };
    }

    toggleExpand = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    }
    render() {

        return (
            <>
               
                <div className="main-banner" style={{ marginTop: '-20px' }}>
                    <div className="container inner-content">
                        
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6 col-sm-7 mt-0">
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0px' }}>
                            <div style={{ backgroundColor: '#FF7A00', color: '#ffffff', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginRight: '20px', marginBottom: '50px' }}>12</div>
                            <div style={{ color: '#03387E', marginBottom: '50px',fontSize: '20px' ,fontWeight:'bold',marginLeft:'-10px'}}>
                                <p style={{ marginBottom: '0' }}>Your Token</p>
                            </div>
                        </div>
                            <h6 className="text"style={{ color: '#054FB1'}}>20+ year's of experience </h6>
                                <p className="appointment-text">Book your appointment in a click, <br />skip the queue and <br />never miss a beat.</p>
                            
                            <Link to="/bookappointment" className="btn btn-primary btn-lg shadow" style={{ padding: '12px 16px' ,backgroundColor: '#FF7A00',border:'none'}}>Book Appointment</Link>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-5">
                                <div className="banner-img"  style={{ marginTop: '-20px' }}>
                                    <img src={doctorImg} alt=""/>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutSection;


