import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/Store.js';

import Header from './components/UI/Header/Header.jsx';
import PageLoader from './components/UI/Loader/PageLoader.jsx';

import "./App.css";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </Provider>
    </>
  )
}
