//dnyaneshwari edited code

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTrash } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from '../../images/user.jpg';
import axios from 'axios';

import useFetchUserData from './../../hooks/useFetchUserData'; // import the custom hook

const EditProfileWrapper = () => {
    const { phoneNumber, isLoading } = useFetchUserData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <EditProfile phoneNumber={phoneNumber} />;
};

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseSchema: {
                name: '',
                phone: props.phoneNumber || '', // Use the phone number from props
                password: '',
                age: '',
                gender: '',
                bloodGroup: '',
                medHistroy: '',
                allergy: '',
                occupation: '',
                address: '',
                profileImage: ProfileImage
            },
            members: [],
            errors: {},
            maxMembers: 5,
            editing: false,
            memberId: null,
        };
    }

    componentDidMount() {
        this.fetchMembers(this.props.phoneNumber);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.phoneNumber !== this.props.phoneNumber && this.props.phoneNumber) {
            this.fetchMembers(this.props.phoneNumber);
        }
    }

    fetchMembers = async (phoneNumber) => {
      if (!phoneNumber) {
          console.error('Phone number is not available in fetchMembers');
          return;
      }
  
      const url = `http://localhost:4000/user/${phoneNumber}`;
      console.log('Fetch URL:', url);
  
      try {
          const response = await axios.get(url);
          if (response.data) {
              const baseSchema = {
                  ...response.data,
                  profileImage: response.data.profileImage ? this.decodeImage(response.data.profileImage) : ProfileImage
              };
              this.setState({ baseSchema, members: response.data.members, memberId: response.data._id });
          }
      } catch (error) {
          console.error('Error fetching members:', error);
      }
  };

    decodeImage = (imageData) => {
        return `data:image/jpeg;base64,${imageData}`;
    };

    handleInputChange = (field, value, index = null) => {
        if (index !== null) {
            const members = [...this.state.members];
            members[index][field] = value;
            this.setState({ members, editing: true });
        } else {
            const baseSchema = { ...this.state.baseSchema };
            baseSchema[field] = value;
            this.setState({ baseSchema, editing: true });
        }
    };

    validateForm = (index) => {
        const errors = {};
        const { members, baseSchema } = this.state;
        const member = index !== null ? members[index] : baseSchema;

        if (!member.name) errors[`name${index !== null ? index : ''}`] = 'Name is required';
        if (!member.phone) errors[`phone${index !== null ? index : ''}`] = 'Phone number is required';
        else if (!/^\d+$/.test(member.phone) || member.phone.length !== 10) errors[`phone${index !== null ? index : ''}`] = 'Phone Number should be 10 digits';
        if (!/^\d+$/.test(member.age)) errors[`age${index !== null ? index : ''}`] = 'Age should be a number';

        this.setState((prevState) => ({
            errors: { ...prevState.errors, ...errors }
        }));

        return Object.keys(errors).length === 0;
    };

    handleSubmit = (index = null) => {
        const isValid = this.validateForm(index);
        if (isValid) {
            if (index !== null) {
                this.updateMember(index);
            } else {
                this.updateBaseSchema();
            }
        } else {
            console.log('Form has validation errors');
        }
    };

    // updateBaseSchema = async () => {
    //     const { baseSchema, memberId } = this.state;
    //     try {
    //         await axios.put(`http://localhost:4000/api/members/${memberId}`, baseSchema);
    //         this.setState({ editing: false });
    //         console.log('Base schema updated successfully');
    //         alert('Base schema updated successfully');
    //     } catch (error) {
    //         console.error('Error updating base schema:', error);
    //     }
    // };

    updateBaseSchema = async () => {
      const { baseSchema } = this.state;
      const { phone, ...updatedMemberData } = baseSchema; // Exclude phone from updated data
  
      try {
          await axios.put(`http://localhost:4000/api/members/${phone}`, updatedMemberData);
          this.setState({ editing: false });
          console.log('Base schema updated successfully');
          alert('Base schema updated successfully');
      } catch (error) {
          console.error('Error updating base schema:', error);
      }
  };
  

    updateMember = async (index) => {
        const { members, memberId } = this.state;
        try {
            await axios.put(`http://localhost:4000/api/members/${memberId}/updateMember/${index}`, members[index]);
            this.setState({ editing: false });
            console.log(`Member ${index + 1} updated successfully`);
            alert(`Member ${index + 1} updated successfully`);
        } catch (error) {
            console.error('Error updating member:', error);
        }
    };

    addMember = async () => {
        const { members, maxMembers, memberId } = this.state;
        if (members.length < maxMembers) {
            const newMember = {
                name: '',
                bloodGroup: '',
                phone: '',
                occupation: '',
                address: '',
                allergy: '',
                medHistory: '',
                age: '',
                gender: '',
                profileImage: null
            };
            try {
                const response = await axios.post(`http://localhost:4000/api/members/${memberId}/addMember`, newMember);
                this.setState({ members: response.data.member.members, editing: true });
                console.log('Member added successfully');
                // alert('Member added successfully');
            } catch (error) {
                console.error('Error adding member:', error);
            }
        } else {
            alert('Maximum limit reached. You cannot add more than 5 members.');
        }
    };

    deleteMember = async (index) => {
        const { memberId } = this.state;
        try {
            await axios.delete(`http://localhost:4000/api/members/${memberId}/deleteMember/${index}`);
            this.setState((prevState) => {
                const updatedMembers = [...prevState.members];
                updatedMembers.splice(index, 1);
                return { members: updatedMembers, editing: false };
            });
            console.log(`Member ${index + 1} deleted successfully`);
            alert(`Member ${index + 1} deleted successfully`);
        } catch (error) {
            console.error('Error deleting member:', error);
        }
    };

    handleImageChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result;
                if (index !== null) {
                    const updatedMembers = [...this.state.members];
                    updatedMembers[index].profileImage = imageUrl;
                    this.setState({ members: updatedMembers });
                    this.uploadImage(index, imageUrl);
                } else {
                    const baseSchema = { ...this.state.baseSchema };
                    baseSchema.profileImage = imageUrl;
                    this.setState({ baseSchema });
                    this.uploadImage(null, imageUrl);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    uploadImage = async (index, imageUrl) => {
        const { memberId } = this.state;
        try {
            if (index !== null) {
                await axios.post(`http://localhost:4000/api/members/${memberId}/uploadImage/${index}`, {
                    profileImage: imageUrl
                });
            } else {
                await axios.post(`http://localhost:4000/api/members/${memberId}/uploadImage`, {
                    profileImage: imageUrl
                });
            }
            console.log('Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };


    renderForm = (member, index) => {
        const { name = '', phone = '', occupation = '', allergy = '', medHistory = '', bloodGroup = '', profileImage = '', age = '', gender = '', address = '' } = member;
        const { errors } = this.state;

        const isBaseProfile = index === null;

        return (
            <div className="row" key={index} style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div className="col-12">
                    <h5>{isBaseProfile ? 'Base Profile' : `Member ${index + 1}`}
                        {!isBaseProfile && (
                            <span style={{ float: 'right', cursor: 'pointer', color: 'red' }} onClick={() => this.deleteMember(index)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                        )}
                    </h5>
                </div>
                {isBaseProfile && (
                    <div className="col-md-3 text-center mb-4" style={{ marginTop: '20px' }}>
                        <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto' }}>
                            <img
                                src={profileImage || ProfileImage}
                                alt="Profile"
                                className="img-fluid"
                                style={{
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <label htmlFor={`profileImageInput${index}`} style={{ cursor: 'pointer', position: 'absolute', bottom: '0', right: '0' }}>
                                <FontAwesomeIcon icon={faCamera} />
                            </label>
                            <input
                                type="file"
                                id={`profileImageInput${index}`}
                                style={{ display: 'none' }}
                                onChange={(event) => this.handleImageChange(index, event)}
                            />
                        </div>
                    </div>
                )}

                <div className={`col-md-${isBaseProfile ? '9' : '12'}`}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Name:<span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                className={`form-control ${errors[`name${index !== null ? index : ''}`] ? 'is-invalid' : ''}`}
                                value={name}
                                onChange={(e) => this.handleInputChange('name', e.target.value, index)}
                                placeholder="Name"
                                required
                                style={{ borderColor: '#BFBFBF', color: '#273F61', width: '100%' }} />
                            {errors[`name${index !== null ? index : ''}`] && <div className="invalid-feedback">{errors[`name${index !== null ? index : ''}`]}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Phone:<span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                className={`form-control ${errors[`phone${index !== null ? index : ''}`] ? 'is-invalid' : ''}`}
                                value={phone}
                                onChange={(e) => this.handleInputChange('phone', e.target.value, index)}
                                placeholder="Phone Number"
                                required
                                style={{ borderColor: '#BFBFBF', color: '#273F61', width: '100%' }}
                            />
                            {errors[`phone${index !== null ? index : ''}`] && <div className="invalid-feedback">{errors[`phone${index !== null ? index : ''}`]}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Occupation:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={occupation}
                                placeholder="Occupation"
                                onChange={(e) => this.handleInputChange('occupation', e.target.value, index)}
                                style={{ borderColor: '#BFBFBF', color: '#273F61', width: '100%' }}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Age:</label>
                            <input
                                type="number"
                                className={`form-control ${errors[`age${index !== null ? index : ''}`] ? 'is-invalid' : ''}`}
                                value={age}
                                onChange={(e) => this.handleInputChange('age', e.target.value, index)}
                                placeholder="Age"
                                style={{ borderColor: '#BFBFBF', color: '#273F61', width: '100%' }}
                            />
                            {errors[`age${index !== null ? index : ''}`] && <div className="invalid-feedback">{errors[`age${index !== null ? index : ''}`]}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Gender:</label>
                            <select
                                type="text"
                                className="form-control"
                                name="gender"
                                value={gender}
                                onChange={(e) => this.handleInputChange('gender', e.target.value, index)}
                                style={{ borderColor: '#BFBFBF', color: '#273F61', width: '100%' }}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Blood Group:</label>
                            <select
                                type="text"
                                className="form-control"
                                name="bloodGroup"
                                value={bloodGroup}
                                onChange={(e) => this.handleInputChange('bloodGroup', e.target.value, index)}
                                style={{ borderColor: '#BFBFBF', color: '#273F61', width: '100%' }}
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
                            <label>Allergy:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="allergy"
                                value={allergy}
                                placeholder="Allergy"
                                onChange={(e) => this.handleInputChange('allergy', e.target.value, index)}
                                style={{ borderColor: '#BFBFBF', color: '#273F61', width: '100%' }}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Medical History:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="medHistory"
                                value={medHistory}
                                placeholder="Medical History"
                                onChange={(e) => this.handleInputChange('medHistory', e.target.value, index)}
                                style={{ borderColor: '#BFBFBF', color: '#273F61', width: '100%' }}
                            />
                        </div>

                        {index === null && (
                            <div className="col-md-12 mb-3">
                                <label>Address:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={address}
                                    placeholder="Address"
                                    onChange={(e) => this.handleInputChange('address', e.target.value, index)}
                                    style={{ borderColor: '#BFBFBF', color: '#273F61', width: '100%' }}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="column">
                    <div className="col-12 d-flex justify-content-center">
                        <button
                            onClick={() => this.handleSubmit(index)}
                            style={{
                                borderRadius: '5px',
                                width: '130px',
                                height: '40px',
                                border: 'none',
                                backgroundColor: '#FF7A00',
                                fontSize: '0.9rem',
                                color: '#FFFFFF',
                                marginTop: '20px',
                                marginLeft: '10px',
                                fontWeight: 'bold'
                            }}>
                            Update
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        const { members, baseSchema } = this.state;

        return (
            <div className="container" style={{ marginTop: '100px', marginBottom: '60px' }}>
                <div className="column">
                    <div className="col-12">
                        <h4>Edit Profile</h4>
                        <hr />
                    </div>
                    {this.renderForm(baseSchema, null)}
                    {members.map((member, index) => this.renderForm(member, index))}
                    <div className="col-12 d-flex justify-content-center">
                        <button onClick={this.addMember} style={{
                            borderRadius: '5px',
                            width: '130px',
                            height: '43px',
                            border: 'none',
                            backgroundColor: '#FF7A00',
                            fontSize: '0.9rem',
                            color: '#FFFFFF',
                            marginLeft: '10px',
                            fontWeight: 'bold'
                        }}>Add Member</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default EditProfileWrapper;