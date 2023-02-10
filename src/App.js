import "assets/css/app.css"; //trigger dari jsconfig.json
import Details from "pages/Details";
import HomePage from "pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories/:idc",
    element: <Details />,
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
