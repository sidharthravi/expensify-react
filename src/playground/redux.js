import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD EXPENSE
const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//EDIT EXPENSE
const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//REMOVE EXPENSE
const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id );

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(action.id === expense.id)
                    return { ...expense, ...action.updates };
                else
                    return expense;
            });
        default:
            return state;
    }
};

//text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//sort by date filter
const setSortByDateFilter = () => ({
    type: 'SET_SORT_BY_DATE_FILTER'
});

//sort by amount filter
const setSortByAmountFilter = () => ({
    type: 'SET_SORT_BY_AMOUNT_FILTER'
});

//set start date filter
const setStartDateFilter = (startDate) => ({
    type: 'SET_START_DATE_FILTER',
    startDate
});

//set start date filter
const setEndDateFilter = (endDate) => ({
    type: 'SET_END_DATE_FILTER',
    endDate
});

//filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text:action.text };
        
        case 'SET_SORT_BY_DATE_FILTER':
            return { ...state, sortBy: 'date'};

        case 'SET_SORT_BY_AMOUNT_FILTER':
            return { ...state, sortBy: 'amount'};

        case 'SET_START_DATE_FILTER':
            return { ...state, startDate: action.startDate};

        case 'SET_END_DATE_FILTER':
            return { ...state, endDate: action.endDate};

        default:
        return state;
    }
};

//create store by combining reducers

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate} ) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'date')
            return a.createdAt < b.createdAt ? 1 : -1;
        else if(sortBy === 'amount')
            return a.amount < b.amount ? 1 : -1;
    })
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

let exp1 = store.dispatch(addExpense({ description: 'rent', amount: 750000, createdAt:1000 }));

//store.dispatch(removeExpense(exp1.expense));

let exp2 = store.dispatch(addExpense({ description: 'Coffee', amount: 1500, createdAt: 25000 }));

store.dispatch(editExpense(exp2.expense.id, {amount: 2000}));

// store.dispatch(setTextFilter('cof'));

store.dispatch(setSortByAmountFilter());
store.dispatch(setSortByDateFilter());

// store.dispatch(setStartDateFilter(200));
// store.dispatch(setEndDateFilter(400));
// store.dispatch(setStartDateFilter());
// store.dispatch(setEndDateFilter());