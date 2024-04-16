//  import React, { useState } from "react";
//  import { useNavigate } from 'react-router-dom';
 
//  import "./Navbar.css";
//  const Pagination = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const totalItems = 10;
//     const itemsPerPage = 7;
//     const totalPages = Math.ceil(totalItems / itemsPerPage);
  
//     const handlePageChange = (pageNumber) => {
//       setCurrentPage(pageNumber);
//     };
// return (
//     <div className="card-footer border-0 py-5 d-flex flex-column align-items-end" style={{marginTop:'-20px'}} >
//     <div className="pagination-container" style={{ marginBottom: '-10px' }}></div>
//       <span className="text-muted text-sm mb-1"><strong>
//         Showing {itemsPerPage} items out of {totalItems} results:
//         </strong>
//       </span>
//       <nav aria-label="Page navigation example">
//         <ul className="pagination">
//           <li className={`page-item ${currentPage === 1 ? 'enabled' : ''}`}>
//             <a
//               className="page-link"
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handlePageChange(currentPage - 1);
//               }}
//             >
//               Previous
//             </a>
//           </li>
//           {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//             <li
//               key={page}
//               className={`page-item ${page === currentPage ? 'active' : ''}`}
//             >
//               <a
//                 className={`page-link ${page === currentPage ? 'bg-info text-white' : ''}`}
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handlePageChange(page);
//                 }}
//               >
//                 {page}
//               </a>
//             </li>
//           ))}
//           <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//             <a
//               className="page-link"
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handlePageChange(currentPage + 1);
//               }}
//             >
//               Next
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };


// function Doctors() {
//     const [rowData, setRowData] = useState([
//         { id: 1, doctorName: "Dr. Edward Butler",emailAddress:"edwardbutler03@gmail.com", contactNumber:"(416) 123-4567 ", doctorAvailability: "10:00-12:00 PM", status:"Active", doctorProfilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumBRwwhA7CvekSqD_NuxP4zCiTQOWnMum4A&usqp=CAU.jpg",},
//         { id: 2, doctorName: "Dr. Nick Churco", emailAddress:"nick07churco@gmail.com", contactNumber:"(604) 123-4567",doctorAvailability: "10:00-11:30 AM", status: "Inactive", doctorProfilepic:"https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.webp?b=1&s=170667a&w=0&k=20&c=3GoWF_QG3WZoJK6CJWWY9Cxt5s6O-0I6qrU1QCnloKA=", },
//         { id: 3, doctorName: "Dr. Aaron Scott", emailAddress:"aaronscott089@gmail.com", contactNumber:"0131 234 5678",doctorAvailability: "10:30-11:00 AM", status: "Inactive" , doctorProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kl3VB8ybJhNeotEiDevGDUBHQ7TmlP-Tv2Jam8pMr7ZtyV1v3CouZJiaoH2VTFVgUiI&usqp=CAU.jpg",},        
//         { id: 4, doctorName: "Dr. Mary Collins", emailAddress:"marycollins123@gmail.com",contactNumber:"080-567-990", doctorAvailability:"11:00-11:25 AM", status: "Active", doctorProfilepic:"https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww.jpg", },
//         { id: 5, doctorName: "Dr. Sarah Churco", emailAddress:"sarahchurco13@gmail.com", contactNumber:"0141 234 5678", doctorAvailability:"10:00-07:00 PM" , status:"Inactive", doctorProfilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_D54EPIoKbI5OZO3atmQlQ20mBLm9AVoQorSZ0N1O03yVmbIOE9_2r9w791cLdCx2MNc&usqp=CAU.jpg",},
//         { id: 6, doctorName: "Dr. Bella Thomas", emailAddress:"bellathomas2307@gmail.com", contactNumber:"0121 234 5678", doctorAvailability:"10:00-04:00 PM", status:"Active", doctorProfilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1oUFK8scR-2jM8n42PLnxyng_th_6Ru8ssBJcJlxI6hgTuTcXSG6h8x5hjtTPzJsz6w&usqp=CAU.jpg", },
//         { id: 7, doctorName: "Dr. Eric Fernandez", emailAddress:"ericfernandez03@gmail.com", contactNumber:"07400 123456", doctorAvailability:"03:00-07:00 PM", status:"Inactive", doctorProfilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW5KA-IqAehAqsz1H9lOsWSMero078SqcTbrTZMJcsikw92lALZkEqFjz1Y4_gYQOdwY&usqp=CAU.jpg", },
//     ]);
//     const [viewMessage, setViewMessage] = useState(null);
    


     
//      const handleAction = (action, id) => {
//          if (action === "view") {
//             const message = `Viewing row with ID: ${id}`;
//             if (viewMessage === message) {
//                 setViewMessage("");
//             } else {
//                 setViewMessage(message);
//              }
//          } else if (action === "delete") {
//             const confirmed = window.confirm("Are you sure you want to delete this appointment?");
//             if (confirmed) {
//                 setRowData(prevData => prevData.filter(row => row.id !== id));
//             }
//         }
//     };
        
    

