// import React, { useState } from 'react';
// import lineBg from '../../images/appointment/line-bg.png';
// import appMobile from '../../images/appointment/mobile.png';
// import appWomen from '../../images/appointment/women.png';
// import appMapPin from '../../images/appointment/map-pin.png';
// import appSetting from '../../images/appointment/setting.png';
// import appCheck from '../../images/appointment/check.png';
// import appChat from '../../images/appointment/chat.png';
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/wave-orange.png';
// import ptImg3 from '../../images/shap/wave-blue.png';
// import ptImg4 from '../../images/shap/circle-orange.png';

// const ProfilePage = () => {
//   const [name, setName] = useState('');
//   const [specifications, setSpecifications] = useState('');
//   const [gender, setGender] = useState('');
//   const [city, setCity] = useState('');
//   const [title, setTitle] = useState('Mr.'); 
//   const [practiceType, setPracticeType] = useState('own-establishment');

//   const handleContinue = () => {
//     console.log('Continue button clicked');
//   };

//   const handlePracticeType = (type) => {
//     setPracticeType(type);
//   };


//   return (
//     <section className="section-area account-wraper1">
//       <div className="container-fluid">
//         <div className="appointment-inner section-sp2" style={{ backgroundImage: `url(${lineBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: '20px 140px' }}>
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-xl-5 col-lg-6 col-md-6">
//               <div className="form-container" style={{ height: '800px', overflowY: 'scroll', marginLeft: '5px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '10px', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
//                   <h5 style={{ marginTop: '20px' }}> Hello!! Let's build your dedicated profile.</h5>
//                   <div>
//                     <h6 style={{ color: '#ED7014' }}>Profile Details:</h6>
//                     <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '30%' }}>
//                         <label style={{ marginLeft: '10px' }}>Title:</label>
//                         <select
//                           value={title}
//                           onChange={(e) => setTitle(e.target.value)}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 40px)',height: '40px'  }}
//                         >
//                           <option value="Mr.">Mr.</option>
//                           <option value="Mrs.">Mrs.</option>
//                           <option value="Dr.">Dr.</option>
//                         </select>
//                       </div>
//                       <div style={{ width: '70%' }}>
//                         <label style={{ marginLeft: '10px' }}>Name:</label> <br />
//                         <input
//                           type="text"
//                           placeholder="Enter Your Name"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)',height: '40px'  }}
//                         />
//                       </div>
//                     </div>

//                    <div style={{ marginBottom: '10px' }}>
//   <label style={{ marginLeft: '10px' }}>Specialization:</label>
//   <br />
//   <select
//     value={specifications}
//     onChange={(e) => setSpecifications(e.target.value)}
//     style={{ marginLeft: '10px', width: 'calc(100% - 20px)',height: '40px' }}
//   >
//     <option value="">Select Specialization</option>
//     <option value="Dentist">Dentist</option>
//     <option value="Dermatologist">Dermatologist</option>
//     <option value="Gynecologist">Gynecologist</option>
//     <option value="Homeopath">Homeopath</option>
//     <option value="Ayurveda">Ayurveda</option>
//     <option value="General Physician">General Physician</option>
//   </select>
// </div>

//                     <div style={{ marginBottom: '20px' }}>
//                       <label style={{ marginLeft: '10px' }}>Gender:</label> <br />
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={gender === 'Male'}
//                         onChange={() => setGender('Male')}
//                         style={{ marginLeft: '10px' }}
//                       />
//                       Male
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={gender === 'Female'}
//                         onChange={() => setGender('Female')}
//                         style={{ marginLeft: '10px' }}
//                       />
//                       Female
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Other"
//                         checked={gender === 'Other'}
//                         onChange={() => setGender('Other')}
//                         style={{ marginLeft: '10px' }}
//                       />
//                       Other
//                     </div>

//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>City:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="Enter your City name"
//                         value={city}
//                         onChange={(e) => setCity(e.target.value)}
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)',height: '40px'  }}
//                       />
//                     </div>
//                     <hr style={{ margin: '30px 0' }} /> 

//                     <h6 style={{ color: '#ED7014' }}>Medical Registration:</h6>
//       <div style={{ marginBottom: '10px' }}>
//         <label style={{ marginLeft: '10px' }}>Registration Number:</label>
//         <br />
//         <input
//           type="text"
//           placeholder="Registration Number"
//           style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//         />
//       </div>
//       <div style={{ marginBottom: '10px' }}>
//         <label style={{ marginLeft: '10px' }}>Registration Council:</label>
//         <br />
//         <input
//           type="text"
//           placeholder="Registration Council"
//           style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//         />
//       </div>
//       <div style={{ marginBottom: '10px' }}>
//         <label style={{ marginLeft: '10px' }}>Registration Year:</label>
//         <br />
//         <input
//           type="text"
//           placeholder="Registration Year"
//           style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//         />
//       </div>

//       <hr style={{ margin: '30px 0' }} /> 


