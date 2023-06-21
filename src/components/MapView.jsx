import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import Leaflet from 'leaflet';
import icon from '../assets/plane-icon.png';
import { useState } from 'react';
import SideDetails from './SideDetails';

const MapView = () => {
  const state = useSelector((store) => store.reducer);
  const [showDetails, setShowDetails] = useState(false);
  const [detailID, setDetailID] = useState(null);

  //leaflet kütüphaneisnde gelen icon oluşturma fonksiyonu kullanımı
  const planeIcon = Leaflet.icon({
    iconUrl: icon,
    iconSize: [45, 45],
  });

  //   detay butonuna tıklanınca çallışır
  const handleClick = (id) => {
    // idyi state tutucaz (bielşen prop olarak gidicek)
    setDetailID(id);
    // kenrada pencere aç
    setShowDetails(true);
  };

  return (
    <div>
      <h2>{state.flights.length} Uçak Bulundu</h2>
      <MapContainer
        center={[39.1417632, 34.1284977]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* uçuşlar dizisindeki herbir obje için ekrana bir marker basma */}
        {state.flights.map((flight) => (
          <Marker
            key={flight.id}
            position={[flight.lat, flight.lng]}
            icon={planeIcon}
          >
            <Popup>
              <div className="popup">
                <span>Kod: {flight.code}</span>
                <button
                  onClick={() => handleClick(flight.id)}
                >
                  Detay
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* 
      * eğerki detay göster state'i true ise
      1 - ekrana detay bileşeni bas
      2 - detayını göstericeğimiz uçak idsini prop olarak gönder
       */}
      {showDetails && (
        <SideDetails
          detailID={detailID}
          setShowDetails={setShowDetails}
        />
      )}
    </div>
  );
};

/*
marker : ekrandaki imleç
popup: imleçlere tıklayınca açılıyor
*/
export default MapView;
