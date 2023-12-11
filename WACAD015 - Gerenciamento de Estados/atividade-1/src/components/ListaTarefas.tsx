import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  adicionarTarefa,
  marcarComoConcluida,
  removerTarefa,
} from "../store/todoReducer";

interface RootState {
  listaTarefas: {
    tarefas: Array<{ id: number; descricao: string; concluida: boolean }>;
  };
}

function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState<string>("");
  const { tarefas } = useSelector((state: RootState) => state.listaTarefas);
  const dispatch = useDispatch();

  const handleAdicionarTarefa = () => {
    dispatch(adicionarTarefa(novaTarefa));
    setNovaTarefa("");
  };

  const handleRemoverTarefa = (id: number) => {
    dispatch(removerTarefa(id));
  };

  const handleMarcarComoConcluida = (id: number) => {
    dispatch(marcarComoConcluida(id));
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>

      <div>
        <input
          className="input-add"
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button className="btn-add" onClick={handleAdicionarTarefa}>
          Adicionar Tarefa
        </button>
      </div>
      <ul>
        {tarefas && tarefas.length > 0 ? (
          tarefas.map((tarefa) => (
            <li
              key={tarefa.id}
              style={{
                textDecoration: tarefa.concluida ? "line-through" : "none",
              }}
            >
              {tarefa.descricao}

              {!tarefa.concluida ? (
                <span>
                  <button onClick={() => handleMarcarComoConcluida(tarefa.id)}>
                    Concluída
                  </button>
                  <button onClick={() => handleRemoverTarefa(tarefa.id)}>
                    Remover
                  </button>
                </span>
              ) : (
                <p></p>
              )}
            </li>
          ))
        ) : (
          <p>Sem tarefas</p>
        )}
      </ul>
    </div>
  );
}

export default ListaTarefas;