//      return (
//       <div className="h-screen flex-grow-1 overflow-y-lg-auto " style={{ marginLeft: '-20px', paddingLeft: '35px' }}>
//       {/* Header */}
//         <div className="pt-5" style={{ marginLeft: '-20px' }}>
//         <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '10px'  }}>Manage Doctors</h3>
//          </div>
//         {/* Search and filter options */}
//         <div className="row mb-3">
//             {/* Search */}
//             <div className="col-md-4 pt-6">
//                  <h5>Search</h5>
//                  <input type="text" className="form-control" placeholder="Type here..." />
//              </div>
//             <div className="col-md-4 pt-6">
//                 <h5>Doctor's Availability</h5>
//                  <select className="form-select" aria-label="Select" >
//                     <option defaultValue>None</option>
//                     <option>Active</option>
//                     <option>Inactive</option>
//                     <option>Not available</option>
//                     <option>All</option>
                    
//                  </select>
//             </div>
//          </div>
//         <div className="card shadow border-0 mb-7" style={{ marginLeft: '3px' }}>
//             <div className="card-header"></div>
//              <div className="table-responsive">
//                  <table className="table table-hover table-nowrap">
//                      <thead className="thead-light">
//                          <tr>
//                              <th scope="col" style={{ textAlign: 'center', fontSize: '14px'}}>Name of Doctor</th>
//                              <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Email Address</th>
//                              <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Contact Number</th>
                            
//                              <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Doctor's Availability</th>
                             
//                             <th style={{ fontSize: '14px'}}>Status</th>
//                              <th style={{ textAlign:'center',fontSize: '14px'}}> Action</th>
//                          </tr>
//                      </thead>
//                     <tbody>
//                     {rowData.map(row => (
//                             <tr key={row.id}>
//                                  <td style={{ paddingLeft: '30px', fontSize: '14px' }}>
//                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>  
//                                     <img alt="..." src={row.doctorProfilepic} className="avatar avatar-sm rounded-circle me-3" />
//                                     <span className="text-heading font-semibold">{row.doctorName}</span>
//                                     </div>
//                                 </td>
//                                  <td align="center" style={{ fontSize: '14px' }}>{row.emailAddress}</td>
//                                  <td align="center" style={{ fontSize: '14px' }}>{row.contactNumber}</td>

//                                 <td align="center" style={{ fontSize: '14px' }}>{row.doctorAvailability}</td>
                                
//                                  <td style={{ fontSize: '20px' }}>
//                                  <span className={`badge bg-${row.status === 'Active' ? 'success' : row.status === 'Inactive' ? 'warning' : 'danger'}`}>{row.status}</span>

//                                 </td>
//                                  <td className="text-end">
//                                      <button className="btn btn-sm btn-neutral" onClick={() => handleAction("view", row.id)}>View</button>
//                                      <button className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => handleAction("delete", row.id)}>
//                                         <i className="bi bi-trash"></i>
//                                      </button>
//                                 </td>
//                              </tr>
//                         ))}
//                      </tbody>
//                  </table>
//                  {viewMessage && <div className="alert alert-success">{viewMessage}</div>}
//             </div>
//         </div>
//         <Pagination/>
//      </div>
//  );
//  }

