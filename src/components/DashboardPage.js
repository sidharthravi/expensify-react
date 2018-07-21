import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFIlters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const DashboardPage = () => (
    <div>
        <h2>Dashboard page</h2>
        <ExpensesSummary />
        <ExpenseListFIlters />
        <ExpenseList/>
    </div>
);

export default DashboardPage;