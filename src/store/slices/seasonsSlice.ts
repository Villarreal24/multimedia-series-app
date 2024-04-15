import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';
import { Episode, SeasonState } from '../../types/types';

const initialState: SeasonState = {
  data: {
    name: '',
    season: 0,
    number: 0,
    runtime: 0,
    summary: '',
    rating: {
      average: 0,
    },
    image: {
      medium: '',
      original: '',
    },
  },
};

// === TYPE OF SLICE ===
type SeasonsSliceType = Slice<SeasonState>;

export const seasonsSlice: SeasonsSliceType = createSlice({
  name: 'seasons',
  initialState,
  reducers: {
    setEpisode(state, action: PayloadAction<Episode>) {
      state.data = action.payload;
    },
  },
});

export const { setEpisode } = seasonsSlice.actions;

export default seasonsSlice.reducer;
