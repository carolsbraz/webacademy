import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const caixaSlice = createSlice({
  name: "caixaSlice",
  initialState: {
    value: 0,
  },

  reducers: {
    deposito(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    saque(state, action: PayloadAction<number>) {
      if (state.value - action.payload < 0) {
        return state;
      } else {
        state.value -= action.payload;
      }
    },
  },
});

export const { deposito, saque } = caixaSlice.actions;
export default caixaSlice.reducer;
