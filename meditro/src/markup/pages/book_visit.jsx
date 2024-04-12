// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import {Accordion} from 'react-bootstrap';

// // Import Images
// import bnrImg1 from "../../images/banner/img1.jpg";
// import waveBlue from "../../images/shap/wave-blue.png";
// import circleDots from "../../images/shap/circle-dots.png";
// import plusBlue from "../../images/shap/plus-blue.png";
// import servicesPic5 from "../../images/services/pic5.jpg";
// // import pdf from "../../images/icon/pdf.png";
// // import doc from "../../images/icon/doc.png";

// class BookVisit extends Component{
	
// 	render(){
// 		return (
// 			<>
				
// 				<div className="page-content bg-white">
					
// 					<div className="banner-wraper">
// 						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
// 							<div className="container">
// 								<div className="page-banner-entry text-center">
// 									<h1>Home-Nurse</h1>
// 									<nav aria-label="breadcrumb" className="breadcrumb-row">
// 										<ul className="breadcrumb">
// 											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
// 											<li className="breadcrumb-item active" aria-current="page">Service Details</li>
// 										</ul>
// 									</nav>
// 								</div>
// 							</div>
// 							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
// 							<img className="pt-img2 animate2" src={circleDots} alt=""/>
// 							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
// 						</div>
// 					</div>
					
// 					<section className="section-area section-sp1">
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-lg-8 mb-30">
// 									<div className="ttr-media mb-30">
// 										<img src={servicesPic5} className="rounded" alt=""/>
// 									</div>
// 									<div className="clearfix">
// 										<div className="head-text mb-30">
// 											<h2 className="title mb-15">Why choose our nurse?</h2>
// 											<p className="mb-0">Nurses that truly cares</p>
// 										</div>
// 										<div className="row align-items-center">
// 											<div className="col-md-6 mb-30">
// 												<ul className="list-check-squer mb-0">
// 													<li>Then along come two they</li>
// 													<li>That’s just a little bit more than</li>
// 													<li>Standard dummy text ever since</li>
// 													<li>Simply dummy text of the printing</li>
// 													<li>Make a type specimen book</li>
// 												</ul>
// 											</div>
// 											<div className="col-md-6 mb-30">
// 												<div className="skillbar-box mb-30">
// 													<h6 className="title">Advanced Technology</h6>
// 													<div className="skillbar appear">
// 														<p className="skillbar-bar" style={{width: "96%"}}></p>
// 														<span className="skill-bar-percent">96%</span>
// 													</div>
// 												</div>
// 												<div className="skillbar-box mb-30">
// 													<h6 className="title">Certified Engineers</h6>
// 													<div className="skillbar appear">
// 														<p className="skillbar-bar" style={{width: "79%"}}></p>
// 														<span className="skill-bar-percent">79%</span>
// 													</div>
// 												</div>
// 												<div className="skillbar-box mb-0">
// 													<h6 className="title">6 years Experience</h6>
// 													<div className="skillbar appear">
// 														<p className="skillbar-bar" style={{width: "75%"}}></p>
// 														<span className="skill-bar-percent">75%</span>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="clearfix">
// 										<div className="head-text mb-30">
// 											<h4 className="title mb-10">Popular Questions</h4>
// 											<p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
// 										</div>
// 										<Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
// 											<Accordion.Item eventKey="0">
// 												<Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
// 												<Accordion.Body>
// 													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// 												</Accordion.Body>
// 											</Accordion.Item>
// 											<Accordion.Item eventKey="1">
// 												<Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
// 												<Accordion.Body>
// 													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// 												</Accordion.Body>
// 											</Accordion.Item>
// 											<Accordion.Item eventKey="2">
// 												<Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
// 												<Accordion.Body>
// 													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// 												</Accordion.Body>
// 											</Accordion.Item>
// 											<Accordion.Item eventKey="3">
// 												<Accordion.Header>What types of systems do you support?</Accordion.Header>
// 												<Accordion.Body>
// 													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// 												</Accordion.Body>
// 											</Accordion.Item>
// 											<Accordion.Item eventKey="4">
// 												<Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
// 												<Accordion.Body>
// 													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// 												</Accordion.Body>
// 											</Accordion.Item>
// 											<Accordion.Item eventKey="5">
// 												<Accordion.Header>How Can I Contact You?</Accordion.Header>
// 												<Accordion.Body>
// 													<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// 												</Accordion.Body>
// 											</Accordion.Item>
// 										</Accordion>
// 									</div>
// 								</div>
// 								<div className="col-lg-4">
// 									<aside className="sticky-top pb-1">
// 										<div className="widget">
// 											<ul className="service-menu">
// 												<li className="active"><Link to="/service-detail"><span>Engine Diagnostics</span><i className="fa fa-angle-right"></i></Link></li>
// 												<li><Link to="/service-detail"><span>Lube Oil and Filters</span><i className="fa fa-angle-right"></i></Link></li>
// 												<li><Link to="/service-detail"><span>Belts and Hoses</span><i className="fa fa-angle-right"></i></Link></li>
// 												<li><Link to="/service-detail"><span>Air Conditioning</span><i className="fa fa-angle-right"></i></Link></li>
// 												<li><Link to="/service-detail"><span>Brake Repair</span><i className="fa fa-angle-right"></i></Link></li>
// 												<li><Link to="/service-detail"><span>Tire and Wheel Services</span><i className="fa fa-angle-right"></i></Link></li>
// 											</ul>
// 										</div>
// 										{/* <div className="widget">
// 											<div className="brochure-bx">
// 												<h5 className="title-head">Download</h5>
// 												<Link to="#" className="download-link">
// 													<img src={pdf} alt=""/>
// 													<h5 className="title">Download our Brochures</h5>
// 													<span>Download</span>
// 												</Link>
// 												<Link to="#" className="download-link">
// 													<img src={doc} alt=""/>
// 													<h5 className="title">Our Company Details</h5>
// 													<span>Download</span>
// 												</Link>
// 											</div>
// 										</div> */}
										
