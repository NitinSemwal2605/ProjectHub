import React, { useState, useEffect, useRef } from 'react';

export default function FocusTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 0) {
            if (minutes === 0) {
              clearInterval(intervalRef.current);
              setRunning(false);
              alert('Time is up! ⏰');
              return 0;
            }
            setMinutes((m) => m - 1);
            return 59;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, minutes]);

  const handleReset = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-black text-green-400 p-6">
      <h2 className="text-4xl font-bold mb-6">Focus Countdown Timer ⏳</h2>
      <div className="text-6xl font-mono mb-6">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setRunning(!running)} className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400">
          {running ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset} className="px-4 py-2 bg-black border border-green-500 text-green-400 rounded-lg hover:bg-green-700">
          Reset
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <label>Set Minutes: </label>
        <input
          type="number"
          min={1}
          max={180}
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="w-20 px-2 py-1 bg-black border border-green-500 rounded-md text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
    </div>
  );
}