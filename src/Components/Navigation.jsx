import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

export const Navigation = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
};
