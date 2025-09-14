import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { busQueue, buses, busRoutes } from '../data/mockData';
import { t } from '../utils/i18n';

const BusQueue = ({ routeId, onBusSelect }) => {
  const [selectedRoute, setSelectedRoute] = useState(routeId || '');
  
  const route = busRoutes.find(r => r.id === parseInt(selectedRoute));
  const queueData = busQueue[selectedRoute] || [];
  
  // Get detailed bus information for queue
  const queueWithDetails = queueData.map(queueItem => {
    const bus = buses.find(b => b.id === queueItem.busId);
    return {
      ...queueItem,
      ...bus,
      route
    };
  });

  const getOccupancyColor = (percentage) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Running': return 'text-green-600 bg-green-100';
      case 'At Stop': return 'text-blue-600 bg-blue-100';
      case 'Delayed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('bus_queue.title')}</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Route</label>
        <select
          value={selectedRoute}
          onChange={(e) => setSelectedRoute(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Choose a route</option>
          {busRoutes.map(route => (
            <option key={route.id} value={route.id}>{route.name}</option>
          ))}
        </select>
      </div>

      {route && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2" style={{ color: route.color }}>
            {route.name}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Route:</span>
              <div className="font-medium">{route.from} → {route.to}</div>
            </div>
            <div>
              <span className="text-gray-500">Distance:</span>
              <div className="font-medium">{route.distance}</div>
            </div>
            <div>
              <span className="text-gray-500">Duration:</span>
              <div className="font-medium">{route.duration}</div>
            </div>
            <div>
              <span className="text-gray-500">Frequency:</span>
              <div className="font-medium">{route.frequency}</div>
            </div>
          </div>
        </div>
      )}

      {queueWithDetails.length > 0 ? (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Next {queueWithDetails.length} buses arriving
          </h3>
          
          {queueWithDetails.map((bus, index) => (
            <div
              key={bus.id}
              className={`border-l-4 border-gray-200 pl-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ${
                index === 0 ? 'border-l-green-500 bg-green-50' : ''
              }`}
              onClick={() => onBusSelect && onBusSelect(bus)}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-lg">{bus.number}</h4>
                    {index === 0 && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        NEXT
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">Driver: {bus.driver}</p>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{bus.eta}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bus.status)}`}>
                    {bus.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                <div>
                  <span className="text-gray-500">Speed:</span>
                  <div className="font-medium">{bus.speed} km/h</div>
                </div>
                <div>
                  <span className="text-gray-500">Next Stop:</span>
                  <div className="font-medium">{bus.nextStop}</div>
                </div>
                <div>
                  <span className="text-gray-500">Position:</span>
                  <div className="font-medium">#{index + 1} in queue</div>
                </div>
              </div>

              {/* Occupancy indicator */}
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Occupancy</span>
                  <span>{bus.passengers}/{bus.capacity} ({bus.occupancy}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getOccupancyColor(bus.occupancy)}`}
                    style={{ width: `${bus.occupancy}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Last updated: {new Date(bus.lastUpdated).toLocaleTimeString()}</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Track Live →
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : selectedRoute ? (
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-600">No buses currently scheduled for this route.</p>
        </div>
      ) : (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800">Select a route to view the bus queue and schedule.</p>
        </div>
      )}
    </div>
  );
};

BusQueue.propTypes = {
  routeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBusSelect: PropTypes.func
};

export default BusQueue;