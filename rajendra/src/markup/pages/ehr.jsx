import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from '../../images/nurse/nurse1.jpg';

class Ehr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            bloodGroup: '',
            phone: '',
            occupation: '',
            address: '',
            allergy: '',
            medicalHistory: '',
            previousPrescription: '',
            familyDetails: '',
            profileImage: ProfileImage 
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    profileImage: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    render() {
        const { name,  phone, occupation, address, allergy, medicalHistory, familyDetails, profileImage } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div style={{ marginTop: '120px', position: 'relative' }}>
                            <div className="profile-image" style={{marginLeft:'60px'}}>
                                <img src={profileImage} alt="Profile" className="img-fluid rounded-circle" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
                                <label htmlFor="profile-image" style={{ position: 'absolute', bottom: '10px', right: '10px', cursor: 'pointer' }}>
                                    <FontAwesomeIcon icon={faCamera} size="3x" style={{ color: 'darkblue' }} />
                                    <input type="file" id="profile-image" style={{ display: 'none' }} accept="image/jpeg,image/png" onChange={this.handleFileChange} />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginLeft: '800px', marginTop: '-180px' }}>
                        
                    </div>

                    <div className="col-md-4">
                       <div>
                             <h4 style={{ fontSize: '15px', color: '#273F61', marginTop: '30px' }}>Registeration Number</h4>
                             <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Registeration Number"
                                value={name}
                                onChange={this.handleInputChange}
                                style={{ 
                                    borderColor: '#BFBFBF',
                                 width: '210px', 
                                 height: '40px', 
                                 color: '#273F61' }}
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                       <div style={{marginLeft:'-90px'}}>
                             <h4 style={{ fontSize: '15px', color: '#273F61', marginTop: '30px' }}>Date</h4>
                             <input
                                type="date"
                                className="form-control"
                                
                                value={name}
                                onChange={this.handleInputChange}
                                style={{ 
                                borderColor: '#BFBFBF',
                                 width: '210px', 
                                 height: '40px', 
                                 color: '#273F61' }}
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={{marginTop:'-90px', marginLeft:'-180px'}} >
                            <h4 style={{ fontSize: '15px', color: '#273F61', marginTop: '30px' }}>Medication</h4>
                            <input
                                type="text"
                                className="form-control"
                                name="allergy"
                                placeholder="Medication"
                                value={allergy}
                                onChange={this.handleInputChange}
                                style={{ borderColor: '#BFBFBF', width: '220px', height: '40px', color: '#273F61' }}
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div>
                            <h4 style={{ fontSize: '15px', color: '#273F61', marginTop: '30px' }}>Patient name</h4>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                placeholder="Patient name"
                                value={phone}
                                onChange={this.handleInputChange}
                                style={{ borderColor: '#BFBFBF', width: '210px', height: '40px', color: '#273F61' }}
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={{marginLeft:'-90px'}}>
                            <h4 style={{ fontSize: '15px', color: '#273F61', marginTop: '30px' }}>Age</h4>
                            <input
                                className="form-control"
                                name="occupation"
                                placeholder="Age"
                                value={occupation}
                                onChange={this.handleInputChange}
                                style={{ borderColor: '#BFBFBF', width: '220px', height: '40px', color: '#273F61' }}
                            />
                        </div>
                    </div>

                    
                    <div className="col-md-4">
                        <div style={{marginLeft:'-180px',marginTop:'0px'}}>
                            <h4 style={{ fontSize: '15px', color: '#273F61', marginTop: '30px' }}>Progress note</h4>
                            <input
                                type="text"
                                className="form-control"
                                name="medicalHistory"
                                placeholder="Progress note"
                                value={medicalHistory}
                                onChange={this.handleInputChange}
                                style={{ borderColor: '#BFBFBF', width: '220px', height: '40px', color: '#273F61' }}
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={{marginTop:'-10px'}}>
                            <h4 style={{ fontSize: '15px', color: '#273F61', marginTop: '30px' }}>Diagnosis</h4>
                            <input
                                className="form-control"
                                name="address"
                                placeholder="Diagnosis"
                                value={address}
                                onChange={this.handleInputChange}
                                style={{ borderColor: '#BFBFBF', width: '530px', height: '55px', color: '#273F61', resize: 'none' }}
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={{marginLeft:'220px'}}>
                            <h4 style={{ fontSize: '15px', color: '#273F61', marginTop: '30px' }}>Advice</h4>
                            <input
                                type="text"
                                className="form-control"
                                name="familyDetails"
                                placeholder="Advice"
                                value={familyDetails}
                                onChange={this.handleInputChange}
                                style={{ borderColor: '#BFBFBF', width: '220px', height: '40px', color: '#273F61' }}
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={{marginLeft:'-180px',marginTop:'-200px'}}>
                            <h4 style={{ fontSize: '15px', color: '#273F61', marginTop: '30px' }}>Lab test report</h4>
                            <input
                                type="text"
                                className="form-control"
                                name="medicalHistory"
                                placeholder="Lab test report"
                                value={medicalHistory}
                                onChange={this.handleInputChange}
                                style={{ borderColor: '#BFBFBF', width: '220px', height: '40px', color: '#273F61' }}
                            />
                        </div>
                    </div>

                    <button style={{
                        borderRadius: '5px',
                        width: '150px',
                        height: '40px',
                        border: 'none',
                        backgroundColor: '#FF7A00',
                        marginLeft: '350px',
                        marginTop: '50px'
                    }}>
                        Update
                    </button>
                </div>
            </div>
        );
    }
}

export default Ehr;


//updated