import React, { useState } from "react";

import "./Navbar.css";
const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 10;
    const itemsPerPage = 8;
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

function Nurses() {
    const [rowData, setRowData] = useState([
        { id: 1, nurseName: "Clara Jones",nurseemailAddress:"clarajones133@gmail.com", contactNumber:"+1 (555) 123-4567", nurseAvailability: "10:00 am to 11:00 am", ratings:"5", status:"Active", nurseProfilepic:"https://media.sciencephoto.com/image/f0189453/800wm/F0189453-Close_up_of_nurses_smiling_face.jpg"},
        { id: 2, nurseName: "Elizabeth Rose", nurseemailAddress:"elizabethrose2333@gmail.com", contactNumber:"+44 1234 567890", nurseAvailability: "10:00 am to 11:00 am", ratings:"4", status: "Inactive", nurseProfilepic:"https://th.bing.com/th/id/OIP.xq3Ep05etvQRyUa7YINhbwHaLH?pid=ImgDet&w=182&h=273&c=7" },
        { id: 3, nurseName: "Sarah Warren", nurseemailAddress:"sarahwn90@gmail.com", contactNumber:"0161 123 4567", nurseAvailability: "11:00 am to 12:00 pm", ratings:"5", status: "Active" , nurseProfilepic: "https://th.bing.com/th/id/OIP.nWylI0SpoVL95HFawlWo_AHaHa?pid=ImgDet&w=182&h=182&c=7"},
        { id: 4, nurseName: "Patricia Gomes", nurseemailAddress:"patriciagomes2000@gmail.com", contactNumber:"020 1234 5678", nurseAvailability:"11:00 am to 12:00 pm" , ratings:"4", status:"Inactive", nurseProfilepic:"https://th.bing.com/th/id/OIP.01-6tzficqzO5bk3VpgRAwAAAA?pid=ImgDet&w=182&h=231&c=7"},
        { id: 5, nurseName: " Victoria Meskin", nurseemailAddress:"victoriam02@gmail.com", contactNumber:"080-765-123", nurseAvailability:"12:00 pm to 01:00 pm", ratings:"3",status:"Not available", nurseProfilepic:"https://th.bing.com/th/id/OIP.-4L1VIZRHFXUiIEeESiV9gHaJP?pid=ImgDet&w=182&h=226&c=7"},
        { id: 6, nurseName: "Amber Craven", nurseemailAddress:"ambercr005@gmail.com", contactNumber:"(514) 123-4567", nurseAvailability:"12:00 pm to 02:00 pm", ratings:"4",status:"Inactive", nurseProfilepic:"https://th.bing.com/th/id/OIP.BOckPW7sFw1F6ooKQVZmKgHaJQ?pid=ImgDet&w=182&h=227&c=7"},
        { id: 7, nurseName: "Portia Wofford", nurseemailAddress:"portiawofford345@gmail.com", contactNumber:"(514) 123-4567", nurseAvailability:"02:00 am to 05:00 pm", ratings:"2",status:"Active", nurseProfilepic:"https://th.bing.com/th/id/OIP.-2ywi1Qrdj9foJfK5bKRYQHaHa?pid=ImgDet&w=182&h=182&c=7"}
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
            const confirmed = window.confirm("Are you sure you want to delete this appointment?");
            if (confirmed) {
                setRowData(prevData => prevData.filter(row => row.id !== id));
            }
        }
     };
     
     return (
         <div className="h-screen flex-grow-1 overflow-y-lg-auto " style={{ marginLeft: '-20px', paddingLeft: '35px' }}>
      {/* Header */}
        <div className="pt-5 pl-0">
        <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '7px' }}>Manage Nurses</h3>
         </div>
        {/* Search and filter options */}
        <div className="row mb-3">
            {/* Search */}
            <div className="col-md-4 pt-6">
                 <h5>Search</h5>
                 <input type="text" className="form-control" placeholder="Type here..." />
             </div>
             <div className="col-md-4 pt-6">
                 <h5>Nurse's Ratings</h5>
                <select className="form-select" aria-label="Select">
                    <option defaultValue>All</option>
                    <option>5-star rating</option>
                     <option>4-star rating</option>
                    <option>3-star rating</option>
                    <option>2-star rating</option>
                </select>
             </div>
             <div className="col-md-4 pt-6">
                 <h5>Nurse's Status</h5>
                 <select className="form-select" aria-label="Select">
                    <option defaultValue>None</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Not available</option>
                    <option>All</option>
                 </select>
            </div>
            
         </div>
        <div className="card shadow border-0 mb-7"  style={{ marginLeft: '4px' }}>
            <div className="card-header"></div>
             <div className="table-responsive">
                 <table className="table table-hover table-nowrap">
                     <thead className="thead-light">
                         <tr>
                             <th scope="col" style={{ textAlign: 'center', fontSize: '14px', paddingInlineStart:'3px'}}>Name of Nurse</th>
                             <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Email Address</th>
                             <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Contact Number</th>
                             <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Nurse's Availability</th>
                             
                             <th style={{ fontSize: '14px', paddingRight:'20px'}}>Status</th>
                             <th style={{ textAlign:'center', fontSize: '14px', paddingLeft:'10px'}}> Action</th>
                         </tr>
                     </thead>
                    <tbody>
                         {rowData.map(row => (
                            <tr key={row.id}>
                                 <td style={{ paddingLeft: '20px',fontSize: '14px'  }}>
                                    <img alt="..." src={row.nurseProfilepic} className="avatar avatar-sm rounded-circle me-3" />
                                    <span className="text-heading font-semibold">{row.nurseName}</span>
                                </td>
                                 <td align="center"  style={{ fontSize: '14px' }}>{row.nurseemailAddress}</td>
                                 <td align="center"  style={{ fontSize: '14px' }}>{row.contactNumber}</td>
                                <td align="center"  style={{ fontSize: '14px' }}>{row.nurseAvailability}</td>
                               
                    
                                    <td  style={{ fontSize: '20px', paddingRight:"20px" }}>
                                
                                 <span className={`badge bg-${row.status === 'Active' ? 'success' : row.status === 'Inactive' ? 'warning' : 'danger'}`}>{row.status}</span>

                                </td>
                                 <td className="text-end" style={{paddingLeft: '10px'}}>
                                     <button className="btn btn-sm btn-neutral" onClick={() => handleAction("view", row.id)}>View</button>
                                     <button className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => handleAction("delete", row.id)}>
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
        <Pagination />
     </div>
 );
 }

 export default Nurses;   