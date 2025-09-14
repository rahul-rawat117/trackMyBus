import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { t } from '../utils/i18n';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom bus icon
const busIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" width="32" height="32">
      <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16]
});

// Stop icon
const stopIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" width="24" height="24">
      <circle cx="12" cy="12" r="8" fill="#ef4444"/>
      <circle cx="12" cy="12" r="4" fill="white"/>
    </svg>
  `),
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12]
});

const BusTracker = ({ selectedBus, route, stops, onBusSelect }) => {
  const [busPosition, setBusPosition] = useState(selectedBus ? { lat: selectedBus.lat, lng: selectedBus.lng } : null);
  const [routePath, setRoutePath] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (selectedBus && route) {
      // Simulate real-time bus movement
      intervalRef.current = setInterval(() => {
        setBusPosition(prev => {
          if (!prev) return { lat: selectedBus.lat, lng: selectedBus.lng };
          
          // Simple movement simulation
          const newLat = prev.lat + (Math.random() - 0.5) * 0.001;
          const newLng = prev.lng + (Math.random() - 0.5) * 0.001;
          
          return { lat: newLat, lng: newLng };
        });
      }, 3000);

      // Create route path from stops
      if (route.stops && stops) {
        const path = route.stops.map(stopId => {
          const stop = stops.find(s => s.id === stopId);
          return stop ? [stop.lat, stop.lng] : null;
        }).filter(Boolean);
        setRoutePath(path);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [selectedBus, route, stops]);

  if (!selectedBus || !busPosition) {
    return (
      <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">{t('bus_tracker.select_bus')}</p>
      </div>
    );
  }

  const routeStops = route?.stops?.map(stopId => stops?.find(s => s.id === stopId)).filter(Boolean) || [];

  return (
    <div className="h-96 rounded-lg overflow-hidden">
      <MapContainer
        center={[busPosition.lat, busPosition.lng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Bus marker */}
        <Marker position={[busPosition.lat, busPosition.lng]} icon={busIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">{selectedBus.number}</h3>
              <p>Status: <span className={`font-semibold ${selectedBus.status === 'Running' ? 'text-green-600' : 'text-red-600'}`}>{selectedBus.status}</span></p>
              <p>Speed: {selectedBus.speed} km/h</p>
              <p>Next Stop: {selectedBus.nextStop}</p>
              <p>Occupancy: {selectedBus.passengers}/{selectedBus.capacity}</p>
              <p>Driver: {selectedBus.driver}</p>
            </div>
          </Popup>
        </Marker>

        {/* Route path */}
        {routePath.length > 0 && (
          <Polyline
            positions={routePath}
            color={route.color || '#3b82f6'}
            weight={4}
            opacity={0.7}
          />
        )}

        {/* Bus stops */}
        {routeStops.map(stop => (
          <Marker key={stop.id} position={[stop.lat, stop.lng]} icon={stopIcon}>
            <Popup>
              <div className="text-center">
                <h4 className="font-bold">{stop.name}</h4>
                <p className="text-sm text-gray-600">Bus Stop</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Coverage area around bus */}
        <Circle
          center={[busPosition.lat, busPosition.lng]}
          radius={500}
          fillColor="#3b82f6"
          fillOpacity={0.1}
          color="#3b82f6"
          weight={1}
        />
      </MapContainer>
    </div>
  );
};

BusTracker.propTypes = {
  selectedBus: PropTypes.object,
  route: PropTypes.object,
  stops: PropTypes.array,
  onBusSelect: PropTypes.func
};

export default BusTracker;