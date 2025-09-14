import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    const { username, password, role } = credentials;
    
    // Mock authentication - replace with real API
    const validCredentials = {
      driver: { username: process.env.REACT_APP_DRIVER_USERNAME || 'driver123', password: process.env.REACT_APP_DRIVER_PASSWORD || 'driver123' },
      admin: { username: process.env.REACT_APP_ADMIN_USERNAME || 'admin123', password: process.env.REACT_APP_ADMIN_PASSWORD || 'admin123' }
    };

    if (validCredentials[role] && 
        validCredentials[role].username === username && 
        validCredentials[role].password === password) {
      const userData = { username, role };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Check for existing session on app load
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};