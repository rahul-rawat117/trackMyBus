import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = ({ role }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login({ ...credentials, role });
    
    if (success) {
      navigate(`/${role}`);
    } else {
      setError('Invalid credentials');
    }
  };

  const roleInfo = {
    driver: {
      title: 'Driver Login',
      icon: 'drive_eta',
      subtitle: 'Access your driver dashboard',
      demoCredentials: 'Username: driver123, Password: driver123'
    },
    admin: {
      title: '👨‍💼 Admin Login', 
      subtitle: 'Access administrative panel',
      demoCredentials: 'Username: admin123, Password: admin123'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient flex items-center justify-center px-4 py-8 mt-16 mb-8 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/20 animate-slide-in-up">
        <div className="text-center mb-6">
          <div className="text-4xl mb-3 animate-bounce-in">
            <span className="material-icons text-4xl text-blue-600">{roleInfo[role].icon}</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {roleInfo[role].title}
          </h1>
          <p className="text-gray-600 text-sm">{roleInfo[role].subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/90"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/90"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl animate-bounce-in">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow"
          >
            Login to Dashboard
          </button>
        </form>

        <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-xs text-gray-600 mb-1 font-medium">Demo Credentials:</p>
          <p className="text-xs text-gray-500 font-mono bg-white/50 p-2 rounded">{roleInfo[role].demoCredentials}</p>
        </div>

        <div className="mt-4 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-all duration-300"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;