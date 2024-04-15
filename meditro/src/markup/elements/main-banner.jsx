// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// // Import Images
// import bg1 from '../../images/main-banner/bg1.jpg';
// import doctorImg from '../../images/main-banner/doctor.png';
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/square-blue.png';
// import ptImg3 from '../../images/shap/chicle-blue-2.png';
// import ptImg4 from '../../images/shap/plus-orange.png';
// import ptImg5 from '../../images/shap/wave-orange.png';

// class aboutSection extends Component{
// 	render(){
// 		return(
// 			<>
				
// 				<div className="main-banner" style={{backgroundImage: "url("+bg1+")"}}>
// 					<div className="container inner-content">
// 						<div className="row align-items-center">
// 							<div className="col-lg-7 col-md-6 col-sm-7">
// 								<h6 className="title-ext text-primary">We Provide All Health Care Solution</h6>
// 								<h1>Elevate Your Wellness Embrace a Healthier Lifestyle for a Happier You!</h1>
// 								<Link to="/about-us" className="btn btn-secondary btn-lg shadow">Read More</Link>
// 							</div>
// 							<div className="col-lg-5 col-md-6 col-sm-5">
// 								<div className="banner-img">
// 									<img src={doctorImg} alt=""/>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<img className="pt-img1 animate1" src={ptImg1} alt=""/>
// 					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
// 					<img className="pt-img3 animate3" src={ptImg3} alt=""/>
// 					<img className="pt-img4 animate4" src={ptImg4} alt=""/>
// 					<img className="pt-img5 animate-wave" src={ptImg5} alt=""/>
// 				</div>
				
// 			</>
// 		);
// 	}
// }

// export default aboutSection;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// // Import Images
// import bg1 from '../../images/main-banner/bg1.jpg';
// import doctorImg from '../../images/main-banner/doctor.png';
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/square-blue.png';
// import ptImg3 from '../../images/shap/chicle-blue-2.png';
// import ptImg4 from '../../images/shap/plus-orange.png';
// import ptImg5 from '../../images/shap/wave-orange.png';

// class AboutSection extends Component {
//     render() {
//         return (
//             <>
//                 <div className="main-banner" style={{backgroundImage: "url("+bg1+")"}}>
//                     <div className="container inner-content">
//                         <div className="search-bar">
//                             <input 
//                             type="text" 
//                             placeholder="Search"
//                             id="quick-search"
//                             classname="xs-hide"
//                             name="quick_search" 
//                             />
//                             <i class="fa fa-search" ></i>
                           
//                         </div>
//                         <div className="row align-items-center">
//                             <div className="col-lg-7 col-md-6 col-sm-7">
//                                 <h6 className="title-ext text-primary">We Provide All Health Care Solution</h6>
//                                 <h1>Elevate Your Wellness Embrace a Healthier Lifestyle for a Happier You!</h1>
//                                 <Link to="/about-us" className="btn btn-secondary btn-lg shadow">Read More</Link>
//                             </div>
//                             <div className="col-lg-5 col-md-6 col-sm-5">
//                                 <div className="banner-img">
//                                     <img src={doctorImg} alt=""/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <img className="pt-img1 animate1" src={ptImg1} alt=""/>
//                     <img className="pt-img2 animate2" src={ptImg2} alt=""/>
//                     <img className="pt-img3 animate3" src={ptImg3} alt=""/>
//                     <img className="pt-img4 animate4" src={ptImg4} alt=""/>
//                     <img className="pt-img5 animate-wave" src={ptImg5} alt=""/>
//                 </div>
//             </>
//         );
//     }
// }

// export default AboutSection;




// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// // Import Images
// import bg1 from '../../images/main-banner/bg1.jpg';
// import doctorImg from '../../images/main-banner/doctor.png';
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/square-blue.png';
// import ptImg3 from '../../images/shap/chicle-blue-2.png';
// import ptImg4 from '../../images/shap/plus-orange.png';
// import ptImg5 from '../../images/shap/wave-orange.png';

