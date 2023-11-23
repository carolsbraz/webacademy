import React from "react";
import InformationModal from "../Modal";
import {
  GetMovieDetails,
  MovieDetails,
} from "../../services/movie.details.service";
import { TheMovieDB } from "../../services/movie.service";
import { Carousel } from "react-bootstrap";

import "./index.css";

interface Movies {
  movies: TheMovieDB;
}

export default function List({ movies }: Movies) {
  const [isModalConfirmationOpen, setIsModalConfirmationOpen] =
    React.useState(false);
  const [movieShow, setMovieShow] = React.useState<MovieDetails | undefined>();

  async function movieDetails(idMovie: number) {
    const movieDetail = await GetMovieDetails(idMovie);
    console.log(movieDetail);
    setMovieShow(movieDetail);
    setIsModalConfirmationOpen(true);
  }

  return (
    <>
      <Carousel className="carousel">
        {movies?.results.map((movie) => (
          <Carousel.Item key={movie.id} onClick={() => movieDetails(movie.id)}>
            <img
              className="d-block w-100"
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                movie.poster_path
              }`}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="titleMovie">{movie.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {movieShow && (
        <InformationModal
          isShow={isModalConfirmationOpen}
          message="Deseja excluir esse produto?"
          movie={movieShow}
          onCancel={() => {
            setIsModalConfirmationOpen(false);
          }}
        />
      )}
    </>
  );
}
