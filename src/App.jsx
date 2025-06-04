import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header/Header.jsx';
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
