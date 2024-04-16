import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Navbar.css";

// Pagination component
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 10;
  const itemsPerPage = 7;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="card-footer border-0 py-5 d-flex flex-column align-items-end" style={{ marginTop: '-20px' }}>
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

const rowData = [
  { id: 1, physiotherapistName: "Mary McMillan", emailAddress: "marymcmillan2001@gmail.com", contactNumber:"(555) 555-5555", physiotherapistAvailability: "10:00-02:00 PM", status: "Available", physiotherapistProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdp7RUZAvvNbcbJBsK-Jf_Ddk8hmY6u6arQ&s" },
  { id: 2, physiotherapistName: "Lauren Brown", emailAddress: "laurenb20@gmail.com", contactNumber: "07700 900123", physiotherapistAvailability: "10:00-01:30 PM", status: "Unavailable", physiotherapistProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7ghRNh-1EA54Qdb7Zqsm79aNuuJ9PLIjxg&s" },
  { id: 3, physiotherapistName: "David Wilson", emailAddress: "davidwilson23@gmail.com", contactNumber: "07456 789012", physiotherapistAvailability: "10:30-03:00 PM", status: "Available", physiotherapistProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEP-Zqm-B8NV4Gg1g0mYar5IeqEnHoVh9MUg&s" },
  { id: 4, physiotherapistName: "Rachel Taylor", emailAddress: "racheltaylor10@gmail.com", contactNumber: "780-555-9012", physiotherapistAvailability: "12:00-05:00 PM", status: "Available", physiotherapistProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yB2A_WJPeXQhqURsQm-_9T4_9hTdNcaz0Q&s"},
  { id: 5, physiotherapistName: "Andrew Clark", emailAddress: "andreclark3@gmail.com", contactNumber: "07 7002 3456", physiotherapistAvailability: "03:00-09:00 PM", status: "Unavailable", physiotherapistProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUe3qkvTYUOIKGsPYle8XMgVMf8-nyUEuow&s" },
  { id: 6, physiotherapistName: "Jessica Davis", emailAddress: "jessicadavis199@gmail.com", contactNumber: "020 8567 8901", physiotherapistAvailability: "03:00-07:00 PM", status: "Available", physiotherapistProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTebw-JrS6fdJXzTwNtQiHRDfVhcKCFr5sRw&s" },
  { id: 7, physiotherapistName: "Michael Jones", emailAddress: "michaeljones21@gmail.com", contactNumber: "020 8901 4567", physiotherapistAvailability: "05:00-11:00 PM", status: "Unavailable", physiotherapistProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNI8WIYmZq04lhW6BZlmCbA7zcBF568-sJA&s" },
];

function Physiotherapists() {
  const [selectedPhysiotherapist, setSelectedPhysiotherapist] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const doctor = rowData.find((doctor) => doctor.id.toString() === id);
    setSelectedPhysiotherapist(doctor);
  }, [id]);
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
        <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '14px' }}>Manage Physiotherapists</h3>
      </div>
      {/* Render Doctor Details or Doctor List */}
      {/* {selectedPhysiotherapist ? (
        <DoctorDetails doctor={selectedDoctor} />
      ) : ( */}
        <>
          {/* Search and filter options */}
          <div className="row mb-3" style={{paddingLeft:"6px"}}>
            {/* Search */}
            <div className="col-md-4 pt-6">
              <h5>Search</h5>
              <input type="text" className="form-control" placeholder="Type here..." />
            </div>
              
            <div className="col-md-4 pt-6">
              <h5> Availability</h5>
              <select className="form-select" aria-label="Select" >
                <option defaultValue>None</option>
                <option>Available</option>
                <option>Unavailable</option>
                <option>All</option>
              </select>
            </div>
          </div>
          {/* Render Doctor List */}
          <div className="card shadow border-0 mb-7" style={{ marginLeft: '4px' }}>
            <div className="card-header"></div>
            <div className="table-responsive">
              <table className="table table-hover table-nowrap">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Name of Physiotherapist</th>
                    <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Email Address</th>
                    <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Contact Number</th>
                    <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Availability</th>
                    <th style={{ fontSize: '14px' }}>Status</th>
                    <th style={{ textAlign: 'center', fontSize: '14px' }}> Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rowData.map(row => (
                    <tr key={row.id}>
                      <td style={{ paddingLeft: '30px', fontSize: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img alt="..." src={row.physiotherapistProfilepic} className="avatar avatar-sm rounded-circle me-3" />
                          <span className="text-heading font-semibold">{row.physiotherapistName}</span>
                        </div>
                      </td>
                      <td align="center" style={{ fontSize: '14px' }}>{row.emailAddress}</td>
                      <td align="center" style={{ fontSize: '14px' }}>{row.contactNumber}</td>
                      <td align="center" style={{ fontSize: '14px' }}>{row.physiotherapistAvailability}</td>
                      <td style={{ fontSize: '20px' }}>
                        <span className={`badge bg-${row.status === 'Available' ? 'success' : 'warning'}`}>{row.status}</span>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-neutral" onClick={() => setSelectedPhysiotherapist(row)}>View</button>
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
      {/* )} */}
    </div>
  );
}

export default Physiotherapists;

