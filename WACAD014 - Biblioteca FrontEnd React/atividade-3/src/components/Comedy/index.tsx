import { useEffect, useState } from "react";
import { GetComedyMovies, TheMovieDB } from "../../services/movie.service";

import List from "../List";

export default function Comedy() {
  const [comedyMovies, SetComedyMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const comedyMovies = await GetComedyMovies();
      SetComedyMovies(comedyMovies);
    }

    fetchData();
  }, []);



  return (
    <div>
      <h2>Filme de comédia</h2>

      {comedyMovies && <List movies={comedyMovies} />}
    </div>
  );
}

