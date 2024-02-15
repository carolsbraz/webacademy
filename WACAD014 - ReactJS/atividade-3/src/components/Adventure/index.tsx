import { useEffect, useState } from "react";
import { GetAdventureMovies, TheMovieDB } from "../../services/movie.service";

import List from "../List";

export default function Adventure() {
  const [adventureMovies, SetAdventureMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const adventureMovies = await GetAdventureMovies();
      SetAdventureMovies(adventureMovies);
    }

    fetchData();
  }, []);



  return (
    <div>
      <h2>Filme de aventura</h2>

      {adventureMovies && <List movies={adventureMovies} />}
    </div>
  );
}