// class AboutSection extends Component {
//     render() {
//         return (
//             <>
//                 <style>
//                     {`
//                     .search-bar-container {
//                         display: flex;
//                         justify-content: center;
//                         margin-top: 30px; /* Adjust margin-top as needed */
//                     }
//                     .search-bar {
//                         position: relative;
//                         display: flex;
//                         align-items: center;
//                         width: 400px; /* Adjust the width as needed */
//                         left: 350px;
//                         border-radius:5px;
//                         overflow: hidden;
//                         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//                         height:30px;
                        
//                     }

//                     .search-input {
//                         flex: 1; /* Fill remaining space */
//                         padding-right: 70px; /* Adjust as needed */
//                         border: none; /* Remove input border */
//                         outline: none; /* Remove input outline */
//                         font-size: 15px; /* Set font size */
//                     }

//                     .search-icon {
//                         position: absolute;
//                         right: 10px; /* Adjust as needed */
//                     }
//                     `}
//                 </style>
//                 <div className="main-banner" style={{backgroundImage: "url("+bg1+")"}}>
//                     <div className="container inner-content">
//                         <div className="search-bar">
//                             <input type="text" placeholder="Search" className="search-input" />
//                             <FontAwesomeIcon icon={faSearch} className="search-icon" />
//                         </div>
//                         <div className="row align-items-center">
//                             <div className="col-lg-7 col-md-6 col-sm-7">
//                                 <h6 className="title-ext text-primary">We Provide All Health Care Solution</h6>
//                                 <h1>Elevate Your Wellness Embrace a Healthier Lifestyle for a Happier You!</h1>
//                                 <Link to="/about-us" className="btn btn-secondary btn-lg shadow">Read More</Link>
//                             </div>
//                             <div className="col-lg-5 col-md-6 col-sm-5">
//                                 <div className="banner-img">
//                                     <img src={doctorImg} alt=""/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <img className="pt-img1 animate1" src={ptImg1} alt=""/>
//                     <img className="pt-img2 animate2" src={ptImg2} alt=""/>
//                     <img className="pt-img3 animate3" src={ptImg3} alt=""/>
//                     <img className="pt-img4 animate4" src={ptImg4} alt=""/>
//                     <img className="pt-img5 animate-wave" src={ptImg5} alt=""/>
//                 </div>
//             </>
//         );
//     }
// }

// export default AboutSection;


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faSearch } from '@fortawesome/free-solid-svg-icons';

// // Import Images
// import bg1 from '../../images/main-banner/bg1.jpg';
// import doctorImg from '../../images/main-banner/doctor.png';
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/square-blue.png';
// import ptImg3 from '../../images/shap/chicle-blue-2.png';
// import ptImg4 from '../../images/shap/plus-orange.png';
// import ptImg5 from '../../images/shap/wave-orange.png';

// class AboutSection extends Component {
//     render() {
//         return (
//             <>
//                 <style>
//                     {`
//                     .search-bar-container {
//                         display: flex;
//                         justify-content: center;
//                         margin-top: 30px; /* Adjust margin-top as needed */
                        
//                     }
                    

//                     .search-bar {
//                         position: relative;
//                         padding-right: 190px;
//                         display: flex;
//                         align-items: center;
//                         width: 600px; /* Adjust the width as needed */
//                         height:30px;
//                         border-radius: 7px; /* Add border radius */
//                         overflow: hidden; /* Hide overflow for rounded corners */
//                         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow */
//                         background-color:#ffffff;
                        
//                     }

//                     .search-input {
//                         flex: 1; /* Fill remaining space */
//                         padding-right: 190px; /* Adjust as needed */
//                         border: none; /* Remove input border */
//                         outline: none; /* Remove input outline */
//                         font-size: 16px; /* Set font size */

//                     }

