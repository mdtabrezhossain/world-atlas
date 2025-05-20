import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import App from './App.jsx';
import Home from './components/UI/Home/Home.jsx';
import CountriesPage from './components/UI/Countries/CountriesPage.jsx';
import AboutPage from './components/UI/About/AboutPage.jsx';
import ContactPage from './components/UI/Contact/ContactPage.jsx';
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
        Component: AboutPage
      },
      {
        path: "/countries",
        Component: CountriesPage
      },
      {
        path: "/contact",
        Component: ContactPage
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
