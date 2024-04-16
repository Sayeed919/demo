import React, { useEffect } from 'react';

const PrivacyPolicy = () => {

  return (
    <div className="h-screen flex-grow-1 overflow-y-lg-auto">
      <header className="bg-surface-primary border-bottom pt-6">
        <div className="container-fluid">
          <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginTop: '2px', marginLeft:"10px" }}>Privacy Policy</h3>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-auto">
              <button type="button" className="btn btn-light">
                <span className="bi bi-pencil" aria-hidden="true"> Edit </span>
              </button>
            </div>
          </div>
        </div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="doctor-tab" data-bs-toggle="tab" data-bs-target="#doctor" type="button" role="tab" aria-controls="doctor" aria-selected="true" style={{ fontSize: '18px', paddingLeft: '35px' }}>Doctor</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="patient-tab" data-bs-toggle="tab" data-bs-target="#patient" type="button" role="tab" aria-controls="patient" aria-selected="false" style={{ fontSize: '18px' }}>Patient</button>
          </li>
        </ul>
      </header>
      <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active mt-4" id="doctor" role="tabpanel" aria-labelledby="doctor-tab">
        <p style={{ marginLeft: "35px" }}>
          A doctor's privacy policy is a critical component of maintaining trust and confidentiality in the healthcare relationship.
        </p>
        <p style={{ marginLeft: "35px" }}>
          Firstly, it outlines the measures taken to safeguard patients' personal information, ensuring compliance with relevant laws such as the Health Insurance Portability and Accountability Act (HIPAA) in the United States or the General Data Protection Regulation (GDPR) in the European Union. This involves detailing how patient data is collected, stored, accessed, and shared, emphasizing the importance of encryption, access controls, and secure communication channels to prevent unauthorized disclosure.
        </p>
        <p style={{ marginLeft: "35px" }}>
          Secondly, the privacy policy should delineate patients' rights regarding their medical information. This includes their right to access their records, request corrections, and understand how their data is being used for treatment, billing, research, or other purposes. Clear procedures for patients to exercise these rights should be provided, along with information on how complaints or concerns about privacy breaches can be addressed, reinforcing the doctor's commitment to respecting patient autonomy and confidentiality.
        </p>
        <p style={{ marginLeft: "35px" }}>
          Lastly, the privacy policy should clarify the circumstances under which patient information may be disclosed without explicit consent, such as for legal obligations or in emergencies. However, it should also underscore the principle of minimizing such disclosures to the extent necessary, prioritizing patient privacy and confidentiality at all times. Transparent communication about the doctor's privacy practices fosters a trusting relationship between the healthcare provider and their patients, enhancing confidence in the security and integrity of the medical services provided.
        </p>
      </div>
      <div className="tab-pane fade mt-4" id="patient" role="tabpanel" aria-labelledby="patient-tab">
        <p style={{ marginLeft: "35px" }}>
          Patients' privacy policies are essential for safeguarding their personal information and ensuring their trust in the healthcare system.
        </p>
        <p style={{ marginLeft: "35px" }}>
          Firstly, these policies outline the rights patients have regarding the confidentiality and security of their medical data. This includes details on how their information is collected, stored, and used, as well as who has access to it. Patients should be informed about their rights to access their own medical records, request corrections to inaccurate information, and understand how their data is shared with other healthcare providers or third parties.
        </p>
        <p style={{ marginLeft: "35px" }}>
          Secondly, patients' privacy policies should address the measures taken to protect their information from unauthorized access, disclosure, or misuse. This involves implementing robust security protocols such as encryption, access controls, and regular audits to ensure compliance with relevant privacy laws and regulations. Patients should feel confident that their sensitive health information is being handled responsibly and ethically by healthcare providers, with strict adherence to industry best practices for data protection.
        </p>
        <p style={{ marginLeft: "35px" }}>
          Lastly, patients' privacy policies should provide guidance on how patients can exercise their privacy rights and seek recourse in the event of a breach or violation. This includes clear procedures for lodging complaints, reporting incidents, and seeking redress for any harm caused by unauthorized access or disclosure of their medical information. By empowering patients with knowledge and resources to protect their privacy, healthcare providers can strengthen the trust and confidence patients have in the healthcare system, ultimately fostering better communication and collaboration in their healthcare journey.
        </p>
      </div>
    </div>
    </div>

  );
};

export default PrivacyPolicy;
