import { instance } from "../utils/http";

export interface TheMovieDB {
  page: number;
  results: Movie[];
}

export interface Movie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const apiKey = import.meta.env.VITE_API_KEY;

export async function GetPopularMovies(): Promise<TheMovieDB> {
  const result = await instance.http.get(
    `/movie/popular?language=pt-BR&page=1&api_key=${apiKey}`
  );
  return result.data;
}

export async function GetMostLiked(): Promise<TheMovieDB> {
  const result = await instance.http.get(
    `/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`
  );
  return result.data;
}

export async function GetComedyMovies(): Promise<TheMovieDB> {
  const result = await instance.http.get(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35&api_key=${apiKey}`
  );
  return result.data;
}

export async function GetActionMovies(): Promise<TheMovieDB> {
  const result = await instance.http.get(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&api_key=${apiKey}`
  );
  return result.data;
}

export async function GetAdventureMovies(): Promise<TheMovieDB> {
  const result = await instance.http.get(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12&api_key=${apiKey}`
  );
  return result.data;
}

export async function GetRomanceMovies(): Promise<TheMovieDB> {
  const result = await instance.http.get(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749&api_key=${apiKey}`
  );
  return result.data;
}
