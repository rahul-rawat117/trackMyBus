import { useState } from 'react';
import RouteSearch from '../components/RouteSearch';
import BusSearch from '../components/BusSearch';
import BusTracker from '../components/BusTracker';
import BusQueue from '../components/BusQueue';
import { busRoutes, buses, busStops } from '../data/mockData';

const Commuter = () => {
  const [activeTab, setActiveTab] = useState('route-search');
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [trackingMode, setTrackingMode] = useState(false);

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
    setActiveTab('bus-queue');
  };

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    setSelectedRoute(busRoutes.find(r => r.id === bus.routeId));
    setTrackingMode(true);
    setActiveTab('live-tracking');
  };

  const tabs = [
    { id: 'route-search', name: 'Plan Journey', icon: 'map' },
    { id: 'bus-search', name: 'Find Bus', icon: 'directions_bus' },
    { id: 'bus-queue', name: 'Bus Queue', icon: 'schedule' },
    { id: 'live-tracking', name: 'Live Tracking', icon: 'location_on' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-500">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-4 pt-20">
        {/* Header */}
        <div className="mb-4 text-center animate-slide-in-up">
          <div className="text-3xl mb-2 animate-bounce-in"><span className="material-icons text-3xl text-blue-600">directions_bus</span></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">Bus Tracker</h1>
          <p className="text-sm text-gray-600">Track your bus in real-time, just like food delivery!</p>
        </div>

        {/* Live Tracking Banner */}
        {trackingMode && selectedBus && (
          <div className="mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white p-3 rounded-xl shadow-xl animate-slide-in-up border border-white/20 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                <div>
                  <h3 className="font-bold text-sm">Tracking: {selectedBus.number}</h3>
                  <p className="text-blue-100 text-xs">
                    {selectedRoute?.name} • ETA: {selectedBus.eta} • Next: {selectedBus.nextStop}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setTrackingMode(false)}
                className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition-all duration-300 transform hover:scale-105 text-xs font-medium"
              >
                Stop Tracking
              </button>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="bg-white/60 backdrop-blur-xl rounded-xl p-1 shadow-xl border border-white/20">
            <nav className="flex space-x-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-3 rounded-lg font-medium text-xs whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                  }`}
                >
                  <span className="material-icons text-sm mr-1">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {activeTab === 'route-search' && (
          <div className="grid lg:grid-cols-3 gap-4 animate-slide-in-up">
            <div className="lg:col-span-2">
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <RouteSearch onRouteSelect={handleRouteSelect} />
              </div>
            </div>
            <div className="space-y-3">
              {/* Quick Stats */}
              <div className="bg-white/60 backdrop-blur-xl p-3 rounded-xl shadow-xl border border-white/20 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <h3 className="text-sm font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quick Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <span className="text-gray-600 text-sm">Total Routes:</span>
                    <span className="font-bold text-blue-600">{busRoutes.length}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <span className="text-gray-600 text-sm">Active Buses:</span>
                    <span className="font-bold text-green-600">{buses.filter(b => b.status === 'Running').length}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <span className="text-gray-600 text-sm">Bus Stops:</span>
                    <span className="font-bold text-purple-600">{busStops.length}</span>
                  </div>
                </div>
              </div>

              {/* Popular Routes */}
              <div className="bg-white/60 backdrop-blur-xl p-3 rounded-xl shadow-xl border border-white/20 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-sm font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Popular Routes</h3>
                <div className="space-y-2">
                  {busRoutes.slice(0, 3).map((route, index) => (
                    <div key={route.id} className="flex items-center justify-between p-2 hover:bg-white/50 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 animate-fade-in"
                         onClick={() => handleRouteSelect(route)}
                         style={{animationDelay: `${0.1 * index}s`}}>
                      <div>
                        <div className="font-bold text-sm" style={{ color: route.color }}>{route.name}</div>
                        <div className="text-xs text-gray-500">{route.from} → {route.to}</div>
                      </div>
                      <div className="text-lg text-gray-400 animate-float"><span className="material-icons">arrow_forward</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bus-search' && (
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <BusSearch onBusSelect={handleBusSelect} />
            </div>
            <div className="space-y-3">
              {/* Search Tips */}
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h3 className="text-sm font-semibold mb-2 text-blue-800">Search Tips</h3>
                <ul className="space-y-1 text-xs text-blue-700">
                  <li>• Search by bus number (e.g., DL-1PC-0101)</li>
                  <li>• Search by driver name</li>
                  <li>• Filter by specific routes</li>
                  <li>• Check queue position</li>
                </ul>
              </div>

              {/* Recent Searches */}
              <div className="bg-white p-3 rounded-lg shadow">
                <h3 className="text-sm font-semibold mb-2">Recent Searches</h3>
                <div className="space-y-1">
                  <div className="text-xs text-gray-600 p-1 bg-gray-50 rounded">DL-1PC-0101</div>
                  <div className="text-xs text-gray-600 p-1 bg-gray-50 rounded">Route 202 - Blue Line</div>
                  <div className="text-xs text-gray-600 p-1 bg-gray-50 rounded">Rajesh Kumar</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bus-queue' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BusQueue routeId={selectedRoute?.id} onBusSelect={handleBusSelect} />
            </div>
            <div className="space-y-6">
              {selectedRoute && (
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: selectedRoute.color }}>
                    {selectedRoute.name}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Route:</span>
                      <span className="font-medium">{selectedRoute.from} → {selectedRoute.to}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distance:</span>
                      <span className="font-medium">{selectedRoute.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fare:</span>
                      <span className="font-medium">₹{selectedRoute.fare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium">{selectedRoute.frequency}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-4 text-green-800">How it works</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Buses are shown in arrival order</li>
                  <li>• Real-time ETA updates</li>
                  <li>• Occupancy levels displayed</li>
                  <li>• Click any bus to track live</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'live-tracking' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Live Bus Tracking</h2>
                  {selectedBus && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live</span>
                    </div>
                  )}
                </div>
                <BusTracker 
                  selectedBus={selectedBus} 
                  route={selectedRoute} 
                  stops={busStops}
                  onBusSelect={handleBusSelect}
                />
              </div>
            </div>
            
            <div className="space-y-6">
              {selectedBus && (
                <>
                  {/* Bus Details Card */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Bus Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bus Number:</span>
                        <span className="font-bold">{selectedBus.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Driver:</span>
                        <span className="font-medium">{selectedBus.driver}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`font-medium ${
                          selectedBus.status === 'Running' ? 'text-green-600' : 'text-red-600'
                        }`}>{selectedBus.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Speed:</span>
                        <span className="font-medium">{selectedBus.speed} km/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Stop:</span>
                        <span className="font-medium">{selectedBus.nextStop}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ETA:</span>
                        <span className="font-bold text-blue-600">{selectedBus.eta}</span>
                      </div>
                    </div>
                  </div>

                  {/* Occupancy Card */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Occupancy</h3>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-gray-800">
                        {Math.round((selectedBus.passengers / selectedBus.capacity) * 100)}%
                      </div>
                      <div className="text-sm text-gray-600">
                        {selectedBus.passengers} of {selectedBus.capacity} seats
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                        style={{ width: `${(selectedBus.passengers / selectedBus.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h3 className="text-lg font-semibold mb-4 text-red-800">Emergency Contact</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-red-600">Driver Phone:</span>
                        <a href={`tel:${selectedBus.phone}`} className="font-medium text-red-800 hover:underline">
                          {selectedBus.phone}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-red-600">Control Room:</span>
                        <a href="tel:+91-1800-123-456" className="font-medium text-red-800 hover:underline">
                          1800-123-456
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Commuter;