import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>{amount} - {createdAt}</p>
		<button onClick={() => { dispatch(removeExpense({ id })); }}>Remove</button>
		<Link to={"/edit/" + id}>Edit</Link>
	</div>
);

export default connect()(ExpenseListItem);
