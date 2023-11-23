import { useEffect, useState } from "react";
import { GetRomanceMovies, TheMovieDB } from "../../services/movie.service";

import List from "../List";

export default function Romance() {
  const [romanceMovies, SetRomanceMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const romanceMovies = await GetRomanceMovies();
      SetRomanceMovies(romanceMovies);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Filme de romance</h2>

      {romanceMovies && <List movies={romanceMovies} />}
    </div>
  );
}
