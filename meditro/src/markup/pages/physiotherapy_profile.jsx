import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import lineBg from '../../images/appointment/line-bg.png';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/wave-orange.png';
import ptImg3 from '../../images/shap/wave-blue.png';
import ptImg4 from '../../images/shap/circle-orange.png';

const PhysiotherapyProfile = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [specifications, setSpecifications] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [timing, setTiming] = useState('');
  const [timingError, setTimingError] = useState('');
  const [practiceType, setPracticeType] = useState('own-establishment');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [operatingHoursError, setOperatingHoursError] = useState('');
  const [operatingHours, setOperatingHours] = useState('');
  const [servicesOffered, setServicesOffered] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedService, setSelectedService] = useState('');
    const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset all previous errors
    setNameError('');
    setMobileError('');
    setAddressError('');
    setTimingError('');
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

    if (!address.trim()) {
        setAddressError('Address is required.');
        isValid = false;
      }
  
      // Timing validation
      if (!timing.trim()) {
        setTimingError('Timing is required.');
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
                    height: '1600px',
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
  Hello!! Let's Create Your Profile.
</h5>

                  <div>
                    <div
                      style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {/* <div style={{ width: '30%' }}> */}
                        {/* <label style={{ marginLeft: '10px' }}>Title:</label>
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
                        </select> */}
                      {/* </div> */}
                      <div style={{ width: '100%' }}>
                        <label style={{ marginLeft: '10px' }}> Full Name:</label> <br />
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

                        
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: '100%' }}>
                        <label style={{ marginLeft: '10px' }}>Address:</label> <br />
                        <input
                          type="text"
                          placeholder=" Enter Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          onBlur={(e) => {
                            if (!address.trim()) {
                              setAddressError('Address is required.');
                            }
                          }}
                          style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
                        />
                        {addressError && <span style={{ color: 'red' }}>{addressError}</span>}
                      </div>
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Mobile Number:</label>
                      <br />
                      <input
  type="text"
  placeholder="  Enter Mobile Number"
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

                    {/* <h6 style={{ color: '#ED7014' }}>Medical Registration:</h6> */}
                    <div style={{ marginBottom: '5px' }}>
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

                      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: '100%' }}>
                        <label style={{ marginLeft: '10px' }}>Specialization:</label> <br />
                        <input
                          type="text"
                          placeholder=" Enter Specialization"
                          value={specialization}
                          onChange={(e) => setSpecialization(e.target.value)}
                          style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
                        />
                      </div>
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

                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
  <div style={{ width: '100%' }}>
    <label style={{ color: '#333', marginLeft: '10px' }}>Services Offered:</label> <br />
    <select
      style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '10px' }}
      value={selectedService}
      onChange={(e) => setSelectedService(e.target.value)}
    >
      <option value="">Select</option>
      <option value="Massage Therapy">Massage Therapy</option>
      <option value="Exercise Therapy">Exercise Therapy</option>
      <option value="Manual Therapy">Manual Therapy</option>
      <option value="Electrotherapy">Electrotherapy</option>
      <option value="Acupuncture">Acupuncture</option>
    </select>
  </div>
</div>



                    <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginLeft: '10px' }}>Operating Hours:</label> <br />
                    <input
                      type="text"
                      placeholder=" Enter Operating Hours"
                      value={operatingHours}
                      onChange={(e) => setOperatingHours(e.target.value)}
                      onBlur={(e) => {
                        if (!operatingHours.trim()) {
                          setOperatingHoursError('Operating Hours are required.');
                        }
                      }}
                      style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
                    />
                    {operatingHoursError && <span style={{ color: 'red' }}>{operatingHoursError}</span>}
                  </div>


                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ marginLeft: '10px' }}>Certificate:</label>
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

                    {/* <hr style={{ margin: '30px 0' }} />

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
                    </div>  */}

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

export default PhysiotherapyProfile;







// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// import lineBg from '../../images/appointment/line-bg.png';
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/wave-orange.png';
// import ptImg3 from '../../images/shap/wave-blue.png';
// import ptImg4 from '../../images/shap/circle-orange.png';

