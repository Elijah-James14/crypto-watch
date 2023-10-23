import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Account from "./pages/Account";
import Details from "./pages/Details";
import App from "./App";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/account",
        element: (
          <ProtectedRoutes>
            <Account />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/coin/:coinId",
        element: <Details />,
      },
    ],
  },
]);

export default router;
