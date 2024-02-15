// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import ListaProdutos from "../Pages/ListaProdutos";
import Login from "../Pages/Login";
import NavBarLayout from "../Layout/NavbarLayout";
import Cart from "../Pages/Carrinho";

const router = createBrowserRouter([
  {
    element: <NavBarLayout />,
    children: [
      {
        path: "/",
        element: <ListaProdutos />,
      },
      {
        path: "/carrinho",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
