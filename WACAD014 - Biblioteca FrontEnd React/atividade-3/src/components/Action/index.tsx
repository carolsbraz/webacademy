import { useEffect, useState } from "react";
import { GetActionMovies, TheMovieDB } from "../../services/movie.service";

import List from "../List";

export default function Action() {
  const [actionMovies, SetActionMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const actionMovies = await GetActionMovies();
      SetActionMovies(actionMovies);
    }

    fetchData();
  }, []);



  return (
    <div>
      <h2>Filme de ação</h2>

      {actionMovies && <List movies={actionMovies} />}
    </div>
  );
}

