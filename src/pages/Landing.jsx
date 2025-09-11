import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../components/Logo';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'GPS Tracking',
      description: 'Real-time location updates every 3 seconds with 99.9% accuracy',
      delay: '0.1s'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Accurate ETAs',
      description: 'AI-powered predictions based on traffic, weather, and historical data',
      delay: '0.2s'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'Route Planning',
      description: 'Smart algorithms find the fastest routes with minimal transfers',
      delay: '0.3s'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Low Data Mode',
      description: 'Works on 2G networks with optimized data usage under 1MB/hour',
      delay: '0.4s'
    }
  ];

  const floatingIcons = [
    { icon: 'directions_bus', top: '10%', left: '10%', delay: '0s' },
    { icon: 'map', top: '20%', right: '15%', delay: '2s' },
    { icon: 'schedule', bottom: '30%', left: '8%', delay: '4s' },
    { icon: 'location_on', bottom: '15%', right: '12%', delay: '1s' },
    { icon: 'bus_alert', top: '60%', left: '5%', delay: '3s' },
    { icon: 'phone_android', top: '40%', right: '8%', delay: '5s' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden pt-16 transition-colors duration-500">
      {/* Floating animated icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              animationDelay: item.delay,
              animationDuration: `${8 + index}s`
            }}
          >
            <span className="material-icons text-4xl">{item.icon}</span>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          {/* Enhanced Hero Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            <div className="mb-16">
              <div className="flex justify-center mb-10 animate-bounce-in" style={{animationDelay: '0.5s'}}>
                <Logo size="2xl" className="drop-shadow-2xl" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black gradient-text-hero mb-10 animate-fade-in leading-tight" style={{animationDelay: '0.7s'}}>
                TrackMyBus
              </h1>
              <div className="relative max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-900 dark:text-white mb-8 animate-fade-in font-semibold leading-relaxed" style={{animationDelay: '0.9s'}}>
                  Never miss your bus again with <span className="gradient-text-primary font-bold">real-time tracking</span> and smart notifications
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-16 animate-fade-in font-medium" style={{animationDelay: '1.1s'}}>
                  Smart • Reliable • Always On Time
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Role Selection Cards */}
          <div className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '1.3s'}}>
            <Link to="/commuter" className="group relative glass-card p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift border border-white/30 dark:border-gray-700/50">
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 animate-bounce-in shadow-lg" style={{animationDelay: '1.5s'}}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 gradient-text-primary">
                  I'm a Passenger
                </h3>
                <div className="flex flex-wrap gap-1 mb-3 justify-center">
                  <span className="badge-blue px-2 py-1 rounded-full text-xs">Route Planning</span>
                  <span className="badge-blue px-2 py-1 rounded-full text-xs">Live Tracking</span>
                </div>
                <div className="btn-primary px-4 py-2 rounded-md font-bold text-xs group-hover:scale-105 transition-transform inline-block">
                  Start Tracking →
                </div>
              </div>
            </Link>
            
            <Link to="/login/driver" className="group relative glass-card p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift border border-white/30 dark:border-gray-700/50">
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 animate-bounce-in shadow-lg" style={{animationDelay: '1.7s'}}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  I'm a Driver
                </h3>
                <p className="text-medium-contrast mb-3 leading-relaxed text-xs font-medium">
                  Manage trips and share location with passengers in real-time
                </p>
                <div className="flex flex-wrap gap-1 mb-3 justify-center">
                  <span className="badge-blue px-2 py-1 rounded-full text-xs">Trip Management</span>
                  <span className="badge-blue px-2 py-1 rounded-full text-xs">Location Sharing</span>
                </div>
                <div className="mb-3 flex items-center justify-center">
                  <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-bold shadow">
                    <span className="material-icons text-xs mr-1">lock</span> Login
                  </span>
                </div>
                <div className="btn-primary px-4 py-2 rounded-md font-bold text-xs group-hover:scale-105 transition-transform inline-block">
                  Dashboard →
                </div>
              </div>
            </Link>
            
            <Link to="/login/admin" className="group relative glass-card p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift border border-white/30 dark:border-gray-700/50">
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 animate-bounce-in shadow-lg" style={{animationDelay: '1.9s'}}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  I'm an Admin
                </h3>
                <p className="text-medium-contrast mb-3 leading-relaxed text-xs font-medium">
                  Monitor fleet operations and view comprehensive analytics
                </p>
                <div className="flex flex-wrap gap-1 mb-3 justify-center">
                  <span className="badge-blue px-2 py-1 rounded-full text-xs">Fleet Monitoring</span>
                  <span className="badge-blue px-2 py-1 rounded-full text-xs">Analytics</span>
                </div>
                <div className="mb-3 flex items-center justify-center">
                  <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-bold shadow">
                    <span className="material-icons text-xs mr-1">lock</span> Login
                  </span>
                </div>
                <div className="btn-primary px-4 py-2 rounded-md font-bold text-xs group-hover:scale-105 transition-transform inline-block">
                  Admin Panel →
                </div>
              </div>
            </Link>
          </div>
          
          {/* Enhanced Features Section with diagonal divider */}
          <div className={`mt-32 diagonal-divider transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '2.1s'}}>
            <div className="glass-section p-8 rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/50 max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black mb-8 gradient-text-hero">
                Why Choose TrackMyBus?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-2xl glass-card hover:glass-section transition-all duration-500 hover-lift animate-fade-in group shadow-lg"
                    style={{animationDelay: feature.delay}}
                  >
                    <div className="text-blue-500 dark:text-blue-400 animate-float group-hover:scale-110 transition-transform flex-shrink-0" style={{animationDelay: `${index * 0.5}s`}}>
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {feature.icon.props.children}
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-lg md:text-xl text-high-contrast mb-2">{feature.title}</h4>
                      <p className="text-medium-contrast leading-relaxed text-sm font-medium">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className={`mt-24 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '2.5s'}}>
            <div className="glass-section p-8 rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/50 max-w-7xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-black mb-4 gradient-text-hero">Ready to Transform Your Commute?</h3>
              <p className="text-base md:text-lg mb-6 text-medium-contrast font-medium leading-relaxed max-w-2xl mx-auto">Join thousands of users already tracking their buses in real-time with 99.9% accuracy</p>
              <Link 
                to="/commuter" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-base hover:bg-gray-100 transition-all duration-300 hover-lift shadow-xl"
              >
                Start Tracking Now <span className="material-icons ml-2 text-base">rocket_launch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="mt-32 glass-section border-t border-white/30 dark:border-gray-700/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Logo size="sm" />
                <h3 className="text-2xl font-bold gradient-text-primary">TrackMyBus</h3>
              </div>
              <p className="text-medium-contrast font-medium leading-relaxed">Never miss your bus again with real-time tracking and smart notifications.</p>
            </div>
            <div>
              <h4 className="font-bold text-high-contrast mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-medium-contrast font-medium">
                <li><a href="#about" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
                <li><a href="#support" className="hover:text-blue-600 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-high-contrast mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-medium-contrast font-medium">
                <li><a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                <li><a href="#cookies" className="hover:text-blue-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-high-contrast mb-6 text-lg">Connect With Us</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
              <p className="text-medium-contrast font-medium">
                <span className="material-icons text-sm mr-1">email</span> hello@trackmybus.com<br/>
                <span className="material-icons text-sm mr-1">phone</span> +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 dark:border-gray-700/50 mt-12 pt-8 text-center text-medium-contrast">
            <p className="font-medium">&copy; 2025 TrackMyBus. Built with <span className="material-icons text-sm text-red-500">favorite</span> for SIH 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;