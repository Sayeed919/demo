/*import React, { useState } from 'react';
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

export default FAQs;*/

import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const FAQs = () => {
  const [answersVisible, setAnswersVisible] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [faqType, setFaqType] = useState('doctor');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Data for doctor FAQs
  const [doctorFAQs, setDoctorFAQs] = useState([
   
    {
      id: 'doctor-question2',
      question: 'How do I register as a doctor?',
      answer: 'To register as a doctor, please visit our registration page and fill out the necessary information.'
    },
    // Other doctor FAQs...
  ]);

  // Data for patient FAQs
  const [patientFAQs, setPatientFAQs] = useState([
    {
      id: 'patient-question1',
      question: 'How do I make an appointment?',
      answer: 'To make an appointment, please log in to your patient account and choose an available time slot from the schedule.'
    },
    // Other patient FAQs...
  ]);

  const toggleAnswer = (questionId) => {
    setAnswersVisible((prevAnswersVisible) => ({
      ...prevAnswersVisible,
      [questionId]: !prevAnswersVisible[questionId],
    }));
  };

  const renderFAQs = (faqs) => {
    const handleDeleteFAQ = (id) => {
      if (faqType === 'doctor') {
        setDoctorFAQs(doctorFAQs.filter(faq => faq.id !== id));
      } else {
        setPatientFAQs(patientFAQs.filter(faq => faq.id !== id));
      }
    };
  
    return faqs.map((faq) => (
      <div className="faq-box" key={faq.id} style={{ marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px',marginLeft:'-60px' }}>
        <div className="faq-question" onClick={() => toggleAnswer(faq.id)}>
          {faq.question}
          <span className="toggle-icon">{answersVisible[faq.id] ? '▼' : '►'}</span>
          <FaTrash onClick={() => handleDeleteFAQ(faq.id)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
        </div>
        <div id={faq.id + '-answer'} className="faq-answer" style={{ display: answersVisible[faq.id] ? 'block' : 'none' }}>
          {faq.answer}
        </div>
      </div>
    ));
  };
  

  const handleAddFAQ = () => {
    // Add FAQ based on selected type (doctor/patient)
    const newFAQ = { id: ${faqType}-question${faqType === 'doctor' ? doctorFAQs.length + 1 : patientFAQs.length + 1}, question, answer };
    if (faqType === 'doctor') {
      setDoctorFAQs([...doctorFAQs, newFAQ]);
    } else {
      setPatientFAQs([...patientFAQs, newFAQ]);
    }
    setModalOpen(false);
    setQuestion('');
    setAnswer('');
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
              <button type="button" className="btn btn-primary" onClick={() => setModalOpen(true)}>+ Add FAQs</button>
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
                {renderFAQs(doctorFAQs)}
              </div>

              <div className="tab-pane fade" id="patient" role="tabpanel" aria-labelledby="patient-tab">
                {renderFAQs(patientFAQs)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add FAQ Modal */}
      {modalOpen && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
          <div className="modal-dialog" style={{ maxWidth: '600px', margin: '100px auto' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add FAQ</h5>
                <button type="button" className="btn-close" onClick={() => setModalOpen(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="faqType" className="form-label">FAQ Type:</label>
                  <select className="form-select" id="faqType" value={faqType} onChange={(e) => setFaqType(e.target.value)}>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="question" className="form-label">Question:</label>
                  <input type="text" className="form-control" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="answer" className="form-label">Answer:</label>
                  <textarea className="form-control" id="answer" rows="3" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleAddFAQ}>Add FAQ</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQs;
