import { Link, useLocation } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useDataMode } from '../context/DataModeContext';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const { lowDataMode, toggleDataMode } = useDataMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;
  
  const currentRole = useMemo(() => {
    if (location.pathname.startsWith('/commuter')) return 'commuter';
    if (location.pathname.startsWith('/driver')) return 'driver';
    if (location.pathname.startsWith('/admin')) return 'admin';
    return 'landing';
  }, [location.pathname]);
  
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
  
  return (
    <nav className="fixed top-0 w-full z-[9999] glass-card border-b border-gray-200 dark:border-gray-700 animate-slide-in-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="hover:scale-105 transition-transform">
              <Logo size="md" className="sm:hidden" />
              <Logo size="lg" className="hidden sm:block lg:hidden" />
              <Logo size="xl" className="hidden lg:block" />
            </Link>

            {currentRole !== 'landing' && (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                  <span className="material-icons text-sm text-blue-600">
                    {currentRole === 'commuter' && 'directions_bus'}
                    {currentRole === 'driver' && 'local_shipping'}
                    {currentRole === 'admin' && 'admin_panel_settings'}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {currentRole === 'commuter' && 'Passenger'}
                    {currentRole === 'driver' && 'Driver'}
                    {currentRole === 'admin' && 'Admin'}
                  </span>
                </div>
                {lowDataMode && (
                  <span className="text-orange-600 text-xs px-2 py-1 bg-orange-50 dark:bg-orange-900/30 rounded-full font-medium border border-orange-200 dark:border-orange-700">
                    Low Data
                  </span>
                )}
              </div>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 ${
                  isActive(item.path) ? 'bg-gray-100 dark:bg-gray-800 text-blue-600' : 'text-readable'
                }`}
              >
                <span className="material-icons text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            
            <button
              onClick={toggleDataMode}
              className={`p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 ${
                lowDataMode ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/30' : 'text-readable'
              }`}
              title={lowDataMode ? 'Low Data Mode ON' : 'Low Data Mode OFF'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </button>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-readable"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
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
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-readable hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600 shadow-lg transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive(item.path) 
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span className="material-icons text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              <div className="flex items-center justify-between px-4 py-3">
                <button
                  onClick={toggleDataMode}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    lowDataMode ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{lowDataMode ? 'Low Data ON' : 'Low Data OFF'}</span>
                </button>
                
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all text-gray-700 dark:text-gray-200"
                >
                  {darkMode ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{darkMode ? 'Light' : 'Dark'}</span>
                </button>
              </div>
              
              {user && (
                <button
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;