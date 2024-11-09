import React from "react";
import ReactDom from "react-dom/client";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />} errorElement={<NotFound />}>
      <Route errorElement={<NotFound />}>
        <Route path="about" element={<About />} />
      </Route>
    </Route>
  )
);
const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
