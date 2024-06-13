// import React, { Component } from 'react';
// import DoctorImage from '../../images/about/doctor.jpeg';

// class AboutSection extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             expanded: false
//         };
//         this.toggleExpanded = this.toggleExpanded.bind(this);
//     }

//     toggleExpanded() {
//         this.setState(prevState => ({
//             expanded: !prevState.expanded
//         }));
//     }

//     render() {
//         const { expanded } = this.state;

//         return (
//             <div className="card about-area">
//                 <div className="doctor-image about-thumb-area">
//                     <img src={DoctorImage} alt="Doctor" className="about-thumb1" />
//                 </div>
//                 <div className="text-container">
//                     <h2>Dr. Bhavesh Jain</h2>
//                     <p>
//                         <span className="title">Family Physician & Homeopathic Consultant</span>
//                     </p>
//                     <p className="description">
//                         Dr. Bhavesh C. Jain MD (Homeopathy. Medicine), is a Consulting Homeopath in Pingle Vasti, Pune, India. He has more than 20 years of experience in treating various patients with acute and chronic diseases with homeopathy treatment. {expanded ? 'He is very much popular among his patients for his kind gesture, sympathetic nature, proper listening, and caring for patients. Book an appointment online with Dr. Bhavesh C. Jain.' : ''}
//                         {!expanded && (
//                             <span className="view-more" onClick={this.toggleExpanded}>
//                                 View More
//                             </span>
//                         )}
//                         {expanded && (
//                             <span className="view-more" onClick={this.toggleExpanded}>
//                                 View Less
//                             </span>
//                         )}
//                     </p>
//                 </div>
//             </div>
//         );
//     }
// }

// export default AboutSection;








// import React, { Component } from 'react';
// // import DoctorImage from '../../images/about/doctor.jpeg';

// class AboutSection extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             doctorDetails: null
//         };
//     }

//     componentDidMount() {
//         this.fetchDoctorDetails();
//     }

//     fetchDoctorDetails() {
//         fetch('http://localhost:5000/get-details') // Update URL if needed
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Doctor details:', data); // Log the received data to inspect the structure
//                 if (data && data.length > 0) {
//                     this.setState({ doctorDetails: data[0] }); // Assuming you're fetching a single doctor's details
//                 }
//             })
//             .catch(error => console.error('Error fetching doctor details:', error));
//     }

//     render() {
//         const { doctorDetails } = this.state;

//         return (
//             <div className="card about-area">
//                 <div className="doctor-image about-thumb-area">
//                     <img src={doctorDetails.photo} alt="Doctor" className="about-thumb1" />
//                 </div>
//                 <div className="text-container">
//                     {doctorDetails && (
//                         <>
//                             <h2>{doctorDetails.name}</h2>
//                             <p>
//                                 <span className="title">{doctorDetails.degrees ? doctorDetails.degrees.join(', ') : ''}</span>
//                             </p>
//                             <p className="description">
//                                 {doctorDetails.briefDescription} {doctorDetails.testimonials && doctorDetails.testimonials.map(testimonial => testimonial.text).join(' ')}
//                             </p>
//                         </>
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }

// export default AboutSection;






import React, { Component } from 'react';

class AboutSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorDetails: null
        };
    }

    componentDidMount() {
        this.fetchDoctorDetails();
    }

    fetchDoctorDetails() {
        fetch('http://localhost:4000/get-details') // Update URL if needed
            .then(response => response.json())
            .then(data => {
                console.log('Doctor details:', data); // Log the received data to inspect the structure
                if (data && data.length > 0) {
                    // Decode base64 photo
                    const decodedData = this.decodeBase64(data[0].photo);
                    data[0].photo = decodedData;
                    this.setState({ doctorDetails: data[0] }); // Assuming you're fetching a single doctor's details
                }
            })
            .catch(error => console.error('Error fetching doctor details:', error));
    }

    // Function to decode base64 string
    decodeBase64(base64String) {
        const decodedString = atob(base64String);
        const uint8Array = new Uint8Array(decodedString.length);
        for (let i = 0; i < decodedString.length; i++) {
            uint8Array[i] = decodedString.charCodeAt(i);
        }
        return URL.createObjectURL(new Blob([uint8Array]));
    }

    render() {
        const { doctorDetails } = this.state;

        return (
            <div className="card about-area">
                <div className="doctor-image about-thumb-area">
                    {doctorDetails && <img src={doctorDetails.photo} alt="Doctor" className="about-thumb1" />}
                </div>
                <div className="text-container">
                    {doctorDetails && (
                        <>
                            <h2>{doctorDetails.name}</h2>
                            <p>
                                <span className="title">{doctorDetails.speciality}</span>
                            </p>
                            <p className="description">
                                {doctorDetails.briefDescription} {doctorDetails.testimonials && doctorDetails.testimonials.map(testimonial => testimonial.text).join(' ')}
                            </p>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default AboutSection;
