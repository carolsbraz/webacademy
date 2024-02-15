import { useEffect, useState } from "react";
import { GetMostLiked, TheMovieDB } from "../../services/movie.service";

import List from "../List";

export default function MostLiked() {
  const [mostLikesMovies, SetMostLikedMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const mostLikesMovies = await GetMostLiked();
      SetMostLikedMovies(mostLikesMovies);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Mais curtidos</h2>

      {mostLikesMovies && <List movies={mostLikesMovies} />}
    </div>
  );
}
