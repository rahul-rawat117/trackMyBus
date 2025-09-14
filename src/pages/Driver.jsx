import { useState } from 'react';
import { t } from '../utils/i18n';

const Driver = () => {
  const [tripActive, setTripActive] = useState(false);
  const [locationSharing, setLocationSharing] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 40.7128,
    lng: -74.0060
  });

  const handleTripToggle = () => {
    setTripActive(!tripActive);
    if (!tripActive) {
      setLocationSharing(true);
    }
  };

  const simulateLocationUpdate = () => {
    setCurrentLocation(prev => ({
      lat: prev.lat + (Math.random() - 0.5) * 0.01,
      lng: prev.lng + (Math.random() - 0.5) * 0.01
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
        {/* Header */}
        <div className="mb-8 text-center animate-slide-in-up">
          <div className="text-3xl mb-2 animate-bounce-in"><span className="material-icons text-3xl text-green-600">local_shipping</span></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">{t('driver.title')}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage your trips and share location with passengers</p>
        </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('driver.trip_control')}</h2>
          
          <div className="space-y-4">
            <div className="text-center">
              <button
                onClick={handleTripToggle}
                className={`w-24 h-24 rounded-full text-white font-bold text-sm ${
                  tripActive 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {tripActive ? 'STOP\nTRIP' : 'START\nTRIP'}
              </button>
            </div>
            
            <div className="text-center">
              <div className={`inline-block px-4 py-2 rounded-full text-white ${
                tripActive ? 'bg-green-500' : 'bg-gray-500'
              }`}>
                {tripActive ? 'Trip Active' : 'Trip Inactive'}
              </div>
            </div>

            <div className="border-t pt-4">
              <label className="flex items-center justify-between">
                <span className="font-medium">Location Sharing</span>
                <input
                  type="checkbox"
                  checked={locationSharing}
                  onChange={(e) => setLocationSharing(e.target.checked)}
                  className="w-5 h-5"
                />
              </label>
              <p className="text-sm text-gray-600 mt-2">
                Share your location with passengers for real-time tracking
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('driver.current_status')}</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Bus Number:</span>
              <span className="font-medium text-sm">BUS-101-A</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Route:</span>
              <span className="font-medium text-sm">Route 101</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Current Location:</span>
              <span className="font-medium text-xs">
                {currentLocation.lat.toFixed(4)}, {currentLocation.lng.toFixed(4)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm">Passengers:</span>
              <span className="font-medium text-sm">23/50</span>
            </div>
            
            <button
              onClick={simulateLocationUpdate}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              disabled={!locationSharing}
            >
              Update Location
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">{t('driver.trip_history')}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Route</th>
                <th className="text-left py-2">Duration</th>
                <th className="text-left py-2">Passengers</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">2024-01-15</td>
                <td>Route 101</td>
                <td>2h 15m</td>
                <td>156</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2024-01-14</td>
                <td>Route 101</td>
                <td>2h 8m</td>
                <td>142</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Driver;