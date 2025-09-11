import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  
  const isActive = (path) => location.pathname === path;
  
  const getCurrentRole = () => {
    if (location.pathname.startsWith('/commuter')) return 'commuter';
    if (location.pathname.startsWith('/driver')) return 'driver';
    if (location.pathname.startsWith('/admin')) return 'admin';
    return 'landing';
  };
  
  const currentRole = getCurrentRole();
  
  const getNavItems = () => {
    switch (currentRole) {
      case 'commuter':
        return [{ path: '/', label: '← Back to Home', icon: 'home' }];
      case 'driver':
        return [{ path: '/', label: '← Back to Home', icon: 'home' }];
      case 'admin':
        return [{ path: '/', label: '← Back to Home', icon: 'home' }];
      default:
        return [
          { path: '/about', label: 'About', icon: 'info' },
          { path: '/contact', label: 'Contact', icon: 'phone' }
        ];
    }
  };
  
  const navItems = getNavItems();
  
  const getRoleTitle = () => {
    switch (currentRole) {
      case 'commuter': return 'TrackMyBus';
      case 'driver': return 'Driver Dashboard';
      case 'admin': return 'Admin Panel';
      default: return 'TrackMyBus';
    }
  };
  
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-gray-200 dark:border-gray-700 animate-slide-in-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Logo size="sm" />
            <Link to="/" className="text-xl font-bold gradient-text-primary hover:scale-105 transition-transform">
              {getRoleTitle()}
            </Link>
            {currentRole !== 'landing' && (
              <span className="text-gray-600 dark:text-gray-400 text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                {currentRole === 'commuter' && 'Passenger Portal'}
                {currentRole === 'driver' && 'Driver Portal'}
                {currentRole === 'admin' && 'Admin Portal'}
              </span>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 ${
                  isActive(item.path) ? 'bg-gray-100 dark:bg-gray-800 text-blue-600' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="material-icons text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-gray-600 dark:text-gray-400"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {user && (
              <button
                onClick={logout}
                className="btn-primary px-4 py-2 rounded-xl font-medium hover-lift shadow-lg"
              >
                Logout
              </button>
            )}
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;