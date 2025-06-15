import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/UI/Header/Header.jsx';
import PageLoader from './components/UI/Loader/PageLoader.jsx';

import "./App.css";

export default function App() {
  const theme = useSelector((state) => state.themeReducer.theme);
  theme === "light" ? document.body.classList.add("light") : document.body.classList.remove("light");

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
