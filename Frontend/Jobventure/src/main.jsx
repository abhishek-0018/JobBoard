import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css'
import ReactDOM from "react-dom/client";
import LandingPage from './LandingPage.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import User from './User.jsx';
import Footer from "./Footer";
import JobDetails from './JobDetails.jsx';
import Profile from './Profile.jsx';
import Postjob from './Postjob.jsx';
import Apply from './Apply.jsx';


const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: [<AppLayout />],
    children: [
      {
        path: "/",
        element: (
          <>
          <LandingPage/>
          </>
        ),
      },
      {
        path: "/Login",
        element: (
          <>
          <Login/>
          </>
        ),
      },
      {
        path: "/SignUp",
        element: (
          <>
          <SignUp/>
          </>
        ),
      },
      {
        path: "/User",
        element: (
          <>
          <User/>
          <Footer/>
          </>
        ),
      },
      {
        path: "/Profile",
        element: (
          <>
          <Profile/>
          </>
        ),
      },
      {
        path: "/JobDetails/:id",
        element: (
          <>
          <JobDetails/>
          </>
        ),
      },
      {
        path: "/Postjob",
        element: (
          <>
          <Postjob/>
          </>
        ),
      },
      {
        path: "/Applyjob",
        element: (
          <>
          <Apply/>
          </>
        ),
      },
    ],
  },
]);

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<RouterProvider router={appRouter} />);
