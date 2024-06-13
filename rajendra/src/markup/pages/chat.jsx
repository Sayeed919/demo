
import React, { useState, useRef } from 'react';

const ChatBox = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const containerStyle = {
    display: 'flex',
    height: 'calc(100vh - 100px)', // Adjusted to ensure proper square box format
    marginTop: '100px',
  };

  const leftBoxStyle = {
    flex: '0 0 20%',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    height: '100%', // Adjusted to ensure proper square box format
    overflowY: 'auto',
  };

  const rightBoxStyle = {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: '20px',
    cursor: 'text',
    position: 'relative', // Added for positioning the input and send button
  };

  const userList = [
    { id: 1, name: 'Ajinkya', profilePhoto: require('../../images/chat/chat6.jpg') },
    { id: 2, name: 'Aditi', profilePhoto: require('../../images/chat/chat7.jpg') },
    { id: 3, name: 'Shruti', profilePhoto: require('../../images/chat/user5.jpg') },
    { id: 4, name: 'Pallavi', profilePhoto: require('../../images/chat/chat7.jpg') },
    { id: 5, name: 'Chetan', profilePhoto: require('../../images/chat/chat6.jpg') },
    { id: 6, name: 'Rutuja', profilePhoto: require('../../images/chat/user5.jpg') },
    { id: 5, name: 'Gouri', profilePhoto: require('../../images/chat/chat7.jpg') },
    { id: 6, name: 'Dnyaneshwari', profilePhoto: require('../../images/chat/user5.jpg') },
    { id: 5, name: 'palle', profilePhoto: require('../../images/chat/chat7.jpg') },
  ];


  const userStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  };

  const profilePhotoStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const updatedMessages = { ...messages };
      if (!updatedMessages[selectedUser.id]) {
        updatedMessages[selectedUser.id] = [];
      }
      updatedMessages[selectedUser.id].push({
        text: inputValue,
        sender: 'me',
      });
      setMessages(updatedMessages);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      handleMessageSend();
    }
  };

  return (
    <div style={containerStyle}>
      <div style={leftBoxStyle}>
        <h3 style={{ marginBottom: '30px', marginTop: '10px', textAlign: 'center' }}>Messages</h3>
        {userList.map((user) => (
          <div key={user.id} style={userStyle} onClick={() => setSelectedUser(user)}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={user.profilePhoto} alt={`${user.name} Profile`} style={profilePhotoStyle} />
              <span>{user.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={rightBoxStyle} onClick={handleInputClick}>
      {selectedUser && (
  <div style={{ width: '800px', margin: '0 auto' }}> 
<div style={{ maxHeight: 'calc(100vh - 170px)', overflowY: 'scroll', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}> 

      <h3 style={{ marginBottom: '30px', marginTop: '20px', fontSize: '20px' }}>Chat with {selectedUser.name}</h3>
      {messages[selectedUser.id] &&
        messages[selectedUser.id].map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: message.sender === 'me' ? 'right' : 'left' }}>
            <div style={{ display: 'inline-block', backgroundColor: message.sender === 'me' ? '#dcf8c6' : '#fff', padding: '10px', borderRadius: '10px', wordWrap: 'break-word', maxWidth: '70%' }}>
              {message.text}
            </div>
          </div>
        ))}
    </div>
            <div style={{ position: 'absolute', bottom: '20px', left: 0, width: '100%', display: 'flex' }}>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                style={{ flex: 1, padding: '10px', marginRight: '10px' }}
                onKeyPress={handleKeyPress}
              />
              <button style={{ width: '100px', borderRadius: '8px', border: 'none', backgroundColor: '#3D3AFF', color: 'white' }} onClick={handleMessageSend}>Send</button>
            </div>
          </div>
        )}
        {!selectedUser && <div>Please select a user to start chatting. </div>}
      </div>
    </div>
  );
};

export default ChatBox;
