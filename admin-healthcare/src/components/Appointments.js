import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
 
 import "./Navbar.css";
 const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 10;
    const itemsPerPage = 7;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
return (
    <div className="card-footer border-0 py-5 d-flex flex-column align-items-end" style={{marginTop:'-20px'}} >
    <div className="pagination-container" style={{ marginBottom: '-10px' }}></div>
      <span className="text-muted text-sm mb-1"><strong>
        Showing {itemsPerPage} items out of {totalItems} results:
        </strong>
      </span>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'enabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
            >
              Previous
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <li
              key={page}
              className={`page-item ${page === currentPage ? 'active' : ''}`}
            >
              <a
                className={`page-link ${page === currentPage ? 'bg-info text-white' : ''}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
function Appointments() {
    const [rowData, setRowData] = useState([
        { id: 1, appointmentId: "APT-101", patientName:"Teresa Butler", doctorName:"Dr. Edward Butler", appointmentDate:"2th April 2023", status:"Scheduled",},
        { id: 2, appointmentId: "APT-102", patientName:"Ashley Williams", doctorName:"Dr. Nick Churco", appointmentDate:"20th May 2023", status:"Postponed",},
        { id: 3, appointmentId: "APT-103", patientName:"Emily Davis", doctorName:"Dr. Aaron Scott	", appointmentDate:"8th March 2023", status:"Cancelled",},
        { id: 4, appointmentId: "APT-104", patientName:"Mellisa Chen", doctorName:"Dr. Mary Collins", appointmentDate:"12th February 2023	", status:"Cancelled",},
        { id: 5, appointmentId: "APT-105", patientName:"Thomas Nguyen", doctorName:"Dr. Sarah Churco", appointmentDate:"25th August 2023", status:"Completed",},
        { id: 6, appointmentId: "APT-106", patientName:"Jason Martinez", doctorName:"Dr. Bella Thomas", appointmentDate:"14th January 2023", status:"Scheduled",},
        { id: 7, appointmentId: "APT-107", patientName:"James Thomson", doctorName:"Dr. Eric Fernandez", appointmentDate:"15th February 2023", status:"Completed",},
      ]);
      const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  // Handle fromDate change
  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  // Handle toDate change
  const handleToDateChange = (date) => {
    setToDate(date);
  };
     
        
        const handleAction = (action, id) => {
          if (action === "delete") {
            const confirmed = window.confirm("Are you sure you want to delete this appointment?");
            if (confirmed) {
              rowData(prevData => prevData.filter(row => row.id !== id));
            }
          }
        };
      
        return (
          <div className="h-screen flex-grow-1 overflow-y-lg-auto" style={{ marginLeft: '-20px', paddingLeft: '35px' }}>
            {/* Header */}
            <div className="pt-5" style={{ marginLeft: '-10px' }}>
              <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '15px' }}>Manage Appointments</h3>
            </div>
            
              <>
              <div className="row mb-3">
  {/* Search */}
  <div className="col-md-4 pt-6" style={{marginLeft:"5px"}}>
    <h5>Search</h5>
    <input type="text" className="form-control" placeholder="Type here..." />
  </div>
  <div className="col-md-3 pt-7">
    <h6>From Date</h6>
    <DatePicker
      selected={fromDate}
      onChange={handleFromDateChange}
      className="form-control"
      placeholderText="Select date"
    />
  </div>
  <div className="col-md-3 pt-7" style={{marginLeft:"-20px"}}>
    <h6>To Date</h6>
    <DatePicker
      selected={toDate}
      onChange={handleToDateChange}
      className="form-control"
      placeholderText="Select date"
    />
  </div>
</div>

                {/* Render Doctor List */}
                <div className="card shadow border-0 mb-7" style={{ marginLeft: '3px' }}>
                  <div className="card-header"></div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Appointment Id</th>
                          <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Patient's Name</th>
                          <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Name of Appointed Doctor</th>
                          <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Appointment Date</th>
                          <th style={{ fontSize: '14px' }}>Status</th>
                          <th style={{ textAlign: 'center', fontSize: '14px' }}> Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rowData.map(row => (
                          <tr key={row.id}>
                            <td style={{ paddingLeft: '30px', fontSize: '14px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                               
                                <span className="text-heading font-semibold">{row.appointmentId}</span>
                              </div>
                            </td>
                            <td align="center" style={{ fontSize: '14px' }}>{row.patientName}</td>
                            <td align="center" style={{ fontSize: '14px' }}>{row.doctorName}</td>
                            <td align="center" style={{ fontSize: '14px' }}>{row.appointmentDate}</td>
                            <td style={{ fontSize: '20px' }}>
                            <span className={`badge bg-${row.status === 'Scheduled' ? 'success' : row.status === 'Postponed' ? 'warning' : row.status === 'Cancelled' ? 'danger' : 'primary'}`}>{row.status}</span>


                            </td>
                            <td className="text-end">
                              <button className="btn btn-sm btn-neutral" >View</button>
                              <button className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => handleAction("delete", row.id)}>
                              <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <Pagination />
              </>

          </div>
        );
      }
      
      export default Appointments;
      
        


