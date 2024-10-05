// import React, { useState } from 'react';
// import './Home.css';
// import { useNavigate } from 'react-router-dom';


// function Home() {
    
//   const navigate = useNavigate();

//   // State for each device in different rooms
//   const [currentRoom, setCurrentRoom] = useState('Living Room');
//   const [isLightOn, setIsLightOn] = useState(false);
//   const [isACOn, setIsACOn] = useState(false);
//   const [isTVOn, setIsTVOn] = useState(false);
//   const [isRobotCleanerOn, setIsRobotCleanerOn] = useState(false);
//   const [isOvenOn, setIsOvenOn] = useState(false);
//   const [isKitchenLightOn, setIsKitchenLightOn] = useState(false);
//   const [isKitchenACOn, setIsKitchenACOn] = useState(false);

//   // Toggle functions
//   const toggleLight = () => setIsLightOn(!isLightOn);
//   const toggleAC = () => setIsACOn(!isACOn);
//   const toggleTV = () => setIsTVOn(!isTVOn);
//   const toggleRobotCleaner = () => setIsRobotCleanerOn(!isRobotCleanerOn);
//   const toggleOven = () => setIsOvenOn(!isOvenOn);
//   const toggleKitchenLight = () => setIsKitchenLightOn(!isKitchenLightOn);
//   const toggleKitchenAC = () => setIsKitchenACOn(!isKitchenACOn);

//   // Set current room
//   const setRoom = (room) => {
//     setCurrentRoom(room);
//   };

//   return (
//     <div className="home-container">
//       <nav className="navbar">
//         <button onClick={() => setRoom('Living Room')} className={`nav-btn ${currentRoom === 'Living Room' ? 'active' : ''}`}>Living Room</button>
//         <button onClick={() => setRoom('Kitchen')} className={`nav-btn ${currentRoom === 'Kitchen' ? 'active' : ''}`}>Kitchen</button>
//       </nav>

//       <h1>{currentRoom}</h1>
//       <div className="device-grid">
//         {currentRoom === 'Living Room' && (
//           <>
//             <div className={`device-box ${isLightOn ? 'on' : ''}`}>
//               <h3>Lights</h3>
//               <label className="switch">
//                 <input type="checkbox" checked={isLightOn} onChange={toggleLight} />
//                 <span className="slider round"></span>
//               </label>
//             </div>
//             <div className={`device-box ${isACOn ? 'on' : ''}`}>
//               <h3>AC</h3>
//               <label className="switch">
//                 <input type="checkbox" checked={isACOn} onChange={toggleAC} />
//                 <span className="slider round"></span>
//               </label>
//             </div>
//             <div className={`device-box ${isTVOn ? 'on' : ''}`}>
//               <h3>TV</h3>
//               <label className="switch">
//                 <input type="checkbox" checked={isTVOn} onChange={toggleTV} />
//                 <span className="slider round"></span>
//               </label>
//             </div>
//             <div className={`device-box ${isRobotCleanerOn ? 'on' : ''}`}>
//               <h3>Robot Cleaner</h3>
//               <label className="switch">
//                 <input type="checkbox" checked={isRobotCleanerOn} onChange={toggleRobotCleaner} />
//                 <span className="slider round"></span>
//               </label>
//             </div>
//           </>
//         )}
//         {currentRoom === 'Kitchen' && (
//           <>
//             <div className={`device-box ${isKitchenLightOn ? 'on' : ''}`}>
//               <h3>Kitchen Lights</h3>
//               <label className="switch">
//                 <input type="checkbox" checked={isKitchenLightOn} onChange={toggleKitchenLight} />
//                 <span className="slider round"></span>
//               </label>
//             </div>
//             <div className={`device-box ${isKitchenACOn ? 'on' : ''}`}>
//               <h3>Kitchen AC</h3>
//               <label className="switch">
//                 <input type="checkbox" checked={isKitchenACOn} onChange={toggleKitchenAC} />
//                 <span className="slider round"></span>
//               </label>
//             </div>
//             <div className={`device-box ${isOvenOn ? 'on' : ''}`}>
//               <h3>Oven</h3>
//               <label className="switch">
//                 <input type="checkbox" checked={isOvenOn} onChange={toggleOven} />
//                 <span className="slider round"></span>
//               </label>
//             </div>
//           </>
//         )}
//       </div>

