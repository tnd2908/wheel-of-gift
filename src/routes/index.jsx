import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import WheelPage from '../components/WheelPage/WheelPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<WheelPage />} />
                </Route>
                <Route path='*' element={<Navigate to='/' />} />                    
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;