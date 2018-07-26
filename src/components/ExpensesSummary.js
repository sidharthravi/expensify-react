import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectedExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ( { expenseCount, expensesTotal } ) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal / 100).format('0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header-title"> Viewing <strong>{expenseCount}</strong> {expenseWord} totalling <strong>Rs. {formattedTotal}</strong></h2>
                <Link className="btn btn-page-header-action" to="/create" >Add Expense</Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectedExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);