import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

import PrivetRout from './Routs/PrivetRout.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {

          path:'/signup',
          element:<SignUp></SignUp>
      },
      {
        path:'/orders',
        element:<PrivetRout><Orders></Orders></PrivetRout>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/dash',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

<AuthProvider child={<RouterProvider router={router} />}>

</AuthProvider>

  </StrictMode>,
)
