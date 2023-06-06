import { useEffect, useState } from 'react';
import MapView from './components/MapView';
import { useDispatch } from 'react-redux';
import { getFlights } from './app/translateState';
import ListView from './components/ListView';

function App() {
  const [mapView, setMapView] = useState(true);

  const dispatch = useDispatch();

  const toggleView = () => {
    setMapView(!mapView);
  };

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <>
      <div className="view">
        <button className={`${mapView && 'active'}`} onClick={toggleView}>
          Harita Görünümü
        </button>
        <button className={`${!mapView && 'active'}`} onClick={toggleView}>
          Liste Görünümü
        </button>
      </div>

      {mapView ? <MapView /> : <ListView />}
    </>
  );
}

export default App;
