import React from 'react';
import { Routes, Rote, Link, Route } from 'react-router-dom';
import MainPage from '@pages/mainpage/MainPage';
import Page404 from '@pages/Page404/Page404';
import LoginPage from './src/pages/loginpage/LoginPage';

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/main' element={<MainPage />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    );
};

export default App;