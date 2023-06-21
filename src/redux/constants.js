export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '37.036472',
    bl_lng: '27.425467',
    tr_lat: '41.11295',
    tr_lng: '42.70228',
    limit: '300',
  },
  headers: {
    'X-RapidAPI-Key':
      '590bbb98ebmsh246acde1e679fadp1431f3jsn27f3c5b7de13',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};
