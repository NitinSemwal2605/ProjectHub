import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo'; // or install: npm install react-qrcode-logo

export default function QRGenerator() {
  const [input, setInput] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleGenerate = () => {
    if (input.trim() === '') {
      alert('Please enter some text or URL');
      return;
    }
    setQrValue(input);
  };

  const handleReset = () => {
    setInput('');
    setQrValue('');
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-black text-green-400 p-6">
      <h2 className="text-4xl font-bold mb-6">QR Code Generator</h2>

      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter text or URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-black border border-green-500 text-green-200 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <div className="flex gap-4">
          <button
            onClick={handleGenerate}
            className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400"
          >
            Generate
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-black border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-700"
          >
            Reset
          </button>
        </div>

        {qrValue && (
          <div className="mt-6 p-4 bg-black border border-green-500 rounded-lg">
            <QRCode value={qrValue} size={200} fgColor="#4ade80" bgColor="#000000" />
          </div>
        )}
      </div>
    </div>
  );
}
