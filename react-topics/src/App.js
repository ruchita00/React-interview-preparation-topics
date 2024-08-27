import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Layout from "./Layout";
import StopWatch from "./pages/StopWatch";
import Accordion from "./pages/Accordion";

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
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
