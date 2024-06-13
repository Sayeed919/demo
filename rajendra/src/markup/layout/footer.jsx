import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class AboutSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAndroid: false,
            clinicDetails: {}
        };
    }

    componentDidMount() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("android") > -1) {
            this.setState({ isAndroid: true });
        }
            // Fetch clinic details
            this.fetchClinicDetails();
    }


fetchClinicDetails = async() => {
    try {
        const response = await axios.get('http://localhost:4000/clinics/665ed5ee23df95a1ee3561f5');
        this.setState({clinicDetails: response.data});
    } catch(error) {
        console.error('Error fetching clinic details:', error);
    }
};


    render() {
            const {clinicDetails } = this.state;
        return (
            <footer style={{ backgroundColor: '#f7f7f7' }}>
                <div className="footer-top">
                    <div className="container" style={{ marginTop: '30px' }}>
                        <div className="row">
                            <div className="col-lg-4 col-md-12 mb-4 text-left">
                                <div>
                                <div className="icon-box">
                                    <h6 className="title" style={{ marginTop: '0px' }}>Clinic Timings</h6>
                                    <p>Morning: {clinicDetails.morningTimings}</p>
                                    <p>Evening: {clinicDetails.eveningTimings}</p>
                                </div>
                                   
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 mb-4 text-left">
                                <div className="mb-3">
                                    <div className="icon-box">
                                        <h6 className="title" style={{ marginTop: '0px' }}>Phone</h6>
                                        <p>
                                            <a href={`tel:${clinicDetails.phone}`} style={{ color: 'black' }}>
                                                <FontAwesomeIcon icon={faPhone} style={{ color: 'darkblue' }} /> {clinicDetails.phone}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="icon-box">
                                        <h6 className="title" style={{ marginTop: '20px' }}>Email</h6>
                                        <p>
                                            <a href={`mailto:${clinicDetails.email}`} style={{ color: 'black' }}>
                                                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'darkblue' }} /> {clinicDetails.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 mb-4 text-left">
                            <div className="icon-box">
                                        <h6 className="title" style={{ marginTop: '0px' }}>Address</h6>
                                        <p>
                                            <a
                                                href="https://www.google.com/maps/place/Rajendra+Clinic/@18.5306956,73.9109168,15z/data=!4m6!3m5!1s0x3bc2c18132a7ad73:0xa9c90dcb69fb00b5!8m2!3d18.5306956!4d73.9109168!16s%2Fg%2F1tfg638h?entry=ttu"
                                                className="address" style={{ color: 'black' }} target="_blank"
                                            >
                                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'darkblue' }} /> {clinicDetails.address}
                                            </a>
                                            

                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-12 text-center" style={{ marginTop: '5px' }}>
                                <p className="copyright-text">Copyright © 2024 Design & Developed by <a href="https://trailique.com/" rel="noreferrer" target="_blank" className="text-secondary">Trailique Infotech</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default AboutSection;





// import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios'; // Import Axios

// class AboutSection extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isAndroid: false,
//             clinicDetails: {}, // Initialize clinicDetails state
//         };
//     }

//     componentDidMount() {
//         const userAgent = navigator.userAgent.toLowerCase();
//         if (userAgent.indexOf("android") > -1) {
//             this.setState({ isAndroid: true });
//         }

//         // Fetch clinic details
//         this.fetchClinicDetails();
//     }

//     fetchClinicDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:8085/clinics/665ed5ee23df95a1ee3561f5'); // Use the correct ID
//             this.setState({ clinicDetails: response.data });
//         } catch (error) {
//             console.error('Error fetching clinic details:', error);
//         }
//     };

//     render() {
//         const { clinicDetails } = this.state;

//         return (
//             <footer style={{ backgroundColor: '#f7f7f7' }}>
//                 <div className="footer-top">
//                     <div className="container" style={{ marginTop: '30px' }}>
//                         <div className="row">
//                             <div className="col-lg-4 col-md-12 mb-4 text-left">
//                                 <div>
//                                 <div className="icon-box">
//                                     <h6 className="title" style={{ marginTop: '0px' }}>Clinic Timings</h6>
//                                     <p>Morning: {clinicDetails.morningTimings}</p>
//                                     <p>Evening: {clinicDetails.eveningTimings}</p>
//                                 </div>
                                   
//                                 </div>
//                             </div>

//                             <div className="col-lg-4 col-md-12 mb-4 text-left" style={{ marginLeft: '10px' }}>
//                                 <div className="mb-3">
//                                     <div className="icon-box">
//                                         <h6 className="title" style={{ marginTop: '0px' }}>Phone</h6>
//                                         <p>
//                                             <a href={`tel:${clinicDetails.phone}`} style={{ color: 'black' }}>
//                                                 <FontAwesomeIcon icon={faPhone} style={{ color: 'darkblue' }} /> {clinicDetails.phone}
//                                             </a>
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="mb-3">
//                                     <div className="icon-box">
//                                         <h6 className="title" style={{ marginTop: '20px' }}>Email</h6>
//                                         <p>
//                                             <a href={`mailto:${clinicDetails.email}`} style={{ color: 'black' }}>
//                                                 <FontAwesomeIcon icon={faEnvelope} style={{ color: 'darkblue' }} /> {clinicDetails.email}
//                                             </a>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-lg-4 col-md-12 mb-4 text-left">
//                                 <div className="icon-box">
//                                     <h6 className="title" style={{ marginTop: '0px' }}>Address</h6>
//                                     <p>
//                                         <a
//                                             href={clinicDetails.address}
//                                             className="address" style={{ color: 'black' }}
//                                         >
//                                             <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'darkblue' }} /> {clinicDetails.address}
//                                         </a>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="footer-bottom">
//                         <div className="row">
//                             <div className="col-12 text-center" style={{ marginTop: '5px' }}>
//                                 <p className="copyright-text">Copyright © 2024 Design & Developed by <a href="https://trailique.com/" rel="noreferrer" target="_blank" className="text-secondary">Trailique Infotech</a></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         );
//     }
// }

// export default AboutSection;
