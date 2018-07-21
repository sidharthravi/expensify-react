import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Test should return 0 if no expense', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Test should add up single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(expenses[0].amount);
})

test('Test should add up array of expense', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
})