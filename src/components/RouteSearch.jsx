import React, { useState } from 'react';
import { busRoutes, busStops } from '../data/mockData';

const RouteSearch = ({ onRouteSelect }) => {
  const [fromStop, setFromStop] = useState('');
  const [toStop, setToStop] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (!fromStop || !toStop) return;

    const fromStopObj = busStops.find(stop => stop.id === parseInt(fromStop));
    const toStopObj = busStops.find(stop => stop.id === parseInt(toStop));

    if (!fromStopObj || !toStopObj) return;

    // Find routes that connect these stops
    const possibleRoutes = busRoutes.filter(route => {
      const fromIndex = route.stops.indexOf(parseInt(fromStop));
      const toIndex = route.stops.indexOf(parseInt(toStop));
      return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
    });

    // Calculate estimated travel time and fare
    const results = possibleRoutes.map(route => {
      const fromIndex = route.stops.indexOf(parseInt(fromStop));
      const toIndex = route.stops.indexOf(parseInt(toStop));
      const stopsCount = toIndex - fromIndex;
      const estimatedTime = Math.round(stopsCount * 8 + Math.random() * 10); // 8 mins per stop + random
      const estimatedFare = Math.round(route.fare * (stopsCount / route.stops.length));

      return {
        ...route,
        fromStop: fromStopObj.name,
        toStop: toStopObj.name,
        estimatedTime,
        estimatedFare,
        stopsCount
      };
    });

    setSearchResults(results);
  };

  const handleRouteSelect = (route) => {
    onRouteSelect(route);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Plan Your Journey</h2>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <select
            value={fromStop}
            onChange={(e) => setFromStop(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select starting point</option>
            {busStops.map(stop => (
              <option key={stop.id} value={stop.id}>{stop.name}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <select
            value={toStop}
            onChange={(e) => setToStop(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select destination</option>
            {busStops.map(stop => (
              <option key={stop.id} value={stop.id}>{stop.name}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSearch}
        disabled={!fromStop || !toStop}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Search Routes
      </button>

      {searchResults.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Available Routes</h3>
          <div className="space-y-4">
            {searchResults.map(route => (
              <div
                key={route.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleRouteSelect(route)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-lg" style={{ color: route.color }}>
                      {route.name}
                    </h4>
                    <p className="text-gray-600">
                      {route.fromStop} → {route.toStop}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">₹{route.estimatedFare}</div>
                    <div className="text-sm text-gray-500">Estimated fare</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <div className="font-semibold">{route.estimatedTime} mins</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Stops:</span>
                    <div className="font-semibold">{route.stopsCount} stops</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Frequency:</span>
                    <div className="font-semibold">{route.frequency}</div>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Live Buses →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchResults.length === 0 && fromStop && toStop && (
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800">
            No direct routes found between these stops. Try selecting different stops or check for connecting routes.
          </p>
        </div>
      )}
    </div>
  );
};

export default RouteSearch;