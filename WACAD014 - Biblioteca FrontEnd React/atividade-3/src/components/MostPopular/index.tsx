import { useEffect, useState } from "react";
import { GetPopularMovies, TheMovieDB } from "../../services/movie.service";

import List from "../List";

export default function MostPopular() {
  const [popularMovies, SetPopularMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const popularMovies = await GetPopularMovies();
      SetPopularMovies(popularMovies);
    }

    fetchData();
  }, []);



  return (
    <div>
      <h2>Filme Populares</h2>

      {popularMovies && <List movies={popularMovies} />}
    </div>
  );
}

