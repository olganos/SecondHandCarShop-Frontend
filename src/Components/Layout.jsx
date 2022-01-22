import React from 'react';
import { Outlet } from "react-router-dom";

import { Header } from './Header';
import { Navigation } from './Navigation';
import './Layout.css';

export const Layout = () => {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Navigation />
                <main><Outlet /></main>
            </div>
        </>
    );
};