// 									</aside>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
					
// 				</div>
				
// 			</>
// 		);
// 	}
// }

// export default BookVisit;




















// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const BookVisit = ({ doctors }) => {
//   const { doctorId } = useParams();

//   // Find the doctor based on the doctorId parameter
//   const doctor = doctors.find(doc => doc.id === parseInt(doctorId));

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);

//   const styles = {
//     container: {
//       padding: '20px',
//       marginTop: '120px',
//     },
//     header: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '20px',
//     },
//     title: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       display: 'flex',
//       alignItems: 'center', // Align icon and text vertically
//     },
//     homeIcon: {
//       marginRight: '10px', // Add spacing between icon and text
//       fontSize: '24px',
//     },
//     fees: {
//       fontSize: '18px',
//     },
//     datesContainer: {
//       display: 'flex',
//       overflowX: 'auto', // Enable horizontal scrolling
//       whiteSpace: 'nowrap', // Prevent line breaks
//       marginBottom: '20px',
//     },
//     dateButton: {
//       marginBottom: '10px',
//       border: '1px solid #ccc',
//       borderRadius: '5px',
//       padding: '10px',
//       cursor: 'pointer',
//       marginRight: '10px', // Add space between date buttons
//     },
//     timingsContainer: {
//       marginBottom: '10px',
//     },
//     timeButton: {
//       marginBottom: '10px',
//       border: '1px solid #ccc',
//       borderRadius: '5px',
//       padding: '10px',
//       cursor: 'pointer',
//       marginRight: '10px', // Add space between time buttons
//     },
//     bookButton: {
//       padding: '10px',
//       backgroundColor: 'blue',
//       color: 'white',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//     },
//   };

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setSelectedTime(null); // Reset selected time when a new date is clicked
//   };

//   const handleTimeClick = (time) => {
//     setSelectedTime(time);
//   };

//   const handleBookAppointment = () => {
//     // Logic to handle booking appointment
//     // console.log(Book appointment for ${selectedTime} on ${selectedDate});
// 	console.log(`Book appointment for ${selectedTime} on ${selectedDate}`);