//       <button onClick={() => navigate('/statistics')} className="stats-btn">View Statistics</button>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // State for each device in different rooms
  const [currentRoom, setCurrentRoom] = useState('Living Room');
  const [isLightOn, setIsLightOn] = useState(false);
  const [isACOn, setIsACOn] = useState(false);
  const [isTVOn, setIsTVOn] = useState(false);
  const [isRobotCleanerOn, setIsRobotCleanerOn] = useState(false);
  const [isOvenOn, setIsOvenOn] = useState(false);
  const [isKitchenLightOn, setIsKitchenLightOn] = useState(false);
  const [isKitchenACOn, setIsKitchenACOn] = useState(false);
  const [isCorridorLightOn, setIsCorridorLightOn] = useState(false); // New state for corridor light

  // Toggle functions
  const toggleLight = () => setIsLightOn(!isLightOn);
  const toggleAC = () => setIsACOn(!isACOn);
  const toggleTV = () => setIsTVOn(!isTVOn);
  const toggleRobotCleaner = () => setIsRobotCleanerOn(!isRobotCleanerOn);
  const toggleOven = () => setIsOvenOn(!isOvenOn);
  const toggleKitchenLight = () => setIsKitchenLightOn(!isKitchenLightOn);
  const toggleKitchenAC = () => setIsKitchenACOn(!isKitchenACOn);
  const toggleCorridorLight = () => setIsCorridorLightOn(!isCorridorLightOn); // New toggle for corridor light

  // Set current room
  const setRoom = (room) => {
    setCurrentRoom(room);
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <button onClick={() => setRoom('Living Room')} className={`nav-btn ${currentRoom === 'Living Room' ? 'active' : ''}`}>Living Room</button>
        <button onClick={() => setRoom('Kitchen')} className={`nav-btn ${currentRoom === 'Kitchen' ? 'active' : ''}`}>Kitchen</button>
        <button onClick={() => setRoom('Corridor')} className={`nav-btn ${currentRoom === 'Corridor' ? 'active' : ''}`}>Corridor</button> {/* New button for Corridor */}
      </nav>

      <h1>{currentRoom}</h1>
      <div className="device-grid">
        {currentRoom === 'Living Room' && (
          <>
            <div className={`device-box ${isLightOn ? 'on' : ''}`}>
              <h3>Lights</h3>
              <label className="switch">
                <input type="checkbox" checked={isLightOn} onChange={toggleLight} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className={`device-box ${isACOn ? 'on' : ''}`}>
              <h3>AC</h3>
              <label className="switch">
                <input type="checkbox" checked={isACOn} onChange={toggleAC} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className={`device-box ${isTVOn ? 'on' : ''}`}>
              <h3>TV</h3>
              <label className="switch">
                <input type="checkbox" checked={isTVOn} onChange={toggleTV} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className={`device-box ${isRobotCleanerOn ? 'on' : ''}`}>
              <h3>Robot Cleaner</h3>
              <label className="switch">
                <input type="checkbox" checked={isRobotCleanerOn} onChange={toggleRobotCleaner} />
                <span className="slider round"></span>
              </label>
            </div>
          </>
        )}
        {currentRoom === 'Kitchen' && (
          <>
            <div className={`device-box ${isKitchenLightOn ? 'on' : ''}`}>
              <h3>Kitchen Lights</h3>
              <label className="switch">
                <input type="checkbox" checked={isKitchenLightOn} onChange={toggleKitchenLight} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className={`device-box ${isKitchenACOn ? 'on' : ''}`}>
              <h3>Kitchen AC</h3>
              <label className="switch">
                <input type="checkbox" checked={isKitchenACOn} onChange={toggleKitchenAC} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className={`device-box ${isOvenOn ? 'on' : ''}`}>
              <h3>Oven</h3>
              <label className="switch">
                <input type="checkbox" checked={isOvenOn} onChange={toggleOven} />
                <span className="slider round"></span>
              </label>
            </div>
          </>
        )}
        {currentRoom === 'Corridor' && (  // New section for Corridor devices
          <>
            <div className={`device-box ${isCorridorLightOn ? 'on' : ''}`}>
              <h3>Corridor Lights</h3>
              <label className="switch">
                <input type="checkbox" checked={isCorridorLightOn} onChange={toggleCorridorLight} />
                <span className="slider round"></span>
              </label>
            </div>
          </>
        )}
      </div>

      <button onClick={() => navigate('/statistics')} className="stats-btn">View Statistics</button>
    </div>
  );
}

export default Home;
