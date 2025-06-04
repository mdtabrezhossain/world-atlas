import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/About/Home/Home.jsx';
import Countries from './pages/Countries/Countries.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/home",
        Component: Home
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/countries",
        Component: Countries
      },
      {
        path: "/contact",
        Component: Contact
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
