import React, { useState } from "react";
 
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


function Homenurse() {
    const [rowData, setRowData] = useState([
        { id: 1, governessName: "Sandra Samuel",emailAddress:"sandrasam2000@gmail.com", contactNumber:"(123) 456-7890", location:"USA", governessProfilepic:"https://th.bing.com/th/id/OIP.wBjV3uajhv7IM4yKSNM8ZAHaKJ?w=127&h=180&c=7&r=0&o=5&pid=1.7"},
        { id: 2, governessName: "Elizabeth Karketa", emailAddress:"elizabethkarketa03@gmail.com", contactNumber:" 07700 900345", location:"UK", governessProfilepic:"https://th.bing.com/th/id/OIP.fOJFUxfp-5M6XhKD0EBcbAHaE7?w=220&h=180&c=7&r=0&o=5&pid=1.7"},
        { id: 3, governessName: "Roshni Singh", emailAddress:"roshnisingh344@gmail.com", contactNumber:"980-344-2345", location:"Mumbai",  governessProfilepic: "https://th.bing.com/th/id/OIP.RdI4VgIGa-DVYKBYeDhkhAHaIT?w=135&h=180&c=7&r=0&o=5&pid=1.7"},        
        { id: 4, governessName: "Devyani Khobragade", emailAddress:"devyanik23@gmail.com",contactNumber:"(604) 123-4567",location:"Canada", governessProfilepic:"https://th.bing.com/th/id/OIP.rsaM36Q7ALGCa429YIEyFwAAAA?rs=1&pid=ImgDetMain"},
        { id: 5, governessName: "Emma Harris", emailAddress:"emmaharris204@gmailcom", contactNumber:"0412-345-678", location:"Australia" , governessProfilepic:"https://th.bing.com/th/id/OIP.XFn_VTJgVAnDzV0e56f-4gHaHa?pid=ImgDet&w=182&h=182&c=7"},
        { id: 6, governessName: "Sophia Ahuja", emailAddress:"sophiaahuja123@gmail.com", contactNumber:"91-94559-66039", location:"Delhi", governessProfilepic:"https://th.bing.com/th/id/OIP.SOAHBKaM3V7hADsIkfKbvwAAAA?pid=ImgDet&w=182&h=182&c=7"},
        { id: 7, governessName: "Advika Krishnan", emailAddress:"advikakr980@gmail.com", contactNumber:"91-96630-13987", location:"Chennai",governessProfilepic:"https://th.bing.com/th/id/OIP.gQMm-uw0VGbi6pf_kGLtpwAAAA?pid=ImgDet&w=177&h=295&c=7"},
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
          <div className="h-screen flex-grow-1 overflow-y-lg-auto " style={{ marginLeft: '-20px', paddingLeft: '20px' }}>
          {/* Header */}
            <div className="pt-5" style={{ marginLeft: '-15px' }}>
            <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '5px'  }}>Manage HomeNurses</h3>
             </div>
            {/* Search and filter options */}
            <div className="row mb-3"style={{ marginLeft: '-20px' }}>
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
                    <select className="form-select" aria-label="Select" >
                       <option defaultValue>None</option>
                       <option>Available</option>
                       <option>Unavailable</option>
                       <option>All</option>
                       
                    </select>
               </div>
            </div>
           <div className="card shadow border-0 mb-7" style={{ marginLeft: '-4px' }}>
               <div className="card-header"></div>
                <div className="table-responsive">
                    <table className="table table-hover table-nowrap">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" style={{ textAlign: 'center', fontSize: '14px', paddingLeft:'10px'}}>Name of Home-Nurse</th>
                                <th scope="col" style={{ textAlign: 'center', fontSize: '14px',paddingLeft:'10px' }}>Email Address</th>
                                <th scope="col" style={{ textAlign: 'center', fontSize: '14px',paddingLeft:'10px' }}>Contact Number</th>
                                <th scope="col" style={{ textAlign: 'center', fontSize: '14px', paddingLeft:'10px' }}>Location</th>
                               
                                <th style={{ textAlign:'center',fontSize: '14px',paddingRight:'10px'}}> Action</th>
                            </tr>
                        </thead>
                       <tbody>
                       {rowData.map(row => (
                               <tr key={row.id}>
                                    <td style={{ paddingLeft: '1px', fontSize: '14px'  }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>  
                                       <img alt="..." src={row.governessProfilepic} className="avatar avatar-sm rounded-circle me-3" />
                                       <span className="text-heading font-semibold">
                                         {row.governessName.length > 16 ? (
                                         <span title={row.governessName}>
                                         {row.governessName.substring(0, 11) + '...'}
                                        </span>
                                    ) : (
                                 row.governessName
                               )}
                              </span>

                                    </div>
                                   </td>
                                    <td align="center" style={{ fontSize: '14px' , paddingLeft:'4px'}}>{row.emailAddress}</td>
                                    <td align="center" style={{ fontSize: '14px' , paddingLeft:'4px'}}>{row.contactNumber}</td>
                                    <td align="center" style={{ fontSize: '14px' , paddingLeft:'4px'}}>{row.location}</td>
                                    
                                  
                                    
                                    <td className="text-end" style={{paddingLeft:'2px'}}>
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
           <Pagination/>
        </div>
    );
    }
   
    export default Homenurse;
   
