import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { MatrixBackground } from '../components/ui/MatrixBackground';

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
  setUsername: (value: string) => void;
}

export const Login = ({ setIsLoggedIn, setUsername }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && usernameInput) {
      setIsLoggedIn(true);
      setUsername(usernameInput);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 relative overflow-hidden flex items-center justify-center">
      <MatrixBackground />
      
      <div className="relative z-10 w-full max-w-md p-8">
        <div className="glass rounded-2xl p-8 border border-navy-700">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center">
              <div className="w-4 h-4 bg-navy-900 rounded-sm" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              FinVerse
            </span>
          </div>

          <h1 className="text-2xl font-bold text-white text-center mb-8">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="w-full px-4 py-3 bg-navy-800 border border-navy-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-navy-800 border border-navy-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-navy-800 border border-navy-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                placeholder="Enter your password"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};