//  export default Doctors;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DoctorDetails from './DoctorDetails';
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
  { id: 1, doctorName: "Dr. Edward Butler", emailAddress: "edwardbutler03@gmail.com", contactNumber: "(416) 123-4567", doctorAvailability: "10:00-12:00 PM", status: "Active", doctorProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumBRwwhA7CvekSqD_NuxP4zCiTQOWnMum4A&usqp=CAU" },
  { id: 2, doctorName: "Dr. Nick Churco", emailAddress: "nick07churco@gmail.com", contactNumber: "(604) 123-4567", doctorAvailability: "10:00-11:30 AM", status: "Inactive", doctorProfilepic: "https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.webp?b=1&s=170667a&w=0&k=20&c=3GoWF_QG3WZoJK6CJWWY9Cxt5s6O-0I6qrU1QCnloKA=" },
  { id: 3, doctorName: "Dr. Aaron Scott", emailAddress: "aaronscott089@gmail.com", contactNumber: "0131 234 5678", doctorAvailability: "10:30-11:00 AM", status: "Inactive", doctorProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kl3VB8ybJhNeotEiDevGDUBHQ7TmlP-Tv2Jam8pMr7ZtyV1v3CouZJiaoH2VTFVgUiI&usqp=CAU" },
  { id: 4, doctorName: "Dr. Mary Collins", emailAddress: "marycollins123@gmail.com", contactNumber: "080-567-990", doctorAvailability: "11:00-11:25 AM", status: "Active", doctorProfilepic: "https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww.jpg" },
  { id: 5, doctorName: "Dr. Sarah Churco", emailAddress: "sarahchurco13@gmail.com", contactNumber: "0141 234 5678", doctorAvailability: "10:00-07:00 PM", status: "Inactive", doctorProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_D54EPIoKbI5OZO3atmQlQ20mBLm9AVoQorSZ0N1O03yVmbIOE9_2r9w791cLdCx2MNc&usqp=CAU" },
  { id: 6, doctorName: "Dr. Bella Thomas", emailAddress: "bellathomas2307@gmail.com", contactNumber: "0121 234 5678", doctorAvailability: "10:00-04:00 PM", status: "Active", doctorProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1oUFK8scR-2jM8n42PLnxyng_th_6Ru8ssBJcJlxI6hgTuTcXSG6h8x5hjtTPzJsz6w&usqp=CAU" },
  { id: 7, doctorName: "Dr. Eric Fernandez", emailAddress: "ericfernandez03@gmail.com", contactNumber: "07400 123456", doctorAvailability: "03:00-07:00 PM", status: "Inactive", doctorProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW5KA-IqAehAqsz1H9lOsWSMero078SqcTbrTZMJcsikw92lALZkEqFjz1Y4_gYQOdwY&usqp=CAU" },
];

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const doctor = rowData.find((doctor) => doctor.id.toString() === id);
    setSelectedDoctor(doctor);
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
        <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', paddingLeft: '10px' }}>Manage Doctors</h3>
      </div>
      {/* Render Doctor Details or Doctor List */}
      {selectedDoctor ? (
        <DoctorDetails doctor={selectedDoctor} />
      ) : (
        <>
          {/* Search and filter options */}
          <div className="row mb-3">
            {/* Search */}
            <div className="col-md-4 pt-6">
              <h5>Search</h5>
              <input type="text" className="form-control" placeholder="Type here..." />
            </div>
            <div className="col-md-4 pt-6">
              <h5>Doctor's Ratings</h5>
              <select className="form-select" aria-label="Select">
                <option defaultValue>All</option>
                <option>5-star rating</option>
                <option>4-star rating</option>
                <option>3-star rating</option>
                <option>2-star rating</option>
              </select>
            </div>
            <div className="col-md-4 pt-6">
              <h5>Doctor's Availability</h5>
              <select className="form-select" aria-label="Select" >
                <option defaultValue>None</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Not available</option>
                <option>All</option>
              </select>
            </div>
          </div>
          {/* Render Doctor List */}
          <div className="card shadow border-0 mb-7" style={{ marginLeft: '3px' }}>
            <div className="card-header"></div>
            <div className="table-responsive">
              <table className="table table-hover table-nowrap">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Name of Doctor</th>
                    <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Email Address</th>
                    <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Contact Number</th>
                    <th scope="col" style={{ textAlign: 'center', fontSize: '14px' }}>Doctor's Availability</th>
                    <th style={{ fontSize: '14px' }}>Status</th>
                    <th style={{ textAlign: 'center', fontSize: '14px' }}> Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rowData.map(row => (
                    <tr key={row.id}>
                      <td style={{ paddingLeft: '30px', fontSize: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img alt="..." src={row.doctorProfilepic} className="avatar avatar-sm rounded-circle me-3" />
                          <span className="text-heading font-semibold">{row.doctorName}</span>
                        </div>
                      </td>
                      <td align="center" style={{ fontSize: '14px' }}>{row.emailAddress}</td>
                      <td align="center" style={{ fontSize: '14px' }}>{row.contactNumber}</td>
                      <td align="center" style={{ fontSize: '14px' }}>{row.doctorAvailability}</td>
                      <td style={{ fontSize: '20px' }}>
                        <span className={`badge bg-${row.status === 'Active' ? 'success' : 'warning'}`}>{row.status}</span>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-neutral" onClick={() => setSelectedDoctor(row)}>View</button>
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
      )}
    </div>
  );
}

export default Doctors;

