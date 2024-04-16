import React, { useState } from 'react';
import './Support.css';

const Support= () => {
  const [answersVisible, setAnswersVisible] = useState({});

  const toggleAnswer = (questionId) => {
    setAnswersVisible((prevAnswersVisible) => ({
      ...prevAnswersVisible,
      [questionId]: !prevAnswersVisible[questionId],
    }));
    const answerElement = document.getElementById(`${questionId}-answer`);
  if (answerElement) {
    answerElement.style.display = answersVisible[questionId] ? 'none' : 'block';
  }
  };

  return (
    <div className="container">
      <div className="h-screen flex-grow-1 overflow-y-lg-auto" style={{ marginLeft: '-20px', paddingLeft: '35px' }}>
        {/* Header */}
        <div className="pt-7 " style={{ marginLeft: '-10px' }}>
          <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginLeft: '-28px' }}>Help And Support</h3>
        </div>
        <div className="container">
          <div className="row justify-content-end pt-3">
            <div className="col-auto ">
              <button type="button" className="btn btn-primary">+ Add New Help</button>
            </div>
          </div>
          
          <div className="container-fluid">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="doctor-tab" data-bs-toggle="tab" data-bs-target="#doctor" type="button" role="tab" aria-controls="doctor" aria-selected="true" style={{ fontSize: "18px", marginLeft: "-80px" }}>Doctor</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="patient-tab" data-bs-toggle="tab" data-bs-target="#patient" type="button" role="tab" aria-controls="patient" aria-selected="false" style={{ fontSize: "18px" }}>Patient</button>
              </li>
            </ul>
            <div className="row mt-8" style={{ paddingLeft: "5px", marginTop: "-30px" }}>
            <div className="col">
              <p className="text-left" style={{ fontWeight: 'bold', marginLeft: '-85px' }}>All the added Help</p>
            </div>
          </div>
            
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="doctor" role="tabpanel" aria-labelledby="doctor-tab">
  <div className="help-box" style={{ marginLeft: "-30px", marginTop: "30px" }}>
    <div className="help-question" onClick={() => toggleAnswer('doctor-question1')} style={{ marginLeft: "-50px" , fontWeight:"bold"}}>
    Title 1
      <span className="toggle-icon">{answersVisible['doctor-question1'] ? '▼' : '►'}</span>
    </div>
    <div id="doctor-question1-answer" className="help-answer" style={{ marginLeft: "-50px", marginTop: "10px", display: answersVisible['doctor-question1'] ? 'block' : 'none' }}>
    Is there security present in this website application?
    </div>
    
    <div className="help-box" style={{ marginLeft: "-30px", marginTop: "18px" }}>
    <div className="help-question" onClick={() => toggleAnswer('doctor-question2')} style={{ marginLeft: "-20px" , fontWeight:"bold"}}>
    Title 2
      <span className="toggle-icon">{answersVisible['doctor-question2'] ? '▼' : '►'}</span>
    </div>
    <div id="doctor-question2-answer" className="help-answer" style={{ marginLeft: "-20px", marginTop: "10px", display: answersVisible['doctor-question2'] ? 'block' : 'none' }}>
    Can I reshedule a scheduled appointment?
    </div>
    
    <div className="help-box" style={{ marginLeft: "-30px", marginTop: "18px" }}>
    <div className="help-question" onClick={() => toggleAnswer('doctor-question3')} style={{ marginLeft: "10px" , fontWeight:"bold"}}>
    Title 3
      <span className="toggle-icon">{answersVisible['doctor-question3'] ? '▼' : '►'}</span>
    </div>
    <div id="doctor-question3-answer" className="help-answer" style={{ marginLeft: "10px", marginTop: "10px", display: answersVisible['doctor-question3'] ? 'block' : 'none' }}>
    What do I do if I forget my password?
    </div>
    
    <div className="help-box" style={{ marginLeft: "-30px", marginTop: "18px" }}>
    <div className="help-question" onClick={() => toggleAnswer('doctor-question4')} style={{ marginLeft: "40px" , fontWeight:"bold"}}>
    Title 4
      <span className="toggle-icon">{answersVisible['doctor-question4'] ? '▼' : '►'}</span>
    </div>
    <div id="doctor-question4-answer" className="help-answer" style={{ marginLeft: "40px", marginTop: "10px", display: answersVisible['doctor-question4'] ? 'block' : 'none' }}>
    What should I do if I encounter technical difficulties while using the platform?
    </div>

  </div>
  </div>
  <div className="tab-pane fade" id="patient" role="tabpanel" aria-labelledby="patient-tab">
  <div className="help-box" style={{ marginLeft: "-30px", marginTop: "30px" }}>
    <div className="help-question" onClick={() => toggleAnswer('patient-question1')} style={{ marginLeft: "-50px", fontWeight:"bold" }}>
      Title 1
      <span className="toggle-icon">{answersVisible['patient-question1'] ? '▼' : '►'}</span>
    </div>
    <div id="patient-question1-answer" className="help-answer" style={{ marginLeft: "-50px", marginTop: "10px", display: answersVisible['patient-question1'] ? 'block' : 'none' }}>
     Can I schedule appointments for family members or dependents?
    </div>
  </div>
</div>

  </div>
  </div>
  </div>
            </div>
            </div>
            </div>
            </div>
            </div>
  )
};
export default Support;

