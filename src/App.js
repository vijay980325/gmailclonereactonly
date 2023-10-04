import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./component/Login.js";
import ViewVideo from "./component/ViewVideo.js";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<ViewVideo />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
