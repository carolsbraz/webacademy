import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Tarefa {
  id: number;
  descricao: string;
  concluida: boolean;
}

interface TarefaConcluída {
  id: number;
  descricao: string;
  data: string;
}

interface ListaTarefasState {
  tarefas: Tarefa[];
  historico: TarefaConcluída[];
}

const initialState: ListaTarefasState = {
  tarefas: [],
  historico: [],
};

const listaTarefasSlice = createSlice({
  name: "listaTarefas",
  initialState,
  reducers: {
    adicionarTarefa: (state, action: PayloadAction<string>) => {
      const tarefas = state.tarefas || [];
      state.tarefas = [
        ...tarefas,
        { id: tarefas.length + 1, descricao: action.payload, concluida: false },
      ];
    },
    removerTarefa: (state, action: PayloadAction<number>) => {
      state.tarefas = state.tarefas.filter(
        (tarefa) => tarefa.id !== action.payload
      );
    },
    marcarComoConcluida: (state, action: PayloadAction<number>) => {
      state.tarefas = state.tarefas.map((tarefa) =>
        tarefa.id === action.payload
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      );

      const historico = state.historico || [];
      const tarefaConcluida = state.tarefas.find(
        (tarefa) => tarefa.id === action.payload
      );

      if (tarefaConcluida) {
        state.historico = [
          ...historico,
          {
            id: historico.length + 1,
            descricao: tarefaConcluida.descricao,
            data: new Date().toISOString(),
          },
        ];

        console.log(state.historico);
      }
    },
  },
});

export const { adicionarTarefa, removerTarefa, marcarComoConcluida } =
  listaTarefasSlice.actions;
export default listaTarefasSlice.reducer;
