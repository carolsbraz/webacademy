import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./redux/slices/game.slice";
import JogoDaVelha from "./pages/index";

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <JogoDaVelha />
    </Provider>
  );
};

export default App;
