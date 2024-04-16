import React, { useState, useEffect } from "react";
import "./Navbar.css";

// Pagination component
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 10;
  const itemsPerPage = 8;
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
            <button
              className="page-link"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <li
              key={page}
              className={`page-item ${page === currentPage ? 'active' : ''}`}
            >
              <button
                className={`page-link ${page === currentPage ? 'bg-info text-white' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Offers = () => {
  const [rowData, setRowData] = useState([
        { id: 1, promoCode: "P20", StartDate: "May 2, 2023", EndDate: "July 23, 2023", UserNumber: "Unlimited", count: "324", discount:"20", status:"Active" },
        { id: 2, promoCode: "P30", StartDate: "May 2, 2023", EndDate: "July 23, 2023", UserNumber: "Unlimited", count: "456", discount:"30", status:"Active"},
        { id: 3, promoCode: "P20", StartDate: "May 2, 2023", EndDate: "July 23, 2023", UserNumber: "150", count:"123", discount:"20", status: "Inactive" },
        { id: 4, promoCode: "FLAT20", StartDate:"May 2, 2023", EndDate:"July 23, 2023",UserNumber: "100", count:"150", discount:"20",status: "Inactive", },
        { id: 5, promoCode: "FLAT10", StartDate: "May 2, 2023", EndDate:"July 23, 2023",UserNumber: "500", count:"324",discount:"10", status: "Active", },
        { id: 6, promoCode: "P25", StartDate: "May 2, 2023", EndDate: "July 23, 2023", UserNumber: "Unlimited", count:"123",discount:"25",status: "Active", },
        { id: 7, promoCode: "P20", StartDate: "May 2, 2023",EndDate:"July 23, 2023", UserNumber: "150", count: "123", discount:"25",status: "Inactive",},
        { id: 8, promoCode: "P20", StartDate: "May 2, 2023",EndDate:"July 23, 2023", UserNumber: "Unlimited", count: "213", discount:"25",status: "Inactive",},
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
    <div className="pt-5 d-flex justify-content-between align-items-center" style={{ marginLeft: '-10px' }}>
      <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '10px' }}>Manage Offers</h3>
      <div className="col-auto" style={{ marginLeft: '-10px', marginBottom: '10px' }}>
        <button type="button" class="btn btn-primary">+ Add a Promo Code</button>
      </div>
    </div>

  
      {/* Search and filter options */}
      <div className="row mb-3">
        {/* Search */}
        <div className="col-md-4 pt-6">
          <h5>Search</h5>
          <input type="text" className="form-control" placeholder="Type here..." />
        </div>
        <div className="col-md-4 pt-6">
          <h5>Status</h5>
          <select className="form-select" aria-label="Select">
            <option defaultValue>All</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>None</option>
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
                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Promo</th>
                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Start Date</th>
                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>End Date</th>
                <th scope="col" style={{ textAlign: 'center', fontSize: '14px'}}>Number of users</th>
                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Usage Count</th>
                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Discount</th>
                <th style={{ fontSize: '14px', textAlign: 'center'}}>Status</th>
                <th style={{ fontSize: '14px', textAlign: 'center'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map(row => (
                <tr key={row.id}>
                  <td>
                      <a className="text-heading font-semibold" href="#">
                        {row.promoCode}
                      </a> 
                  </td>
                  <td align="center" style={{ fontSize: '14px' }}>
                    {row.StartDate}
                  </td>
                  <td align="center" style={{ fontSize: '14px' }}>
                    {row.EndDate}
                  </td>
                  <td align="center" style={{ fontSize: '14px' }}>
                    {row.UserNumber}
                  </td>
                  <td align="center" style={{ fontSize: '14px' }}>
                    {row.count}
                  </td>
                  <td align="center" style={{ fontSize: '14px' }}>
                    {row.discount}
                  </td>
                  <td style={{ fontSize: '20px' }}>
                        <span className={`badge bg-${row.status === 'Active' ? 'success' : 'warning'}`}>{row.status}</span>
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
};

export default Offers;
