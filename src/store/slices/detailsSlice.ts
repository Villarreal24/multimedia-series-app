import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';
import { TvShow, DetailState } from '../../types/types';

const initialState: DetailState = {
  data: {
    id: 0,
    name: '',
    poster: '',
    genres: '',
    summary: '',
    image: {
      medium: '',
      original: '',
    },
    rating: {
      average: 0,
    },
    schedule: {
      time: '',
      days: '',
    },
  },
};

// === TYPE OF SLICE ===
type DetailsSliceType = Slice<DetailState>;

export const detailsSlice: DetailsSliceType = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails(state, action: PayloadAction<TvShow>) {
      state.data = action.payload;
    },
  },
});

export const { setDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
