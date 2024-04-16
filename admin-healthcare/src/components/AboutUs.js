import React from 'react';

function AboutUs() {
    return (
        <div className="container-fluid">
            
            <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '30px', marginLeft:"-20px"}}> About Us</h3>
            <div className="container-fluid">
                <div className="row mt-2">
                    <div className="col pt-2">
                        <p className="text-left" style={{marginLeft:"-40px", fontSize:"18px"}}><strong>Company Details</strong></p>
                    </div>
                </div>
            <div className="container">
            <div className="row">
                <div className="col">
                    <div className="form-box p-4 mt-4">
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3" style={{marginLeft:"-80px", marginTop:"-10px"}} >
                                <label htmlFor="companyName" className="form-label" style={{fontSize:"15px"}}>Company Name:</label>
                                <input type="text" id="companyName" name="companyName" className="form-control" placeholder="Enter company name" />
                            </div>
                            <div className="col-md-6 mb-3"style={{marginLeft:"-3px", marginTop:"-10px"}} >
                                <label htmlFor="companyWebsite" className="form-label" style={{marginRight:"-3px",fontSize:"15px"}}>Company Website:</label>
                                <input type="text" id="companyWebsite" name="companyWebsite" className="form-control" placeholder="Enter company website" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3"style={{marginLeft:"-80px", marginTop:"-10px"}} >
                                <label htmlFor="addressLine1" className="form-label"style={{fontSize:"15px"}} >Address Line 1:</label>
                                <input type="text" id="addressLine1" name="addressLine1" className="form-control" placeholder="Enter address line 1" />
                            </div>
                            <div className="col-md-6 mb-3" style={{marginLeft:"-3px", marginTop:"-10px"}}>
                                <label htmlFor="addressLine2" className="form-label" style={{marginRight:"-4px",fontSize:"15px"}}>Address Line 2:</label>
                                <input type="text" id="addressLine2" name="addressLine2" className="form-control" placeholder="Enter address line 2" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3" style={{marginLeft:"-80px", marginTop:"-10px"}}>
                                <label htmlFor="country-code" className="form-label" style={{marginRight:"-4px",fontSize:"15px"}}>Country Code:</label>
                                <select id="country-code" name="country-code" className="form-select">
                                    <option value="91">+91</option>
                                    <option value="1">+1</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3" style={{marginLeft:"-3px", marginTop:"-10px"}} >
                                <label htmlFor="phonenumber" className="form-label" style={{marginRight:"-4px",fontSize:"15px"}}>Phone Number:</label>
                                <input type="number" id="phonenumber" name="phonenumber" className="form-control" placeholder="Enter phone number" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3" style={{marginLeft:"-80px", marginTop:"-10px"}}>
                                <label htmlFor="phone-number" className="form-label" style={{marginRight:"-4px",fontSize:"15px"}}>Alternate Phone Number:</label>
                                <input type="text" id="phone-number" name="phone-number" className="form-control" placeholder="Enter alternate phone number" />
                            </div>
                            <div className="col-md-6 mb-3" style={{marginLeft:"-3px", marginTop:"-10px"}}>
                                <label htmlFor="phone-number2" className="form-label" style={{marginRight:"-4px",fontSize:"15px"}}>Email:</label>
                                <input type="text" id="phone-number2" name="phone-number2" className="form-control" placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="container-fluid">
                        <div className="row mt-2">
                        <div className="col pt-2">
                           <p className="text-left" style={{marginLeft:"-105px", fontSize:"18px", fontWeight:"bold"}}>Social Media Details</p>
                        </div>
                       </div>
                       </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3" style={{marginLeft:"-80px", marginTop:"10px"}} >
                                <label htmlFor="facebook-link" className="form-label" style={{marginRight:"-4px",fontSize:"15px"}}>Facebook Link:</label>
                                <input type="text" id="facebook-link" name="facebook-link" className="form-control" placeholder="Enter Facebook link" />
                            </div>
                            <div className="col-md-6 mb-3" style={{marginLeft:"-3px", marginTop:"10px"}}>
                                <label htmlFor="twitter-link" className="form-label" style={{marginRight:"-4px",fontSize:"15px"}} >Twitter Link:</label>
                                <input type="text" id="twitter-link" name="twitter-link" className="form-control" placeholder="Enter Twitter link" />
                            </div>
                            <div className="col-md-6 mb-3" style={{marginLeft:"-80px", marginTop:"10px"}}>
                                <label htmlFor="linkedin-link" className="form-label" style={{marginRight:"-4px",fontSize:"15px"}} >LinkedIn Link:</label>
                                <input type="text" id="linkedin-link" name="linkedin-link" className="form-control" placeholder="Enter Linkedin link" />
                            </div>
                            <div className="col-md-6 mb-3" style={{marginLeft:"-3px", marginTop:"10px"}}>
                                <label htmlFor="youtube-link" className="form-label" style={{marginRight:"-4px",fontSize:"15px"}} >Youtube Link:</label>
                                <input type="text" id="youtube-link" name="youtube-link" className="form-control" placeholder="Enter Youtube link" />
                            </div>
                        </div>
                        
                        <div className="container-fluid">
                        <div className="row mt-2">
                        <div className="col pt-2">
                           <p className="text-left" style={{marginLeft:"-105px", fontSize:"18px", fontWeight:"bold"}}> About Company</p>
                        </div>
                        </div>
                        <div className="col-md-6 mb-3" style={{ marginLeft: "-100px", marginTop: "10px" }}>
                         <label htmlFor="other-info" className="form-label" style={{ marginRight: "-4px", fontSize: "15px" }}>About Company:</label>
                         <input type="text" name="other-info" className="form-control" style={{ width: "870px" }} placeholder="Enter additional information" />
                         </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default AboutUs;