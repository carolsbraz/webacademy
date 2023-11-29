import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Matriz = string[][];

interface GameState {
  matriz: Matriz;
  jogadorAtual: string;
  ganhador: string | null;
}

const initialState: GameState = {
  matriz: [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  jogadorAtual: "X",
  ganhador: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    jogar: (
      state,
      action: PayloadAction<{ linhaIndex: number; colunaIndex: number }>
    ) => {
      const { linhaIndex, colunaIndex } = action.payload;
      if (state.matriz[linhaIndex][colunaIndex] === " " && !state.ganhador) {
        state.matriz[linhaIndex][colunaIndex] = state.jogadorAtual;
        state.jogadorAtual = state.jogadorAtual === "X" ? "O" : "X";
        state.ganhador = checkganhador(state.matriz) || null;
      }
    },
    resetar: (state) => {
      state.matriz = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ];
      state.jogadorAtual = "X";
      state.ganhador = null;
    },
  },
});

const checkganhador = (matriz: Matriz): string | null => {
  for (let i = 0; i < 3; i++) {
    if (
      matriz[i][0] === matriz[i][1] &&
      matriz[i][1] === matriz[i][2] &&
      matriz[i][0] !== " "
    ) {
      return matriz[i][0];
    }
    if (
      matriz[0][i] === matriz[1][i] &&
      matriz[1][i] === matriz[2][i] &&
      matriz[0][i] !== " "
    ) {
      return matriz[0][i];
    }
  }

  if (
    (matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2]) ||
    (matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0])
  ) {
    return matriz[1][1];
  }

  return null;
};

export const { jogar, resetar } = gameSlice.actions;
export default gameSlice.reducer;
