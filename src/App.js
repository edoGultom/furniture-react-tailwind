import "assets/css/app.css"; //trigger dari jsconfig.json
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import Details from "pages/Details";
import HomePage from "pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "pages/NotFound";

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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
