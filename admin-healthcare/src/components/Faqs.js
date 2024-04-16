import React, { useState } from 'react';
import './Faq.css';

const FAQs = () => {
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
          <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginLeft: '-10px' }}>Frequently Asked Questions(FAQs)</h3>
        </div>
        <div className="container">
          <div className="row justify-content-end pt-3">
            <div className="col-auto ">
              <button type="button" className="btn btn-primary">+ Add FAQs</button>
            </div>
          </div>
          
          <div className="container-fluid">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="doctor-tab" data-bs-toggle="tab" data-bs-target="#doctor" type="button" role="tab" aria-controls="doctor" aria-selected="true" style={{ fontSize: "18px", marginLeft: "-70px" }}>Doctor</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="patient-tab" data-bs-toggle="tab" data-bs-target="#patient" type="button" role="tab" aria-controls="patient" aria-selected="false" style={{ fontSize: "18px" }}>Patient</button>
              </li>
            </ul>
            <div className="row mt-8" style={{ paddingLeft: "5px", marginTop: "-30px" }}>
            <div className="col">
              <p className="text-left" style={{ fontWeight: 'bold', marginLeft: '-70px' }}>All added FAQs</p>
            </div>
          </div>
            
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="doctor" role="tabpanel" aria-labelledby="doctor-tab">
  <div className="faq-box" style={{ marginLeft: "-30px", marginTop: "30px" }}>
    <div className="faq-question" onClick={() => toggleAnswer('doctor-question1')} style={{ marginLeft: "-40px" }}>
      How do I register as a doctor?
      <span className="toggle-icon">{answersVisible['doctor-question1'] ? '▼' : '►'}</span>
    </div>
    <div id="doctor-question1-answer" className="faq-answer" style={{ marginLeft: "-40px", marginTop: "10px", display: answersVisible['doctor-question1'] ? 'block' : 'none' }}>
      To register as a doctor, please visit our registration page and fill out the necessary information.
    </div>
  </div>

  <div className="faq-question" onClick={() => toggleAnswer('doctor-question2')} style={{ marginLeft: "-70px" }}>
    How do I set up my profile and availability as a doctor?
    <span className="toggle-icon">{answersVisible['doctor-question2'] ? '▼' : '►'}</span>
  </div>
  <div id="doctor-question2-answer" className="faq-answer" style={{ marginLeft: "-70px", marginTop: "10px", display: answersVisible['doctor-question2'] ? 'block' : 'none' }}>
    After registering as a doctor, you'll have access to your profile dashboard, where you can customize your profile information, including your qualifications, areas of expertise, and professional experience. Additionally, you can set your availability for appointments, indicating your preferred consultation hours and days.
  </div>

  <div className="faq-question" onClick={() => toggleAnswer('doctor-question3')} style={{ marginLeft: "-70px", marginTop: "20px" }}>
    What measures do you have in place to ensure patient confidentiality?
    <span className="toggle-icon">{answersVisible['doctor-question3'] ? '▼' : '►'}</span>
  </div>
  <div id="doctor-question3-answer" className="faq-answer" style={{ marginLeft: "-70px", marginTop: "10px", display: answersVisible['doctor-question3'] ? 'block' : 'none' }}>
    Patient confidentiality and privacy are paramount to us. We adhere to strict data protection protocols and comply with all relevant healthcare regulations. Our platform employs secure encryption methods to safeguard patient data, and access to medical records is restricted to authorized healthcare professionals only.
  </div>

  <div className="faq-question" onClick={() => toggleAnswer('doctor-question4')} style={{ marginLeft: "-70px", marginTop: "20px" }}>
    How do I handle emergency cases or urgent patient queries?
    <span className="toggle-icon">{answersVisible['doctor-question4'] ? '▼' : '►'}</span>
  </div>
  <div id="doctor-question4-answer" className="faq-answer" style={{ marginLeft: "-70px", marginTop: "10px", display: answersVisible['doctor-question4'] ? 'block' : 'none' }}>
    In case of emergencies or urgent patient queries, we have established protocols to ensure timely response and appropriate medical assistance. Our platform allows for real-time communication, enabling you to address urgent concerns promptly and provide necessary guidance or referrals as needed.
  </div>
</div>

<div className="tab-pane fade" id="patient" role="tabpanel" aria-labelledby="patient-tab">
  <div className="faq-box" style={{ marginLeft: "-30px", marginTop: "30px" }}>
    <div className="faq-question" onClick={() => toggleAnswer('patient-question1')} style={{ marginLeft: "-40px" }}>
      How do I make an appointment?
      <span className="toggle-icon">{answersVisible['patient-question1'] ? '▼' : '►'}</span>
    </div>
    <div id="patient-question1-answer" className="faq-answer" style={{ marginLeft: "-40px", marginTop: "10px", display: answersVisible['patient-question1'] ? 'block' : 'none' }}>
      To make an appointment, please log in to your patient account and choose an available time slot from the schedule.
    </div>
    
    <div className="faq-question" onClick={() => toggleAnswer('patient-question2')} style={{ marginLeft: "-40px" , marginTop: "20px" }}>
    How do I prepare for a virtual consultation with a healthcare provider?
      <span className="toggle-icon">{answersVisible['patient-question2'] ? '▼' : '►'}</span>
    </div>
    <div id="patient-question1-answer" className="faq-answer" style={{ marginLeft: "-40px", marginTop: "10px", display: answersVisible['patient-question2'] ? 'block' : 'none' }}>
    Before your virtual consultation, ensure that you have a stable internet connection and a device with a camera and microphone, such as a smartphone, tablet, or computer. Find a quiet and well-lit environment for the consultation, and have any relevant medical records or documents handy for reference.
    </div>
    
    <div className="faq-question" onClick={() => toggleAnswer('patient-question3')} style={{ marginLeft: "-40px" , marginTop: "20px" }}>
    Can I choose a specific doctor or specialist for my consultation?
      <span className="toggle-icon">{answersVisible['patient-question3'] ? '▼' : '►'}</span>
    </div>
    <div id="patient-question1-answer" className="faq-answer" style={{ marginLeft: "-40px", marginTop: "10px", display: answersVisible['patient-question3'] ? 'block' : 'none' }}>
    Yes, you have the option to choose a specific doctor or specialist for your consultation based on your preferences and medical needs. Our platform allows you to browse profiles of healthcare providers, including their specialties, qualifications, and patient reviews, to help you make an informed decision.
    </div>

    <div className="faq-question" onClick={() => toggleAnswer('patient-question4')} style={{ marginLeft: "-40px", marginTop: "20px"  }}>
    How do I access my medical records and test results on your platform?
      <span className="toggle-icon">{answersVisible['patient-question4'] ? '▼' : '►'}</span>
    </div>
    <div id="patient-question1-answer" className="faq-answer" style={{ marginLeft: "-40px", marginTop: "10px", display: answersVisible['patient-question4'] ? 'block' : 'none' }}>
    Your medical records and test results are securely stored on our platform, accessible to you through your patient portal. Simply log in to your account to view your medical history, test results, treatment plans, and other relevant information. You can also share your medical records with other healthcare providers as needed.
    </div>


  </div>

</div>
</div>        
              </div>
            </div>
          </div>
        </div>
  );
};

export default FAQs;
