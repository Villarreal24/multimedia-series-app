import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';
import { Episode, SeasonState } from '../../types/types';

const initialState: SeasonState = {
  data: {
    name: '',
    season: 0,
    number: 0,
    runtime: 0,
    summary: '',
    image: {
      medium: '',
    },
  },
};

// === TYPE OF SLICE ===
type SeasonsSliceType = Slice<SeasonState>;

export const seasonsSlice: SeasonsSliceType = createSlice({
  name: 'seasons',
  initialState,
  reducers: {
    setEpisodes(state, action: PayloadAction<Episode>) {
      state.data = action.payload;
    },
  },
});

export const { setEpisodes } = seasonsSlice.actions;

export default seasonsSlice.reducer;
