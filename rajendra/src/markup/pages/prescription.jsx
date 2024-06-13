// import React, { useState } from 'react';
// import drLogo from "../../images/prescription/drlogo.png";

// const printStyles = `
// @media print {
//   .align-inputs {
//     display: flex;
//     align-items: center;
//   }
// }
// `;
// const Prescription = () => {
//   const doctors = [
//     {
//       name: 'Dr. Bhavesh C. Jain',
//       specialty: 'Family Physician & Homeopathic Consultant',
//       qualifications: 'BHMS, MD-Homeopathy',
//       address: 'Mantri Aangan Complex, Pingale Wasti Mundhawa, Pune - 411036.'
//     },
//     {
//       name: 'Dr. Sarah Smith',
//       specialty: 'Pediatrician',
//       qualifications: 'MBBS, DCH',
//       address: '123 Elm Street, Mumbai'
//     }
//   ];

//   const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(0); 
//   const [ageError, setAgeError] = useState(false); 
//   const [medicineName, setMedicineName] = useState(''); 
//   const [medicines, setMedicines] = useState([]); 
//   const [dosage, setDosage] = useState(''); 
//   const [duration, setDuration] = useState(''); 
//   const [foodType, setFoodType] = useState('before'); 
//   const [frequency, setFrequency] = useState(''); 
//   const [gender, setGender] = useState(''); 
//   const [errorMessage, setErrorMessage] = useState(''); 
//   const [successMessage, setSuccessMessage] = useState(''); 
  
//   const selectedDoctor = doctors[selectedDoctorIndex]; 

//   const handleAddMedicine = () => {
//     if (
//       medicineName.trim() !== "" &&
//       dosage.trim() !== "" &&
//       duration.trim() !== "" &&
//       foodType.trim() !== "" &&
//       frequency.trim() !== "" &&
//       /^[10+]+$/.test(frequency.trim()) 
//     ) {
//       const newMedicine = {
//         name: medicineName.trim(),
//         dosage: dosage.trim(),
//         duration: duration.trim(),
//         foodType: foodType.trim(),
//         frequency: frequency.trim()
//       };
//       setMedicines([...medicines, newMedicine]);
//       setMedicineName("");
//       setDosage("");
//       setDuration("");
//       setFoodType("before");
//       setFrequency("");
//     } else {
//       setErrorMessage("Please fill in all fields or enter a valid frequency (only '1', '-', '0', '2' are allowed).");
//       setSuccessMessage("");
//     }
//   };

//   const containerStyle = {
//     maxWidth: '800px',
//     margin: '100px auto 0',
//     padding: '10px',
//   };

//   const bigBoxStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: '#f9f9f9',
//     padding: '20px',
//     marginBottom: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   };

//   const logoAndDoctorInfoContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: '#6666ff', 
//     padding: '10px',
//     width: '100%', 
//     marginBottom: '20px',
//   };
  
//   const logoStyle = {
//     width: '100px',
//     height: '100px',
//     marginRight: '20px',
//   };
//   const labelStyle = {
//     marginRight: '10px',
//     marginBottom: '15px',
//     fontWeight: 'bold',
//     width: '150px', 
//     textAlign: 'right', 
//   };
//   const doctorInfoStyle = {
//     color: 'white',
//   };
  
//   const horizontalLineStyle = {
//     borderTop: '1px solid #ccc',
//     margin: '20px 0',
//     width: '100%',
//   };

//   const inputStyle = {
//     border: 'none',
//     borderBottom: '1px solid #ccc',
//     outline: 'none',
//     padding: '5px',
//     width: '80%', 
//     marginBottom: '10px',
//     textAlign: 'center'
//   };

//   const cardContainerStyle = {
//     width: '100%', 
//     marginBottom: '10px',
//   };

//   const cardStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '15px', 
//     width: '100%', 
//     height: 'auto', 
//     position: 'relative', 
//   };

//   const textboxStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '8px', 
//     width: '100%', 
//     fontSize: '14px', 
//     lineHeight: '1.5', 
//     marginBottom: '20px', 
//     boxSizing: 'border-box', 
//   };

//   const textboxGroupStyle = {
//     display: 'flex',
//     flexDirection: 'column', 
//   };

//   const smallTextboxStyle = {
//     ...textboxStyle,
//     flex: '1',
//     marginBottom: '10px', 
//     width: 'calc(25% - 20px)', 
//   };

//   const medicineNameStyle = {
//     ...textboxStyle,
//     width: '50%', 
//     marginBottom: '30px', 
//     textAlign: 'left', 
//   };
  
//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center', 
//     marginBottom: '10px',
//     alignItems: 'center', 
//   };

//   const buttonStyle = {
//     padding: '5px 15px', 
//     borderRadius: '5px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//     width: '100px', 
//   };
  
//   const inputNameStyle = {
//     ...inputStyle,
//     width: '100%', 
//     marginLeft: '20px',
//     width: 'calc(100% - 20px)', 
//     width: 'calc(100% - 20px)', 
//   };
  
//   const inputAgeStyle = {
//     ...inputStyle,
//     width: 'calc(50% - 5px)', 
//     marginLeft: '15px', 
//   };
  
//   const inputGenderStyle = {
//     ...inputStyle,
//     width: 'calc(100% - 5px)', 
//     marginLeft: '5px', 
//   };
  
//   const inputDateStyle = {
//     ...inputStyle,
//     marginTop: '10px',
//     marginLeft: 'auto', 
//     minWidth: '120px', 
//   };
  
//   const signatureDateContainer = {
//     marginTop: '20px',
//     marginLeft: 'auto', 
//     textAlign: 'right', 
//   };
  
//   const signatureStyle = {
//     fontWeight: 'bold',
//   };

