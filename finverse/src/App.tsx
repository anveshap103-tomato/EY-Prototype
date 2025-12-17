import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { AdminDashboard } from './pages/AdminDashboard';
import { PersonalFinance } from './pages/PersonalFinance';
import { IndustriesPage } from './pages/IndustriesPage';
import { LearnPage } from './pages/LearnPage';
import { CompanyPage } from './pages/CompanyPage';
import { AICoachPage } from './pages/AICoachPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || '';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
    localStorage.setItem('username', username);
  }, [isLoggedIn, username]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/personal-finance" element={<PersonalFinance />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/ai-coach" element={<AICoachPage />} />
      </Routes>
    </Router>
  );
}

export default App;
