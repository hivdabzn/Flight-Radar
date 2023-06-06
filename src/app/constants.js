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
    'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};
