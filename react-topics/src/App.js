import "./App.css";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Layout from "./Layout";
import StopWatch from "./pages/StopWatch";
import Accordion from "./pages/Accordion";
import Tab from "./pages/Tab";
import { StarRating } from "./pages/StarRating";
import Todo from "./pages/Todo";
import Pagination from "./pages/Pagination";
import InifiniteScroll from "./pages/InifiniteScroll";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/home",
        },
        {
          element: <Search />,
          path: "/search",
        },
        {
          element: <StopWatch />,
          path: "/stopwatch",
        },
        {
          element: <Accordion />,
          path: "/accordion",
        },
        {
          element: <Tab />,
          path: "/tab",
        },

        {
          element: <StarRating totalStars={5} />,
          path: "/starRating",
        },

        {
          element: <Todo />,
          path: "/todo",
        },

        {
          element: <Form />,
          path: "/form",
        },

        {
          element: <Pagination />,
          path: "/pagination",
        },

        {
          element: <InifiniteScroll />,
          path: "/inifiniteScroll",
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
