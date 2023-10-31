import "./App.css";
import Timer from "./component/Timer/timer";
import  { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [isWorking, setIsWorking] = useState(false);
  const handleStartWork = () => {

   if (userName.trim() !== '') {
      setIsWorking(true);
    }
  };
  return (
    
    <div className="main">
      {!isWorking ? (
      <div className="container">
        <div className="container-box">
          <h4>Start your work</h4>
          <form>
            <div className="input-value">
              <input type="text" id="name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
              <label htmlFor="name">Name</label>
            </div>
            <div className="button-section">
              <button className="submit-button" onClick={handleStartWork}>Start Work</button>
            </div>
          </form>
        </div>
      </div>
       ):( <Timer />)} 
     
    </div>
  );
}

export default App;
