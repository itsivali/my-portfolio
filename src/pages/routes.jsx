import { createBrowserRouter } from "react-router-dom";

import About from "../components/About";
import Home from "./Home";

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about-me",
      element: <About />
    },
  ]);