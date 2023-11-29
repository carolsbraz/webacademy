import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jogar, resetar } from "../redux/slices/game.slice";

const JogoDaVelha: React.FC = () => {
  const dispatch = useDispatch();
  const { matriz, jogadorAtual, ganhador } = useSelector(
    (state: {
      game: {
        matriz: string[][];
        jogadorAtual: string;
        ganhador: string | null;
      };
    }) => state.game
  );

  const handleCellClick = (linhaIndex: number, colunaIndex: number) => {
    dispatch(jogar({ linhaIndex, colunaIndex }));
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {matriz.map((linha: string[], linhaIndex: number) => (
          <div key={linhaIndex} className="row">
            {linha.map((celula: string, colunaIndex: number) => (
              <div
                key={colunaIndex}
                className="cell"
                onClick={() => handleCellClick(linhaIndex, colunaIndex)}
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                {celula}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="status">
        <p>Jogador da vez: {jogadorAtual}</p>
        {ganhador && <p className="ganhador">Ganhador: {ganhador}</p>}
      </div>
      <button className="reset-button" onClick={() => dispatch(resetar())}>
        Resetar
      </button>
    </div>
  );
};

export default JogoDaVelha;
