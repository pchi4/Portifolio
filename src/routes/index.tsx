import { createBrowserRouter } from "react-router-dom";

import { Home } from "./../screens/Home";
// import Sobre from "./Sobre";
// import Usuario from "./Usuario";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <p>contato</p>,
  },
  {
    path: "/about",
    element: <p>about</p>,
  },
]);

export default Router;
