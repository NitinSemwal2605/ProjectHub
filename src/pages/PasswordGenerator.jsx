import React, { useState } from 'react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = lower;
    if (useUpper) chars += upper;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    let pw = '';
    for (let i = 0; i < length; i++) {
      pw += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pw);
  };

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-black text-green-400 p-6">
      <h2 className="text-4xl font-bold mb-6">Strong Password Generator</h2>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full px-4 py-2 rounded-md bg-black border border-green-500 text-green-200 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Password length"
          min={4}
          max={64}
        />
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useUpper} onChange={() => setUseUpper(!useUpper)} /> Uppercase
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useNumbers} onChange={() => setUseNumbers(!useNumbers)} /> Numbers
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)} /> Symbols
          </label>
        </div>
        <button onClick={generatePassword} className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400">
          Generate
        </button>

        {password && (
          <div className="flex justify-between items-center mt-4 bg-black border border-green-500 rounded-md p-2">
            <span className="font-mono break-all">{password}</span>
            <button onClick={copyToClipboard} className="px-2 py-1 bg-green-500 text-black rounded-md hover:bg-green-400">
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}