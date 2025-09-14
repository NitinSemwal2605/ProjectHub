import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let period = '';

    if (!is24Hour) {
      period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
    }

    const pad = (num) => num.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${period}`;
  };

  return (
    <div className={`${darkMode ? 'bg-black text-green-400' : 'bg-green-50 text-black'} min-h-[80vh] flex flex-col items-center justify-center p-6`}>
      <h2 className="text-4xl font-bold mb-6">Digital Clock</h2>
      <div className="text-6xl font-mono mb-8">{formatTime(time)}</div>

      <div className="flex gap-4">
        <button
          onClick={() => setIs24Hour(!is24Hour)}
          className={`px-4 py-2 rounded-lg font-semibold ${darkMode ? 'bg-green-500 text-black hover:bg-green-400' : 'bg-black text-green-400 hover:bg-green-700'}`}
        >
          Switch to {is24Hour ? '12-hour' : '24-hour'}
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-lg font-semibold ${darkMode ? 'bg-green-500 text-black hover:bg-green-400' : 'bg-black text-green-400 hover:bg-green-700'}`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}
