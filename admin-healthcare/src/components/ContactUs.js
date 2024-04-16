import React, { useState } from 'react';
import "./Navbar.css";

function ContactUs() {
    const [data, setData] = useState([
        {
            id: 1,
            submittedBy: 'Isabella Thomas',
            emailAddress: 'isabellathomas23@gmail.com',
            contactNumber: '089-233-787',
            query: 'What services are covered under my health insurance plan?'
        },
        {
            id: 2,
            submittedBy: 'Sophie Williams',
            emailAddress: 'sophwilliams209@gmail.com',
            contactNumber: '080-248-556',
            query: 'What exercises can help improve flexibility and mobility?'
        },
        // Add more data objects as needed
    ]);

    const handleDelete = id => {
        const confirmed = window.confirm("Are you sure you want to delete this appointment?");
        if (confirmed) {
            setData(prevData => prevData.filter(row => row.id !== id));
        }
    };

    const handleView = id => {
        alert('Viewing query with id ${id}');
    };

    return (
        <div className="container">
        <header className="bg-surface-primary border-bottom pt-6" style={{ marginBottom: '20px' }}> {/* Added marginBottom */}
            <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px' }}>Contact Us</h3>
            <div className="contact-info mt-4">
                <p style={{ fontSize: '25px', color: 'rgb(31, 31, 163)', textAlign: 'left', marginTop: '20px' }}>
                    <strong>Have a question or need assistance? Feel free to reach out to us!</strong>
                </p>
            </div>
        </header>
            <table className="table mt-10">
            <thead>
    <tr>
        <th style={{ background: 'lightgray', padding: '15px', textAlign: 'center', fontSize: '15px', textTransform: 'none' }}>Submitted By</th>
        <th style={{ background: 'lightgray', padding: '15px', textAlign: 'center', fontSize: '15px', textTransform: 'none' }}>Email Address</th>
        <th style={{ background: 'lightgray', padding: '15px', textAlign: 'center', fontSize: '15px', textTransform: 'none' }}>Contact Number</th>
        <th style={{ background: 'lightgray', padding: '15px', textAlign: 'center', fontSize: '15px', textTransform: 'none' }}>Query</th>
        <th style={{ background: 'lightgray', padding: '15px', textAlign: 'center', fontSize: '15px', textTransform: 'none' }}>Action</th>
    </tr>
</thead>

                <tbody>
                    {data.map(row => (
                        <tr key={row.id}>
                            <td style={{ fontSize: '13px' }}>{row.submittedBy}</td>
                            <td style={{ fontSize: '13px' }}>{row.emailAddress}</td>
                            <td style={{ fontSize: '13px' }}>{row.contactNumber}</td>
                            <td style={{ fontSize: '13px' }}>{row.query}</td>
                            <td style={{ textAlign: 'center' }}>
                                <button className="btn btn-sm btn-primary me-2" onClick={() => handleView(row.id)}>View</button>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(row.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactUs;
