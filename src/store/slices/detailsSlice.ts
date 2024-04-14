import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';

interface TvShow {
  name: string;
  poster: string;
  genres: string;
  summary: string;
  image: {
    original: string;
  };
  schedule: {
    time: string;
    days: string;
  };
}

interface DetailsState {
  data: TvShow;
}

const initialState: DetailsState = {
  data: {
    name: '',
    poster: '',
    genres: '',
    summary: '',
    image: {
      original: '',
    },
  },
};

// === TYPE OF SLICE ===
type DetailsSliceType = Slice<DetailsState>;

export const detailsSlice: DetailsSliceType = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails(state, action: PayloadAction<object>) {
      state.data = action.payload;
    },
  },
});

export const { setDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
