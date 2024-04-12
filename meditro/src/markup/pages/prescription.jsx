


// import React from 'react';
// import drLogo from "../../images/prescription/drlogo.png";

// const Prescription = () => {
//   const containerStyle = {
//     maxWidth: '800px',
//     margin: '100px auto 0',
//     padding: '10px',
//   };

//   const prescriptionStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: '#f9f9f9',
//     marginLeft: '10px',
//     padding: '20px'
//   };

//   const medicationsListStyle = {
//     listStyleType: 'none',
//     padding: '0'
//   };

//   const listItemStyle = {
//     marginBottom: '5px'
//   };

//   const logoStyle = {
//     width: '100px',
//     height: '100px',
//     marginRight: '20px',
//     marginTop: '35px',
//   };

//   const horizontalLineStyle = {
//     borderTop: '1px solid #ccc',
//     margin: '20px 0',
//   };

//   const doctorDetailsStyle = {
//     backgroundColor: '#6666ff', 
//     padding: '0px', 
//     borderRadius: '5px 5px 0 0' ,
//   };

//   const doctorInfoStyle = {
//     display: 'flex',
//     color: 'white',
//     padding: '5px',
//     marginLeft:'10px',
//   };

//   const patientInfoStyle = {
//     marginTop: '20px',
//     marginLeft: '30px'
//   };

//   const patient1InfoStyle = {
//     marginTop: '20px',
//     marginLeft: '430px',
//     fontWeight: 'bold',
//   };

//   const labelStyle = {
//     marginRight: '10px',
//     fontWeight: 'bold'
//   };

//   const inputStyle = {
//     border: 'none',
//     borderBottom: '1px solid #ccc',
//     outline: 'none',
//     padding: '5px',
//     width: '50%',
//     marginBottom: '10px',
//     textAlign: 'center'
//   };

//   const inputNameStyle = {
//     ...inputStyle,
//     marginLeft: '20px' 
//   };

//   const inputAgeStyle = {
//     ...inputStyle,
//     marginLeft: '115px' 
//   };

//   const inputGenderStyle = {
//     ...inputStyle,
//     marginLeft: '85px' 
//   };

//   const inputDateStyle = {
//     ...inputStyle,
//     marginLeft: '40px', 
//     marginTop:'10px'
//   };

//   const textareaStyle = {
//     width: '100%',
//     marginBottom: '10px',
//     resize: 'vertical',
//     marginTop:'30px'
//   };

//   const bigBoxStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '20px',
//     marginBottom: '20px'
//   };