//       <h6 style={{ color: '#ED7014' }}>Education Qualification:</h6>
//   <div style={{ marginBottom: '10px' }}>
//     <label style={{ marginLeft: '10px' }}>Degree:</label>
//     <br />
//     <input
//       type="text"
//       placeholder="Degree"
//       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//     />
//   </div>
//   <div style={{ marginBottom: '10px' }}>
//     <label style={{ marginLeft: '10px' }}>College/Institute:</label>
//     <br />
//     <input
//       type="text"
//       placeholder="College/Institute"
//       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//     />
//   </div>
//   <div style={{ marginBottom: '10px' }}>
//     <label style={{ marginLeft: '10px' }}>Year of Completion:</label>
//     <br />
//     <input
//       type="text"
//       placeholder="Year of Completion"
//       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//     />
//   </div>
//   <div style={{ marginBottom: '10px' }}>
//     <label style={{ marginLeft: '10px' }}>Years of Experience:</label>
//     <br />
//     <input
//       type="text"
//       placeholder="Years of Experience"
//       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//     />
//   </div>


//   <hr style={{ margin: '30px 0' }} /> 


//   <h6 style={{ color: '#ED7014' }}>Connect a Practice:</h6>
// <div style={{ marginBottom: '10px' }}>
//   <input
//     type="radio"
//     id="own-establishment"
//     name="practice-type"
//     value="own-establishment"
//     onChange={() => handlePracticeType('own-establishment')}
//   />
//   <label htmlFor="own-establishment">I own an establishment</label> <br />

// <input
//   type="radio"
//   id="visit-establishment"
//   name="practice-type"
//   value="visit-establishment"
//   onChange={() => handlePracticeType('visit-establishment')}
// />
// <label htmlFor="visit-establishment">I visit an establishment</label>
// </div>

// {practiceType === 'own-establishment' && (
// <div>
//   <h6 style={{ color: '#ED7014' }}>Establishment Basic Details:</h6>
//   <div style={{ marginBottom: '10px' }}>
//     <label style={{ marginLeft: '10px' }}>Establishment Name:</label>
//     <br />
//     <input
//       type="text"
//       placeholder="Establishment Name"
//       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//     />
//   </div>
//   <div style={{ marginBottom: '10px' }}>
//     <label style={{ marginLeft: '10px' }}>City:</label>
//     <br />
//     <input
//       type="text"
//       placeholder="City"
//       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//     />
//   </div>
//   <div style={{ marginBottom: '10px' }}>
//     <label style={{ marginLeft: '10px' }}>Location:</label>
//     <br />
//     <input
//       type="text"
//       placeholder="Location"
//       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//     />
//   </div>
// </div>
// )}

// <hr style={{ margin: '30px 0' }} /> 

// <h6 style={{ color: '#ED7014' }}>Identity Proof:</h6>
// <p>Please upload your identity proof to ensure that the ownership of your profile remains with only you.</p>
// <p><span style={{ fontWeight: 'bold', color: '#000000' }}>Acceptable Documents:</span><br /> Aadhar Card <br />Driving License <br /> Voter Card.</p>
// <input type="file" accept=".pdf,.jpg,.jpeg,.png" /> 
// <hr />

// <button onClick={handleContinue} style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', padding: '5px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginLeft: '150px' }}>Submit</button>
// </div>
// </div>
// </div>
// <div className="col-xl-7 col-lg-6 col-md-6">
// <div className="appointment-thumb">
// <img src={appMobile} alt="" />
// <div className="images-group">
// <img className="img1" src={appWomen} alt="" />
// <img className="img2" src={appMapPin} alt="" />
// <img className="img3" src={appSetting} alt="" />
// <img className="img4" src={appCheck} alt="" />
// <img className="img5" src={appChat} alt="" />
// </div>
// </div>
// </div>
// </div>
// </div>
// <img className="pt-img1 animate1" src={ptImg1} alt="" />
// <img className="pt-img2 animate-wave" src={ptImg2} alt="" />
// <img className="pt-img3 animate-wave" src={ptImg3} alt="" />
// <img className="pt-img4 animate2" src={ptImg4} alt="" />
// </div>
// </div>
// </section>
// );
// };

// export default ProfilePage;




// // import React, { useState } from 'react';

// // const ProfilePage = () => {
// //   const [name, setName] = useState('');
// //   const [specifications, setSpecifications] = useState('');
// //   const [gender, setGender] = useState('');
// //   const [city, setCity] = useState('');

// //   const handleContinue = () => {
// //     // Add logic to navigate to another page
// //     console.log('Continue button clicked');
// //   };

