import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h2>Expenses</h2>
        {props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}

export default  connect(mapStateToProps)(ExpenseList);
