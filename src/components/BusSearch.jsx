import React, { useState } from 'react';
import { buses, busRoutes, busStops, busQueue } from '../data/mockData';

const BusSearch = ({ onBusSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleBusSearch = () => {
    let results = buses;

    // Filter by bus number if search term provided
    if (searchTerm) {
      results = results.filter(bus =>
        bus.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.driver.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by route if selected
    if (selectedRoute) {
      results = results.filter(bus => bus.routeId === parseInt(selectedRoute));
    }

    // Add route information to results
    const enrichedResults = results.map(bus => {
      const route = busRoutes.find(r => r.id === bus.routeId);
      const queue = busQueue[bus.routeId] || [];
      const busInQueue = queue.find(q => q.busId === bus.id);
      
      return {
        ...bus,
        route,
        queuePosition: queue.findIndex(q => q.busId === bus.id) + 1,
        occupancyPercentage: Math.round((bus.passengers / bus.capacity) * 100)
      };
    });

    setSearchResults(enrichedResults);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Running': return 'text-green-600 bg-green-100';
      case 'At Stop': return 'text-blue-600 bg-blue-100';
      case 'Delayed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getOccupancyColor = (percentage) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Your Bus</h2>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bus Number or Driver Name</label>
          <input
            type="text"
            placeholder="e.g., DL-1PC-0101 or Rajesh Kumar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Route (Optional)</label>
          <select
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Routes</option>
            {busRoutes.map(route => (
              <option key={route.id} value={route.id}>{route.name}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleBusSearch}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6"
      >
        Search Buses
      </button>

      {searchResults.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Found {searchResults.length} bus(es)
          </h3>
          
          {searchResults.map(bus => (
            <div
              key={bus.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onBusSelect(bus)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{bus.number}</h4>
                  <p className="text-gray-600" style={{ color: bus.route?.color }}>
                    {bus.route?.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {bus.route?.from} → {bus.route?.to}
                  </p>
                </div>
                
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(bus.status)}`}>
                    {bus.status}
                  </span>
                  <div className="mt-2 text-lg font-bold text-blue-600">
                    ETA: {bus.eta}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <span className="text-gray-500 text-sm">Speed:</span>
                  <div className="font-semibold">{bus.speed} km/h</div>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Next Stop:</span>
                  <div className="font-semibold">{bus.nextStop}</div>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Driver:</span>
                  <div className="font-semibold">{bus.driver}</div>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Queue Position:</span>
                  <div className="font-semibold">#{bus.queuePosition}</div>
                </div>
              </div>

              {/* Occupancy Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Occupancy</span>
                  <span>{bus.passengers}/{bus.capacity} ({bus.occupancyPercentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getOccupancyColor(bus.occupancyPercentage)}`}
                    style={{ width: `${bus.occupancyPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  Last updated: {new Date(bus.lastUpdated).toLocaleTimeString()}
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Track Live →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {searchResults.length === 0 && (searchTerm || selectedRoute) && (
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-600">
            No buses found matching your search criteria. Try different keywords or check all routes.
          </p>
        </div>
      )}
    </div>
  );
};

export default BusSearch;