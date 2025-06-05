import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import "./App.css";

import Header from './components/UI/Header/Header.jsx';
import PageLoader from './components/UI/Loader/PageLoader.jsx';


export default function App() {
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
