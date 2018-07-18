import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

/* store.subscribe(() => {
    const state = store.getState();
    const visbileExpenses = getVisbileExpenses(state.expenses, state.filters);
    console.log(visbileExpenses);
}) */

store.dispatch(addExpense({ description: 'Rent', amount: 750000, createdAt:1 }));
store.dispatch(addExpense({ description: 'Coffee', amount: 1500, createdAt: 2 }));
store.dispatch(addExpense({ description: 'Water', amount: 20000, createdAt: 3 }));

//store.dispatch(setTextFilter('c'));

var jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


ReactDOM.render(
    jsx,
    document.getElementById('root'),
);
