import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { AdminDashboard } from './pages/AdminDashboard';
import { PersonalFinance } from './pages/PersonalFinance';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/personal-finance" element={<PersonalFinance />} />
      </Routes>
    </Router>
  );
}

export default App;
