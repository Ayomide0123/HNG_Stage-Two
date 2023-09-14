import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './components/Homepage';
import Moviedetails from './pages/Moviedetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/movies/:id",
    element: <Moviedetails/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Homepage />
  // </React.StrictMode>

  <RouterProvider router={router} />
);