//   const handlePrint = () => {
//     const container = document.getElementById('container');
//     const content = container.innerHTML;
//     const printWindow = window.open('', '_blank'); 
//     printWindow.document.open();
//     printWindow.document.write('<html><head><title>Print</title></head><body>' + content + '</body></html>');
//     printWindow.document.close();
//     printWindow.print();
   
//   };
  
//   const handleAgeChange = (event) => {
//     const age = event.target.value;
//     if (!/^\d+$/.test(age) || parseInt(age, 10) <= 0) {
//       setAgeError(true);
//     } else {
//       setAgeError(false);
//     }
//   };

//   const handleRemoveMedicine = (index) => {
//     const updatedMedicines = [...medicines];
//     updatedMedicines.splice(index, 1);
//     setMedicines(updatedMedicines);
//   };
  
//   const handleSubmit = () => {
//     if (!gender) {
//       setErrorMessage('Please select a gender.');
//       setSuccessMessage('');
//     } else {
//       setErrorMessage('');
//       setSuccessMessage('Information saved successfully.');
//     }
//     setTimeout(() => {
//       setErrorMessage('');
//       setSuccessMessage('');
//     }, 1000);
//   };

//   const getCurrentDate = () => {
//     const date = new Date();
//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     if (month < 10) {
//       month = `0${month}`;
//     }
//     if (day < 10) {
//       day = `0${day}`;
//     }

//     return `${day}-${month}-${year}`;
//   };

//   const currentDate = getCurrentDate(); 

//   return (
//     <div>
//         <div style={{ maxWidth: '800px', margin: '100px auto 0', padding: '10px' }} id="container">
//         <div style={{ border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', padding: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#6666ff', borderRadius: '5px', padding: '10px', width: '100%', marginBottom: '20px' }}>
//             <img src={drLogo} alt="Logo" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
//             <div style={{ color: 'white' }}>
//               <p>{selectedDoctor.name}</p>
//               <p>{selectedDoctor.specialty}</p>
//               <p>{selectedDoctor.qualifications}</p>
//               <p>Address: {selectedDoctor.address}</p>
//             </div>
//           </div>
//           <hr style={{ borderTop: '1px solid #ccc', margin: '20px 0', width: '100%' }} />
//           <div style={{ textAlign: 'left', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
//             <div style={{ textAlign: 'left', width: '100%' }}>
//               <div style={{ display: 'flex', alignItems: 'left', marginBottom: '10px' }}>
//                 <div style={{ marginLeft: '15px' }}>
//                 <label style={{ marginRight: '10px', marginBottom: '15px', fontWeight: 'bold', width: '150px', textAlign: 'right' }}>Patient's Name:</label>
//                 </div>
//                 <div>
//                   <input type="text" style={inputNameStyle} />
//                 </div>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//               <div style={{ marginLeft: '-75px' }}>
//                 <label style={{ marginRight: '10px', marginBottom: '15px', fontWeight: 'bold', width: '150px', textAlign: 'right' }}>Age:</label>
//               </div>
//                 <div>
//                   <input type="number" style={inputAgeStyle} onChange={handleAgeChange} />
//                   {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}
//                 </div>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <div style={{ marginLeft: '-50px' }}>
//                     <label style={{ marginRight: '10px', marginBottom: '15px', fontWeight: 'bold', width: '150px', textAlign: 'right' }}>Gender:</label>
//                 </div>
//                 <div>
//                 <select style={inputGenderStyle} onChange={(e) => setGender(e.target.value)}>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               </div>
//               <div style={{ position: 'relative' }}>
//                 <label style={labelStyle}>Prescriptions:</label><br /> 
//                 <div style={cardContainerStyle}>
//                   {medicines.map((medicine, index) => (
//                     <div key={index} style={cardStyle}>
//                       <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Medicine Name: {medicine.name}</p>
//                       <p>Frequency: {medicine.frequency}</p>
//                       <p>Dosage: {medicine.dosage}</p>
//                       <p>Duration: {medicine.duration}</p>
//                       <p>Food Type: {medicine.foodType}</p>
//                       <button onClick={() => handleRemoveMedicine(index)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}>Remove</button>
//                     </div>
//                   ))}
//                   <input type="text" style={medicineNameStyle} placeholder="Enter medicine name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleAddMedicine()} />
//                   <div style={textboxGroupStyle}>
//                     <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Dosage eg.500mg" value={dosage} onChange={(e) => setDosage(e.target.value)} />
//                     <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Frequency e.g. 1-0-1" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
//                     <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Duration e.g. 5 days" value={duration} onChange={(e) => setDuration(e.target.value)} />
//                     <select style={smallTextboxStyle} value={foodType} onChange={(e) => setFoodType(e.target.value)}>
//                       <option value="before">Before food</option>
//                       <option value="after">After food</option>
//                     </select>
//                   </div>
//                   <div style={buttonContainerStyle}>
//                     <button onClick={handleAddMedicine}style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue',marginRight:'580px' }}>Add Medicine</button>
//                   </div>
//                 </div>
//               </div>
//               {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//               {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//             </div>
//           </div>
//           <div style={signatureDateContainer}>
//             <div>
//               <label style={signatureStyle}>Signature : ____________________</label>
//             </div>
//             <div>
//               <label style={signatureStyle}>Date :</label>
//               <input type="text" style={{ ...inputDateStyle }} value={currentDate} readOnly />
//             </div>
//           </div>           
//         </div>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//   <div style={{ marginRight: '10px' }}>
//     <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
//   </div>
//   <div>
//     <button style={buttonStyle} onClick={handlePrint}>Print</button>
//   </div>
// </div>
//   <style>{printStyles}</style>
// </div>
//   );
// };

// export default Prescription;