// //   return (
// //     <div style={{ marginTop: '120px', marginLeft: '50px' }}>
// //       <h5>Hello!! Let's build your dedicated profile.</h5>
// //       <div>
// //         <h6>Section A: Profile details:</h6>
// //         <div style={{ marginBottom: '10px' }}>
// //           <label style={{ marginRight: '10px' }}>Name:</label>
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             style={{ marginLeft: '10px' }}
// //           />
// //         </div>
// //         <div style={{ marginBottom: '10px' }}>
// //           <label style={{ marginRight: '10px' }}>Specifications:</label>
// //           <input
// //             type="text"
// //             value={specifications}
// //             onChange={(e) => setSpecifications(e.target.value)}
// //             style={{ marginLeft: '10px' }}
// //           />
// //         </div>
// //         <div style={{ marginBottom: '10px' }}>
// //           <label style={{ marginRight: '10px' }}>Gender:</label>
// //           <label style={{ marginRight: '10px' }}>
// //             <input
// //               type="radio"
// //               name="gender"
// //               value="Male"
// //               checked={gender === 'Male'}
// //               onChange={() => setGender('Male')}
// //             />
// //             Male
// //           </label>
// //           <label style={{ marginRight: '10px' }}>
// //             <input
// //               type="radio"
// //               name="gender"
// //               value="Female"
// //               checked={gender === 'Female'}
// //               onChange={() => setGender('Female')}
// //             />
// //             Female
// //           </label>
// //           <label>
// //             <input
// //               type="radio"
// //               name="gender"
// //               value="Other"
// //               checked={gender === 'Other'}
// //               onChange={() => setGender('Other')}
// //             />
// //             Other
// //           </label>
// //         </div>
// //         <div style={{ marginBottom: '10px' }}>
// //           <label style={{ marginRight: '10px' }}>City:</label>
// //           <input
// //             type="text"
// //             value={city}
// //             onChange={(e) => setCity(e.target.value)}
// //             style={{ marginLeft: '10px' }}
// //           />
// //         </div>
// //         <button onClick={handleContinue}>Continue</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;








// // import React, { useState } from 'react';
// // import lineBg from '../../images/appointment/line-bg.png';
// // import appMobile from '../../images/appointment/mobile.png';
// // import appWomen from '../../images/appointment/women.png';
// // import appMapPin from '../../images/appointment/map-pin.png';
// // import appSetting from '../../images/appointment/setting.png';
// // import appCheck from '../../images/appointment/check.png';
// // import appChat from '../../images/appointment/chat.png';
// // import ptImg1 from '../../images/shap/trangle-orange.png';
// // import ptImg2 from '../../images/shap/wave-orange.png';
// // import ptImg3 from '../../images/shap/wave-blue.png';
// // import ptImg4 from '../../images/shap/circle-orange.png';


// // const ProfilePage = () => {
// //   const [name, setName] = useState('');
// //   const [specifications, setSpecifications] = useState('');
// //   const [gender, setGender] = useState('');
// //   const [city, setCity] = useState('');

// //   const handleContinue = () => {
// //     // Add logic to navigate to another page
// //     console.log('Continue button clicked');
// //   };

// //   return (
// //     <section className="section-area account-wraper1">
// //       <div className="container-fluid">
// //         <div className="appointment-inner section-sp2" style={{ backgroundImage: `url(${lineBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: '20px 140px' }}>
// //           <div className="container">
// //             <div className="row align-items-center">
// //               <div className="col-xl-5 col-lg-6 col-md-6">
// //                 <div style={{  marginLeft: '20px' }}>
// //                   <h5>Hello!! Let's build your dedicated profile.</h5>
// //                   <div>
// //                     <h6>Section A: Profile details:</h6>
// //                     <div style={{ marginBottom: '10px' }}>
// //                       <label style={{ marginRight: '10px' }}>Name:</label>
// //                       <input
// //                         type="text"
// //                         value={name}
// //                         onChange={(e) => setName(e.target.value)}
// //                         style={{ marginLeft: '10px' }}
// //                       />
// //                     </div>
// //                     <div style={{ marginBottom: '10px' }}>
// //                       <label style={{ marginRight: '10px' }}>Specifications:</label>
// //                       <input
// //                         type="text"
// //                         value={specifications}
// //                         onChange={(e) => setSpecifications(e.target.value)}
// //                         style={{ marginLeft: '10px' }}
// //                       />
// //                     </div>
// //                     <div style={{ marginBottom: '10px' }}>
// //                       <label style={{ marginRight: '10px' }}>Gender:</label>
// //                       <label style={{ marginRight: '10px' }}>
// //                         <input
// //                           type="radio"
// //                           name="gender"
// //                           value="Male"
// //                           checked={gender === 'Male'}
// //                           onChange={() => setGender('Male')}
// //                         />
// //                         Male
// //                       </label>
// //                       <label style={{ marginRight: '10px' }}>
// //                         <input
// //                           type="radio"
// //                           name="gender"
// //                           value="Female"
// //                           checked={gender === 'Female'}
// //                           onChange={() => setGender('Female')}
// //                         />
// //                         Female
// //                       </label>
// //                       <label>
// //                         <input
// //                           type="radio"
// //                           name="gender"
// //                           value="Other"
// //                           checked={gender === 'Other'}
// //                           onChange={() => setGender('Other')}
// //                         />
// //                         Other
// //                       </label>
// //                     </div>
// //                     <div style={{ marginBottom: '10px' }}>
// //                       <label style={{ marginRight: '10px' }}>City:</label>
// //                       <input
// //                         type="text"
// //                         value={city}
// //                         onChange={(e) => setCity(e.target.value)}
// //                         style={{ marginLeft: '10px' }}
// //                       />
// //                     </div>
// //                     <button onClick={handleContinue}>Continue</button>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="col-xl-7 col-lg-6 col-md-6">
// //                 <div className="appointment-thumb">
// //                   <img src={appMobile} alt=""/>
// //                   <div className="images-group">
// //                     <img className="img1" src={appWomen} alt=""/>
// //                     <img className="img2" src={appMapPin} alt=""/>
// //                     <img className="img3" src={appSetting} alt=""/>
// //                     <img className="img4" src={appCheck} alt=""/>
// //                     <img className="img5" src={appChat} alt=""/>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <img className="pt-img1 animate1" src={ptImg1} alt=""/>
// //           <img className="pt-img2 animate-wave" src={ptImg2} alt=""/>
// //           <img className="pt-img3 animate-wave" src={ptImg3} alt=""/>
// //           <img className="pt-img4 animate2" src={ptImg4} alt=""/>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProfilePage;


























// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// import lineBg from '../../images/appointment/line-bg.png';
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/wave-orange.png';
// import ptImg3 from '../../images/shap/wave-blue.png';
// import ptImg4 from '../../images/shap/circle-orange.png';

// const ProfilePage = () => {
//   const [name, setName] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [specifications, setSpecifications] = useState('');
//   const [gender, setGender] = useState('');
//   const [city, setCity] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [mobileError, setMobileError] = useState('');
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [title, setTitle] = useState('Mr.'); 
//   const [practiceType, setPracticeType] = useState('own-establishment');
//   const [clinicName, setClinicName] = useState('');
//   const [clinicCity, setClinicCity] = useState('');
//   const [clinicLocation, setClinicLocation] = useState('');

//   // const history = useHistory();
//   // const [showSuccessMessage, setShowSuccessMessage] = useState(false);


//   // const handleSubmit = () => {
//   //   // Reset all previous errors
//   //   setNameError('');
//   //   setMobileError('');
//   //   setEmailError('');

//   //   // Validation logic
//   //   let isValid = true;

//   //   if (!name) {
//   //     setNameError('Name is required.');
//   //     isValid = false;
//   //   }

//   //   if (!mobile) {
//   //     setMobileError('Mobile number is required.');
//   //     isValid = false;
//   //   } else if (!/^\d{10}$/.test(mobile)) {
//   //     setMobileError('Invalid mobile number.');
//   //     isValid = false;
//   //   }

//   //   if (!email) {
//   //     setEmailError('Email is required.');
//   //     isValid = false;
//   //   } else if (!/\S+@\S+\.\S+/.test(email)) {
//   //     setEmailError('Invalid email address.');
//   //     isValid = false;
//   //   }

//   //   // Proceed if all validations pass
//   //   if (isValid) {
//   //     console.log('Continue button clicked');
//   //   }

    
//   // };

//   // const handlePracticeType = (type) => {
//   //   setPracticeType(type);
//   // };

//   // const handleCertificateUpload = (files) => {
//   //   const file = files[0];
//   // };

//   const handleSubmit = () => {
//     // Reset all previous errors
//     setNameError('');
//     setMobileError('');
//     setEmailError('');

//     // Validation logic
//     let isValid = true;

//     if (!name) {
//       setNameError('Name is required.');
//       isValid = false;
//     }

//     if (!mobile) {
//       setMobileError('Mobile number is required.');
//       isValid = false;
//     } else if (!/^\d{10}$/.test(mobile)) {
//       setMobileError('Invalid mobile number.');
//       isValid = false;
//     }

//     if (!email) {
//       setEmailError('Email is required.');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Invalid email address.');
//       isValid = false;
//     }

//     // Proceed if all validations pass
//     if (isValid) {
//       console.log('Continue button clicked');
//     }
//   };

//   const handlePracticeType = (type) => {
//     setPracticeType(type);
//   };

//   const handleCertificateUpload = (files) => {
//     const file = files[0];
//   };

//   // The rest of your component code goes here


//   return (
//     <section className="section-area account-wraper1">
//       <div className="container-fluid">
//          <div className="appointment-inner section-sp2" style={{ backgroundImage: `url(${lineBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: '20px 140px' }}>
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-xl-5 col-lg-6 col-md-6">
//                 <form className="form-container" style={{ height: '1700px',width:'1000px', overflowY: 'scroll', marginLeft: '85px',marginTop:'60px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '10px', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
//                   <h5 style={{ marginTop: '30px',marginBottom:'50px' }}> Hello!! Let's build your dedicated profile.</h5>
//                   <div>
//                     {/* <h6 style={{ color: '#ED7014' }}>Profile Details:</h6> */}
//                     <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '30%' }}>
//                         <label style={{ marginLeft: '10px' }}>Title:</label>
//                         <select
//                           value={title}
//                           onChange={(e) => setTitle(e.target.value)}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)',height: '37px'  }}
//                         >
//                           {/* <option value="Mr.">Mr.</option>
//                           <option value="Mrs.">Mrs.</option> */}
//                           <option value="Dr.">Dr.</option>
//                         </select>
//                       </div>
//                       <div style={{ width: '70%' }}>
//                         <label style={{ marginLeft: '10px' }}>Name:</label> <br />
//                         <input
//                           type="text"
//                           placeholder="  Enter Your Name"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)',height: '40px'  }}
//                         />
//                       </div>
//                     </div>

                    

