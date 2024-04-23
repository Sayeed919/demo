import React, { useState } from 'react';
import drLogo from "../../images/prescription/drlogo.png";

const Prescription = () => {
  const doctors = [
    {
      name: 'Dr. Bhavesh C. Jain',
      specialty: 'Family Physician & Homeopathic Consultant',
      qualifications: 'BHMS, MD-Homeopathy',
      address: 'Mantri Aangan Complex, Pingale Wasti Mundhawa, Pune - 411036.'
    },
    {
      name: 'Dr. Sarah Smith',
      specialty: 'Pediatrician',
      qualifications: 'MBBS, DCH',
      address: '123 Elm Street, Mumbai'
    }
    // Add more doctor objects as needed
  ];

  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(0); // Index of the selected doctor
  const [ageError, setAgeError] = useState(false); // State for age validation error
  const [medicineName, setMedicineName] = useState(''); // State for medicine name
  const [medicines, setMedicines] = useState([]); // State for medicine details
  const [dosage, setDosage] = useState(''); // State for dosage
  const [duration, setDuration] = useState(''); // State for duration
  const [foodType, setFoodType] = useState('before'); // State for food type
  const [frequency, setFrequency] = useState(''); // State for frequency
  const [gender, setGender] = useState(''); // State for gender
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const selectedDoctor = doctors[selectedDoctorIndex]; // Selected doctor details

  // Function to handle adding medicine details
  const handleAddMedicine = () => {
    if (
      medicineName.trim() !== "" &&
      dosage.trim() !== "" &&
      duration.trim() !== "" &&
      foodType.trim() !== "" &&
      frequency.trim() !== "" &&
      /^[10+]+$/.test(frequency.trim()) // Check if frequency contains only allowed characters
    ) {
      const newMedicine = {
        name: medicineName.trim(),
        dosage: dosage.trim(),
        duration: duration.trim(),
        foodType: foodType.trim(),
        frequency: frequency.trim()
      };
      setMedicines([...medicines, newMedicine]);
      // Clear input fields
      setMedicineName("");
      setDosage("");
      setDuration("");
      setFoodType("before");
      setFrequency("");
    } else {
      setErrorMessage("Please fill in all fields or enter a valid frequency (only '1', '+', '0', '2' are allowed).");
      setSuccessMessage("");
    }
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '100px auto 0',
    padding: '10px',
  };

  const bigBoxStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoAndDoctorInfoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#6666ff', // Add background color to the container
    borderRadius: '5px',
    padding: '10px',
    width: '100%', // Ensure the container takes full width
    marginBottom: '20px',
  };
  
  const logoStyle = {
    width: '100px',
    height: '100px',
    marginRight: '20px',
  };
  const labelStyle = {
    marginRight: '10px',
    marginBottom: '15px',
    fontWeight: 'bold',
    width: '150px', // Adjusted width for labels
    textAlign: 'right', // Align labels to the right
  };
  const doctorInfoStyle = {
    color: 'white',
  };
  
  const horizontalLineStyle = {
    borderTop: '1px solid #ccc',
    margin: '20px 0',
    width: '100%',
  };

  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    outline: 'none',
    padding: '5px',
    width: '80%', // Adjusted width for responsiveness
    marginBottom: '10px',
    textAlign: 'center'
  };

  const cardContainerStyle = {
    width: '100%', // Change width to 100% for responsiveness
    marginBottom: '10px',
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '15px', // Adjust padding to mimic the textarea size
    width: '100%', // Adjusted width
    height: 'auto', // Adjusted height to 'auto'
    position: 'relative', // Position the textboxes relative to the card
  };

  const textboxStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px', // Adjust padding to minimize height
    width: '100%', // Adjusted width for the first textbox
    fontSize: '14px', // Adjust font size
    lineHeight: '1.5', // Adjust line height
    marginBottom: '20px', // Add margin between textboxes
    boxSizing: 'border-box', // Include padding and border in the width
  };

  const textboxGroupStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack the textboxes vertically
  };

  const smallTextboxStyle = {
    ...textboxStyle,
    flex: '1', // Use flexbox to distribute available space evenly
    marginBottom: '10px', // Adjust margin between textboxes
    width: 'calc(25% - 20px)', // Adjusted width for the small textboxes
  };

  const medicineNameStyle = {
    ...textboxStyle,
    width: '50%', // Adjusted width for the medicine name textbox
    marginBottom: '30px', // Remove bottom margin
    textAlign: 'left', // Align text to the left
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center align the button horizontally
    marginBottom: '10px',
    alignItems: 'center', // Center align the button with the input fields
  };

  const buttonStyle = {
    padding: '5px 15px', // Increase padding for better visibility
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };
  
  const inputNameStyle = {
    ...inputStyle,
    width: '100%', 
    marginLeft: '20px' 
  };
  
  
  const inputAgeStyle = {
    ...inputStyle,
    width: '100%', // Adjusted width for the age input
    marginLeft: '110px' 
  };

  const inputGenderStyle = {
    ...inputStyle,
    width: '100%', // Adjusted width to fill the parent container
    marginLeft: '85px' 
  };
  

  const inputDateStyle = {
    ...inputStyle,
    marginTop: '10px',
    marginLeft: 'auto', // Pushes the element to the right
    minWidth: '120px', // Ensure a minimum width for the date input
  };
  
  const signatureDateContainer = {
    marginTop: '20px',
    marginLeft: 'auto', // Pushes the container to the right
    textAlign: 'right', // Align content to the right
  };
  
  const signatureStyle = {
    fontWeight: 'bold',
  };

  const handlePrint = () => {
    const container = document.getElementById('container');
    const content = container.innerHTML;
    const printWindow = window.open('', '_blank'); // Show container for printing
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>' + content + '</body></html>');
    printWindow.document.close();
    printWindow.print();
   
  };
  

  const handleAgeChange = (event) => {
    const age = event.target.value;
    if (!/^\d+$/.test(age) || parseInt(age, 10) <= 0) {
      setAgeError(true); // Set error if input contains non-digit characters or if age is negative or zero
    } else {
      setAgeError(false); // Clear error if input contains only digits and age is positive
    }
  };
  
  // Function to handle removing medicine from the list
  const handleRemoveMedicine = (index) => {
    const updatedMedicines = [...medicines];
    updatedMedicines.splice(index, 1);
    setMedicines(updatedMedicines);
  };

  // Function to handle submitting the prescription form
  const handleSubmit = () => {
    if (medicines.length === 0 || !gender) {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('Information saved successfully.');
      // Here you can add code to submit the form data
    }
    setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 1000);
  };

  // Get current date in "DD-MM-YYYY" format
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // Add leading zero to month and day if needed
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${day}-${month}-${year}`;
  };

  const currentDate = getCurrentDate(); // Get current date

  return (
    <div>
      <div style={containerStyle} id="container">
        <div style={bigBoxStyle}>
          <div style={logoAndDoctorInfoContainerStyle}>
            <img src={drLogo} alt="Logo" style={logoStyle} />
            <div style={doctorInfoStyle}>
              <p>{selectedDoctor.name}</p>
              <p>{selectedDoctor.specialty}</p>
              <p>{selectedDoctor.qualifications}</p>
              <p>Address: {selectedDoctor.address}</p>
            </div>
          </div>
          <hr style={horizontalLineStyle} />
          <div style={{ textAlign: 'left', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'left', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'left', marginBottom: '10px' }}>
                <div style={{ marginLeft: '15px' }}>
                  <label style={labelStyle}>Patient's Name:</label>
                </div>
                <div>
                  <input type="text" style={inputNameStyle} />
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ marginLeft: '-75px' }}>
                  <label style={labelStyle}>Age:</label>
                </div>
                <div>
                  <input type="number" style={inputAgeStyle} onChange={handleAgeChange} />
                  {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ marginLeft: '-50px' }}>
                  <label style={labelStyle}>Gender:</label>
                </div>
                <div>
                  <select style={inputGenderStyle} onChange={(e) => setGender(e.target.value)}>
                    {/* <option value="">Select</option> */}
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <label style={labelStyle}>Prescriptions:</label><br /> 
                <div style={cardContainerStyle}>
                  {medicines.map((medicine, index) => (
                    <div key={index} style={cardStyle}>
                      <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Medicine Name: {medicine.name}</p>
                      <p>Frequency: {medicine.frequency}</p>
                      <p>Dosage: {medicine.dosage}</p>
                      <p>Duration: {medicine.duration}</p>
                      <p>Food Type: {medicine.foodType}</p>
                      <button onClick={() => handleRemoveMedicine(index)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}>Remove</button>
                    </div>
                  ))}
                  <input type="text" style={medicineNameStyle} placeholder="Enter medicine name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleAddMedicine()} />
                  <div style={textboxGroupStyle}>
                    <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Dosage eg.500mg" value={dosage} onChange={(e) => setDosage(e.target.value)} />
                    <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Frequency e.g. 1+0+1" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
                    <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Duration e.g. 5 days" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    <select style={smallTextboxStyle} value={foodType} onChange={(e) => setFoodType(e.target.value)}>
                      <option value="before">Before food</option>
                      <option value="after">After food</option>
                    </select>
                  </div>
                  <div style={buttonContainerStyle}>
                    <button onClick={handleAddMedicine}style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue',marginRight:'580px' }}>Add Medicine</button>
                  </div>
                </div>
              </div>
              <div style={buttonContainerStyle}>
                <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
              </div>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </div>
          </div>
          <div style={signatureDateContainer}>
            <div>
              <label style={signatureStyle}>Signature : ____________________</label>
            </div>
            <div>
              <label style={signatureStyle}>Date :</label>
              <input type="text" style={{ ...inputDateStyle }} value={currentDate} readOnly />
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={buttonStyle} onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
};

export default Prescription;












// import React, { useState } from 'react';
// import drLogo from "../../images/prescription/drlogo.png";

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
//     // Add more doctor objects as needed
//   ];

//   const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(0); // Index of the selected doctor
//   const [ageError, setAgeError] = useState(false); // State for age validation error
//   const [medicineName, setMedicineName] = useState(''); // State for medicine name
//   const [medicines, setMedicines] = useState([]); // State for medicine details
//   const [dosage, setDosage] = useState(''); // State for dosage
//   const [duration, setDuration] = useState(''); // State for duration
//   const [foodType, setFoodType] = useState('before'); // State for food type
//   const [frequency, setFrequency] = useState(''); // State for frequency
//   const [gender, setGender] = useState(''); // State for gender
//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const [successMessage, setSuccessMessage] = useState(''); // State for success message

//   const selectedDoctor = doctors[selectedDoctorIndex]; // Selected doctor details

//   // Function to handle adding medicine details
//   const handleAddMedicine = () => {
//     if (medicineName.trim() !== "" && dosage.trim() !== "" && duration.trim() !== "" && foodType.trim() !== "" && frequency.trim() !== "") {
//       const newMedicine = { name: medicineName.trim(), dosage: dosage.trim(), duration: duration.trim(), foodType: foodType.trim(), frequency: frequency.trim() };
//       setMedicines([...medicines, newMedicine]);
//       // Clear input fields
//       setMedicineName('');
//       setDosage('');
//       setDuration('');
//       setFoodType('before');
//       setFrequency('');
//     } else {
//       setErrorMessage('Please fill in all fields.');
//       setSuccessMessage('');
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
//     backgroundColor: '#6666ff', // Add background color to the container
//     borderRadius: '5px',
//     padding: '10px',
//     width: '100%', // Ensure the container takes full width
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
//     width: '150px', // Adjusted width for labels
//     textAlign: 'right', // Align labels to the right
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
//     width: '80%', // Adjusted width for responsiveness
//     marginBottom: '10px',
//     textAlign: 'center'
//   };

//   const cardContainerStyle = {
//     width: '100%', // Change width to 100% for responsiveness
//     marginBottom: '10px',
//   };

//   const cardStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '15px', // Adjust padding to mimic the textarea size
//     width: '100%', // Adjusted width
//     height: 'auto', // Adjusted height to 'auto'
//     position: 'relative', // Position the textboxes relative to the card
//   };

//   const textboxStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '8px', // Adjust padding to minimize height
//     width: '100%', // Adjusted width for the first textbox
//     fontSize: '14px', // Adjust font size
//     lineHeight: '1.5', // Adjust line height
//     marginBottom: '20px', // Add margin between textboxes
//     boxSizing: 'border-box', // Include padding and border in the width
//   };

//   const textboxGroupStyle = {
//     display: 'flex',
//     flexDirection: 'column', // Stack the textboxes vertically
//   };

//   const smallTextboxStyle = {
//     ...textboxStyle,
//     flex: '1', // Use flexbox to distribute available space evenly
//     marginBottom: '10px', // Adjust margin between textboxes
//     width: 'calc(25% - 20px)', // Adjusted width for the small textboxes
//   };

//   const medicineNameStyle = {
//     ...textboxStyle,
//     width: '50%', // Adjusted width for the medicine name textbox
//     marginBottom: '30px', // Remove bottom margin
//     textAlign: 'left', // Align text to the left
//   };
  
//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center', // Center align the button horizontally
//     marginBottom: '10px',
//     alignItems: 'center', // Center align the button with the input fields
//   };

//   const buttonStyle = {
//     padding: '5px 15px', // Increase padding for better visibility
//     borderRadius: '5px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//   };
  
//   const inputNameStyle = {
//     ...inputStyle,
//     marginLeft: '20px' 
//   };

//   const inputAgeStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the age input
//     marginLeft: '20'
//   };

//   const inputGenderStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the gender input
//     marginLeft: '20px' 
//   };

//   const inputDateStyle = {
//     ...inputStyle,
//     marginTop: '10px',
//     marginLeft: 'auto', // Pushes the element to the right
//     minWidth: '120px', // Ensure a minimum width for the date input
//   };
  
//   const signatureDateContainer = {
//     marginTop: '20px',
//     marginLeft: 'auto', // Pushes the container to the right
//     textAlign: 'right', // Align content to the right
//   };
  
//   const signatureStyle = {
//     fontWeight: 'bold',
//   };

//   const handlePrint = () => {
//     const container = document.getElementById('container');
//     const originalDisplayStyle = container.style.display;
//     container.style.display = 'block'; // Show container for printing
//     window.print(); // Print
//     container.style.display = originalDisplayStyle; // Restore original display style
//   };

//   const handleAgeChange = (event) => {
//     const age = event.target.value;
//     if (!/^\d+$/.test(age) || parseInt(age, 10) <= 0) {
//       setAgeError(true); // Set error if input contains non-digit characters or if age is negative or zero
//     } else {
//       setAgeError(false); // Clear error if input contains only digits and age is positive
//     }
//   };
  
//   // Function to handle removing medicine from the list
//   const handleRemoveMedicine = (index) => {
//     const updatedMedicines = [...medicines];
//     updatedMedicines.splice(index, 1);
//     setMedicines(updatedMedicines);
//   };

//   // Function to handle submitting the prescription form
//   const handleSubmit = () => {
//     if (medicines.length === 0 || !gender) {
//       setErrorMessage('Please fill in all fields.');
//       setSuccessMessage('');
//     } else {
//       setErrorMessage('');
//       setSuccessMessage('Information saved successfully.');
//       // Here you can add code to submit the form data
//     }
//     setTimeout(() => {
//       setErrorMessage('');
//       setSuccessMessage('');
//     }, 1000);
//   };

//   // Get current date in "DD-MM-YYYY" format
//   const getCurrentDate = () => {
//     const date = new Date();
//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     // Add leading zero to month and day if needed
//     if (month < 10) {
//       month = `0${month}`;
//     }
//     if (day < 10) {
//       day = `0${day}`;
//     }

//     return `${day}-${month}-${year}`;
//   };

//   const currentDate = getCurrentDate(); // Get current date

//   return (
//     <div>
//       <div style={containerStyle} id="container">
//         <div style={bigBoxStyle}>
//           <div style={logoAndDoctorInfoContainerStyle}>
//             <img src={drLogo} alt="Logo" style={logoStyle} />
//             <div style={doctorInfoStyle}>
//               <p>{selectedDoctor.name}</p>
//               <p>{selectedDoctor.specialty}</p>
//               <p>{selectedDoctor.qualifications}</p>
//               <p>Address: {selectedDoctor.address}</p>
//             </div>
//           </div>
//           <hr style={horizontalLineStyle} />
//           <div style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
//             <div style={{ textAlign: 'left', width: '100%' }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <label style={labelStyle}>Patient's Name:</label>
//                 <input type="text" style={inputNameStyle} />
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-100px' }}>
//                 <label style={labelStyle}>Age:</label>
//                 <input type="number" style={inputAgeStyle} onChange={handleAgeChange} />
//                 {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-70px' }}>
//                 <label style={labelStyle}>Gender:</label>
//                 <select style={inputGenderStyle} onChange={(e) => setGender(e.target.value)}>
//                   {/* <option value="">Select</option> */}
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div style={{ position: 'relative' }}>
//                 <label style={labelStyle}>Prescriptions:</label><br /> 
//                 <div style={cardContainerStyle}>
//                   {medicines.map((medicine, index) => (
//                     <div key={index} style={cardStyle}>
//                       <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Medicine Name: {medicine.name}</p>
//                                             <p>Frequency: {medicine.frequency}</p>

//                       <p>Dosage: {medicine.dosage}</p>
//                       <p>Duration: {medicine.duration}</p>
//                       <p>Food Type: {medicine.foodType}</p>
//                       <button onClick={() => handleRemoveMedicine(index)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}>Remove</button>
//                     </div>
//                   ))}
//                   <input type="text" style={medicineNameStyle} placeholder="Enter medicine name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleAddMedicine()} />
//                   <div style={textboxGroupStyle}>

//                   <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Dosage eg.500mg" value={dosage} onChange={(e) => setDosage(e.target.value)} />
//                     <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Frequency e.g. 1+0+1" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
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
//               <div style={buttonContainerStyle}>
//                 <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
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
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button style={buttonStyle} onClick={handlePrint}>Print</button>
//       </div>
//     </div>
//   );
// };

// export default Prescription;









// import React, { useState } from 'react';
// import drLogo from "../../images/prescription/drlogo.png";

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
//     // Add more doctor objects as needed
//   ];

//   const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(0); // Index of the selected doctor
//   const [ageError, setAgeError] = useState(false); // State for age validation error
//   const [medicineName, setMedicineName] = useState(''); // State for medicine name
//   const [medicines, setMedicines] = useState([]); // State for medicine details
//   const [dosage, setDosage] = useState(''); // State for dosage
//   const [duration, setDuration] = useState(''); // State for duration
//   const [foodType, setFoodType] = useState('before'); // State for food type
//   const [frequency, setFrequency] = useState(''); // State for frequency
//   const [gender, setGender] = useState(''); // State for gender
//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const [successMessage, setSuccessMessage] = useState(''); // State for success message

//   const selectedDoctor = doctors[selectedDoctorIndex]; // Selected doctor details

//   // Function to handle adding medicine details
//   const handleAddMedicine = () => {
//     if (medicineName.trim() !== "" && dosage.trim() !== "" && duration.trim() !== "" && foodType.trim() !== "" && frequency.trim() !== "") {
//       const newMedicine = { name: medicineName.trim(), dosage: dosage.trim(), duration: duration.trim(), foodType: foodType.trim(), frequency: frequency.trim() };
//       setMedicines([...medicines, newMedicine]);
//       // Clear input fields
//       setMedicineName('');
//       setDosage('');
//       setDuration('');
//       setFoodType('before');
//       setFrequency('');
//     } else {
//       setErrorMessage('Please fill in all fields.');
//       setSuccessMessage('');
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
//     backgroundColor: '#6666ff', // Add background color to the container
//     borderRadius: '5px',
//     padding: '10px',
//     width: '100%', // Ensure the container takes full width
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
//     width: '150px', // Adjusted width for labels
//     textAlign: 'right', // Align labels to the right
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
//     width: '80%', // Adjusted width for responsiveness
//     marginBottom: '10px',
//     textAlign: 'center'
//   };

//   const cardContainerStyle = {
//     width: '100%', // Change width to 100% for responsiveness
//     marginBottom: '10px',
//   };

//   const cardStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '15px', // Adjust padding to mimic the textarea size
//     width: '100%', // Adjusted width
//     height: 'auto', // Adjusted height to 'auto'
//     position: 'relative', // Position the textboxes relative to the card
//   };

//   const textboxStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '8px', // Adjust padding to minimize height
//     width: '100%', // Adjusted width for the first textbox
//     fontSize: '14px', // Adjust font size
//     lineHeight: '1.5', // Adjust line height
//     marginBottom: '20px', // Add margin between textboxes
//     boxSizing: 'border-box', // Include padding and border in the width
//   };

//   const textboxGroupStyle = {
//     display: 'flex',
//     flexDirection: 'column', // Stack the textboxes vertically
//   };

//   const smallTextboxStyle = {
//     ...textboxStyle,
//     flex: '1', // Use flexbox to distribute available space evenly
//     marginBottom: '10px', // Adjust margin between textboxes
//     width: 'calc(25% - 20px)', // Adjusted width for the small textboxes
//   };

//   const medicineNameStyle = {
//     ...textboxStyle,
//     width: '50%', // Adjusted width for the medicine name textbox
//     marginBottom: '30px', // Remove bottom margin
//     textAlign: 'left', // Align text to the left
//   };
  
//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center', // Center align the button horizontally
//     marginBottom: '10px',
//     alignItems: 'center', // Center align the button with the input fields
//   };

//   const buttonStyle = {
//     padding: '5px 15px', // Increase padding for better visibility
//     borderRadius: '5px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//   };
  
//   const inputNameStyle = {
//     ...inputStyle,
//     marginLeft: '20px' 
//   };

//   const inputAgeStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the age input
//     marginLeft: '20'
//   };

//   const inputGenderStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the gender input
//     marginLeft: '20px' 
//   };

//   const inputDateStyle = {
//     ...inputStyle,
//     marginTop: '10px',
//     marginLeft: 'auto', // Pushes the element to the right
//     minWidth: '120px', // Ensure a minimum width for the date input
//   };
  
//   const signatureDateContainer = {
//     marginTop: '20px',
//     marginLeft: 'auto', // Pushes the container to the right
//     textAlign: 'right', // Align content to the right
//   };
  
//   const signatureStyle = {
//     fontWeight: 'bold',
//   };

//   const handlePrint = () => {
//     const container = document.getElementById('container');
//     const originalDisplayStyle = container.style.display;
//     container.style.display = 'block'; // Show container for printing
//     window.print(); // Print
//     container.style.display = originalDisplayStyle; // Restore original display style
//   };

//   const handleAgeChange = (event) => {
//     const age = event.target.value;
//     if (!/^\d+$/.test(age) || parseInt(age, 10) <= 0) {
//       setAgeError(true); // Set error if input contains non-digit characters or if age is negative or zero
//     } else {
//       setAgeError(false); // Clear error if input contains only digits and age is positive
//     }
//   };
  
//   // Function to handle removing medicine from the list
//   const handleRemoveMedicine = (index) => {
//     const updatedMedicines = [...medicines];
//     updatedMedicines.splice(index, 1);
//     setMedicines(updatedMedicines);
//   };

//   // Function to handle submitting the prescription form
//   const handleSubmit = () => {
//     if (medicines.length === 0 || !gender) {
//       setErrorMessage('Please fill in all fields.');
//       setSuccessMessage('');
//     } else {
//       setErrorMessage('');
//       setSuccessMessage('Information saved successfully.');
//       // Here you can add code to submit the form data
//     }
//     setTimeout(() => {
//       setErrorMessage('');
//       setSuccessMessage('');
//     }, 1000);
//   };

//   // Get current date in "DD-MM-YYYY" format
//   const getCurrentDate = () => {
//     const date = new Date();
//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     // Add leading zero to month and day if needed
//     if (month < 10) {
//       month = `0${month}`;
//     }
//     if (day < 10) {
//       day = `0${day}`;
//     }

//     return `${day}-${month}-${year}`;
//   };

//   const currentDate = getCurrentDate(); // Get current date

//   return (
//     <div>
//       <div style={containerStyle} id="container">
//         <div style={bigBoxStyle}>
//           <div style={logoAndDoctorInfoContainerStyle}>
//             <img src={drLogo} alt="Logo" style={logoStyle} />
//             <div style={doctorInfoStyle}>
//               <p>{selectedDoctor.name}</p>
//               <p>{selectedDoctor.specialty}</p>
//               <p>{selectedDoctor.qualifications}</p>
//               <p>Address: {selectedDoctor.address}</p>
//             </div>
//           </div>
//           <hr style={horizontalLineStyle} />
//           <div style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
//             <div style={{ textAlign: 'left', width: '100%' }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <label style={labelStyle}>Patient's Name:</label>
//                 <input type="text" style={inputNameStyle} />
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-100px' }}>
//                 <label style={labelStyle}>Age:</label>
//                 <input type="number" style={inputAgeStyle} onChange={handleAgeChange} />
//                 {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-70px' }}>
//                 <label style={labelStyle}>Gender:</label>
//                 <select style={inputGenderStyle} onChange={(e) => setGender(e.target.value)}>
//                   {/* <option value="">Select</option> */}
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div style={{ position: 'relative' }}>
//                 <label style={labelStyle}>Prescriptions:</label><br /> 
//                 <div style={cardContainerStyle}>
//                   {medicines.map((medicine, index) => (
//                     <div key={index} style={cardStyle}>
//                       <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Medicine Name: {medicine.name}</p>
//                       <p>Dosage: {medicine.dosage}</p>
//                       <p>Duration: {medicine.duration}</p>
//                       <p>Food Type: {medicine.foodType}</p>
//                       <p>Frequency: {medicine.frequency}</p>
//                       <button onClick={() => handleRemoveMedicine(index)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}>Remove</button>
//                     </div>
//                   ))}
//                   <input type="text" style={medicineNameStyle} placeholder="Enter medicine name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleAddMedicine()} />
//                   <div style={textboxGroupStyle}>
//                     <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Dosage e.g. 1+0+1" value={dosage} onChange={(e) => setDosage(e.target.value)} />
//                     <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Duration e.g. 5 days" value={duration} onChange={(e) => setDuration(e.target.value)} />
//                     <select style={smallTextboxStyle} value={foodType} onChange={(e) => setFoodType(e.target.value)}>
//                       <option value="before">Before food</option>
//                       <option value="after">After food</option>
//                     </select>
//                     <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
//                   </div>
//                 </div>
//               </div>
//               <div style={buttonContainerStyle}>
//                 <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
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
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button style={buttonStyle} onClick={handlePrint}>Print</button>
//       </div>
//     </div>
//   );
// };

// export default Prescription;






// import React, { useState } from 'react';
// import drLogo from "../../images/prescription/drlogo.png";

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
//     // Add more doctor objects as needed
//   ];

//   const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(0); // Index of the selected doctor
//   const [ageError, setAgeError] = useState(false); // State for age validation error
//   const [medicineName, setMedicineName] = useState(''); // State for medicine name
//   const [dosage, setDosage] = useState(''); // State for dosage
//   const [duration, setDuration] = useState(''); // State for duration
//   const [foodType, setFoodType] = useState('before'); // State for food type
//   const [gender, setGender] = useState(''); // State for gender
//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const [successMessage, setSuccessMessage] = useState(''); // State for success message

//   const selectedDoctor = doctors[selectedDoctorIndex]; // Selected doctor details

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
//     backgroundColor: '#6666ff', // Add background color to the container
//     borderRadius: '5px',
//     padding: '10px',
//     width: '100%', // Ensure the container takes full width
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
//     width: '150px', // Adjusted width for labels
//     textAlign: 'right', // Align labels to the right
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
//     width: '80%', // Adjusted width for responsiveness
//     marginBottom: '10px',
//     textAlign: 'center'
//   };

//   const cardContainerStyle = {
//     width: '100%', // Change width to 100% for responsiveness
//     marginBottom: '10px',
//   };

//   const cardStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '15px', // Adjust padding to mimic the textarea size
//     width: '100%', // Adjusted width
//     height: 'auto', // Adjusted height to 'auto'
//     position: 'relative', // Position the textboxes relative to the card
//   };

//   const textboxStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '8px', // Adjust padding to minimize height
//     width: '100%', // Adjusted width for the first textbox
//     fontSize: '14px', // Adjust font size
//     lineHeight: '1.5', // Adjust line height
//     marginBottom: '20px', // Add margin between textboxes
//     boxSizing: 'border-box', // Include padding and border in the width
//   };

//   const textboxGroupStyle = {
//     display: 'flex',
//     flexDirection: 'column', // Stack the textboxes vertically
//   };

//   const smallTextboxStyle = {
//     ...textboxStyle,
//     flex: '1', // Use flexbox to distribute available space evenly
//     marginBottom: '10px', // Adjust margin between textboxes
//     width: 'calc(25% - 20px)', // Adjusted width for the small textboxes
//   };

//   const medicineNameStyle = {
//     ...textboxStyle,
//     width: '50%', // Adjusted width for the medicine name textbox
//     marginBottom: '30px', // Remove bottom margin
//     textAlign: 'left', // Align text to the left
//   };
  
//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center', // Center align the button horizontally
//     marginBottom: '10px',
//     alignItems: 'center', // Center align the button with the input fields
//   };

//   const buttonStyle = {
//     padding: '5px 15px', // Increase padding for better visibility
//     borderRadius: '5px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//   };
  
//   const inputNameStyle = {
//     ...inputStyle,
//     marginLeft: '20px' 
//   };

//   const inputAgeStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the age input
//     marginLeft: '20'
//   };

//   const inputGenderStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the gender input
//     marginLeft: '20px' 
//   };

//   const inputDateStyle = {
//     ...inputStyle,
//     marginTop: '10px',
//     marginLeft: 'auto', // Pushes the element to the right
//     minWidth: '120px', // Ensure a minimum width for the date input
//   };
  
//   const signatureDateContainer = {
//     marginTop: '20px',
//     marginLeft: 'auto', // Pushes the container to the right
//     textAlign: 'right', // Align content to the right
//   };
  
//   const signatureStyle = {
//     fontWeight: 'bold',
//   };

//   const handlePrint = () => {
//     const container = document.getElementById('container');
//     const originalDisplayStyle = container.style.display;
//     container.style.display = 'block'; // Show container for printing
//     window.print(); // Print
//     container.style.display = originalDisplayStyle; // Restore original display style
//   };

//   const handleAgeChange = (event) => {
//     const age = event.target.value;
//     if (!/^\d+$/.test(age) || parseInt(age, 10) <= 0) {
//       setAgeError(true); // Set error if input contains non-digit characters or if age is negative or zero
//     } else {
//       setAgeError(false); // Clear error if input contains only digits and age is positive
//     }
//   };
  

//   const handleSubmit = () => {
//     if (!medicineName || !dosage || !duration || !gender) {
//       setErrorMessage('Please fill in all fields.');
//       setSuccessMessage('');
//     } else {
//       setErrorMessage('');
//       setSuccessMessage('Information saved successfully.');
//       // Here you can add code to submit the form data
//     }
//     setTimeout(() => {
//       setErrorMessage('');
//       setSuccessMessage('');
//     }, 1000);
//   };

//   // Get current date in "YYYY-MM-DD" format
//   const getCurrentDate = () => {
//     const date = new Date();
//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     // Add leading zero to month and day if needed
//     if (month < 10) {
//       month = `0${month}`;
//     }
//     if (day < 10) {
//       day = `0${day}`;
//     }

//     return `${day}-${month}-${year}`;
//   };

//   const currentDate = getCurrentDate(); // Get current date

//   return (
//     <div>
//       <div style={containerStyle} id="container">
//         <div style={bigBoxStyle}>
//           <div style={logoAndDoctorInfoContainerStyle}>
//             <img src={drLogo} alt="Logo" style={logoStyle} />
//             <div style={doctorInfoStyle}>
//               <p>{selectedDoctor.name}</p>
//               <p>{selectedDoctor.specialty}</p>
//               <p>{selectedDoctor.qualifications}</p>
//               <p>Address: {selectedDoctor.address}</p>
//             </div>
//           </div>
//           <hr style={horizontalLineStyle} />
//           <div style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
//             <div style={{ textAlign: 'left', width: '100%' }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <label style={labelStyle}>Patient's Name:</label>
//                 <input type="text" style={inputNameStyle} />
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-100px' }}>
//                 <label style={labelStyle}>Age:</label>
//                 <input type="number" style={inputAgeStyle} onChange={handleAgeChange} />
//                 {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-70px' }}>
//                 <label style={labelStyle}>Gender:</label>
//                 <select style={inputGenderStyle} onChange={(e) => setGender(e.target.value)}>
//                   {/* <option value="">Select</option> */}
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div style={{ position: 'relative' }}>
//   <label style={labelStyle}>Prescriptions:</label><br /> 
//   <div style={cardContainerStyle}>
//     <div style={cardStyle}>
//       <p style={labelStyle}>Medicine names:</p>
//       <input type="text" style={medicineNameStyle} placeholder="Medicine names" onChange={(e) => setMedicineName(e.target.value)} />
//       {medicineName && <p style={{ marginTop: '10px' }}>Medicine names: {medicineName}</p>}

//       <div style={textboxGroupStyle}>
//         <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Dosage eg. 1+0+1" onChange={(e) => setDosage(e.target.value)} />
//         <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Duration eg. 5 days" onChange={(e) => setDuration(e.target.value)} />
//         <select style={smallTextboxStyle} onChange={(e) => setFoodType(e.target.value)}>
//           <option value="before">Before food</option>
//           <option value="after">After food</option>
//         </select>
//       </div>
//       <div style={buttonContainerStyle}>
//         <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
//       </div>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//     </div>
//   </div>
// </div>

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
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button style={buttonStyle} onClick={handlePrint}>Print</button>
//       </div>
//     </div>
//   );
// };

// export default Prescription;












// import React, { useState } from 'react';
// import drLogo from "../../images/prescription/drlogo.png";

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
//     // Add more doctor objects as needed
//   ];

//   const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(0); // Index of the selected doctor
//   const [ageError, setAgeError] = useState(false); // State for age validation error
//   const [medicineNames, setMedicineNames] = useState(['']); // State for medicine names
//   const [dosage, setDosage] = useState(''); // State for dosage
//   const [duration, setDuration] = useState(''); // State for duration
//   const [foodType, setFoodType] = useState('before'); // State for food type
//   const [gender, setGender] = useState(''); // State for gender
//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const [successMessage, setSuccessMessage] = useState(''); // State for success message

//   const selectedDoctor = doctors[selectedDoctorIndex]; // Selected doctor details

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
//     backgroundColor: '#6666ff', // Add background color to the container
//     borderRadius: '5px',
//     padding: '10px',
//     width: '100%', // Ensure the container takes full width
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
//     width: '150px', // Adjusted width for labels
//     textAlign: 'right', // Align labels to the right
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
//     width: '80%', // Adjusted width for responsiveness
//     marginBottom: '10px',
//     textAlign: 'center'
//   };

//   const cardContainerStyle = {
//     width: '100%', // Change width to 100% for responsiveness
//     marginBottom: '10px',
//   };

//   const cardStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '15px', // Adjust padding to mimic the textarea size
//     width: '100%', // Adjusted width
//     height: 'auto', // Adjusted height to 'auto'
//     position: 'relative', // Position the textboxes relative to the card
//   };

//   const textboxStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '8px', // Adjust padding to minimize height
//     width: '100%', // Adjusted width for the first textbox
//     fontSize: '14px', // Adjust font size
//     lineHeight: '1.5', // Adjust line height
//     marginBottom: '20px', // Add margin between textboxes
//     boxSizing: 'border-box', // Include padding and border in the width
//   };

//   const textboxGroupStyle = {
//     display: 'flex',
//     flexDirection: 'column', // Stack the textboxes vertically
//   };

//   const smallTextboxStyle = {
//     ...textboxStyle,
//     flex: '1', // Use flexbox to distribute available space evenly
//     marginBottom: '10px', // Adjust margin between textboxes
//     width: 'calc(25% - 20px)', // Adjusted width for the small textboxes
//   };

//   const medicineNameStyle = {
//     ...textboxStyle,
//     width: '50%', // Adjusted width for the medicine name textbox
//     marginBottom: '10px', // Remove bottom margin
//     textAlign: 'left', // Align text to the left
//   };
  
//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center', // Center align the button horizontally
//     marginBottom: '10px',
//     alignItems: 'center', // Center align the button with the input fields
//   };

//   const buttonStyle = {
//     padding: '5px 15px', // Increase padding for better visibility
//     borderRadius: '5px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//   };
  
//   const inputNameStyle = {
//     ...inputStyle,
//     marginLeft: '20px' 
//   };

//   const inputAgeStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the age input
//     marginLeft: '20'
//   };

//   const inputGenderStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the gender input
//     marginLeft: '20px' 
//   };

//   const inputDateStyle = {
//     ...inputStyle,
//     marginTop: '10px',
//     marginLeft: 'auto', // Pushes the element to the right
//     minWidth: '120px', // Ensure a minimum width for the date input
//   };
  
//   const signatureDateContainer = {
//     marginTop: '20px',
//     marginLeft: 'auto', // Pushes the container to the right
//     textAlign: 'right', // Align content to the right
//   };
  
//   const signatureStyle = {
//     fontWeight: 'bold',
//   };

//   const handlePrint = () => {
//     const container = document.getElementById('container');
//     const originalDisplayStyle = container.style.display;
//     container.style.display = 'block'; // Show container for printing
//     window.print(); // Print
//     container.style.display = originalDisplayStyle; // Restore original display style
//   };

//   const handleAgeChange = (event) => {
//     const age = event.target.value;
//     if (!/^\d+$/.test(age) || parseInt(age, 10) <= 0) {
//       setAgeError(true); // Set error if input contains non-digit characters or if age is negative or zero
//     } else {
//       setAgeError(false); // Clear error if input contains only digits and age is positive
//     }
//   };

//   const handleAddMedicine = () => {
//     setMedicineNames([...medicineNames, '']);
//   };

//   const handleRemoveMedicine = (index) => {
//     const updatedMedicineNames = [...medicineNames];
//     updatedMedicineNames.splice(index, 1);
//     setMedicineNames(updatedMedicineNames);
//   };

//   const handleSubmit = () => {
//     if (!medicineNames.every(name => name.trim()) || !dosage || !duration || !gender) {
//       setErrorMessage('Please fill in all fields.');
//       setSuccessMessage('');
//     } else {
//       setErrorMessage('');
//       setSuccessMessage('Information saved successfully.');
//       // Here you can add code to submit the form data
//     }
//     setTimeout(() => {
//       setErrorMessage('');
//       setSuccessMessage('');
//     }, 1000);
//   };

//   // Get current date in "YYYY-MM-DD" format
//   const getCurrentDate = () => {
//     const date = new Date();
//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     // Add leading zero to month and day if needed
//     if (month < 10) {
//       month = `0${month}`;
//     }
//     if (day < 10) {
//       day = `0${day}`;
//     }

//     return `${day}-${month}-${year}`;
//   };

//   const currentDate = getCurrentDate(); // Get current date

//   return (
//     <div>
//       <div style={containerStyle} id="container">
//         <div style={bigBoxStyle}>
//           <div style={logoAndDoctorInfoContainerStyle}>
//             <img src={drLogo} alt="Logo" style={logoStyle} />
//             <div style={doctorInfoStyle}>
//               <p>{selectedDoctor.name}</p>
//               <p>{selectedDoctor.specialty}</p>
//               <p>{selectedDoctor.qualifications}</p>
//               <p>Address: {selectedDoctor.address}</p>
//             </div>
//           </div>
//           <hr style={horizontalLineStyle} />
//           <div style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
//             <div style={{ textAlign: 'left', width: '100%' }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <label style={labelStyle}>Patient's Name:</label>
//                 <input type="text" style={inputNameStyle} />
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-100px' }}>
//                 <label style={labelStyle}>Age:</label>
//                 <input type="number" style={inputAgeStyle} onChange={handleAgeChange} />
//                 {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-70px' }}>
//                 <label style={labelStyle}>Gender:</label>
//                 <select style={inputGenderStyle} onChange={(e) => setGender(e.target.value)}>
//                   {/* <option value="">Select</option> */}
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div style={{ position: 'relative' }}>
//                 <label style={labelStyle}>Prescriptions:</label><br /> 
//                 <div style={cardContainerStyle}>
//                   <div style={cardStyle}>
//                     <p style={labelStyle}>Medicine names:</p>
//                     {medicineNames.map((medicine, index) => (
//                       <div key={index} style={{ marginBottom: '10px' }}>
//                         <input
//                           type="text"
//                           style={medicineNameStyle}
//                           value={medicine}
//                           onChange={(e) => {
//                             const updatedMedicineNames = [...medicineNames];
//                             updatedMedicineNames[index] = e.target.value;
//                             setMedicineNames(updatedMedicineNames);
//                           }}
//                         />
//                         <button style={{ marginLeft: '10px' }} onClick={() => handleRemoveMedicine(index)}>Remove</button>
//                       </div>
//                     ))}
//                     <button onClick={handleAddMedicine}>Add Medicine</button>
//                     <div style={textboxGroupStyle}>
//                       <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Dosage eg. 1+0+1" onChange={(e) => setDosage(e.target.value)} />
//                       <input type="text" style={{ ...smallTextboxStyle, marginBottom: '10px' }} placeholder="Duration eg. 5 days" onChange={(e) => setDuration(e.target.value)} />
//                       <select style={smallTextboxStyle} onChange={(e) => setFoodType(e.target.value)}>
//                         <option value="before">Before food</option>
//                         <option value="after">After food</option>
//                       </select>
//                     </div>
//                     <div style={buttonContainerStyle}>
//                       <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
//                     </div>
//                     {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//                     {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//                   </div>
//                 </div>
//               </div>
              
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
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button style={buttonStyle} onClick={handlePrint}>Print</button>
//       </div>
//     </div>
//   );
// };

// export default Prescription;














// import React, { useState } from 'react';
// import drLogo from "../../images/prescription/drlogo.png";

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
//     // Add more doctor objects as needed
//   ];

//   const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(0); // Index of the selected doctor
//   const [ageError, setAgeError] = useState(false); // State for age validation error
//   const [medicines, setMedicines] = useState([{ name: '', dosage: '', duration: '', frequency: '', foodType: '' }]); // State for medicines
//   const [gender, setGender] = useState(''); // State for gender
//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const [successMessage, setSuccessMessage] = useState(''); // State for success message

//   const selectedDoctor = doctors[selectedDoctorIndex]; // Selected doctor details

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
//     backgroundColor: '#6666ff', // Add background color to the container
//     borderRadius: '5px',
//     padding: '10px',
//     width: '100%', // Ensure the container takes full width
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
//     width: '150px', // Adjusted width for labels
//     textAlign: 'right', // Align labels to the right
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
//     width: '80%', // Adjusted width for responsiveness
//     marginBottom: '10px',
//     textAlign: 'center'
//   };

//   const cardContainerStyle = {
//     width: '100%', // Change width to 100% for responsiveness
//     marginBottom: '10px',
//   };

//   const cardStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '15px', // Adjust padding to mimic the textarea size
//     width: '100%', // Adjusted width
//     height: 'auto', // Adjusted height to 'auto'
//     position: 'relative', // Position the textboxes relative to the card
//   };

//   const textboxStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '8px', // Adjust padding to minimize height
//     width: '100%', // Adjusted width for the first textbox
//     fontSize: '14px', // Adjust font size
//     lineHeight: '1.5', // Adjust line height
//     marginBottom: '20px', // Add margin between textboxes
//     boxSizing: 'border-box', // Include padding and border in the width
//   };

//   const textboxGroupStyle = {
//     display: 'flex',
//     flexDirection: 'column', // Stack the textboxes vertically
//   };

//   const smallTextboxStyle = {
//     ...textboxStyle,
//     flex: '1', // Use flexbox to distribute available space evenly
//     marginBottom: '10px', // Adjust margin between textboxes
//     width: 'calc(25% - 20px)', // Adjusted width for the small textboxes
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center', // Center align the button horizontally
//     marginBottom: '10px',
//     alignItems: 'center', // Center align the button with the input fields
//   };

//   const buttonStyle = {
//     padding: '5px 15px', // Increase padding for better visibility
//     borderRadius: '5px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//   };
  
//   const inputNameStyle = {
//     ...inputStyle,
//     marginLeft: '20px' 
//   };

//   const inputAgeStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the age input
//     marginLeft: '20'
//   };

//   const inputGenderStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)', // Adjusted width for the gender input
//     marginLeft: '20px' 
//   };

//   const inputDateStyle = {
//     ...inputStyle,
//     marginTop: '10px',
//     marginLeft: 'auto', // Pushes the element to the right
//     minWidth: '120px', // Ensure a minimum width for the date input
//   };
  
//   const signatureDateContainer = {
//     marginTop: '20px',
//     marginLeft: 'auto', // Pushes the container to the right
//     textAlign: 'right', // Align content to the right
//   };
  
//   const signatureStyle = {
//     fontWeight: 'bold',
//   };

//   const handlePrint = () => {
//     const container = document.getElementById('container');
//     const originalDisplayStyle = container.style.display;
//     container.style.display = 'block'; // Show container for printing
//     window.print(); // Print
//     container.style.display = originalDisplayStyle; // Restore original display style
//   };

//   const handleAgeChange = (event) => {
//     const age = event.target.value;
//     if (!/^\d+$/.test(age) || parseInt(age, 10) <= 0) {
//       setAgeError(true); // Set error if input contains non-digit characters or if age is negative or zero
//     } else {
//       setAgeError(false); // Clear error if input contains only digits and age is positive
//     }
//   };

//   const handleAddMedicine = () => {
//     setMedicines([...medicines, { name: '', dosage: '', duration: '', frequency: '', foodType: '' }]);
//   };

//   const handleMedicineChange = (index, field, value) => {
//     const updatedMedicines = [...medicines];
//     updatedMedicines[index][field] = value;
//     setMedicines(updatedMedicines);
//   };

//   const handleSubmit = () => {
//     if (!medicines.every(({ name }) => name.trim()) || !gender) {
//       setErrorMessage('Please fill in all fields.');
//       setSuccessMessage('');
//     } else {
//       setErrorMessage('');
//       setSuccessMessage('Information saved successfully.');
//       // Here you can add code to submit the form data
//     }
//     setTimeout(() => {
//       setErrorMessage('');
//       setSuccessMessage('');
//     }, 1000);
//   };

//   // Get current date in "YYYY-MM-DD" format
//   const getCurrentDate = () => {
//     const date = new Date();
//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     // Add leading zero to month and day if needed
//     if (month < 10) {
//       month = `0${month}`;
//     }
//     if (day < 10) {
//       day = `0${day}`;
//     }

//     return `${day}-${month}-${year}`;
//   };

//   const currentDate = getCurrentDate(); // Get current date

//   return (
//     <div>
//       <div style={containerStyle} id="container">
//         <div style={bigBoxStyle}>
//           <div style={logoAndDoctorInfoContainerStyle}>
//             <img src={drLogo} alt="Logo" style={logoStyle} />
//             <div style={doctorInfoStyle}>
//               <p>{selectedDoctor.name}</p>
//               <p>{selectedDoctor.specialty}</p>
//               <p>{selectedDoctor.qualifications}</p>
//               <p>Address: {selectedDoctor.address}</p>
//             </div>
//           </div>
//           <hr style={horizontalLineStyle} />
//           <div style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
//             <div style={{ textAlign: 'left', width: '100%' }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <label style={labelStyle}>Patient's Name:</label>
//                 <input type="text" style={inputNameStyle} />
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-100px' }}>
//                 <label style={labelStyle}>Age:</label>
//                 <input type="number" style={inputAgeStyle} onChange={handleAgeChange} />
//                 {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-70px' }}>
//                 <label style={labelStyle}>Gender:</label>
//                 <select style={inputGenderStyle} onChange={(e) => setGender(e.target.value)}>
//                   {/* <option value="">Select</option> */}
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div style={{ position: 'relative' }}>
//                 <label style={labelStyle}>Prescriptions:</label><br /> 
//                 <div style={cardContainerStyle}>
//                   {medicines.map((medicine, index) => (
//                     <div key={index} style={cardStyle}>
//                       <p style={labelStyle}>Medicine name:</p>
//                       <input
//                         type="text"
//                         style={textboxStyle}
//                         value={medicine.name}
//                         onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
//                         onKeyPress={(e) => {
//                           if (e.key === 'Enter') handleAddMedicine();
//                         }}
//                       />
//                       <div style={textboxGroupStyle}>
//                         <input type="text" style={smallTextboxStyle} placeholder="Dosage" onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)} />
//                         <input type="text" style={smallTextboxStyle} placeholder="Duration" onChange={(e) => handleMedicineChange(index, 'duration', e.target.value)} />
//                         <input type="text" style={smallTextboxStyle} placeholder="Frequency" onChange={(e) => handleMedicineChange(index, 'frequency', e.target.value)} />
//                         <select style={smallTextboxStyle} onChange={(e) => handleMedicineChange(index, 'foodType', e.target.value)}>
//                           <option value="before">Before food</option>
//                           <option value="after">After food</option>
//                         </select>
//                       </div>
//                     </div>
//                   ))}
//                   <div style={buttonContainerStyle}>
//                     <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
//                   </div>
//                   {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//                   {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//                 </div>
//               </div>
              
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
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button style={buttonStyle} onClick={handlePrint}>Print</button>
//       </div>
//     </div>
//   );
// };

// export default Prescription;







// import React, { useState } from 'react';
// import drLogo from "../../images/prescription/drlogo.png";

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
//   const [medicines, setMedicines] = useState([{ name: '', dosage: '', duration: '', frequency: '', foodType: '' }]);
//   const [gender, setGender] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const selectedDoctor = doctors[selectedDoctorIndex];

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
//     borderRadius: '5px',
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
//   };
  
//   const inputNameStyle = {
//     ...inputStyle,
//     marginLeft: '20px' 
//   };

//   const inputAgeStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)',
//     marginLeft: '20'
//   };

//   const inputGenderStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)',
//     marginLeft: '20px' 
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
//     const originalDisplayStyle = container.style.display;
//     container.style.display = 'block';
//     window.print();
//     container.style.display = originalDisplayStyle;
//   };

//   const handleAgeChange = (event) => {
//     const age = event.target.value;
//     if (!/^\d+$/.test(age) || parseInt(age, 10) <= 0) {
//       setAgeError(true);
//     } else {
//       setAgeError(false);
//     }
//   };

//   const handleAddMedicine = () => {
//     setMedicines([...medicines, { name: '', dosage: '', duration: '', frequency: '', foodType: '' }]);
//   };

//   const handleMedicineChange = (index, field, value) => {
//     const updatedMedicines = [...medicines];
//     updatedMedicines[index][field] = value;
    
//     // Update the content of the next medicine box if it exists
//     if (index < medicines.length - 1) {
//       updatedMedicines[index + 1][field] = value;
//     }
    
//     setMedicines(updatedMedicines);
//   };

//   const handleSubmit = () => {
//     if (!medicines.every(({ name }) => name.trim()) || !gender) {
//       setErrorMessage('Please fill in all fields.');
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
//       <div style={containerStyle} id="container">
//         <div style={bigBoxStyle}>
//           <div style={logoAndDoctorInfoContainerStyle}>
//             <img src={drLogo} alt="Logo" style={logoStyle} />
//             <div style={doctorInfoStyle}>
//               <p>{selectedDoctor.name}</p>
//               <p>{selectedDoctor.specialty}</p>
//               <p>{selectedDoctor.qualifications}</p>
//               <p>Address: {selectedDoctor.address}</p>
//             </div>
//           </div>
//           <hr style={horizontalLineStyle} />
//           <div style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
//             <div style={{ textAlign: 'left', width: '100%' }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <label style={labelStyle}>Patient's Name:</label>
//                 <input type="text" style={inputNameStyle} />
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-100px' }}>
//                 <label style={labelStyle}>Age:</label>
//                 <input type="number" style={inputAgeStyle} onChange={handleAgeChange} />
//                 {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-70px' }}>
//                 <label style={labelStyle}>Gender:</label>
//                 <select style={inputGenderStyle} onChange={(e) => setGender(e.target.value)}>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div style={{ position: 'relative' }}>
//                 <label style={labelStyle}>Prescriptions:</label><br /> 
//                 <div style={cardContainerStyle}>
//                   {medicines.map((medicine, index) => (
//                     <div key={index} style={cardStyle}>
//                       <p style={labelStyle}>Medicine name:</p>
//                       <input
//                         type="text"
//                         style={textboxStyle}
//                         value={medicine.name}
//                         onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
//                         onKeyPress={(e) => {
//                           if (e.key === 'Enter') handleAddMedicine();
//                         }}
//                       />
//                       <div style={textboxGroupStyle}>
//                         <input type="text" style={smallTextboxStyle} placeholder="Dosage" onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)} />
//                         <input type="text" style={smallTextboxStyle} placeholder="Duration" onChange={(e) => handleMedicineChange(index, 'duration', e.target.value)} />
//                         <input type="text" style={smallTextboxStyle} placeholder="Frequency" onChange={(e) => handleMedicineChange(index, 'frequency', e.target.value)} />
//                         <select style={smallTextboxStyle} onChange={(e) => handleMedicineChange(index, 'foodType', e.target.value)}>
//                           <option value="before">Before food</option>
//                           <option value="after">After food</option>
//                         </select>
//                       </div>
//                     </div>
//                   ))}
//                   <div style={buttonContainerStyle}>
//                     <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
//                   </div>
//                   {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//                   {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//                 </div>
//               </div>
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
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button style={buttonStyle} onClick={handlePrint}>Print</button>
//       </div>
//     </div>
//   );
// };

// export default Prescription;








// import React, { useState } from 'react';
// import drLogo from "../../images/prescription/drlogo.png";

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
//   const [medicines, setMedicines] = useState([{ name: '', dosage: '', duration: '', frequency: '', foodType: '' }]);
//   const [gender, setGender] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const selectedDoctor = doctors[selectedDoctorIndex];

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
//     borderRadius: '5px',
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

//   const buttonContainerStyle = {
//     display: 'none', // Hides the button container
//   };

//   const buttonStyle = {
//     padding: '5px 15px',
//     borderRadius: '5px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//   };
  
//   const inputNameStyle = {
//     ...inputStyle,
//     marginLeft: '20px' 
//   };

//   const inputAgeStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)',
//     marginLeft: '20'
//   };

//   const inputGenderStyle = {
//     ...inputStyle,
//     width: 'calc(80% - 170px)',
//     marginLeft: '20px' 
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
//     const originalDisplayStyle = container.style.display;
//     container.style.display = 'block';
//     window.print();
//     container.style.display = originalDisplayStyle;
//   };

//   const handleAgeChange = (event) => {
//     const age = event.target.value;
//     if (!/^\d+$/.test(age) || parseInt(age, 10) <= 0) {
//       setAgeError(true);
//     } else {
//       setAgeError(false);
//     }
//   };

//   const handleMedicineChange = (index, field, value) => {
//     const updatedMedicines = [...medicines];
//     updatedMedicines[index][field] = value;
    
//     // Update the content of the next medicine box if it exists
//     if (index < medicines.length - 1) {
//       updatedMedicines[index + 1][field] = value;
//     }
    
//     // Add a new medicine box if the last medicine box is being typed in
//     if (index === medicines.length - 1 && value.trim() !== '') {
//       updatedMedicines.push({ name: '', dosage: '', duration: '', frequency: '', foodType: '' });
//     }
    
//     setMedicines(updatedMedicines);
//   };

//   const handleSubmit = () => {
//     if (!medicines.every(({ name }) => name.trim()) || !gender) {
//       setErrorMessage('Please fill in all fields.');
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
//       <div style={containerStyle} id="container">
//         <div style={bigBoxStyle}>
//           <div style={logoAndDoctorInfoContainerStyle}>
//             <img src={drLogo} alt="Logo" style={logoStyle} />
//             <div style={doctorInfoStyle}>
//               <p>{selectedDoctor.name}</p>
//               <p>{selectedDoctor.specialty}</p>
//               <p>{selectedDoctor.qualifications}</p>
//               <p>Address: {selectedDoctor.address}</p>
//             </div>
//           </div>
//           <hr style={horizontalLineStyle} />
//           <div style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
//             <div style={{ textAlign: 'left', width: '100%' }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <label style={labelStyle}>Patient's Name:</label>
//                 <input type="text" style={inputNameStyle} />
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-100px' }}>
//                 <label style={labelStyle}>Age:</label>
//                 <input type="number" style={inputAgeStyle} onChange={handleAgeChange} />
//                 {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft:'-70px' }}>
//                 <label style={labelStyle}>Gender:</label>
//                 <select style={inputGenderStyle} onChange={(e) => setGender(e.target.value)}>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div style={{ position: 'relative' }}>
//                 <label style={labelStyle}>Prescriptions:</label><br /> 
//                 <div style={cardContainerStyle}>
//                   {medicines.map((medicine, index) => (
//                     <div key={index} style={cardStyle}>
//                       <p style={labelStyle}>Medicine name:</p>
//                       <input
//                         type="text"
//                         style={textboxStyle}
//                         value={medicine.name}
//                         onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
//                       />
//                       <div style={textboxGroupStyle}>
//                         <input type="text" style={smallTextboxStyle} placeholder="Dosage" onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)} />
//                         <input type="text" style={smallTextboxStyle} placeholder="Duration" onChange={(e) => handleMedicineChange(index, 'duration', e.target.value)} />
//                         <input type="text" style={smallTextboxStyle} placeholder="Frequency" onChange={(e) => handleMedicineChange(index, 'frequency', e.target.value)} />
//                         <select style={smallTextboxStyle} onChange={(e) => handleMedicineChange(index, 'foodType', e.target.value)}>
//                           <option value="before">Before food</option>
//                           <option value="after">After food</option>
//                         </select>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
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
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button style={buttonStyle} onClick={handlePrint}>Print</button>
//       </div>
//     </div>
//   );
// };

// export default Prescription;
