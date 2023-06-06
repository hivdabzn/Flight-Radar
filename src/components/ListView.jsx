import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SideDetail from './SideDetail';

const ListView = () => {
  const state = useSelector((store) => store);
  const [showDetail, setShowDetail] = useState(false);
  const [planeId, setPlaneId] = useState(0);

  const handleClick = (id) => {
    setPlaneId(id);
    setShowDetail(true);
  };

  return (
    <div className="p-4">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Kuyruk Kodu</th>
            <th scope="col">Lat</th>
            <th scope="col">Lng</th>
            <th scope="col">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.flights.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button className="btn btn-light" onClick={() => handleClick(flight.id)}>
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDetail && <SideDetail setShowDetail={setShowDetail} planeId={planeId} />}
    </div>
  );
};

export default ListView;