//                     <div style={{ marginBottom: '20px',marginTop:'20px' }}>
//                       <label style={{ marginLeft: '10px' }}>Gender:</label> <br />
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={gender === 'Male'}
//                         onChange={() => setGender('Male')}
//                         style={{ marginLeft: '10px' }}
//                       />
//                       Male
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={gender === 'Female'}
//                         onChange={() => setGender('Female')}
//                         style={{ marginLeft: '10px' }}
//                       />
//                       Female
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Other"
//                         checked={gender === 'Other'}
//                         onChange={() => setGender('Other')}
//                         style={{ marginLeft: '10px' }}
//                       />
//                       Other
//                     </div>

//                     {/* <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>City:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="  Enter your City name"
//                         value={city}
//                         onChange={(e) => setCity(e.target.value)}
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)',height: '40px'  }}
//                       />
//                     </div>
//  */}

//                     <div style={{ marginBottom: '10px' }}>
//   <label style={{ marginLeft: '10px' }}>Mobile Number:</label>
//   <br />
//   <input
//     type="text"
//     placeholder="  Enter your Mobile Number"
//     value={mobile}
//     onChange={(e) => setMobile(e.target.value)}
//     style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//   />
// </div>

// <div style={{ marginBottom: '10px' }}>
//   <label style={{ marginLeft: '10px' }}>Email:</label>
//   <br />
//   <input
//     type="email"
//     placeholder="  Enter your Email"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//   />
// </div>




//                     <hr style={{ margin: '30px 0' }} /> 

//                     <h6 style={{ color: '#ED7014' }}>Medical Registration:</h6>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Registration Number:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="  Enter Registration Number"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Registration Council:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="  Enter Registration Council"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Registration Year:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="  Enter Registration Year"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Specialization:</label>
//                       <br />
//                       <select
//                         value={specifications}
//                         onChange={(e) => setSpecifications(e.target.value)}
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)',height: '40px' }}
//                       >
//                         <option value="">  Select Specialization</option>
//                         <option value="Dentist">Dentist</option>
//                         <option value="Dermatologist">Dermatologist</option>
//                         <option value="Gynecologist">Gynecologist</option>
//                         <option value="Homeopath">Homeopath</option>
//                         <option value="Ayurveda">Ayurveda</option>
//                         <option value="General Physician">General Physician</option>
//                       </select>
//                     </div>

//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Year Of Experience:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="  Enter Year of Experience"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>
                    


//                     <div style={{ marginBottom: '10px' }}>
//   <label style={{ marginLeft: '10px' }}>Medical Certificate:</label>
//   <br />
//   <input
//     type="file"
//     accept="image/*, application/pdf"
//     onChange={(e) => handleCertificateUpload(e.target.files)}
//     style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//   />
// </div>





// <hr style={{ margin: '30px 0' }} />

//                     <h6 style={{ color: '#ED7014' }}>Clinic Details:</h6>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Clinic Name:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder=" Enter Your Clinic Name"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>City:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder=" Enter Your Clinic City"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Location:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder=" Enter Your Clinic Location"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>



//                     {/* <hr style={{ margin: '30px 0' }} /> 

//                     <h6 style={{ color: '#ED7014' }}>Education Qualification:</h6>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Degree:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="Degree"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>College/Institute:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="College/Institute"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Year of Completion:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="Year of Completion"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>
//                     <div style={{ marginBottom: '10px' }}>
//                       <label style={{ marginLeft: '10px' }}>Years of Experience:</label>
//                       <br />
//                       <input
//                         type="text"
//                         placeholder="Years of Experience"
//                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                       />
//                     </div>

//                     <hr style={{ margin: '30px 0' }} /> 

//                     <h6 style={{ color: '#ED7014' }}>Connect a Practice:</h6>
//                     <div style={{ marginBottom: '10px' }}>
//                       <input
//                         type="radio"
//                         id="own-establishment"
//                         name="practice-type"
//                         value="own-establishment"
//                         onChange={() => handlePracticeType('own-establishment')}
//                       />
//                       <label htmlFor="own-establishment">I own an establishment</label> <br />

//                       <input
//                         type="radio"
//                         id="visit-establishment"
//                         name="practice-type"
//                         value="visit-establishment"
//                         onChange={() => handlePracticeType('visit-establishment')}
//                       />
//                       <label htmlFor="visit-establishment">I visit an establishment</label>
//                     </div>

//                     {practiceType === 'own-establishment' && (
//                       <div>
//                         <h6 style={{ color: '#ED7014' }}>Establishment Basic Details:</h6>
//                         <div style={{ marginBottom: '10px' }}>
//                           <label style={{ marginLeft: '10px' }}>Establishment Name:</label>
//                           <br />
//                           <input
//                             type="text"
//                             placeholder="Establishment Name"
//                             style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                           />
//                         </div>
//                         <div style={{ marginBottom: '10px' }}>
//                           <label style={{ marginLeft: '10px' }}>City:</label>
//                           <br />
//                           <input
//                             type="text"
//                             placeholder="City"
//                             style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                           />
//                         </div>
//                         <div style={{ marginBottom: '10px' }}>
//                           <label style={{ marginLeft: '10px' }}>Location:</label>
//                           <br />
//                           <input
//                             type="text"
//                             placeholder="Location"
//                             style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                           />
//                         </div>
//                       </div>
//                     )} */}

