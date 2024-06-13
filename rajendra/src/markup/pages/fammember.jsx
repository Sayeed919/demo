import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from '../../images/user.jpg';

class EditProfile extends Component {
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
        const { name, phone, occupation, address, allergy, medicalHistory, profileImage } = this.state;

        return (
            <div className="container mt-5">
                <div className="row" style={{ marginTop: '140px' }}>
                    <div className="col-md-3 text-center mb-4" style={{ marginTop: '50px' }}>
                        <div style={{ position: 'relative', margin: '0 auto' }}>
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="img-fluid rounded-circle"
                                style={{
                                    height: '200px',
                                    width: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            <label htmlFor="profile-image" style={{
                                position: 'absolute',
                                bottom: '15px',
                                right: '50px',
                                cursor: 'pointer',
                                color: 'darkblue'
                            }}>
                                <FontAwesomeIcon icon={faCamera} size="2x" />
                                <input
                                    type="file"
                                    id="profile-image"
                                    style={{ display: 'none' }}
                                    accept="image/jpeg,image/png"
                                    onChange={this.handleFileChange}
                                />
                            </label>
                        </div>
                       
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                        
                            <div className="col-md-6 mb-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={this.handleInputChange}
                                    style={{ borderColor: '#BFBFBF', color: '#273F61' }}
                                />
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                <label>Blood Group</label>
                                <select
                                    className="form-control"
                                    name="bloodGroup"
                                    value={this.state.bloodGroup}
                                    onChange={this.handleInputChange}
                                    style={{ borderColor: '#BFBFBF', color: '#273F61' }}
                                >
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                                
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={this.handleInputChange}
                                    style={{ borderColor: '#BFBFBF', color: '#273F61' }}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Occupation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="occupation"
                                    placeholder="Occupation"
                                    value={occupation}
                                    onChange={this.handleInputChange}
                                    style={{ borderColor: '#BFBFBF', color: '#273F61' }}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Allergy</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="allergy"
                                    placeholder="Allergy"
                                    value={allergy}
                                    onChange={this.handleInputChange}
                                    style={{ borderColor: '#BFBFBF', color: '#273F61' }}
                                />
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                 <label>Medical History</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="medicalHistory"
                                    placeholder="Medical History"
                                    value={medicalHistory}
                                    onChange={this.handleInputChange}
                                    style={{ borderColor: '#BFBFBF', color: '#273F61' }}
                                />
                            </div>
                            <div className="col-md-12 mb-3">
                            <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    placeholder="Enter Your Address"
                                    value={address}
                                    onChange={this.handleInputChange}
                                    style={{ borderColor: '#BFBFBF', color: '#273F61', height:'70px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4" style={{ marginBottom: '30px' }}>
                    <div className="col-12 d-flex justify-content-center">
                        <button
                            style={{
                                borderRadius: '15px',
                                width: '120px',
                                height: '40px',
                                border: 'none',
                                backgroundColor: '#FF7A00',
                                fontSize: '1.1rem',
                                color: '#FFFFFF',
                                marginRight: '20px'
                            }}>
                            Update
                        </button>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;
