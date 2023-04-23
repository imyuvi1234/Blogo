import { Home, LoginSignup, AboutUs } from "../Pages/allPages";

const Navigationroute = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <LoginSignup />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  }
];

export default Navigationroute;
