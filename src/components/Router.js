import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import AuthHome from './AuthHome';
import AuthApp from './AuthApp';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={ <App /> }>
        <Route exact path="/documentation" element={ <AuthHome /> } />
        <Route path="/" element={ <Navigate replace to="/documentation" /> } />
        <Route path="/tutorial" element={ <AuthApp /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  </BrowserRouter>
);

export default Router;
