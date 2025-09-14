import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

const Logo = ({ size = "md", className = "" }) => {
  const { darkMode } = useTheme();
  
  const sizes = {
    sm: "h-8",
    md: "h-12", 
    lg: "h-16",
    xl: "h-24",
    "2xl": "h-32"
  };

  const colorFilter = !darkMode ? "brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(7151%) hue-rotate(222deg) brightness(90%) contrast(138%)" : "none";

  return (
    <img 
      src="/trackmybus-logo3.png" 
      alt="TrackMyBus Logo" 
      className={`${sizes[size]} ${className} object-contain transition-all duration-300`}
      style={{ filter: colorFilter }}
    />
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  className: PropTypes.string
};

export default Logo;