import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import tokenImage2 from '../../images/token2.png'; 

class Token extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCancelMessage: false
        };
    }

    handleCancelClick = () => {
        this.setState({ showCancelMessage: true });
    };

    render() {
        const { showCancelMessage } = this.state;
        const buttonStyle = {
            backgroundColor: '#FA9225',
            padding:'0px',
            marginTop: '9px',
            marginRight:'9px',
            border: 'none',
            width: '120px', 
            height: '40px', 
            display: 'inline-block'
        };

        return (
            <div className="container mt-2">
                <h2 className="text-center mb-0" style={{ marginTop: "100px", marginBottom: '0px', fontSize:'25px' }}>My Appointment</h2>
                <div className="d-flex justify-content-center align-items-center" style={{ marginBottom:"100px" }}>
                    <Card text="blue" style={{ width: '350px', height: '300px', marginTop: '10px' }}> 
                        <Card.Body className="text-center" style={{ backgroundColor: '#3EC3CF' }}>  
                            <Card.Title style={{ color: '#273F61', fontSize:'20px' }}>Are You On Time ??</Card.Title>
                            <img src={tokenImage2} alt="Image1" style={{ width: '100%', maxWidth: '150px', height: 'auto', marginBottom: '20px' }} />  
                            <Card.Title style={{ color: '#273F61', fontSize:'20px' }}>Your Token Number  
                                </Card.Title>
                                <div className='mt-2'>
                                <button style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#FA9225', color: 'white', fontSize: '20px', border: 'none' }}>14</button>
                                </div>
                                                        
                                <div className="mr-2">
                                <Link to="/bookappointment">
                                    <Button style={buttonStyle}>Reschedule</Button>
                                </Link>
                                <Button 
                                    style={buttonStyle} 
                                    onClick={this.handleCancelClick}
                                >
                                    Cancel
                                </Button>
                            </div>
                            {showCancelMessage && <p style={{ color: '#ff0000', marginTop: '20px' }}>Appointment canceled successfully!</p>}  {/* Adjusted marginTop */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Token;
