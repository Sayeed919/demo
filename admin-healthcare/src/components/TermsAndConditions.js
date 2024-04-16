import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './TermsAndConditions.css'; // Import CSS file for styling
import "./Navbar.css";

const TermsAndConditions = () => {
  const [editorContent, setEditorContent] = useState(''); // State to store editor content

  // Function to handle formatting options
  const handleFormat = (format, value) => {
    const editor = document.getElementById('editor');
    const selection = window.getSelection();
  
    // Remove existing formatting
    document.execCommand('removeFormat', false, null);
  
    switch (format) {
      case 'bold':
        // Toggle bold
        editor.style.fontWeight = editor.style.fontWeight === 'bold' ? 'normal' : 'bold';
        break;
      case 'italic':
        // Toggle italic
        editor.style.fontStyle = editor.style.fontStyle === 'italic' ? 'normal' : 'italic';
        break;
      case 'underline':
        // Toggle underline
        editor.style.textDecoration = editor.style.textDecoration === 'underline' ? 'none' : 'underline';
        break;
      case 'justify':
        editor.style.textAlign = 'justify';
        break;
      case 'alignCenter':
        editor.style.textAlign = 'center';
        break;
      case 'alignLeft':
        editor.style.textAlign = 'left';
        break;
      case 'alignRight':
        editor.style.textAlign = 'right';
        break;
        case 'fontname':
          // Apply font family
          editor.style.fontFamily = value;
          break;
        case 'forecolor':
          // Apply font color
          editor.style.color = value;
          break;

    }
  
    editor.focus();
    selection.removeAllRanges();
};


  


  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Here you can save the content, for demonstration, I'll just show a message
    alert('Changes saved');
  };

  // Function to handle canceling changes
  const handleCancel = () => {
    setEditorContent('');
    // Clear any status message
    alert('Changes canceled');
  };

  // Function to focus the editor
  // const focusEditor = () => {
  //   document.getElementById('editor').focus();
  // };

  return (
    <header className="bg-surface-primary border-bottom pt-6">
      <div className="container-fluid">
        <h3 style={{ color: 'blue', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '30px', textAlign: 'left', marginLeft: '-40px', paddingLeft: '10px' }}>Terms And Conditions</h3>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="doctor-tab" data-bs-toggle="tab" data-bs-target="#doctor" type="button" role="tab" aria-controls="doctor" aria-selected="true" style={{ fontSize: "18px", marginLeft: "-26px" }}>Doctor</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="patient-tab" data-bs-toggle="tab" data-bs-target="#patient" type="button" role="tab" aria-controls="patient" aria-selected="false" style={{ fontSize: "18px" }}>Patient</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="doctor" role="tabpanel" aria-labelledby="doctor-tab"></div>
          <div className="tab-pane fade" id="patient" role="tabpanel" aria-labelledby="patient-tab"></div>
        </div>
      </div>
      <div className="container mt-3 pt-4" style={{ marginLeft: '-25px' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group" >
              <label htmlFor="options" >Choose:</label>
              <select className="form-control" id="options">
                <option value="paragraph">Paragraph</option>
                <option value="text">Text</option>
                <option value="longText">Long Text</option>
              </select>
         </div>
         </div>
          <div className="col-md-6 pt-6">
            <div className="form-group toolbar">
              <div className="input-group">
                <span className="input-group-text icon" onClick={() => handleFormat('bold')} data-toggle="tooltip" data-placement="top" title="Bold"><i className="fas fa-bold"></i></span>
                <span className="input-group-text icon" onClick={() => handleFormat('italic')} data-toggle="tooltip" data-placement="top" title="Italic"><i className="fas fa-italic"></i></span>
                <span className="input-group-text icon" onClick={() => handleFormat('underline')} data-toggle="tooltip" data-placement="top" title="Underline"><i className="fas fa-underline"></i></span>
                <span className="input-group-text icon" onClick={() => handleFormat('justify')} data-toggle="tooltip" data-placement="top" title="Justify"><i className="fas fa-align-justify"></i></span>
                <span className="input-group-text icon" onClick={() => handleFormat('alignCenter')} data-toggle="tooltip" data-placement="top" title="Center"><i className="fas fa-align-center"></i></span>
                <span className="input-group-text icon" onClick={() => handleFormat('alignLeft')} data-toggle="tooltip" data-placement="top" title="Left"><i className="fas fa-align-left"></i></span>
                <span className="input-group-text icon" onClick={() => handleFormat('alignRight')} data-toggle="tooltip" data-placement="top" title="Right"><i className="fas fa-align-right"></i></span>
                
                {/* Font family dropdown */}
              
                <select className="form-control"  onChange={(e) => handleFormat('fontname', e.target.value)}>
                  
                <option value ="Helvetica">Helvetica</option>
                  <option value ="Courier New">Courier New</option>
                  <option value="Verdana">Verdana</option>
                  <option value="Times New Roman">Times New Roman</option>
                </select>
                {/* Font color dropdown */}
                <button type="button" className="btn btn-light" onClick={() => document.getElementById('colorPicker').click()}>
        <i className="fas fa-palette" style={{ fontSize: '16px' }}></i>
      </button>
      {/* Font color picker */}
      <input id="colorPicker" type="color" className="form-control d-none" onChange={(e) => handleFormat('forecolor', e.target.value)} />
           
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 pt-3">
            <div id="editor" contentEditable="true" className="form-control editor" onBlur={(e) => setEditorContent(e.target.innerHTML)}>{editorContent}</div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 pt-2">
            <button className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
            <button className="btn no-color" onClick={handleCancel}>Cancel, Go Back</button>
            <span id="statusMessage"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TermsAndConditions;
