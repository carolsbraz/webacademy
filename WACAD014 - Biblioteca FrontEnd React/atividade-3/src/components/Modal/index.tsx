import { Modal } from "react-bootstrap";
import { MovieDetails } from "../../services/movie.details.service";

interface ConfirmationModalProps {
  isShow: boolean;
  movie: MovieDetails;
  message: string;
  onCancel: () => void;
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
  return (
    <Modal show={props.isShow} onHide={props.onCancel}>
      <Modal.Header closeButton={true}>
        <Modal.Title>{props.movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Título e Pôster */}
        <p>Título: {props.movie.title}</p>
        <p>Pôster: {props.movie.poster_path}</p>

        {/* Avaliação e Popularidade */}
        <p>Avaliação: {props.movie.vote_average}</p>
        <p>Total de Avaliações: {props.movie.vote_count}</p>
        <p>Popularidade: {props.movie.popularity}</p>

        {/* Descrição e Tagline */}
        <p>Descrição: {props.movie.overview}</p>
        <p>Tagline: {props.movie.tagline}</p>

        {/* Data de Lançamento e Duração */}
        <p>Data de Lançamento: {props.movie.release_date}</p>
        <p>Duração: {props.movie.runtime} minutos</p>

        {/* Receita e Orçamento */}
        <p>Receita: {props.movie.revenue}</p>
        <p>IMDb ID: {props.movie.imdb_id}</p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
