import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import WheelPage from '../components/WheelPage/WheelPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<WheelPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;