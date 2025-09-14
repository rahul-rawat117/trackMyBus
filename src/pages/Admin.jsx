import { useState } from 'react';
import Map from '../components/Map';
import { buses, analytics } from '../data/mockData';
import { t } from '../utils/i18n';

const Admin = () => {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
        {/* Header */}
        <div className="mb-8 text-center animate-slide-in-up">
          <div className="text-3xl mb-2 animate-bounce-in"><span className="material-icons text-3xl text-purple-600">admin_panel_settings</span></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-1">{t('admin.title')}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Monitor and manage the entire fleet system</p>
        </div>
      
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-3 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-xl text-blue-500 mr-2"><span className="material-icons">directions_bus</span></div>
            <div>
              <p className="text-xs text-gray-600">Total Trips Today</p>
              <p className="text-base font-bold">{analytics.totalTrips}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-xl text-green-500 mr-2"><span className="material-icons">schedule</span></div>
            <div>
              <p className="text-xs text-gray-600">Average Delay</p>
              <p className="text-base font-bold">{analytics.averageDelay}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-xl text-orange-500 mr-2"><span className="material-icons">airport_shuttle</span></div>
            <div>
              <p className="text-xs text-gray-600">Active Buses</p>
              <p className="text-base font-bold">{analytics.activeBuses}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow">
          <div className="flex items-center">
            <div className="text-xl text-purple-500 mr-2"><span className="material-icons">group</span></div>
            <div>
              <p className="text-xs text-gray-600">Total Passengers</p>
              <p className="text-base font-bold">{analytics.totalPassengers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode('table')}
            className={`px-4 py-2 rounded ${
              viewMode === 'table' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Table View
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`px-4 py-2 rounded ${
              viewMode === 'map' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Map View
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'table' ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">{t('admin.fleet_status')}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bus Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Passengers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ETA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {buses.map(bus => (
                  <tr key={bus.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{bus.number}</td>
                    <td className="px-6 py-4 whitespace-nowrap">Route {bus.routeId}01</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        bus.status === 'Running' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {bus.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{bus.passengers}/{bus.capacity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {bus.lat.toFixed(3)}, {bus.lng.toFixed(3)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{bus.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">{t('admin.live_fleet_map')}</h2>
          <Map buses={buses} height="600px" />
        </div>
      )}
      </div>
    </div>
  );
};

export default Admin;