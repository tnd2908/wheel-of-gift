import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
    return (
        <div className='app'>
            <Navbar />
            <div className="wheel-container">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;