//                     <hr style={{ margin: '30px 0' }} /> 

//                     <div>
//   <h6 style={{ color: '#ED7014' }}>Identity Proof:</h6>
//   <p>Please upload your identity proof document.</p>
//   <p><span style={{ fontWeight: 'bold', color: '#000000' }}>Acceptable Documents:</span><br /> Aadhar Card or Driving License or Voter Card.</p>
//   <input type="file" accept=".pdf,.jpg,.jpeg,.png" /> 
// </div>
// <hr />

// <div style={{ display: 'flex', justifyContent: 'center' }}>

// <button 
//   onClick={handleSubmit} 
//   style={{
//     marginTop: '10px', 
//     backgroundColor: '#007bff', 
//     color: '#fff', 
//     padding: '5px 15px', 
//     borderRadius: '5px', 
//     border: 'none', 
//     cursor: 'pointer', 
//     margin: '0 auto' 
//   }}
// >
//   Submit
// </button>
// </div>

//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <img className="pt-img1 animate1" src={ptImg1} alt="" />
//         <img className="pt-img2 animate-wave" src={ptImg2} alt="" />
//         <img className="pt-img3 animate-wave" src={ptImg3} alt="" />
//         <img className="pt-img4 animate2" src={ptImg4} alt="" />
//       </div>
//     </section>
//   );
// };

// export default ProfilePage;













// // import React, { useState } from 'react';
// // import lineBg from '../../images/appointment/line-bg.png';
// // import appMobile from '../../images/appointment/mobile.png';
// // import appWomen from '../../images/appointment/women.png';
// // import appMapPin from '../../images/appointment/map-pin.png';
// // import appSetting from '../../images/appointment/setting.png';
// // import appCheck from '../../images/appointment/check.png';
// // import appChat from '../../images/appointment/chat.png';
// // import ptImg1 from '../../images/shap/trangle-orange.png';
// // import ptImg2 from '../../images/shap/wave-orange.png';
// // import ptImg3 from '../../images/shap/wave-blue.png';
// // import ptImg4 from '../../images/shap/circle-orange.png';

// // const ProfilePage = () => {
// //   const [name, setName] = useState('');
// //   const [specifications, setSpecifications] = useState('');
// //   const [gender, setGender] = useState('');
// //   const [city, setCity] = useState('');
// //   const [title, setTitle] = useState('Mr.'); // Define title state variable

// //   const handleContinue = () => {
// //     // Add logic to navigate to another page
// //     console.log('Continue button clicked');
// //   };

// //   return (
// //     <section className="section-area account-wraper1">
// //       <div className="container-fluid">
// //         <div className="appointment-inner section-sp2" style={{ backgroundImage: `url(${lineBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: '20px 140px' }}>
// //           <div className="container">
// //             <div className="row align-items-center">
// //               <div className="col-xl-5 col-lg-6 col-md-6">
// //               <div className="form-container" style={{ marginLeft: '5px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '10px' }}>
// //                   <h5>Hello!! Let's build your dedicated profile.</h5>
// //                   <div>
// //                     <h6 style={{ color: '#ED7014' }}> Section A: Profile details:</h6>
// //                     <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
// //                       <div style={{ width: '30%' }}>
// //                         <label style={{ marginLeft: '10px' }}>Title:</label>
// //                         <select
// //                           value={title}
// //                           onChange={(e) => setTitle(e.target.value)}
// //                           style={{ marginLeft: '10px', width: 'calc(100% - 40px)' }}
// //                         >
// //                           <option value="Mr.">Mr.</option>
// //                           <option value="Mrs.">Mrs.</option>
// //                           <option value="Dr.">Dr.</option>
// //                         </select>
// //                       </div>
// //                       <div style={{ width: '70%' }}>
// //                         <label style={{ marginLeft: '10px' }}>Name:</label> <br />
// //                         <input
// //                           type="text"
// //                           placeholder="Name"
// //                           value={name}
// //                           onChange={(e) => setName(e.target.value)}
// //                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)' }}
// //                         />
// //                       </div>
// //                     </div>

// //                     <div style={{ marginBottom: '10px' }}>
// //                       <label style={{ marginLeft: '10px' }}>Specifications:</label>
// //                       <br />
// //                       <input
// //                         type="text"
// //                         placeholder="Specifications"
// //                         value={specifications}
// //                         onChange={(e) => setSpecifications(e.target.value)}
// //                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)' }}
// //                       />
// //                     </div>
// //                     <div style={{ marginBottom: '20px' }}>
// //                 <label style={{ marginLeft: '10px' }}>Gender:</label> <br />
// //                 <input
// //                  type="radio"
// //                  name="gender"
// //                  value="Male"
// //                 checked={gender === 'Male'}
// //     onChange={() => setGender('Male')}
// //     style={{ marginLeft: '10px' }}
// //   />
// //   Male
// //   <input
// //     type="radio"
// //     name="gender"
// //     value="Female"
// //     checked={gender === 'Female'}
// //     onChange={() => setGender('Female')}
// //     style={{ marginLeft: '10px' }}
// //   />
// //   Female
// //   <input
// //     type="radio"
// //     name="gender"
// //     value="Other"
// //     checked={gender === 'Other'}
// //     onChange={() => setGender('Other')}
// //     style={{ marginLeft: '10px' }}
// //   />
// //   Other
// // </div>

