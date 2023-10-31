import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const timerRef = React.useRef<number>();

  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = window.setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  const formatTime = (time: number): string => {
    const hours: number = Math.floor(time / 3600);
    const minutes: number = Math.floor((time % 3600) / 60);
    const seconds: number = time % 60;

    const formattedTime: string = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  const handleToggle = () => {
    setIsTimerRunning((prevIsTimerRunning) => !prevIsTimerRunning);
  };

  return (
    <div className="work-board">
      <h2>Current Time Elapsed</h2>
      <div className='timer'>
      <p>{formatTime(timer)}</p>
        <button onClick={handleToggle}>{isTimerRunning ? 'Pause Timer' : 'Resume Timer'}</button>
      </div>
      <div className="work-tiles">
        <div className="tile">
          <h3>Total Hours Worked This Week</h3>
          <p>7 hours</p>
        </div>
        <div className="tile">
          <h3>Total Hours Worked This Month</h3>
          <p>35 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
