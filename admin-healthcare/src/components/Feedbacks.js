import React, { useState, useEffect } from "react";
import "./Navbar.css";

// Pagination component
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 10;
  const itemsPerPage = 4;
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

const Feedbacks= () => {
  const [rowData, setRowData] = useState([
        { id: 1, patientName: "Teresa Butler", ratings: "5", doctorName:"Dr. Eric Fernandez", feedback:"Dr. Fernandez is an outstanding doctor. He takes out time to listen to his patient's conditions.", patientProfilepic:"https://th.bing.com/th/id/OIP.JwXaDrFQx4j1uxXsMEJiFwHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7" },
        { id: 2, patientName: "Ashley Williams", ratings: "4", doctorName: "Dr. Nick Churco", feedback: "Dr. Nick Churco is a good and dedicated doctor. He provides the utmost care and support to his patients.",patientProfilepic:"https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"},
        { id: 3, patientName: "Emily Davis", ratings: "4", doctorName: "Dr. Aaron Scott", feedback: "Dr. Scott is very thorough in his examination and patiently answers all the asked questions. The level of care he provides is exceptional.", patientProfilepic:"https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" },
        { id: 4, patientName: "Mellisa Chen", ratings:"3", doctorName: "Dr. Mary Collins",feedback: "Dr. Collins is very understanding and empathetic, which made discussing sensitive health issues easier and efficient.",patientProfilepic:"https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" },
        
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
  const renderStars = (rating) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} style={{ color: 'green', fontSize: '24px', margin: '0', padding: '0' }}>{fullStar}</span>);
      } else {
        stars.push(<span key={i} style={{ color: 'lightgray', fontSize: '24px', margin: '0', padding: '0' }}>{emptyStar}</span>);
      }
    }
    return stars;
};

  return (
    <div className="h-screen flex-grow-1 overflow-y-lg-auto " style={{ marginLeft: '-20px', paddingLeft: '35px' }}>
    {/* Header */}
    <div className="pt-5 d-flex justify-content-between align-items-center" style={{ marginLeft: '-10px' }}>
      <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '10px' }}>Feedbacks</h3>
      
    </div>

  
      {/* Search and filter options */}
      <div className="row mb-3">
        {/* Search */}
        <div className="col-md-4 pt-6">
          <h5>Search</h5>
          <input type="text" className="form-control" placeholder="Type here..." />
        </div>
        <div className="col-md-4 pt-6">
          <h5>Ratings</h5>
          <select className="form-select" aria-label="Select">
            <option defaultValue>All</option>
            <option>5-start</option>
            <option>4-star</option>
            <option>3-star</option>
            <option>2-star</option>
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
                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Ratings provided </th>
                <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Name of Doctor For Whom The Rating Was Provided</th>
                <th scope="col" style={{ textAlign: 'center', fontSize: '14px'}}>Feedback Provided</th>
                

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
                    {renderStars(row.ratings)}
                  </td>
                  <td align="center" style={{ fontSize: '14px' }}>
                    {row.doctorName}
                  </td>
                  <td align="center" style={{ fontSize: '14px' }}>
                    {row.feedback}
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

export default Feedbacks;