//                     .icon {
//                         position: absolute;
//                         right: 10px; /* Adjust as needed */
//                     }
                    

                   
//                     `}
//                 </style>
//                 <div className="main-banner" style={{backgroundImage: "url("+bg1+")"}}>
//                     <div className="container inner-content">
//                         {/* <div className="search-bar-container">
//                             <div className="search-bar">
//                                 <input type="text" placeholder="Search" className="search-input" />
//                                 <FontAwesomeIcon icon={faSearch} className="icon" />
                              
//                             </div>
//                         </div> */}
//                         <div className="row align-items-center">
//                             <div className="col-lg-7 col-md-6 col-sm-7">
//                                 <h6 className="title-ext text-primary">We Provide All Health Care Solution</h6>
//                                 <h1>Elevate Your Wellness Embrace a Healthier Lifestyle for a Happier You!</h1>
//                                 <Link to="/about-us" className="btn btn-secondary btn-lg shadow">Read More</Link>
//                             </div>
//                             <div className="col-lg-5 col-md-6 col-sm-5">
//                                 <div className="banner-img">
//                                     <img src={doctorImg} alt=""/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <img className="pt-img1 animate1" src={ptImg1} alt=""/>
//                     <img className="pt-img2 animate2" src={ptImg2} alt=""/>
//                     <img className="pt-img3 animate3" src={ptImg3} alt=""/>
//                     <img className="pt-img4 animate4" src={ptImg4} alt=""/>
//                     <img className="pt-img5 animate-wave" src={ptImg5} alt=""/>
//                 </div>
//             </>
//         );
//     }
// }

// export default AboutSection;




import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Import Images
import bg1 from '../../images/main-banner/bg1.jpg';
import doctorImg from '../../images/main-banner/doctor.png';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/square-blue.png';
import ptImg3 from '../../images/shap/chicle-blue-2.png';
import ptImg4 from '../../images/shap/plus-orange.png';
import ptImg5 from '../../images/shap/wave-orange.png';

class AboutSection extends Component {
    render() {
        return (
            <>
                <style>
                    {`
                    .search-bar-container {
                        display: flex;
                        justify-content: center;
                        margin-top: 30px; /* Adjust margin-top as needed */
                        
                    }
                    

                    .search-bar {
                        position: relative;
                        padding-right: 190px;
                        display: flex;
                        align-items: center;
                        width: 600px; /* Adjust the width as needed */
                        height:30px;
                        border-radius: 7px; /* Add border radius */
                        overflow: hidden; /* Hide overflow for rounded corners */
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow */
                        background-color:#ffffff;
                        
                    }

                    .search-input {
                        flex: 1; /* Fill remaining space */
                        padding-right: 190px; /* Adjust as needed */
                        border: none; /* Remove input border */
                        outline: none; /* Remove input outline */
                        font-size: 16px; /* Set font size */

                    }

                    .icon {
                        position: absolute;
                        right: 10px; /* Adjust as needed */
                    }
                    

                   
                    `}
                </style>
                <div className="main-banner" style={{backgroundImage: "url("+bg1+")"}}>
                    <div className="container inner-content">
                        {/* <div className="search-bar-container">
                            <div className="search-bar">
                                <input type="text" placeholder="Search" className="search-input" />
                                <FontAwesomeIcon icon={faSearch} className="icon" />
                              
                            </div>
                        </div> */}
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6 col-sm-7">
                                <h6 className="title-ext text-primary">We Provide All Health Care Solution</h6>
                                <h1>Elevate Your Wellness Embrace a Healthier Lifestyle for a Happier You!</h1>
                                <Link to="/categories" className="btn btn-secondary btn-lg shadow">Book Appoinment</Link>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-5">
                                <div className="banner-img">
                                    <img src={doctorImg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="pt-img1 animate1" src={ptImg1} alt=""/>
                    <img className="pt-img2 animate2" src={ptImg2} alt=""/>
                    <img className="pt-img3 animate3" src={ptImg3} alt=""/>
                    <img className="pt-img4 animate4" src={ptImg4} alt=""/>
                    <img className="pt-img5 animate-wave" src={ptImg5} alt=""/>
                </div>
            </>
        );
    }
}

export default AboutSection;


