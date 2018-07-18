import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should return remove expense object', () => {
    const id = '123sd';
    const action = removeExpense({ id });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id
    });
});

test('should return edit expense action object', () => {
    const id = '123ds', updates = { test: 'update'};
    const action = editExpense(
        id,
        updates
    );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });
});

test('should return default object when no value is given', () => {
    const expenseData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    };
    const action = addExpense();
    expect(action).toEqual(
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('should return object based on data provided', () => {
    const expenseData = {
        description : 'Rent',
        note : 'new note',
        amount : 200,
        createdAt : 45955959
    };
    const action = addExpense(expenseData);
    expect(action).toEqual(
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});