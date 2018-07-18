import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </nav>
    </header>
);

export default Header;