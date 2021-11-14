import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthHome from './AuthHome';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/documentation" element={ <AuthHome /> } />
            <Route path="/" element={ <Navigate replace to="/documentation" /> } />
            <Route path="/tutorial" element={ <App /> } />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    </BrowserRouter>
);

export default Router;