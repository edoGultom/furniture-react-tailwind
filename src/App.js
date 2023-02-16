import "assets/css/app.css"; //trigger dari jsconfig.json
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import Details from "pages/Details";
import HomePage from "pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "pages/NotFound";
import Provider from "helpers/hooks/useGlobalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories/:idc",
    element: <Details />,
  },
  {
    path: "/categories/:idc/products/:idp",
    element: <Details />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/congratulation",
    element: <Congratulation />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
