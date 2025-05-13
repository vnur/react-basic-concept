import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { HomePage } from "../pages/home-page/HomePage";
import { InfiniteQuery } from "../pages/Infinite-scrolling/InfiniteScroll";
import { Todo } from "../pages/todo-page/Todo";
import { GetPokemonData } from "../api/PokemonApi";
import { Pagination } from "../pages/pagination/Pagination";
import { Pokemoon } from "../pages/pokemon-page/Pokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/infinitScroll",
        element: <InfiniteQuery />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path:"/pokemon",
        element:<Pokemoon/>,
        loader:GetPokemonData,
      }
    ],
  },
]);
