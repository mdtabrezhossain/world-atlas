import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import App from './App.jsx';
import Home from './components/UI/Home/Home.jsx';
import CountriesPage from './components/UI/Countries/CountriesPage.jsx';
import About from './components/UI/About/About.jsx';
import Contact from './components/UI/Contact/Contact.jsx';
import ErrorPage from './components/UI/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
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
        Component: CountriesPage
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
