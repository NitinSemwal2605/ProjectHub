import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let period = '';

    if (!is24Hour) { // 12-hour format
      period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
    }

    const pad = (num) => num.toString().padStart(2, '0'); // Ensure two digits
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${period}`; // Include period if 12-hour format
  };

  return (
    <div className="bg-black text-green-400 min-h-[80vh] flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold mb-6">Digital Clock</h2>
      <div className="text-6xl font-mono mb-8">{formatTime(time)}</div>

      <button
        onClick={() => setIs24Hour(!is24Hour)}
        className="px-4 py-2 rounded-lg font-semibold bg-green-500 text-black hover:bg-green-400"
      >
        Switch to {is24Hour ? '12-hour' : '24-hour'}
      </button>
    </div>
  );
}
