import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoggedOut from './LoggedOut';
import App from './App';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <LoggedOut /> } />
            <Route path="/guide" element={ <App /> } />
        </Routes>
    </BrowserRouter>
);

export default Router;