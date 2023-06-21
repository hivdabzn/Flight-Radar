import axios from 'axios';
import { useEffect, useState } from 'react';

const SideDetails = ({ detailID, setShowDetails }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // apinin değerini sıfırlama
    setDetails(null);
    // İstek atarkern kullandığımız ayarları tanımlama
    const options = {
      method: 'GET',
      url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
      params: {
        flight: detailID,
      },
      headers: {
        'X-RapidAPI-Key':
          '590bbb98ebmsh246acde1e679fadp1431f3jsn27f3c5b7de13',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
      },
    };
    // optionla beraber bir veri çekme isteği atma
    axios
      .request(options)
      .then((res) => setDetails(res.data));
  }, [detailID]);

  console.log(details);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close-icon">
          <span onClick={() => setShowDetails(false)}>
            X
          </span>
        </p>
        {!details ? (
          <p>Loading</p>
        ) : (
          <>
            <h2>{details?.aircraft?.model?.text}</h2>
            <p>{details?.aircraft?.model?.code}</p>
            <p>
              Kuyruk Kodu: {details?.aircraft?.registration}
            </p>
            <p>Şirket : {details?.airline?.short}</p>
            <img
              src={details?.aircraft?.images?.large[0]?.src}
            />
            <p>
              Kalkış:
              <a href={details?.airport?.origin?.website}>
                {details?.airport?.origin?.name}
              </a>
            </p>
            <p>
              Varış:
              <a
                href={
                  details?.airport?.destination?.website
                }
              >
                {details?.airport?.destination?.name}
              </a>
            </p>
            <p>Durum : {details?.status?.text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetails;
