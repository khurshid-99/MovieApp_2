import { createBrowserRouter } from "react-router";
import App from "../App";
import { RouterProvider } from "react-router";
import TrendingPage from "../components/trending/TrendingPage";
import { Home, NoFoundPage } from "../components";
import MovieDeatils from "../components/detailPage/MovieDeatils";

import { instance } from "../components";
import { Suspense } from "react";
import TvDeatils from "../components/detailPage/TvDeatils";
import Season from "../components/detailPage/Season";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trending",
        loader: async () => {
          const { data } = await instance.get("trending/all/day?page=1");
          return { trending: data.results };
        },
        element: <TrendingPage />,
      },
    ],
  },
  {
    path: "/movie/deatils/:id",
    loader: async () => {
      const { data } = await instance.get("trending/movie/day");
      return { movie: data.results };
    },
    element: <MovieDeatils />,
  },
  {
    path: "/tv/deatils/:id",
    loader: async () => {
      const { data } = await instance.get("/trending/tv/day");
      return { tv: data.results };
    },
    element: <TvDeatils />,
  },

  {
    path: "/tv/:id/season/:name",
    loader: async () => {
      const { data } = await instance.get("/trending/tv/day");
      return { tv: data.results };
    },
    element: <Season />,
  },
  {
    path: "*",
    element: <NoFoundPage />,
  },
]);

const Rout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={Router} />
    </Suspense>
  );
};

export default Rout;