// const PhysiotherapyProfile = () => {
//   const [name, setName] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [phone, setPhone] = useState('');
//   const [phoneError, setPhoneError] = useState('');
//   const [address, setAddress] = useState('');
//   const [addressError, setAddressError] = useState('');
  // const [qualification, setQualification] = useState('');
  // const [experience, setExperience] = useState('');
  // const [specialization, setSpecialization] = useState('');
  // const [registrationNumber, setRegistrationNumber] = useState('');
  // const [servicesOffered, setServicesOffered] = useState([]);
  // const [operatingHours, setOperatingHours] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Reset all previous errors
//     setNameError('');
//     setEmailError('');
//     setPhoneError('');
//     setAddressError('');
//     // Validation logic
//     let isValid = true;

//     if (!name.trim()) {
//       setNameError('Name is required.');
//       isValid = false;
//     }

//     if (!email.trim()) {
//       setEmailError('Email is required.');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
//       setEmailError('Invalid email address.');
//       isValid = false;
//     }

//     if (!phone.trim()) {
//       setPhoneError('Phone number is required.');
//       isValid = false;
//     } else if (!/^\d{10}$/.test(phone.trim())) {
//       setPhoneError('Invalid phone number.');
//       isValid = false;
//     }

//     if (!address.trim()) {
//       setAddressError('Address is required.');
//       isValid = false;
//     }

//     if (isValid) {
//       // Display success message
//       setSubmitted(true);
//       // Here you can make API calls to save the data
//       console.log('Submit button clicked');
//       // Show the success message
//       alert('Information is successfully saved.');
//     } else {
//       // Display error message for missing details
//       alert('Please fill all details correctly.');
//     }
//   };

//   return (
//     <section className="section-area account-wraper1">
//       <div className="container-fluid">
//         <div
//           className="appointment-inner section-sp2"
//           style={{
//             backgroundImage: `url(${lineBg})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: '20px 140px',
//           }}
//         >
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-xl-5 col-lg-6 col-md-6">
//                 <form
//                   className="form-container"
//                   style={{
//                     height: '1300px',
//                     width: '1000px',
//                     overflowY: 'scroll',
//                     marginLeft: '85px',
//                     marginTop: '60px',
//                     boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
//                     padding: '20px',
//                     borderRadius: '10px',
//                     WebkitOverflowScrolling: 'touch',
//                     scrollbarWidth: 'thin',
//                     scrollbarColor: 'transparent transparent',
//                   }}
//                 >
//                   <h5 style={{ marginTop: '30px', marginBottom: '50px', alignItems: 'center', textAlign: 'center' }}>
//                     Hello!! Let's Create Physiotherapy Profile.
//                   </h5>

//                   <div>
//                     <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '100%' }}>
//                         <label style={{ marginLeft: '10px' }}>Name:</label> <br />
//                         <input
//                           type="text"
//                           placeholder="Enter Name"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           onBlur={(e) => {
//                             if (!name.trim()) {
//                               setNameError('Name is required.');
//                             }
//                           }}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                         />
//                         {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
//                       </div>
//                     </div>

//                     <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '100%' }}>
//                         <label style={{ marginLeft: '10px' }}>Email:</label> <br />
//                         <input
//                           type="email"
//                           placeholder="Enter Email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           onBlur={(e) => {
//                             if (!email.trim() || !/\S+@\S+\.\S+/.test(email.trim())) {
//                               setEmailError('Invalid email address.');
//                             }
//                           }}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                         />
//                         {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
//                       </div>
//                     </div>

