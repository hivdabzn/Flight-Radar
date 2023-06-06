import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { options } from './constants';

export const getFlights = createAsyncThunk('flights/getFlights', async () => {
  const res = await axios.request(options);

  const newData = res.data.aircraft.map((plane) => ({
    id: plane[0],
    code: plane[10],
    lat: plane[2],
    lng: plane[3],
  }));

  return newData;
});

export const getFlightDetails = createAsyncThunk(
  'flights/getFlightDetails',
  async (id) => {
    const options2 = {
      method: 'GET',
      url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
      params: { flight: id },
      headers: {
        'X-RapidAPI-Key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
      },
    };

    const res = await axios.request(options2);

    return res.data;
  }
);

const initialState = {
  flights: [],
  flightDetails: null,
  flightDetailsLoading: false,
  isLoading: true,
  isError: false,
};

export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  //   thunkta reducers yerine extraReducers kullanılır
  extraReducers: {
    // bekleme durumunda (henüz cevap gelmiyorken) çalışır
    [getFlights.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    // eğer veri gelirse çaılışır
    [getFlights.fulfilled]: (state, action) => {
      state.flights = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    // eğer veri gelirken bir hata oluşursa çaılışır
    [getFlights.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    // eğer diller çekilirken başarılı cevap gelirse
    [getFlightDetails.pending]: (state, action) => {
      state.flightDetails = action.payload;
      state.flightDetailsLoading = true;
    },
    [getFlightDetails.fulfilled]: (state, action) => {
      state.flightDetails = action.payload;
      state.flightDetailsLoading = false;
    },
  },
});

export default translateSlice.reducer;

//  extraReducers: (builder) => {
//     builder.addCase(getAnswer.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getAnswer.fulfilled, (state, action) => {
//       state.answer = action.payload;
//       state.isLoading = false;
//     });
//     builder.addCase(getLanguages.fulfilled, (state, action) => {
//       state.languages = action.payload;
//     });
//   },
