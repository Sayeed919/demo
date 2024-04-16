import React, { useState } from 'react';
import lineBg from '../../images/appointment/line-bg.png';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/wave-orange.png';
import ptImg3 from '../../images/shap/wave-blue.png';
import ptImg4 from '../../images/shap/circle-orange.png';

const MyProfile = () => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumberError, setContactNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [location, setLocation] = useState('');
    const [allergies, setAllergies] = useState('');
    const [relation, setRelation] = useState('');
    const [emergencyName, setEmergencyName] = useState('');
    const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
    const [currentMedications, setCurrentMedications] = useState('');
    const [pastMedications, setPastMedications] = useState('');
    const [injuries, setInjuries] = useState('');
    const [surgeries, setSurgeries] = useState('');
    const [smokingHabits, setSmokingHabits] = useState('');
    const [alcoholConsumption, setAlcoholConsumption] = useState('');
    const [foodPreference, setFoodPreference] = useState({
        veg: false,
        nonVeg: false,
        vegan: false,
        eggetarian: false,
    });
    const [profession, setProfession] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFoodPreferenceChange = (key) => {
        setFoodPreference({ ...foodPreference, [key]: !foodPreference[key] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Save button clicked");
        
        // Validation for all fields
        if (!name || !contactNumber || !email || !gender || !dateOfBirth || !bloodGroup || !maritalStatus || !height || !weight || !emergencyContact || !location || !allergies || !currentMedications || !pastMedications || !injuries || !surgeries || !smokingHabits || !alcoholConsumption || !(foodPreference.veg || foodPreference.nonVeg || foodPreference.vegan || foodPreference.eggetarian) || !profession) {
            setSuccessMessage('');
            setErrorMessage('Please fill in all fields.');
            return;
        }
    
        // Validation for contact number (only digits allowed)
        const contactNumberRegex = /^[0-9]+$/;
        if (!contactNumber.match(contactNumberRegex)) {
            setContactNumberError('Invalid contact number. Only digits are allowed.');
            setEmailError(''); // Clear email error
            setErrorMessage('');
            return;
        } else {
            setContactNumberError('');
        }
        // Validation for email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        setEmailError('Invalid email format.');
        setContactNumberError(''); // Clear contact number error
        setErrorMessage('');
        return;
    } else {
        setEmailError('');
    }
        // Validation for photo format
        if (photo) {
            const allowedFormats = ['jpg', 'jpeg', 'png'];
            const fileName = photo.name.toLowerCase();
            const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
            if (!allowedFormats.includes(fileExtension)) {
                setSuccessMessage('');
                setErrorMessage('Invalid photo format. Only JPG, PNG, and JPEG formats are allowed.');
                return;
            }
        }
    
        // Form data is valid, proceed with submission
        setErrorMessage('');
        setSuccessMessage('Saved successfully!');
    };
    

    const handleUpdate = () => {
        // Add logic to update profile
        setSuccessMessage('Profile updated successfully!');
    };

    const handleDelete = () => {
        // Add logic to delete profile
        setName('');
        setPhoto(null);
        setContactNumber('');
        setEmail('');
        setGender('');
        setDateOfBirth('');
        setBloodGroup('');
        setHeight('');
        setWeight('');
        setEmergencyContact('');
        setLocation('');
        setAllergies('');
        setCurrentMedications('');
        setPastMedications('');
        setInjuries('');
        setSurgeries('');
        setSmokingHabits('');
        setAlcoholConsumption('');
        setFoodPreference({
            veg: false,
            nonVeg: false,
            vegan: false,
            eggetarian: false,
        });
        setProfession('');
        setSuccessMessage('Profile deleted successfully!');
    };

    return (
        <div style={{ maxWidth: '1000px', margin: '120px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <div style={{ marginBottom: '30px' }}>
                <h5 style={{ color: '#333' }}>Personal Details</h5>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Name:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Photo:</label>
                    <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Contact Number:</label>
                    <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </div>
                <div style={{ color: 'blue', marginBottom: '10px' }}>{contactNumberError}</div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Email:</label>
                    <input type="email" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{ color: 'blue', marginBottom: '10px' }}>{emailError}</div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Gender:</label>
                    <div>
                        <label style={{ marginRight: '10px', color: '#333' }}>
                            <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
                            Male
                        </label>
                        <label style={{ marginRight: '10px', color: '#333' }}>
                            <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
                            Female
                        </label>

                        <label style={{ color: '#333' }}>
                            <input type="radio" value="other" checked={gender === 'other'} onChange={() => setGender('other')} />
                            Other
                        </label>
                    </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Date of Birth:</label>
                    <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Blood Group:</label>
                    <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                        <option value="">Select</option>
                        <option value="A+ve">A+ve</option>
                        <option value="A-ve">A-ve</option>
                        <option value="B+ve">B+ve</option>
                        <option value="B-ve">B-ve</option>
                        <option value="AB+ve">AB+ve</option>
                        <option value="AB-ve">AB-ve</option>
                        <option value="O+ve">O+ve</option>
                        <option value="O-ve">O-ve</option>
                    </select>
                </div>
               
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Height:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Weight:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Address:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <hr style={{ borderTop: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h5 style={{ color: '#333' }}>Emergency Contact</h5>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Name:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={emergencyName} onChange={(e) => setEmergencyName(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Contact Number:</label>
                    <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={emergencyContactNumber} onChange={(e) => setEmergencyContactNumber(e.target.value)} />
                </div>
                <div style={{ color: 'blue', marginBottom: '10px' }}>{contactNumberError}</div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Relation:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={relation} onChange={(e) => setRelation(e.target.value)} />
                </div>

                <div style={{ marginTop: '40px' }}>
                    <hr style={{ borderTop: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h5 style={{ color: '#333' }}>Medical Details</h5>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Allergies:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={allergies} onChange={(e) => setAllergies(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Current Medications:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={currentMedications} onChange={(e) => setCurrentMedications(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Past Medications:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={pastMedications} onChange={(e) => setPastMedications(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Injuries:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={injuries} onChange={(e) => setInjuries(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Surgeries:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={surgeries} onChange={(e) => setSurgeries(e.target.value)} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Smoking Habits:</label>
                    <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={smokingHabits} onChange={(e) => setSmokingHabits(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Alcohol Consumption:</label>
                    <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={alcoholConsumption} onChange={(e) => setAlcoholConsumption(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Food Preference:</label>
                    <div>
                        <label style={{ marginRight: '10px', color: '#333' }}>
                            <input type="checkbox" checked={foodPreference.veg} onChange={() => handleFoodPreferenceChange('veg')} />
                            Vegetarian
                        </label>
                        <label style={{ marginRight: '10px', color: '#333' }}>
                            <input type="checkbox" checked={foodPreference.nonVeg} onChange={() => handleFoodPreferenceChange('nonVeg')} />
                            Non-Vegetarian
                        </label>
                        <label style={{ marginRight: '10px', color: '#333' }}>
                            <input type="checkbox" checked={foodPreference.vegan} onChange={() => handleFoodPreferenceChange('vegan')} />
                            Vegan
                        </label>
                        <label style={{ color: '#333' }}>
                            <input type="checkbox" checked={foodPreference.eggetarian} onChange={() => handleFoodPreferenceChange('eggetarian')} />
                            Eggetarian
                        </label>
                    </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#333' }}>Profession:</label>
                    <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={profession} onChange={(e) => setProfession(e.target.value)} />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <hr style={{ borderTop: '1px solid #ccc' }} />
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
                    <button type="button" onClick={handleUpdate} style={{ marginLeft: '20px', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Update</button>
                    <button type="button" onClick={handleDelete} style={{ marginLeft: '20px', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                </div>
                {errorMessage && <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>{successMessage}</div>}
            </form>
        </div>
    );
};

export default MyProfile;




// import React, { useState } from 'react';
// import lineBg from '../../images/appointment/line-bg.png';
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/wave-orange.png';
// import ptImg3 from '../../images/shap/wave-blue.png';
// import ptImg4 from '../../images/shap/circle-orange.png';

// const MyProfile = () => {
//     const [name, setName] = useState('');
//     const [photo, setPhoto] = useState(null);
//     const [contactNumber, setContactNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [contactNumberError, setContactNumberError] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [gender, setGender] = useState('');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [bloodGroup, setBloodGroup] = useState('');
//     const [maritalStatus, setMaritalStatus] = useState('');
//     const [height, setHeight] = useState('');
//     const [weight, setWeight] = useState('');
//     const [emergencyContact, setEmergencyContact] = useState('');
//     const [location, setLocation] = useState('');
//     const [allergies, setAllergies] = useState('');
//     const [relation, setRelation] = useState('');
//     const [emergencyName, setEmergencyName] = useState('');
//     const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
//     const [currentMedications, setCurrentMedications] = useState('');
//     const [pastMedications, setPastMedications] = useState('');
//     const [injuries, setInjuries] = useState('');
//     const [surgeries, setSurgeries] = useState('');
//     const [smokingHabits, setSmokingHabits] = useState('');
//     const [alcoholConsumption, setAlcoholConsumption] = useState('');
//     const [foodPreference, setFoodPreference] = useState({
//         veg: false,
//         nonVeg: false,
//         vegan: false,
//         eggetarian: false,
//     });
//     const [profession, setProfession] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleFoodPreferenceChange = (key) => {
//         setFoodPreference({ ...foodPreference, [key]: !foodPreference[key] });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Save button clicked");
        
//         // Validation for all fields
//         if (!name || !contactNumber || !email || !gender || !dateOfBirth || !bloodGroup || !maritalStatus || !height || !weight || !emergencyContact || !location || !allergies || !currentMedications || !pastMedications || !injuries || !surgeries || !smokingHabits || !alcoholConsumption || !(foodPreference.veg || foodPreference.nonVeg || foodPreference.vegan || foodPreference.eggetarian) || !profession) {
//             setSuccessMessage('');
//             setErrorMessage('Please fill in all fields.');
//             return;
//         }
    
//         // Validation for contact number (only digits allowed)
//         const contactNumberRegex = /^[0-9]+$/;
//         if (!contactNumber.match(contactNumberRegex)) {
//             setSuccessMessage('');
//             setErrorMessage('Invalid contact number. Only digits are allowed.');
//             return;
//         }
    
//         // Validation for email format
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!email.match(emailRegex)) {
//             setSuccessMessage('');
//             setErrorMessage('Invalid email format.');
//             return;
//         }
    
//         // Validation for photo format
//         if (photo) {
//             const allowedFormats = ['jpg', 'jpeg', 'png'];
//             const fileName = photo.name.toLowerCase();
//             const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
//             if (!allowedFormats.includes(fileExtension)) {
//                 setSuccessMessage('');
//                 setErrorMessage('Invalid photo format. Only JPG, PNG, and JPEG formats are allowed.');
//                 return;
//             }
//         }
    
//         // Form data is valid, proceed with submission
//         setErrorMessage('');
//         setSuccessMessage('Saved successfully!');
//     };
    

//     const handleUpdate = () => {
//         // Add logic to update profile
//         setSuccessMessage('Profile updated successfully!');
//     };

//     const handleDelete = () => {
//         // Add logic to delete profile
//         setName('');
//         setPhoto(null);
//         setContactNumber('');
//         setEmail('');
//         setGender('');
//         setDateOfBirth('');
//         setBloodGroup('');
//         setHeight('');
//         setWeight('');
//         setEmergencyContact('');
//         setLocation('');
//         setAllergies('');
//         setCurrentMedications('');
//         setPastMedications('');
//         setInjuries('');
//         setSurgeries('');
//         setSmokingHabits('');
//         setAlcoholConsumption('');
//         setFoodPreference({
//             veg: false,
//             nonVeg: false,
//             vegan: false,
//             eggetarian: false,
//         });
//         setProfession('');
//         setSuccessMessage('Profile deleted successfully!');
//     };

//     return (
//         <div style={{ maxWidth: '1000px', margin: '120px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
//             <div style={{ marginBottom: '30px' }}>
//                 <h5 style={{ color: '#333' }}>Personal Details</h5>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Name:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={name} onChange={(e) => setName(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Photo:</label>
//                     <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Contact Number:</label>
//                     <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
//                 </div>
//                 <div style={{ color: 'blue', marginBottom: '10px' }}>{contactNumberError}</div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Email:</label>
//                     <input type="email" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div style={{ color: 'blue', marginBottom: '10px' }}>{emailError}</div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Gender:</label>
//                     <div>
//                         <label style={{ marginRight: '10px', color: '#333' }}>
//                             <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
//                             Male
//                         </label>
//                         <label style={{ marginRight: '10px', color: '#333' }}>
//                             <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
//                             Female
//                         </label>

//                         <label style={{ color: '#333' }}>
//                             <input type="radio" value="other" checked={gender === 'other'} onChange={() => setGender('other')} />
//                             Other
//                         </label>
//                     </div>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Date of Birth:</label>
//                     <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Blood Group:</label>
//                     <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
//                         <option value="">Select</option>
//                         <option value="A+ve">A+ve</option>
//                         <option value="A-ve">A-ve</option>
//                         <option value="B+ve">B+ve</option>
//                         <option value="B-ve">B-ve</option>
//                         <option value="AB+ve">AB+ve</option>
//                         <option value="AB-ve">AB-ve</option>
//                         <option value="O+ve">O+ve</option>
//                         <option value="O-ve">O-ve</option>
//                     </select>
//                 </div>
               
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Height:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={height} onChange={(e) => setHeight(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Weight:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={weight} onChange={(e) => setWeight(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Address:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={location} onChange={(e) => setLocation(e.target.value)} />
//                 </div>
//                 <div style={{ marginTop: '40px' }}>
//                     <hr style={{ borderTop: '1px solid #ccc' }} />
//                 </div>
//                 <div style={{ marginBottom: '20px' }}>
//                     <h5 style={{ color: '#333' }}>Emergency Contact</h5>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Name:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={emergencyName} onChange={(e) => setEmergencyName(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Contact Number:</label>
//                     <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={emergencyContactNumber} onChange={(e) => setEmergencyContactNumber(e.target.value)} />
//                 </div>
//                 <div style={{ color: 'blue', marginBottom: '10px' }}>{contactNumberError}</div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Relation:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={relation} onChange={(e) => setRelation(e.target.value)} />
//                 </div>

//                 <div style={{ marginTop: '40px' }}>
//                     <hr style={{ borderTop: '1px solid #ccc' }} />
//                 </div>
//                 <div style={{ marginBottom: '20px' }}>
//                     <h5 style={{ color: '#333' }}>Medical Details</h5>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Allergies:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={allergies} onChange={(e) => setAllergies(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Current Medications:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={currentMedications} onChange={(e) => setCurrentMedications(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Past Medications:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={pastMedications} onChange={(e) => setPastMedications(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Injuries:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={injuries} onChange={(e) => setInjuries(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Surgeries:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={surgeries} onChange={(e) => setSurgeries(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Smoking Habits:</label>
//                     <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={smokingHabits} onChange={(e) => setSmokingHabits(e.target.value)}>
//                         <option value="">Select</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                     </select>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Alcohol Consumption:</label>
//                     <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={alcoholConsumption} onChange={(e) => setAlcoholConsumption(e.target.value)}>
//                         <option value="">Select</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                     </select>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Food Preference:</label>
//                     <div>
//                         <label style={{ marginRight: '10px', color: '#333' }}>
//                             <input type="checkbox" checked={foodPreference.veg} onChange={() => handleFoodPreferenceChange('veg')} />
//                             Vegetarian
//                         </label>
//                         <label style={{ marginRight: '10px', color: '#333' }}>
//                             <input type="checkbox" checked={foodPreference.nonVeg} onChange={() => handleFoodPreferenceChange('nonVeg')} />
//                             Non-Vegetarian
//                         </label>
//                         <label style={{ marginRight: '10px', color: '#333' }}>
//                             <input type="checkbox" checked={foodPreference.vegan} onChange={() => handleFoodPreferenceChange('vegan')} />
//                             Vegan
//                         </label>
//                         <label style={{ color: '#333' }}>
//                             <input type="checkbox" checked={foodPreference.eggetarian} onChange={() => handleFoodPreferenceChange('eggetarian')} />
//                             Eggetarian
//                         </label>
//                     </div>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label style={{ color: '#333' }}>Profession:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={profession} onChange={(e) => setProfession(e.target.value)} />
//                 </div>
//                 <div style={{ marginTop: '40px' }}>
//                     <hr style={{ borderTop: '1px solid #ccc' }} />
//                 </div>
//                 <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                     <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
//                     <button type="button" onClick={handleUpdate} style={{ marginLeft: '20px', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Update</button>
//                     <button type="button" onClick={handleDelete} style={{ marginLeft: '20px', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
//                 </div>
//                 {errorMessage && <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{errorMessage}</div>}
//                 {successMessage && <div style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>{successMessage}</div>}
//             </form>
//         </div>
//     );
// };

// export default MyProfile;







// import React, { useState } from 'react';



// import lineBg from '../../images/appointment/line-bg.png';
// import ptImg1 from '../../images/shap/trangle-orange.png';
// import ptImg2 from '../../images/shap/wave-orange.png';
// import ptImg3 from '../../images/shap/wave-blue.png';
// import ptImg4 from '../../images/shap/circle-orange.png';

// const MyProfile = () => {
//     const [name, setName] = useState('');
//     const [photo, setPhoto] = useState(null);
//     const [contactNumber, setContactNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [contactNumberError, setContactNumberError] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [gender, setGender] = useState('');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [bloodGroup, setBloodGroup] = useState('');
//     const [maritalStatus, setMaritalStatus] = useState('');
//     const [height, setHeight] = useState('');
//     const [weight, setWeight] = useState('');
//     const [emergencyContact, setEmergencyContact] = useState('');
//     const [location, setLocation] = useState('');
//     const [allergies, setAllergies] = useState('');
//     const [relation, setRelation] = useState('');
//     const [emergencyName, setEmergencyName] = useState('');
//     const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
//     const [currentMedications, setCurrentMedications] = useState('');
//     const [pastMedications, setPastMedications] = useState('');
//     const [injuries, setInjuries] = useState('');
//     const [surgeries, setSurgeries] = useState('');
//     const [smokingHabits, setSmokingHabits] = useState('');
//     const [alcoholConsumption, setAlcoholConsumption] = useState('');
//     const [foodPreference, setFoodPreference] = useState({
//         veg: false,
//         nonVeg: false,
//         vegan: false,
//         eggetarian: false,
//     });
//     const [profession, setProfession] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleFoodPreferenceChange = (key) => {
//         setFoodPreference({ ...foodPreference, [key]: !foodPreference[key] });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Save button clicked");
        
//         // Validation for all fields
//         if (!name || !contactNumber || !email || !gender || !dateOfBirth || !bloodGroup || !maritalStatus || !height || !weight || !emergencyContact || !location || !allergies || !currentMedications || !pastMedications || !injuries || !surgeries || !smokingHabits || !alcoholConsumption || !(foodPreference.veg || foodPreference.nonVeg || foodPreference.vegan || foodPreference.eggetarian) || !profession) {
//             setSuccessMessage('');
//             setErrorMessage('Please fill in all fields.');
//             return;
//         }
    
//         // Validation for contact number (only digits allowed)
//         const contactNumberRegex = /^[0-9]+$/;
//         if (!contactNumber.match(contactNumberRegex)) {
//             setSuccessMessage('');
//             setErrorMessage('Invalid contact number. Only digits are allowed.');
//             return;
//         }
    
//         // Validation for email format
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!email.match(emailRegex)) {
//             setSuccessMessage('');
//             setErrorMessage('Invalid email format.');
//             return;
//         }
    
//         // Validation for photo format
//         if (photo) {
//             const allowedFormats = ['jpg', 'jpeg', 'png'];
//             const fileName = photo.name.toLowerCase();
//             const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
//             if (!allowedFormats.includes(fileExtension)) {
//                 setSuccessMessage('');
//                 setErrorMessage('Invalid photo format. Only JPG, PNG, and JPEG formats are allowed.');
//                 return;
//             }
//         }
    
//         // Form data is valid, proceed with submission
//         setErrorMessage('');
//         setSuccessMessage('Saved successfully!');
//     };
    

//     const handleUpdate = () => {
//         // Add logic to update profile
//         setSuccessMessage('Profile updated successfully!');
//     };

//     const handleDelete = () => {
//         // Add logic to delete profile
//         setName('');
//         setPhoto(null);
//         setContactNumber('');
//         setEmail('');
//         setGender('');
//         setDateOfBirth('');
//         setBloodGroup('');
//         setHeight('');
//         setWeight('');
//         setEmergencyContact('');
//         setLocation('');
//         setAllergies('');
//         setCurrentMedications('');
//         setPastMedications('');
//         setInjuries('');
//         setSurgeries('');
//         setSmokingHabits('');
//         setAlcoholConsumption('');
//         setFoodPreference({
//             veg: false,
//             nonVeg: false,
//             vegan: false,
//             eggetarian: false,
//         });
//         setProfession('');
//         setSuccessMessage('Profile deleted successfully!');
//     };

//     return (
        
//         <div style={{ maxWidth: '1000px', margin: '120px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
//             <div style={{ marginBottom: '30px' }}>
//                 <h5>Personal Details</h5>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Name:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={name} onChange={(e) => setName(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Photo:</label>
//                     <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Contact Number:</label>
//                     <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
//                 </div>
//                 <div style={{ color: 'blue', marginBottom: '10px' }}>{contactNumberError}</div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Email:</label>
//                     <input type="email" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div style={{ color: 'blue', marginBottom: '10px' }}>{emailError}</div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Gender:</label>
//                     <div>
//                         <label style={{ marginRight: '10px' }}>
//                             <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
//                             Male
//                         </label>
//                         <label style={{ marginRight: '10px' }}>
//                             <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
//                             Female
//                         </label>

//                         <label>
//                             <input type="radio" value="other" checked={gender === 'other'} onChange={() => setGender('other')} />
//                             Other
//                         </label>
//                     </div>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Date of Birth:</label>
//                     <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Blood Group:</label>
//                     <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
//                         <option value="">Select</option>
//                         <option value="A+ve">A+ve</option>
//                         <option value="A-ve">A-ve</option>
//                         <option value="B+ve">B+ve</option>
//                         <option value="B-ve">B-ve</option>
//                         <option value="AB+ve">AB+ve</option>
//                         <option value="AB-ve">AB-ve</option>
//                         <option value="O+ve">O+ve</option>
//                         <option value="O-ve">O-ve</option>
//                     </select>
//                 </div>
               
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Height:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={height} onChange={(e) => setHeight(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Weight:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={weight} onChange={(e) => setWeight(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Address:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={location} onChange={(e) => setLocation(e.target.value)} />
//                 </div>
//                 <div style={{ marginTop: '40px' }}>

//                     {/* Horizontal line and Lifestyle Details heading */}
//                     <hr />
//                 </div>
//                 <div style={{ marginBottom: '20px' }}>
//                     <h5>Emergency Contact</h5>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Name:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={emergencyName} onChange={(e) => setEmergencyName(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Contact Number:</label>
//                     <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={emergencyContactNumber} onChange={(e) => setEmergencyContactNumber(e.target.value)} />
//                 </div>
//                 <div style={{ color: 'blue', marginBottom: '10px' }}>{contactNumberError}</div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Relation:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={relation} onChange={(e) => setRelation(e.target.value)} />
//                 </div>

//                 <div style={{ marginTop: '40px' }}>

//                     {/* Horizontal line and Medical Details heading */}
//                     <hr />
//                 </div>
//                 <div style={{ marginBottom: '20px' }}>
//                     <h5>Medical Details</h5>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Allergies:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={allergies} onChange={(e) => setAllergies(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Current Medications:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={currentMedications} onChange={(e) => setCurrentMedications(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Past Medications:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={pastMedications} onChange={(e) => setPastMedications(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Injuries:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={injuries} onChange={(e) => setInjuries(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Surgeries:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={surgeries} onChange={(e) => setSurgeries(e.target.value)} />
//                 </div>
//                 <div style={{ marginTop: '40px' }}>

//                     {/* Horizontal line and Lifestyle Details heading */}
//                     <hr />
//                 </div>
//                 <div style={{ marginBottom: '20px' }}>
//                     <h5>Lifestyle Details</h5>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Smoking Habits:</label>
//                     <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={smokingHabits} onChange={(e) => setSmokingHabits(e.target.value)}>
//                         <option value="">Select</option>
//                         <option value="I don't smoke">I don't smoke</option>
//                         <option value="I used to but I've quit">I used to but I've quit</option>
//                         <option value="1-2/day">1-2/day</option>
//                         <option value="3-5/day">3-5/day</option>
//                         <option value="5-10/day">5-10/day</option>
//                         <option value="greater than 10/day">Greater than 10/day</option>
//                     </select>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Alcohol Consumption:</label>
//                     <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={alcoholConsumption} onChange={(e) => setAlcoholConsumption(e.target.value)}>
//                         <option value="">Select</option>
//                         <option value="I don't drink">I don't drink</option>
//                         <option value="I used to but I've quit">I used to but I've quit</option>
//                         <option value="Rare">Rare</option>
//                         <option value="Social">Social</option>
//                         <option value="Regular">Regular</option>
//                         <option value="Heavy">Heavy</option>
//                     </select>
//                 </div>

//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Food Preference:</label>
//                     <div>
//                         <label style={{ marginRight: '20px' }}>
//                             <input type="checkbox" checked={foodPreference.veg} onChange={() => handleFoodPreferenceChange('veg')} />
//                             Veg
//                         </label>
//                         <label style={{ marginRight: '20px' }}>
//                             <input type="checkbox" checked={foodPreference.nonVeg} onChange={() => handleFoodPreferenceChange('nonVeg')} />
//                             Non-Veg
//                         </label>
//                         <label style={{ marginRight: '20px' }}>
//                             <input type="checkbox" checked={foodPreference.vegan} onChange={() => handleFoodPreferenceChange('vegan')} />
//                             Vegan
//                         </label>
//                         <label>
//                             <input type="checkbox" checked={foodPreference.eggetarian} onChange={() => handleFoodPreferenceChange('eggetarian')} />
//                             Eggetarian
//                         </label>
//                     </div>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Profession:</label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={profession} onChange={(e) => setProfession(e.target.value)} />
//                 </div>
//                 <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                     <button type="submit" disabled={errorMessage} style={{ padding: '5px 30px', backgroundColor: '#f74711', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '20px' }}>Save</button>
//                     <button type="button" onClick={handleUpdate} style={{ padding: '5px 22px', backgroundColor: '#f74711', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '20px' }}>Update</button>
//                     <button type="button" onClick={handleDelete} style={{ padding: '5px 20px', backgroundColor: '#f74711', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
//                 </div>
//                 {errorMessage && <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{errorMessage}</div>}
//                 {successMessage && <div style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>{successMessage}</div>}
//             </form>
 
//             <img className="pt-img1 animate1" src={ptImg1} alt="" />
//         <img className="pt-img2 animate-wave" src={ptImg2} alt="" />
//         <img className="pt-img3 animate-wave" src={ptImg3} alt="" />
//         <img className="pt-img4 animate2" src={ptImg4} alt="" />
//         </div>
//     );
// };

// export default MyProfile;








// import React, { useState } from 'react';

// const MyProfile = () => {
//     const [name, setName] = useState('');
//     const [photo, setPhoto] = useState(null);
//     const [contactNumber, setContactNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [contactNumberError, setContactNumberError] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [gender, setGender] = useState('');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [bloodGroup, setBloodGroup] = useState('');
//     const [maritalStatus, setMaritalStatus] = useState('');
//     const [height, setHeight] = useState('');
//     const [weight, setWeight] = useState('');
//     const [emergencyContact, setEmergencyContact] = useState('');
//     const [location, setLocation] = useState('');
//     const [allergies, setAllergies] = useState('');
//     const [relation, setRelation] = useState('');
//     const [emergencyName, setEmergencyName] = useState('');
//     const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
//     const [currentMedications, setCurrentMedications] = useState('');
//     const [pastMedications, setPastMedications] = useState('');
//     const [injuries, setInjuries] = useState('');
//     const [surgeries, setSurgeries] = useState('');
//     const [smokingHabits, setSmokingHabits] = useState('');
//     const [alcoholConsumption, setAlcoholConsumption] = useState('');
//     const [foodPreference, setFoodPreference] = useState({
//         veg: false,
//         nonVeg: false,
//         vegan: false,
//         eggetarian: false,
//     });
//     const [profession, setProfession] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleFoodPreferenceChange = (key) => {
//         setFoodPreference({ ...foodPreference, [key]: !foodPreference[key] });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Save button clicked");
        
//         // Validation for all fields
//         if (!name || !contactNumber || !email || !gender || !dateOfBirth || !bloodGroup || !maritalStatus || !height || !weight || !emergencyContact || !location || !allergies || !currentMedications || !pastMedications || !injuries || !surgeries || !smokingHabits || !alcoholConsumption || !(foodPreference.veg || foodPreference.nonVeg || foodPreference.vegan || foodPreference.eggetarian) || !profession) {
//             setSuccessMessage('');
//             setErrorMessage('Please fill in all fields.');
//             return;
//         }
    
//         // Validation for contact number (only digits allowed)
//         const contactNumberRegex = /^[0-9]+$/;
//         if (!contactNumber.match(contactNumberRegex)) {
//             setSuccessMessage('');
//             setErrorMessage('Invalid contact number. Only digits are allowed.');
//             return;
//         }
    
//         // Validation for email format
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!email.match(emailRegex)) {
//             setSuccessMessage('');
//             setErrorMessage('Invalid email format.');
//             return;
//         }
    
//         // Validation for photo format
//         if (photo) {
//             const allowedFormats = ['jpg', 'jpeg', 'png'];
//             const fileName = photo.name.toLowerCase();
//             const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
//             if (!allowedFormats.includes(fileExtension)) {
//                 setSuccessMessage('');
//                 setErrorMessage('Invalid photo format. Only JPG, PNG, and JPEG formats are allowed.');
//                 return;
//             }
//         }
    
//         // Form data is valid, proceed with submission
//         setErrorMessage('');
//         setSuccessMessage('Saved successfully!');
//     };
    

//     const handleUpdate = () => {
//         // Add logic to update profile
//         setSuccessMessage('Profile updated successfully!');
//     };

//     const handleDelete = () => {
//         // Add logic to delete profile
//         setName('');
//         setPhoto(null);
//         setContactNumber('');
//         setEmail('');
//         setGender('');
//         setDateOfBirth('');
//         setBloodGroup('');
//         setHeight('');
//         setWeight('');
//         setEmergencyContact('');
//         setLocation('');
//         setAllergies('');
//         setCurrentMedications('');
//         setPastMedications('');
//         setInjuries('');
//         setSurgeries('');
//         setSmokingHabits('');
//         setAlcoholConsumption('');
//         setFoodPreference({
//             veg: false,
//             nonVeg: false,
//             vegan: false,
//             eggetarian: false,
//         });
//         setProfession('');
//         setSuccessMessage('Profile deleted successfully!');
//     };

//     return (
//         <div style={{ maxWidth: '1000px', margin: '120px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
//             <div style={{ marginBottom: '30px' }}>
//                 <h5>Personal Details</h5>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Name: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={name} onChange={(e) => setName(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Photo:</label>
//                     <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Contact Number: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
//                 </div>
//                 <div style={{ color: 'blue', marginBottom: '10px' }}>{contactNumberError}</div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Email: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="email" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div style={{ color: 'blue', marginBottom: '10px' }}>{emailError}</div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Gender: <span style={{ color: 'red' }}>*</span></label>
//                     <div>
//                         <label style={{ marginRight: '10px' }}>
//                             <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
//                             Male
//                         </label>
//                         <label style={{ marginRight: '10px' }}>
//                             <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
//                             Female
//                         </label>

//                         <label>
//                             <input type="radio" value="other" checked={gender === 'other'} onChange={() => setGender('other')} />
//                             Other
//                         </label>
//                     </div>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Date of Birth: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//         <label>Blood Group: <span style={{ color: 'red' }}>*</span></label>
//         <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
//         <option value="">Select</option>
//         <option value="A+ve">A+ve</option>
//         <option value="A-ve">A-ve</option>
//         <option value="B+ve">B+ve</option>
//         <option value="B-ve">B-ve</option>
//         <option value="AB+ve">AB+ve</option>
//         <option value="AB-ve">AB-ve</option>
//         <option value="O+ve">O+ve</option>
//         <option value="O-ve">O-ve</option>
//         </select>
//         </div>
               
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Height: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={height} onChange={(e) => setHeight(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Weight: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={weight} onChange={(e) => setWeight(e.target.value)} />
//                 </div>
//                 {/* <div style={{ marginBottom: '15px' }}>
//                     <label>Emergency Contact:</label>
//                     <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} />
//                 </div> */}
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Address: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={location} onChange={(e) => setLocation(e.target.value)} />
//                 </div>
//                 <div style={{ marginTop: '40px' }}>

//                     {/* Horizontal line and Lifestyle Details heading */}
//                     <hr />
//                 </div>
//                 <div style={{ marginBottom: '20px' }}>
//         <h5>Emergency Contact</h5>
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//     <label>Name: <span style={{ color: 'red' }}>*</span></label>
//     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={emergencyName} onChange={(e) => setEmergencyName(e.target.value)} />
//     </div>
//     <div style={{ marginBottom: '15px' }}>
//     <label>Contact Number: <span style={{ color: 'red' }}>*</span></label>
//     <input type="tel" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={emergencyContactNumber} onChange={(e) => setEmergencyContactNumber(e.target.value)} />
//     </div>
//                 <div style={{ color: 'blue', marginBottom: '10px' }}>{contactNumberError}</div>
//                 <div style={{ marginBottom: '15px' }}>
//     <label>Relation:</label>
//     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={relation} onChange={(e) => setRelation(e.target.value)} />
//     </div>

//                 <div style={{ marginTop: '40px' }}>

//                     {/* Horizontal line and Medical Details heading */}
//                     <hr />
//                 </div>
//                 <div style={{ marginBottom: '20px' }}>
//                     <h5>Medical Details</h5>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Allergies: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={allergies} onChange={(e) => setAllergies(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Current Medications: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={currentMedications} onChange={(e) => setCurrentMedications(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Past Medications: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={pastMedications} onChange={(e) => setPastMedications(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Injuries: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={injuries} onChange={(e) => setInjuries(e.target.value)} />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Surgeries: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={surgeries} onChange={(e) => setSurgeries(e.target.value)} />
//                 </div>
//                 <div style={{ marginTop: '40px' }}>

//                     {/* Horizontal line and Lifestyle Details heading */}
//                     <hr />
//                 </div>
//                 <div style={{ marginBottom: '20px' }}>
//                     <h5>Lifestyle Details</h5>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Smoking Habits: <span style={{ color: 'red' }}>*</span></label>
//                     <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={smokingHabits} onChange={(e) => setSmokingHabits(e.target.value)}>
//                         <option value="">Select</option>
//                         <option value="I don't smoke">I don't smoke</option>
//                         <option value="I used to but I've quit">I used to but I've quit</option>
//                         <option value="1-2/day">1-2/day</option>
//                         <option value="3-5/day">3-5/day</option>
//                         <option value="5-10/day">5-10/day</option>
//                         <option value="greater than 10/day">Greater than 10/day</option>
//                     </select>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//     <label>Alcohol Consumption: <span style={{ color: 'red' }}>*</span></label>
//     <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={alcoholConsumption} onChange={(e) => setAlcoholConsumption(e.target.value)}>
//         <option value="">Select</option>
//         <option value="I don't drink">I don't drink</option>
//         <option value="I used to but I've quit">I used to but I've quit</option>
//         <option value="Rare">Rare</option>
//         <option value="Social">Social</option>
//         <option value="Regular">Regular</option>
//         <option value="Heavy">Heavy</option>
//          </select>
//         </div>

//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Food Preference: <span style={{ color: 'red' }}>*</span></label>
//                     <div>
//                         <label style={{ marginRight: '20px' }}>
//                             <input type="checkbox" checked={foodPreference.veg} onChange={() => handleFoodPreferenceChange('veg')} />
//                             Veg
//                         </label>
//                         <label style={{ marginRight: '20px' }}>
//                             <input type="checkbox" checked={foodPreference.nonVeg} onChange={() => handleFoodPreferenceChange('nonVeg')} />
//                             Non-Veg
//                         </label>
//                         <label style={{ marginRight: '20px' }}>
//                             <input type="checkbox" checked={foodPreference.vegan} onChange={() => handleFoodPreferenceChange('vegan')} />
//                             Vegan
//                         </label>
//                         <label>
//                             <input type="checkbox" checked={foodPreference.eggetarian} onChange={() => handleFoodPreferenceChange('eggetarian')} />
//                             Eggetarian
//                         </label>
//                     </div>
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label>Profession: <span style={{ color: 'red' }}>*</span></label>
//                     <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} value={profession} onChange={(e) => setProfession(e.target.value)} />
//                 </div>
//                 <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                 <button type="submit" disabled={errorMessage} style={{ padding: '5px 30px', backgroundColor: '#f74711', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '20px' }}>Save</button>
//                     <button type="button" onClick={handleUpdate} style={{ padding: '5px 22px', backgroundColor: '#f74711', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '20px' }}>Update</button>
//                     <button type="button" onClick={handleDelete} style={{ padding: '5px 20px', backgroundColor: '#f74711', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
//                 </div>
//                 {errorMessage && <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{errorMessage}</div>}
//                 {successMessage && <div style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>{successMessage}</div>}
//             </form>
//         </div>
//     );
// };

// export default MyProfile;
