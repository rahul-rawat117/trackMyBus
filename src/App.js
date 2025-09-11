import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import Commuter from './pages/Commuter';
import Driver from './pages/Driver';
import Admin from './pages/Admin';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/commuter" element={<Commuter />} />
              <Route path="/login/driver" element={<Login role="driver" />} />
              <Route path="/login/admin" element={<Login role="admin" />} />
              <Route path="/driver" element={
                <ProtectedRoute requiredRole="driver">
                  <Driver />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute requiredRole="admin">
                  <Admin />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;