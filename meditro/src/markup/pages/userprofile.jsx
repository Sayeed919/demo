// import React from 'react';

// const UserProfile = ({ user }) => {
//   return (
//     <div className="user-profile">
//       <div className="profile-header">
//         <img src={user.avatar} alt="User Avatar" className="avatar" />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//       <div className="profile-details">
//         <h3>About Me</h3>
//         <p>{user.bio}</p>
//         <h3>Contact Information</h3>
//         <p>Email: {user.email}</p>
//         <p>Phone: {user.phone}</p>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;









import React from 'react';
import profileIcon from '../../images/profile-icon.png';

const UserProfile = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={profileIcon} alt='Profile' style={{ width: '20px', height: '20px', marginTop: '-4px' }} />
      <span style={{ marginLeft: '5px', marginTop: '-1px' }}>Profile</span>
    </div>
  );
};

export default UserProfile;