//   };

//   const availableSlots = doctor && doctor.availableSlots ? doctor.availableSlots : [
//     { date: '2024-03-01', timings: ['9:00 AM', '10:00 AM', '11:00 AM'] },
//     { date: '2024-03-02', timings: ['9:00 AM', '10:00 AM', '11:00 AM'] },
//     // Add more dates and timings as needed
//   ];

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>
//           <Link to="/" style={styles.homeIcon}>
//             <i className="fa fa-home"></i>
//           </Link>
//           Book Visit
//         </h1>
//       </div>
//       {/* <h1>{doctor ? Book Visit ${doctor.name} : "Book Visit Doctor"}</h1> */}
// 	  <h1>{doctor ? `Book Visit ${doctor.name}` : "Book Visit Doctor"}</h1>

//       {doctor && (
//         <>
//           <h2>{doctor.name}</h2>
//           <div style={styles.fees}>Fees: {doctor.fees}</div>
//         </>
//       )}
//       <div style={styles.datesContainer}>
//         {availableSlots.map((slot, index) => (
//           <div key={index} style={{ display: 'inline-block' }}>
//             <button style={styles.dateButton} onClick={() => handleDateClick(slot.date)}>
//               {slot.date}
//             </button>
//             {selectedDate === slot.date && (
//               <div style={styles.timingsContainer}>
//                 {slot.timings.map((timing, index) => (
//                   <button key={index} style={styles.timeButton} onClick={() => handleTimeClick(timing)}>
//                     {timing}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       {selectedDate && selectedTime && (
//         <button style={styles.bookButton} onClick={handleBookAppointment}>
//           Book Appointment for {selectedTime} on {selectedDate}
//         </button>
//       )}
//     </div>
//   );
// };

// export default BookVisit;














import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BookVisit = ({ doctors }) => {
  const { doctorId } = useParams();

  // Find the doctor based on the doctorId parameter
  const doctor = doctors.find(doc => doc.id === parseInt(doctorId));

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const styles = {
    container: {
      padding: '20px',
      marginTop: '120px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center', // Align icon and text vertically
    },
    homeIcon: {
      marginRight: '10px', // Add spacing between icon and text
      fontSize: '24px',
    },
    fees: {
      fontSize: '18px',
    },
    datesContainer: {
      marginBottom: '20px',
      display: 'flex',
      overflowX: 'auto', // Enable horizontal scrolling
    },
    dateButton: {
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      cursor: 'pointer',
      marginRight: '10px', // Add space between date buttons
    },
    timingsContainer: {
      marginBottom: '10px',
    },
    timeButton: {
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      cursor: 'pointer',
      marginRight: '10px', // Add space between time buttons
    },
    bookButton: {
      padding: '10px',
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when a new date is clicked
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    // Logic to handle booking appointment
    console.log('Book appointment for ${selectedTime} on ${selectedDate}');
  };

  // Generate dates for the current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dates = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    dates.push(date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }));
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <Link to="/" style={styles.homeIcon}>
            <i className="fa fa-home"></i>
          </Link>
          Book Visit
        </h1>
      </div>
      <h1>{doctor ? 'Book Visit ${doctor.name}' : "Book Visit Doctor"}</h1>
      {doctor && (
        <>
          <h2>{doctor.name}</h2>
          <div style={styles.fees}>Fees: {doctor.fees}</div>
        </>
      )}
      <div style={styles.datesContainer}>
        {dates.map((date, index) => (
          <button key={index} style={styles.dateButton} onClick={() => handleDateClick(date)}>
            {date}
          </button>
        ))}
      </div>
      {selectedDate && (
        <>
          <div style={styles.timingsContainer}>
            {/* Display available timings for selected date */}
          </div>
          {selectedTime && (
            <button style={styles.bookButton} onClick={handleBookAppointment}>
              Book Appointment for {selectedTime} on {selectedDate}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default BookVisit;





