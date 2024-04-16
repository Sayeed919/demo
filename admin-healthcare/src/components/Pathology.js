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
 

function Pathology() {
    const [rowData, setRowData] = useState([
        { id: 1, Pathologycenter: "Thyrocare Technologies",PathologyAddress:"1st Floor, Kailas Business Park, Saki Vihar Road, Andheri East, Mumbai, Maharashtra - 400072", phoneNumber:"1800 209 1414 ", workingHours: "10:00 am to 05:00 pm", ratings:"5",status:"Open"},
        { id: 2, Pathologycenter: "Metropolis Healthcare Ltd.", PathologyAddress:"3rd Floor, C-24, Sector 1, Noida, Uttar Pradesh - 201301", phoneNumber:"0120 439 4394	", workingHours: "11:00 am to 06:00 pm", ratings:"4", status:"Closed" },
        { id: 3, Pathologycenter: "Medall Healthcare Pvt.Ltd.", PathologyAddress:"2nd Floor, Apollo Health City, Jubilee Hills, Hyderabad, Telangana - 500033", phoneNumber:"040 2360 7777", workingHours:"12:00 pm to 03:00 pm", ratings:"3", status: "Open"},        
        { id: 4, Pathologycenter: "Apollo Diagnostics", PathologyAddress:"151, Sector 10, Opp. Cyber Gateway, Hitech City, Madhapur, Hyderabad, Telangana - 500081",phoneNumber:"040-1800-425-3920", workingHours:"01:00 pm to 05:00 pm", ratings:"4", status: "Closed"},
        { id: 5, Pathologycenter: "Thyrocare Aarogyam", PathologyAddress:"401, Shamrock Industries, TTC Industrial Area, Mahape, Navi Mumbai, Maharashtra - 400707", phoneNumber:"022-4290-9444", workingHours:"04:00 pm to 06:00 pm", ratings:"3" , status:"Open"},
        { id: 6, Pathologycenter: "Abott Diagnostics", PathologyAddress:"A-41, Sector-16, Film City, Noida, Uttar Pradesh - 201301", phoneNumber:"0120-272-8700", workingHours:"05:00 pm to 08:00 pm", ratings:"4",status:"Closed"},
        { id: 7, Pathologycenter: "Clinical Pathology Laboratories, Inc.", PathologyAddress:" 1001 W. Ben White Blvd., Austin, TX 78704, USA", phoneNumber:"+1 800-346-7754", workingHours:"04:00 pm to 07:00 pm", ratings:"3",status:"Open"},
        { id: 8, Pathologycenter: "Unilab Corporation", PathologyAddress:"8500 N. Stemmons Freeway, Suite 200, Dallas, TX 75247, USA", phoneNumber:"+1 800-882-8846", workingHours:"03:00 pm to 07:00 pm", ratings:"2", status:"Closed"},
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
            <div className="pt-5" style={{ marginLeft: '-10px' }}>
            <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '8px'  }}>Manage Pathology</h3>
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
                       <option>5-star rating</option>
                        <option>4-star rating</option>
                       <option>3-star rating</option>
                       <option>2-star rating</option>
                   </select>
                </div>
                <div className="col-md-4 pt-6">
                    <h5>Status</h5>
                    <select className="form-select" aria-label="Select">
                       <option defaultValue>None</option>
                       <option>Open</option>
                       <option>Closed</option>
                       <option>All</option>
                    </select>
               </div>
               </div>
           <div className="card shadow border-0 mb-7" style={{ marginLeft: '7px' }}>
               <div className="card-header"></div>
                <div className="table-responsive" >
                    <table className="table table-hover table-nowrap">
                        <thead className="thead-light">
                        <tr>
                             <th scope="col" style={{ textAlign: 'center', fontSize: '14px'}}>Pathology Center Name</th>
                             <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Address</th>
                             <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Phone Number</th>
                             <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Working Hours</th>
       
                             <th style={{ fontSize: '14px', paddingRight:'20px'}}>Status</th>
                             <th style={{ textAlign:'center', fontSize: '14px', paddingleft:'5px'}}> Action</th>
                         </tr>
                     </thead>
                    <tbody>
                         {rowData.map(row => (
                            <tr key={row.id}>
                                 <td style={{ paddingLeft: '1px',fontSize: '14px', textAlign:"center"  }}>
                                 <span className="text-heading font-semibold" title={row.Pathologycenter}>{row.Pathologycenter.length > 18 ? row.Pathologycenter.substring(0, 18) + '...' : row.Pathologycenter}</span>
                                 </td>
                                 <td align="center" style={{ fontSize: '14px' }}>
                                 {row.PathologyAddress.length > 25 ? (
                                 <span title={row.PathologyAddress}>
                                {row.PathologyAddress.substring(0, 25) + '...'}
                                </span>
                                 ) : (
                                row.PathologyAddress
                                )}
                                  </td>

                                 <td align="center"  style={{ fontSize: '14px' }}>{row.phoneNumber}</td>
                                <td align="center"  style={{ fontSize: '14px' }}>{row.workingHours}</td>
                                
                                
                                 <td  style={{ fontSize: '20px', paddingRight:"20px" }}>
                                 <span className={`badge bg-${row.status === 'Open' ? 'success' : 'warning'}`}>{row.status === 'Open' ? 'Open' : 'Closed'}</span>


                                </td>
                                 <td className="text-end"  style={{paddingLeft:'10px'}}>
                                     <button className="btn btn-sm btn-neutral"onClick={() => handleAction("view", row.id)}>View</button>
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
        <Pagination/>
     </div>
 );
 }

 export default Pathology;     
            
    
    
    

