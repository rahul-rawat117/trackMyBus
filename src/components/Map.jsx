import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = ({ buses, height = "400px" }) => {
  const center = [40.7128, -74.0060]; // NYC coordinates

  return (
    <div style={{ height }} className="rounded-lg overflow-hidden">
      <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buses.map(bus => (
          <Marker key={bus.id} position={[bus.lat, bus.lng]}>
            <Popup>
              <div>
                <h3 className="font-bold">{bus.number}</h3>
                <p>Status: {bus.status}</p>
                <p>ETA: {bus.eta}</p>
                <p>Passengers: {bus.passengers}/{bus.capacity}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;