import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DataModeContext = createContext();

export const useDataMode = () => {
  const context = useContext(DataModeContext);
  if (!context) {
    throw new Error('useDataMode must be used within a DataModeProvider');
  }
  return context;
};

export const DataModeProvider = ({ children }) => {
  const [lowDataMode, setLowDataMode] = useState(() => {
    const saved = localStorage.getItem('lowDataMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('lowDataMode', JSON.stringify(lowDataMode));
  }, [lowDataMode]);

  const toggleDataMode = () => {
    setLowDataMode(prev => !prev);
  };

  return (
    <DataModeContext.Provider value={{ lowDataMode, toggleDataMode }}>
      {children}
    </DataModeContext.Provider>
  );
};

DataModeProvider.propTypes = {
  children: PropTypes.node.isRequired
};