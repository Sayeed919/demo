
import React, { useEffect,useState } from "react";
import '../App.css';
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



function Header() {
    const changeMetric = (metric) => {
        // Implement the functionality of changeMetric here
        console.log(`Changing metric to: ${metric}`);
    }
    const [rowData, setRowData] = useState([
        { id: 1, patientName: "James Thomson", doctorName: "Dr. Edward Butler", date: "13-03-2023", time: "10:00-10:30 AM", status: "Scheduled", profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUM2hHDawTGgFMoBkhX3TK4d0rB2YXQ4Q_g&usqp=CAU", doctorProfilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumBRwwhA7CvekSqD_NuxP4zCiTQOWnMum4A&usqp=CAU.jpg"},
        { id: 2, patientName: "Ashley Williams", doctorName: "Dr. Nick Churco", date: "12-03-2023", time: "10:00-10:20 AM", status: "Postponed", profilePic: "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80", doctorProfilepic:"https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.webp?b=1&s=170667a&w=0&k=20&c=3GoWF_QG3WZoJK6CJWWY9Cxt5s6O-0I6qrU1QCnloKA=" },
        { id: 3, patientName: "Mellisa Chen", doctorName: "Dr. Aaron Scott", date: "12-03-2023", time: "10:30-11:00 AM", status: "Scheduled", profilePic:"https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" , doctorProfilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kl3VB8ybJhNeotEiDevGDUBHQ7TmlP-Tv2Jam8pMr7ZtyV1v3CouZJiaoH2VTFVgUiI&usqp=CAU.jpg"},
        { id: 4, patientName: "Emily Davis", doctorName: "Dr. Mary Collins", date: "11-03-2023",time:"11:00-11:25 AM", status: "Cancelled", profilePic: "https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" , doctorProfilepic:"https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww.jpg"},
        { id: 5, patientName: "Thomas Nguyen", doctorName: "Dr. Sarah Churco", date: "10-03-2023",time:"11:15-11:30 AM", status: "Cancelled", profilePic:"https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" , doctorProfilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_D54EPIoKbI5OZO3atmQlQ20mBLm9AVoQorSZ0N1O03yVmbIOE9_2r9w791cLdCx2MNc&usqp=CAU.jpg"},
        { id: 6, patientName: "Jason Martinez", doctorName: "Dr. Bella Thomas", date: "10-03-2023", time:"11:30-11:40 AM", status:"Scheduled", profilePic:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80", doctorProfilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1oUFK8scR-2jM8n42PLnxyng_th_6Ru8ssBJcJlxI6hgTuTcXSG6h8x5hjtTPzJsz6w&usqp=CAU.jpg"},,
        { id: 7, patientName: "Alanna Scott", doctorName:"Dr. Amanda Harris",date: "13-03-2023", time:"11:40-12:00 PM", status:"Postponed", profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Rm_HBqMYmaC-tLFCBWA0VfjURqIuUZeidw&usqp=CAU", doctorProfilepic:"https://media.istockphoto.com/id/1191463311/photo/if-it-matters-to-you-it-matters-to-me.jpg?s=612x612&w=0&k=20&c=r3ux1mxOljxc6gu77QI1s68j1c2mbb8OiKQiFrsCHNY=" },
        { id: 8, patientName: "Patricia Jones", doctorName:"Dr. Dave Cooper", date:" 11-03-2023", time:"12:00-12:20 PM", status:"Scheduled", profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EK7NyVOhmaF1jl-RIHvmifeqiBW0ksK8YmWSHLrChgF738GRS7MXWYv8KlQ3zruz8Yw&usqp=CAU", doctorProfilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rMx04RXzm7huqsZmyoUZEHFCBpa2WdrXFw&usqp=CAU"},

    ]);
    const [viewMessage, setViewMessage] = useState(null);
    // Function to handle view and delete actions 
    const handleAction = (action, id) => {
        if (action === "view") {
            const message = `Viewing row with ID: ${id}`;
            if (viewMessage === message) {
                // If the message is already being displayed, clear it
                setViewMessage("");
            } else {
                setViewMessage(message);
            }
     
    
    }else if (action === "delete") {
            const confirmed = window.confirm("Are you sure you want to delete this appointment?");
            if (confirmed) {
                setRowData(prevData => prevData.filter(row => row.id !== id));
            }
        }
    };

     return(
        
    <div className="h-screen flex-grow-1 overflow-y-lg-auto ">
      {/* Header */}
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px' }}>Dashboard</h3>
        </div>
        {/* Headings */}
        <div className="row mb-3 pt-6" style={{ paddingLeft: '18px'}}>
          <div className="col-md-4">
            <h5>Search</h5>
            <label htmlFor="searchInput" className="visually-hidden">Search</label>
            <input type="text" className="form-control custom-input" id="searchInput" placeholder="Type here..." />
          </div>
          <div className="col-md-4" style={{ paddingLeft: '20px'}}>
            <h5>Doctor's Ratings</h5>
            <select className="form-select" aria-label="Select">
              <option defaultValue>All</option>
              <option>5-star rating</option>
              <option>4-star rating</option>
              <option>3-star rating</option>
              <option>2-star rating</option>
              <option>1-star rating</option>
            </select>
          </div>
          <div className="col-md-4">
            <h5>Doctor's Speciality</h5>
            <select className="form-select" aria-label="Select">
              <option defaultValue>Select Speciality</option>
              <option>Neurologist</option>
              <option>Opthalmologist</option>
              <option>Dermatologist</option>
              <option>Cardiologist</option>
              <option>Gynaecologist</option>
            </select>
          </div>
          
        </div>
      </header>
      <div style={{ marginTop: '-40px',backgroundColor: '#f8f9fa' }}>
      <main className="py-6 bg-surface-secondary"/>
      <div className="container-fluid">
      <div className="row g-6 mb-6">
          <div className="col-xl-3 col-sm-6 col-12" style={{ marginBottom: '20px', backgroundColor: '#f8f9fa' }}>
            <div className="container-fluid">
              {/* Card stats */}
              <div className="row g-6 mb-6">
                {/* Remaining code for card stats here */}
              </div>
            </div>
            <div className="card shadow border-0">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Doctors</span>
                    <span className="h3 font-bold mb-0">4,593</span>
                  </div>
                  <div className="col-auto">
                    <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                      <i className="bi bi-file-medical"></i>
                    </div>
                  </div>
                </div>
                <div className="mt-2 mb-0 text-sm">
                  <span className="badge badge-pill bg-soft-success text-success me-2">
                    <i className="bi bi-arrow-up me-1"></i>37%
                  </span>
                  <span className="text-nowrap text-xs text-muted">Since last month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0 border-light">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Patients</span>
                                    <span className="h3 font-bold mb-0">3,200</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                        <i className="bi bi-people"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 mb-0 text-sm">
                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                    <i className="bi bi-arrow-up me-1"></i>70%
                                </span>
                                <span className="text-nowrap text-xs text-muted">Since last month</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12" onClick={() => { window.location.href = 'analytics3.html'; }} style={{ cursor: 'pointer' }}>
  <div className="card shadow border-0">
    <div className="card-body">
      <div className="row">
        <div className="col">
          <span className="h6 font-semibold text-muted text-sm d-block mb-2">Analytics</span>
          <span className="h3 font-bold mb-0">80%</span>
        </div>
        <div className="col-auto">
          <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
            <i className="bi bi-graph-up"></i>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-0 text-sm">
        <span className="badge badge-pill bg-soft-success text-success me-2">
          <i className="bi bi-arrow-up me-1"></i>10%
        </span>
        <span className="text-nowrap text-xs text-muted">Since last month</span>
      </div>
    </div>
  </div>
</div>
<div className="col-xl-3 col-sm-6 col-12">
  <div className="card shadow border-0">
    <div className="card-body">
      <div className="row">
        <div className="col">
          <span className="h6 font-semibold text-muted text-sm d-block mb-2">Appointments</span>
          <span className="h3 font-bold mb-0">88%</span>
        </div>
        <div className="col-auto">
          <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
            <i className="bi bi-minecart-loaded"></i>
          </div>
        </div>
      </div>
      
      <div className="mt-2 mb-0 text-sm">
        <span className="badge badge-pill bg-soft-success text-success me-2">
          <i className="bi bi-arrow-up me-1"></i>30%
        </span>
        <span className="text-nowrap text-xs text-muted">Since last month</span>
      </div>

      <div className="dropdown mt-3">
        <button className="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '150px' }}>
          Select Metric
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#" onClick={() => changeMetric('booked')}>Appointments Booked</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => changeMetric('scheduled')}>Appointments Scheduled</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => changeMetric('confirmed')}>Appointments Confirmed</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => changeMetric('cancelled')}>Appointments Cancelled</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="container">
            <div className="card shadow border-0 mb-7">
                <div className="card-header">
                    <h5 className="mb-0">Appointments List</h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-nowrap">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}> Name of Patient</th>
                                <th scope="col" style={{ textAlign: 'center' }}> Name of the Appointed Doctor</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Date of Appointment</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Time of Appointment</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rowData.map(row => (
                                <tr key={row.id}>
                                    <td>
                                        <img alt="..." src={row.profilePic}  className="avatar avatar-sm rounded-circle me-3" />
                                        <a className="text-heading font-semibold" href="#">
                                            {row.patientName}
                                        </a>
                                    </td>
                                    <td align="center">
                                        <img alt="..." src={row.doctorProfilepic} className="avatar avatar-xs rounded-circle me-2" style={{ width: '40px' }} />
                                        <a className="text-heading font-semibold " href="#">
                                            {row.doctorName}
                                        </a>
                                    </td>
                                    <td align="center">
                                        {row.date}
                                    </td>
                                    <td align="center">
                                        {row.time}
                                    </td>
                                    <td>
    <span className={`badge badge-lg badge-dot bg-${row.status === 'Scheduled' ? 'success' : row.status === 'Postponed' ? 'warning' : 'danger'}`} style={{ display: 'inline-block', padding: '5px 10px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        
        {row.status}
    </span>
  
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
        </div>
    </div>
</div>


                            


                        </div>
                        <Pagination/>
                    </div>


  );
}

export default Header;
function getStatusIconClass(status) {
    switch (status) {
      case "Scheduled":
        return "bg-success";
      case "Postponed":
        return "bg-warning";
      case "Cancelled":
        return "bg-danger";
      default:
        return "";
    }
  }
