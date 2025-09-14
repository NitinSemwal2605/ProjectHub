import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Clock from "./pages/Clock";
import EmailValidator from "./pages/EmailValidator";
import FocusTimer from "./pages/FocusTimer";
import Home from "./pages/Home";
import PasswordGenerator from "./pages/PasswordGenerator";
import QRGenerator from "./pages/QRGenerator";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-green-400">
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Project Routes (later we’ll add these) */}
            <Route path="/email-validator" element={<EmailValidator />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/gambling" element={<div>Gambling</div>} />
            <Route path="/qr-generator" element={<QRGenerator />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
            <Route path="/focus-timer" element={<FocusTimer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
