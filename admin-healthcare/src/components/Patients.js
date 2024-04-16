import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
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


function Patients() {
    const [rowData, setRowData] = useState([
        { id: 1, patientName: "Teresa Butler",contact:"+1 (123) 456-7890", location:"USA", paymentdone: "2000", doctorVisit:"Consultation", patientProfilepic:"https://th.bing.com/th/id/OIP.JwXaDrFQx4j1uxXsMEJiFwHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7"},
        { id: 2, patientName: "Ashley Williams", contact:"+1 (123) 456-7890", location:"Canada", paymentdone:"30000", doctorVisit:"Treatment",patientProfilepic:"https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" },
        { id: 3, patientName: "Emily Davis", contact:"+30 210 1234567", location:"Greece", paymentdone:"3000", doctorVisit:"Consultation",patientProfilepic: "https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"},
        { id: 4, patientName: "Mellisa Chen",contact:"234-567-8901",location:"Canada", paymentdone:"20000",doctorVisit:"Treatment", patientProfilepic:"https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"},
        { id: 5, patientName: "Thomas Nguyen",contact:"+971 55 345 6789", location:"Dubai" , paymentdone:"3000",  doctorVisit:"Consultation", patientProfilepic:"https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"},
        { id: 6, patientName: "Jason Martinez", contact:"+44 7700 900345", location:"UK", paymentdone:"30000",  doctorVisit:"Treatment",patientProfilepic:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"},
        { id: 7, patientName: "James Thomson", contact:"+1-234-567-8901", location:"USA", paymentdone:"20000",  doctorVisit:"Treatment",patientProfilepic:"https://th.bing.com/th/id/OIP.sCexMn1bqbA-FFvxCLEdPgHaJP?w=184&h=230&c=7&r=0&o=5&pid=1.7"},
    ]);
    const [viewMessage, setViewMessage] = useState(null);
    

     
    const handleAction = (action, id) => {
        if (action === "view") {
            const message = `Viewing row with ID: ${id}`;
            if (viewMessage === message) {
                setViewMessage("");
            } else {
                setViewMessage(message);
            }
        } else if (action === "delete") {
            const confirmed = window.confirm("Are you sure you want to delete this entry?");
            if (confirmed) {
                setRowData(prevData => prevData.filter(row => row.id !== id));
            }
        }
    };

    return (
      <div className="h-screen flex-grow-1 overflow-y-lg-auto " style={{ marginLeft: '-20px', paddingLeft: '35px' }}>
      {/* Header */}
        <div className="pt-5" style={{ marginLeft: '-10px' }}>
        <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '10px'  }}>Manage Patients</h3>
         </div>
        {/* Search and filter options */}
        <div className="row mb-3">
            {/* Search */}
            <div className="col-md-4 pt-6">
                 <h5>Search</h5>
                 <input type="text" className="form-control" placeholder="Type here..." />
             </div>
                    <div className="col-md-4 pt-6">
                        <h5>Location</h5>
                        <select className="form-select" aria-label="Select">
                            <option defaultValue>All</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>UK</option>
                            <option>Greece</option>
                            <option>Dubai</option>
                        </select>
                    </div>
                    
                    </div>
            <div className="card shadow border-0 mb-7"style={{ paddingLeft: '2px'}}>
                <div className="card-header">
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-nowrap">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Name of Patient</th>
                                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Contact Number</th>
                                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Location</th>
                                <th scope="col" style={{ textAlign: 'center', fontSize: '14px'}}>Payment Done</th>
                                
                                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Consultation or Treatment?</th>
                                <th style={{ fontSize: '14px', textAlign: 'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rowData.map(row => (
                                <tr key={row.id}>
                                    <td style={{ paddingLeft: '30px', fontSize:'14px'}}> 
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div> 
                                        <img alt="..." src={row.patientProfilepic}  className="avatar avatar-sm rounded-circle me-3" />
                                        <a className="text-heading font-semibold" href="#">
                                            {row.patientName}
                                        </a>
                                    </td>
                                    <td align="center" style={{ fontSize: '14px' }}>
                                        {row.contact}
                                    </td>
                                    <td align="center" style={{ fontSize: '14px' }}>
                                        {row.location}
                                    </td>
                                    <td align="center" style={{ fontSize: '14px' }}>
                                        {row.paymentdone}
                                    </td>
                                   
                                    <td align="center" style={{ fontSize: '14px' }}>
                                        {row.doctorVisit}
                        
                                    </td>
                                    
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-neutral" onClick={() => handleAction("view", row.id)}>View</a>
                                        <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => handleAction("delete", row.id)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {viewMessage && <div className="alert alert-success">{viewMessage}</div>}
                </div>
            </div>
            <Pagination/>
        </div>
    );
}

export default Patients;
