import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/home/Home';
import Statistics from './components/statistics/Statistics';
import Dashboard from './components/dashboard/Dashboard';
import ViewDetails from './components/viewDetails/ViewDetails';
import GadgetCardByCategory from './components/gadgetCardsByCategory/GadgetCardsByCategory';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/category/:category",
            element: <GadgetCardByCategory />,
            loader: () => fetch('../gadgetsData.json')
          }
        ]
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/gadget/:product_id",
        loader: () => fetch(`../gadgetsData.json`),
        element: <ViewDetails />
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
