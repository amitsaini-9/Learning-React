import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Routes/App.jsx";
import "./CSS/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./components/bag.jsx";
import ProductsPage from "./Routes/ProductsPage.jsx";
import { Provider } from "react-redux";
import myStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProductsPage /> },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
