import { Episode } from '../views/Episode';

export interface Serie {
  name: string;
  image: {
    medium: string;
  };
}

export interface TvShow {
  id: number;
  name: string;
  poster: string;
  genres: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
  schedule: {
    time: string;
    days: string;
  };
}

export interface DetailState {
  data: TvShow;
}

export interface Episode {
  name: string;
  season: number;
  number: number;
  runtime: number;
  summary: string;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
}

export interface SeasonState {
  data: Episode;
}
