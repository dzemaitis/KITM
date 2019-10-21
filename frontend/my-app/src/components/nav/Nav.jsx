import React, {Component} from 'react';
import styles from './nav.css';
import {Link} from "react-router-dom";

// className vietoj class JSX naudojama su Component.
function Nav(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Pagrindinis</Link>
                    </li>
                    <li>
                        <Link to="/">Produktai</Link>
                    </li>
                    <li>
                        <Link to="/kontaktai">Main</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;