// //                     <div style={{ marginBottom: '10px' }}>
// //                       <label style={{ marginLeft: '10px' }}>City:</label>
// //                       <br />
// //                       <input
// //                         type="text"
// //                         placeholder="City"
// //                         value={city}
// //                         onChange={(e) => setCity(e.target.value)}
// //                         style={{ marginLeft: '10px', width: 'calc(100% - 20px)' }}
// //                       />
// //                     </div>

// //                     <button onClick={handleContinue} style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', padding: '5px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer' ,marginLeft:'150px'}}>Continue</button>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="col-xl-7 col-lg-6 col-md-6">
// //                 <div className="appointment-thumb">
// //                   <img src={appMobile} alt="" />
// //                   <div className="images-group">
// //                     <img className="img1" src={appWomen} alt="" />
// //                     <img className="img2" src={appMapPin} alt="" />
// //                     <img className="img3" src={appSetting} alt="" />
// //                     <img className="img4" src={appCheck} alt="" />
// //                     <img className="img5" src={appChat} alt="" />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <img className="pt-img1 animate1" src={ptImg1} alt="" />
// //           <img className="pt-img2 animate-wave" src={ptImg2} alt="" />
// //           <img className="pt-img3 animate-wave" src={ptImg3} alt="" />
// //           <img className="pt-img4 animate2" src={ptImg4} alt="" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProfilePage;






















