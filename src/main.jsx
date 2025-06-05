import {
  lazy,
  StrictMode,
} from 'react'

import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const Home = lazy(() => import("./pages/Home/Home.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Countries = lazy(() => import("./pages/Countries/Countries.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));

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