//   const buttonStyle = {
//     marginRight: '10px',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer'
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div>
//       <div style={containerStyle}>
//         <div style={bigBoxStyle}>
//           <div style={doctorDetailsStyle}>
//             <div style={doctorInfoStyle}>
//               <img src={drLogo} alt="Logo" style={logoStyle} />
//               <div>
//                 <p>Dr. Rajendra Jain</p>
//                 <p> General Physician</p>
//                 <p> MBBS,MD </p>
//                 <p>Address: 456 Oak Street, Pune</p>
//               </div>
//             </div>
//           </div>
//           <hr style={horizontalLineStyle} />
//           <div style={patientInfoStyle }>
//             <label style={labelStyle}>Patient's Name :</label>
//             <input type="text" style={inputNameStyle} /><br />
//             <label style={labelStyle}>Age :</label>
//             <input type="text" style={inputAgeStyle} pattern="[0-9]*" /><br />
//             <label style={labelStyle}>Gender :</label>
//             <input type="text" style={inputGenderStyle} /><br />
//             <label style={labelStyle}>Prescriptions :</label><br /> 
//             <textarea style={textareaStyle} rows="10" cols="20"></textarea><br />
//           </div>
//           <hr style={{ borderTop: '1px solid #ccc', margin: '20px 0' }} />
//           <div style={patient1InfoStyle}>
//             <label style={labelStyle}>Signature : ____________________</label>
//             <label style={labelStyle}>Date :</label>
//             <input type="date" style={inputDateStyle} /><br />
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

  const selectedDoctor = doctors[selectedDoctorIndex]; // Selected doctor details

  const containerStyle = {
    maxWidth: '800px',
    margin: '100px auto 0',
    padding: '10px',
  };

  const prescriptionStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    marginLeft: '10px',
    padding: '20px'
  };

  const medicationsListStyle = {
    listStyleType: 'none',
    padding: '0'
  };

  const listItemStyle = {
    marginBottom: '5px'
  };

  const logoStyle = {
    width: '100px',
    height: '100px',
    marginRight: '20px',
    marginTop: '35px',
  };

  const horizontalLineStyle = {
    borderTop: '1px solid #ccc',
    margin: '20px 0',
  };

  const doctorDetailsStyle = {
    backgroundColor: '#6666ff', 
    padding: '0px', 
    borderRadius: '5px 5px 0 0' ,
  };

  const doctorInfoStyle = {
    display: 'flex',
    color: 'white',
    padding: '5px',
    marginLeft:'10px',
  };

  const patientInfoStyle = {
    marginTop: '20px',
    marginLeft: '30px'
  };

  const patient1InfoStyle = {
    marginTop: '20px',
    marginLeft: '430px',
    fontWeight: 'bold',
  };

  const labelStyle = {
    marginRight: '10px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    outline: 'none',
    padding: '5px',
    width: '50%',
    marginBottom: '10px',
    textAlign: 'center'
  };

  const inputNameStyle = {
    ...inputStyle,
    marginLeft: '20px' 
  };

  const inputAgeStyle = {
    ...inputStyle,
    marginLeft: '100px' 
  };

  const inputGenderStyle = {
    ...inputStyle,
    marginLeft: '70px' 
  };

  const inputDateStyle = {
    ...inputStyle,
    marginLeft: '50px',
    marginTop: '10px'
  };

  const textareaStyle = {
    width: '100%',
    marginBottom: '10px',
    resize: 'vertical',
    marginTop:'30px'
  };

  const bigBoxStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px'
  };

  const buttonStyle = {
    marginRight: '10px',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  };

  const handlePrint = () => {
    const container = document.getElementById('container');
    const originalDisplayStyle = container.style.display;
    container.style.display = 'block'; // Show container for printing
    window.print(); // Print
    container.style.display = originalDisplayStyle; // Restore original display style
  };

  const handleAgeChange = (event) => {
    const age = event.target.value;
    if (!/^\d+$/.test(age)) {
      setAgeError(true); // Set error if input contains non-digit characters
    } else {
      setAgeError(false); // Clear error if input contains only digits
    }
  };

  return (
    <div>
      <div style={containerStyle} id="container"> {/* Give the container an ID */}
        <div style={bigBoxStyle}>
          <div style={doctorDetailsStyle}>
            <div style={doctorInfoStyle}>
              <img src={drLogo} alt="Logo" style={logoStyle} />
              <div >
                <p>{selectedDoctor.name}</p>
                <p>{selectedDoctor.specialty}</p>
                <p>{selectedDoctor.qualifications}</p>
                <p>Address: {selectedDoctor.address}</p>
              </div>
            </div>
          </div>
          <hr style={horizontalLineStyle} />
          <div style={patientInfoStyle }>
            <label style={labelStyle}>Patient's Name:</label>
            <input type="text" style={inputNameStyle} /><br />
            <label style={labelStyle}>Age:</label>
            <input type="text" style={inputAgeStyle} onChange={handleAgeChange} />
            {ageError && <span style={{ color: 'blue' }}><br /> Only digits are allowed for age</span>}<br />
            <label style={labelStyle}>Gender:</label>
            <input type="text" style={inputGenderStyle} /><br />
            <label style={labelStyle}>Prescriptions:</label><br /> 
            <textarea style={textareaStyle} rows="10" cols="20"></textarea><br />
          </div>
          <hr style={{ borderTop: '1px solid #ccc', margin: '20px 0' }} />
          <div style={patient1InfoStyle}>
            <label style={labelStyle}>Signature : ____________________</label>
            <label style={labelStyle}>Date :</label>
            <input type="date" style={inputDateStyle} /><br />
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