import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import lineBg from '../../images/appointment/line-bg.png';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/wave-orange.png';
import ptImg3 from '../../images/shap/wave-blue.png';
import ptImg4 from '../../images/shap/circle-orange.png';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [specifications, setSpecifications] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [title, setTitle] = useState('');
  const [practiceType, setPracticeType] = useState('own-establishment');
  const [clinicName, setClinicName] = useState('');
  const [clinicCity, setClinicCity] = useState('');
  const [clinicLocation, setClinicLocation] = useState('');
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset all previous errors
    setNameError('');
    setMobileError('');
    setEmailError('');

    // Validation logic
    let isValid = true;

    if (!name.trim()) {
      setNameError('Name is required.');
      isValid = false;
    } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(name.trim())) {
      setNameError('Please enter your full name.');
      isValid = false;
    }
    if (!mobile.trim()) {
      setMobileError('Mobile number is required.');
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile.trim())) {
      setMobileError('Invalid mobile number. ');
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
      setEmailError('Invalid email address.');
      isValid = false;
    }

    if (isValid) {
      // Display success message
      setSubmitted(true);
      // Here you can make API calls to save the data
      console.log('Submit button clicked');
      // Show the success message
      alert('Information is successfully saved.');
    } else {
      // Display error message for missing details
      alert('Please fill all details correctly.');
    }
  };

  const handlePracticeType = (type) => {
    setPracticeType(type);
  };

  const handleCertificateUpload = (files) => {
    const file = files[0];
  };

  return (
    
    <section className="section-area account-wraper1">
      <div className="container-fluid">
        <div
          className="appointment-inner section-sp2"
          style={{
            backgroundImage: `url(${lineBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '20px 140px',
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <form
                  className="form-container"
                  style={{
                    height: '1700px',
                    width: '1000px',
                    overflowY: 'scroll',
                    marginLeft: '85px',
                    marginTop: '60px',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
                    padding: '20px',
                    borderRadius: '10px',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'transparent transparent',
                  }}
                >
                    <h5 style={{ marginTop: '30px', marginBottom: '50px', alignItems: 'center', textAlign: 'center' }}>

                    Hello!! Let's build your profile.
                  </h5>
                  <div>
                    <div
                      style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ width: '30%' }}>
                        <label style={{ marginLeft: '10px' }}>Title:</label>
                        <select
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          style={{
                            marginLeft: '10px',
                            width: 'calc(100% - 20px)',
                            height: '37px',
                          }}
                        >
                          <option value="Dr.">Dr.</option>
                        </select>
                      </div>
                      <div style={{ width: '70%' }}>
                        <label style={{ marginLeft: '10px' }}>Name:</label> <br />
                        <input
  type="text"
  placeholder="  Enter Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  onBlur={(e) => {
    if (!name.trim() || !/^[a-zA-Z]+ [a-zA-Z]+$/.test(name.trim())) {
      setNameError('Please enter your full name.');
    }
  }}
  style={{
    marginLeft: '10px',
    width: 'calc(100% - 20px)',
    height: '40px',
  }}
/>
{nameError && (
  <span style={{ color: 'red' }}>{nameError}</span>
)}

                      </div>
                    </div>

                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                      <label style={{ marginLeft: '10px' }}>Gender:</label> <br />
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={() => setGender('Male')}
                        style={{ marginLeft: '10px' }}
                      />
                      Male
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={() => setGender('Female')}
                        style={{ marginLeft: '10px' }}
                      />
                      Female
                      <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={gender === 'Other'}
                        onChange={() => setGender('Other')}
                        style={{ marginLeft: '10px' }}
                      />
                      Other
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Mobile Number:</label>
                      <br />
                      <input
  type="text"
  placeholder="  Enter your Mobile Number"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
  onBlur={(e) => {
    if (!/^\d{10}$/.test(mobile.trim()) && mobile.trim()) {
      setMobileError('Invalid mobile number');
    }
  }}
  style={{
    marginLeft: '10px',
    width: 'calc(100% - 20px)',
    height: '40px',
  }}
/>
{mobileError && (
  <span style={{ color: 'red' }}>{mobileError}</span>
)}
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Email:</label>
                      <br />
                      <input
  type="email"
  placeholder="  Enter your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  onBlur={(e) => {
    if (!/\S+@\S+\.\S+/.test(email.trim()) && email.trim()) {
      setEmailError('Invalid email address.');
    }
  }}
  style={{
    marginLeft: '10px',
    width: 'calc(100% - 20px)',
    height: '40px',
  }}
/>
{emailError && (
  <span style={{ color: 'red' }}>{emailError}</span>
)}
                    </div>

                    <hr style={{ margin: '30px 0' }} />

                    <h6 style={{ color: '#ED7014' }}>Medical Registration:</h6>
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Registration Number:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="  Enter Registration Number"
                        style={{
                          marginLeft: '10px',
                          width: 'calc(100% - 20px)',
                          height: '40px',
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Registration Council:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="  Enter Registration Council"
                        style={{
                          marginLeft: '10px',
                          width: 'calc(100% - 20px)',
                          height: '40px',
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Registration Year:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="  Enter Registration Year"
                        style={{
                          marginLeft: '10px',
                          width: 'calc(100% - 20px)',
                          height: '40px',
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Specialization:</label>
                      <br />
                      <select
                        value={specifications}
                        onChange={(e) => setSpecifications(e.target.value)}
                        style={{
                          marginLeft: '10px',
                          width: 'calc(100% - 20px)',
                          height: '40px',
                        }}
                      >
                        <option value="">  Select Specialization</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Dermatologist">Dermatologist</option>
                        <option value="Gynecologist">Gynecologist</option>
                        <option value="Homeopath">Homeopath</option>
                        <option value="Ayurveda">Ayurveda</option>
                        <option value="General Physician">General Physician</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Year Of Experience:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="  Enter Year of Experience"
                        style={{
                          marginLeft: '10px',
                          width: 'calc(100% - 20px)',
                          height: '40px',
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Medical Certificate:</label>
                      <br />
                      <input
                        type="file"
                        accept="image/*, application/pdf"
                        onChange={(e) => handleCertificateUpload(e.target.files)}
                        style={{
                          marginLeft: '10px',
                          width: 'calc(100% - 20px)',
                          height: '40px',
                        }}
                      />
                    </div>

                    <hr style={{ margin: '30px 0' }} />

                    <h6 style={{ color: '#ED7014' }}>Clinic Details:</h6>
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Clinic Name:</label>
                      <br />
                      <input
                        type="text"
                        placeholder=" Enter Your Clinic Name"
                        style={{
                          marginLeft: '10px',
                          width: 'calc(100% - 20px)',
                          height: '40px',
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>City:</label>
                      <br />
                      <input
                        type="text"
                        placeholder=" Enter Your Clinic City"
                        style={{
                          marginLeft: '10px',
                          width: 'calc(100% - 20px)',
                          height: '40px',
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Location:</label>
                      <br />
                      <input
                        type="text"
                        placeholder=" Enter Your Clinic Location"
                        style={{
                          marginLeft: '10px',
                          width: 'calc(100% - 20px)',
                          height: '40px',
                        }}
                      />
                    </div>

                    <hr style={{ margin: '30px 0' }} />

                    <div>
                      <h6 style={{ color: '#ED7014' }}>Identity Proof:</h6>
                      <p>Please upload your identity proof document.</p>
                      <p>
                        <span style={{ fontWeight: 'bold', color: '#000000' }}>Acceptable Documents:</span><br /> Aadhar Card or Driving License or Voter Card.
                      </p>
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                    </div>
                    <hr />

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                      onClick={handleSubmit}
                      style={{
                        marginTop: '10px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '5px 15px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        margin: '0 auto',
                      }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  {submitted && (
                    <div style={{ color: 'green', marginBottom: '20px' }}>
                      Information is successfully saved.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <img className="pt-img1 animate1" src={ptImg1} alt="" />
        <img className="pt-img2 animate-wave" src={ptImg2} alt="" />
        <img className="pt-img3 animate-wave" src={ptImg3} alt="" />
        <img className="pt-img4 animate2" src={ptImg4} alt="" />
      </div>
    </section>
  );
};

export default ProfilePage;

