import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import SideDetail from './SideDetail';

const MainPage = () => {
  const state = useSelector((store) => store);
  const [showDetail, setShowDetail] = useState(false);
  const [planeId, setPlaneId] = useState(0);

  const handleClick = (id) => {
    setPlaneId(id);
    setShowDetail(true);
  };
  // ikon oluşturma
  const planeIcon = new Leaflet.icon({
    iconUrl: require('../assets/plane.png'),
    iconSize: [45, 45],
  });

  return (
    <div>
      <MapContainer center={[39.925, 32.8662]} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {state.flights.map((plane) => (
          <div onClick={() => setShowDetail(true)}>
            <Marker position={[plane.lat, plane.lng]} icon={planeIcon}>
              <Popup>
                <div className="popup">
                  {plane.code}
                  <button
                    className="btn btn-sm btn-dark"
                    onClick={() => handleClick(plane.id)}
                  >
                    Detay Gör
                  </button>
                </div>
              </Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>
      {showDetail && <SideDetail setShowDetail={setShowDetail} planeId={planeId} />}
    </div>
  );
};

export default MainPage;
