import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import tokenImage from '../../images/token.png'; 

class Token extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Card text="blue" style={{ marginTop: '100px' }}>
                            <Card.Body className="text-center" style={{ backgroundColor: '#3EC3CF' }}>
                                <Card.Title style={{ color: '#273F61' }}>Your Appointment Has Been Booked!</Card.Title>
                                <img src={tokenImage} alt="token" style={{ width: '100%', maxWidth: '300px', height: 'auto', marginBottom: '40px' }} />
                                <Card.Title style={{ color: '#273F61' }}>Your Token Number</Card.Title>
                                <div style={{ marginTop: '20px' }}>
                                    <button style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#FA9225', color: 'white', fontSize: '20px', border: 'none' }}>14</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Token;
