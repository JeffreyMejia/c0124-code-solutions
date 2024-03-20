import { useState } from 'react';
import './stopwatch.css';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [second, setSecond] = useState(0);
  const [intervalId, setintervalId] = useState<NodeJS.Timeout>();

  const isOn = !!intervalId;

  function handlePlay() {
    const interval = setInterval(() => setSecond((second) => second + 1), 1000);
    setintervalId(interval);
  }

  function handlePause() {
    clearInterval(intervalId);
    setintervalId(undefined);
  }

  function handleNumberClick() {
    if (isOn) return;
    setSecond(0);
  }

  return (
    <div className="stopwatch">
      <div className="stopwatch-face">
        <h1 onClick={handleNumberClick}>{second}</h1>
      </div>
      {isOn ? (
        <FaPause onClick={handlePause} className="pause" />
      ) : (
        <FaPlay onClick={handlePlay} className="play" />
      )}
    </div>
  );
}