//                     <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '100%' }}>
//                         <label style={{ marginLeft: '10px' }}>Phone:</label> <br />
//                         <input
//                           type="text"
//                           placeholder="Enter Phone"
//                           value={phone}
//                           onChange={(e) => setPhone(e.target.value)}
//                           onBlur={(e) => {
//                             if (!phone.trim() || !/^\d{10}$/.test(phone.trim())) {
//                               setPhoneError('Invalid phone number.');
//                             }
//                           }}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                         />
//                         {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
//                       </div>
//                     </div>

                    // <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                    //   <div style={{ width: '100%' }}>
                    //     <label style={{ marginLeft: '10px' }}>Address:</label> <br />
                    //     <input
                    //       type="text"
                    //       placeholder="Enter Address"
                    //       value={address}
                    //       onChange={(e) => setAddress(e.target.value)}
                    //       onBlur={(e) => {
                    //         if (!address.trim()) {
                    //           setAddressError('Address is required.');
                    //         }
                    //       }}
                    //       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
                    //     />
                    //     {addressError && <span style={{ color: 'red' }}>{addressError}</span>}
                    //   </div>
                    // </div>

                    // <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                    //   <div style={{ width: '100%' }}>
                    //     <label style={{ marginLeft: '10px' }}>Qualification:</label> <br />
                    //     <input
                    //       type="text"
                    //       placeholder="Enter Qualification"
                    //       value={qualification}
                    //       onChange={(e) => setQualification(e.target.value)}
                    //       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
                    //     />
                    //   </div>
                    // </div>

                    // <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                    //   <div style={{ width: '100%' }}>
                    //     <label style={{ marginLeft: '10px' }}>Experience (in years):</label> <br />
                    //     <input
                    //       type="text"
                    //       placeholder="Enter Experience"
                    //       value={experience}
                    //       onChange={(e) => setExperience(e.target.value)}
                    //       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
                    //     />
                    //   </div>
                    // </div>

                    // <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                    //   <div style={{ width: '100%' }}>
                    //     <label style={{ marginLeft: '10px' }}>Specialization:</label> <br />
                    //     <input
                    //       type="text"
                    //       placeholder="Enter Specialization"
                    //       value={specialization}
                    //       onChange={(e) => setSpecialization(e.target.value)}
                    //       style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
                    //     />
                    //   </div>
                    // </div>

//                     <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '100%' }}>
//                         <label style={{ marginLeft: '10px' }}>Registration Number:</label> <br />
//                         <input
//                           type="text"
//                           placeholder="Enter Registration Number"
//                           value={registrationNumber}
//                           onChange={(e) => setRegistrationNumber(e.target.value)}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                         />
//                       </div>
//                     </div>

//                     <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '100%' }}>
//                         <label style={{ marginLeft: '10px' }}>Services Offered:</label> <br />
//                         <select
//                           multiple
//                           value={servicesOffered}
//                           onChange={(e) => setServicesOffered(Array.from(e.target.selectedOptions, (item) => item.value))}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '120px' }}
//                         >
//                           <option value="Massage Therapy">Massage Therapy</option>
//                           <option value="Exercise Therapy">Exercise Therapy</option>
//                           <option value="Manual Therapy">Manual Therapy</option>
//                           <option value="Electrotherapy">Electrotherapy</option>
//                           <option value="Acupuncture">Acupuncture</option>
//                           {/* Add more services here */}
//                         </select>
//                       </div>
//                     </div>

//                     <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//                       <div style={{ width: '100%' }}>
//                         <label style={{ marginLeft: '10px' }}>Operating Hours:</label> <br />
//                         <input
//                           type="text"
//                           placeholder="Enter Operating Hours"
//                           value={operatingHours}
//                           onChange={(e) => setOperatingHours(e.target.value)}
//                           style={{ marginLeft: '10px', width: 'calc(100% - 20px)', height: '40px' }}
//                         />
//                       </div>
//                     </div>

//                     <hr style={{ margin: '30px 0' }} />

//                     <div style={{ display: 'flex', justifyContent: 'center' }}>
//                       <button
//                         onClick={handleSubmit}
//                         style={{
//                           marginTop: '10px',
//                           backgroundColor: '#007bff',
//                           color: '#fff',
//                           padding: '5px 15px',
//                           borderRadius: '5px',
//                           border: 'none',
//                           cursor: 'pointer',
//                           margin: '0 auto',
//                         }}
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                   {submitted && (
//                     <div style={{ color: 'green', marginBottom: '20px' }}>Information is successfully saved.</div>
//                   )}
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

// export default PhysiotherapyProfile;

