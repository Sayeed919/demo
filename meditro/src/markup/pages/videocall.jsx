// import React from 'react';

// const VideoCall = () => {
//   return (
//     <div container>
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
//         {/* Local Video Display */}
//         <div style={{ display: 'flex', justifyContent: 'space-around center', width: '100%', marginBottom: '20px',marginTop:'180px', marginLeft:'130px' }}>
//           <video style={{ width: '45%', border: '1px solid #ccc' }} className="local-video" autoPlay></video>
//           <video style={{ width: '45%', border: '1px solid #ccc', marginLeft:'20px' }} className="remote-video" autoPlay></video>
//         </div>
//       </div>

//       <div container>
//         {/* Remote Video Display */}
//         <div style={{ display: 'flex', justifyContent: 'center',marginTop:'100px' }}>
//           {/* Controls for the video call */}
//           <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }} className="start-call-btn">Start Call</button>
//           <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }} className="mute-audio-btn">Mute Audio</button>
//           <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }} className="mute-video-btn">Mute Video</button>
//           <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'red', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }} className="end-call-btn">End Call</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCall;


import React from 'react';

const VideoCall = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {/* Remote Video Display */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <video style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', zIndex: '1' }} className="remote-video" autoPlay></video>
        {/* Local Video Display */}
        <video style={{ position: 'absolute', bottom: '20px', right: '20px', width: '25%', border: '1px solid #ccc', borderRadius: '8px' }} className="local-video" autoPlay></video>
      </div>

      {/* Controls for the video call */}
      <div style={{ marginTop: '20px' }}>
      <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }} className="mute-audio-btn">Start Call</button>
        <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }} className="mute-audio-btn">Mute Audio</button>
        <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }} className="mute-video-btn">Mute Video</button>
        <button style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'red', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }} className="end-call-btn">End Call</button>
      </div>
    </div>
  );
};

export default VideoCall;
