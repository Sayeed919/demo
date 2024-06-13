import React, { Component } from 'react';

class Token extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [
                { date: '27/04/2024', doctorName: 'Dr. Bhavesh Jain', status: 'current' },
                { date: '28/04/2024', doctorName: 'Dr. Bhavesh Jain', status: 'previous' },
                { date: '29/04/2024', doctorName: 'Dr. Bhavesh Jain', status: 'previous' },
                { date: '30/04/2024', doctorName: 'Dr. Bhavesh Jain', status: 'previous' },
                { date: '01/05/2024', doctorName: 'Dr. Bhavesh Jain', status: 'previous' },
                { date: '02/05/2024', doctorName: 'Dr. Bhavesh Jain', status: 'cancelled' },
                { date: '03/05/2024', doctorName: 'Dr. Bhavesh Jain', status: 'cancelled' },
            ],
            filter: 'current'
        };
    }

    handleFilterChange = (filter) => {
        this.setState({ filter });
    };

    getButtonStyle = (filter) => {
        const { filter: currentFilter } = this.state;
        return {
            margin: '0 5px',
            padding: '5px 15px',
            cursor: 'pointer',
            borderRadius: '5px',
            border: 'none',
            fontWeight: '500',
            backgroundColor: currentFilter === filter ? '#031ba1' : '#DCFCFF',
            color: currentFilter === filter ? 'white' : '#031ba1',
            transition: 'all 0.3s ease',
        };
    };

    render() {
        const { appointments, filter } = this.state;
        const filteredAppointments = appointments.filter(appointment => appointment.status === filter);

        return (
            <div style={{ padding: '0 100px', overflowY: 'hidden' }}>
                <h1 className="text-center mb-0" style={{ marginTop: "130px", marginBottom: '0px' }}>My Appointments</h1>
                <div className="table-responsive" style={{ marginTop: '50px', marginRight: 'auto', marginLeft: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', borderRadius: '10px', overflow: 'hidden', marginBottom: '70px' }}>
                    <table className="table" style={{ borderCollapse: 'collapse', borderColor: '#d9dbda', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
                        <thead style={{ backgroundColor: '#d9dbda', color: '#273F61', textAlign: 'center' }}>
                            <tr>
                                <th style={{ padding: '8px', width: '20%', borderTopLeftRadius: '10px', color: '#273F61', fontWeight: 'bold', fontSize: '20px' }}>Date</th>
                                <th style={{ padding: '8px', width: '30%', borderLeft: '1px solid #BFBFBF', color: '#273F61', fontWeight: 'bold', fontSize: '20px' }}>Dr. Name</th>
                                <th style={{ padding: '8px', width: '30%', borderTopRightRadius: '10px', borderLeft: '1px solid #BFBFBF', color: '#273F61', fontWeight: 'bold', fontSize: '20px' }}>Symptoms</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <tr key={index} style={{ textAlign: 'center' }}>
                                    <td style={{ padding: '8px', backgroundColor: index % 2 === 0 }}>{appointment.date}</td>
                                    <td style={{ padding: '8px', borderLeft: '1px solid #BFBFBF', backgroundColor: index % 2 === 0 }}>{appointment.doctorName}</td>
                                    <td style={{ padding: '8px', borderLeft: '1px solid #BFBFBF', backgroundColor: index % 2 === 0 }}>{appointment.symptoms}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <style jsx>{`
                    @media (max-width: 768px) {
                        .table-responsive {
                            overflow-x: auto;
                        }
                        table th {
                            padding: 5px;
                            font-size: 10px;
                        }
                        table td {
                            padding: 5px;
                            font-size: 13px;
                        }
                        button {
                            margin: 5px 3px;
                            padding: 5px 8px;
                            font-size: 14px;
                        }
                        h1 {
                            font-size: 24px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Token;
