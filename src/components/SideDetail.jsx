import React, { useEffect } from 'react';
import '../index.css';
import { getFlightDetails } from '../app/translateState';
import { useDispatch, useSelector } from 'react-redux';
import { GiFinishLine } from 'react-icons/gi';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SideDetail = ({ setShowDetail, planeId }) => {
  const { flightDetails, flightDetailsLoading } = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log(flightDetailsLoading);

  useEffect(() => {
    dispatch(getFlightDetails(planeId));
  }, [planeId]);

  return (
    <div className="detail">
      <div>
        <p className="close-icon" onClick={() => setShowDetail(false)}>
          X
        </p>

        {flightDetailsLoading ? (
          <p>Loading..</p>
        ) : (
          <>
            <h1>{flightDetails?.aircraft?.model?.text}</h1>
            <p>Code : {flightDetails?.aircraft?.model?.code}</p>
            <p>Kuyruk Numarası : {flightDetails?.aircraft?.registration}</p>
            <img src={flightDetails?.aircraft.images?.thumbnails[0]?.src} />
            <p>
              <FaMapMarkerAlt />
              <span>Kalkış : {flightDetails?.airport?.origin?.name}</span>
            </p>
            <p>
              <GiFinishLine />
              <span>Hedef : {flightDetails?.airport?.destination?.name}</span>
            </p>
            <p> Durum : {flightDetails?.status?.text} </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
