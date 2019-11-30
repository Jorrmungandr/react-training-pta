import React from 'react';
import './List.css';
import Title from '../Title/Title';

function List({ todos, deleteTodo, checkItem }) {
	return (
		<ul className="list">
			<Title>Todos</Title>
			{todos.map((todo, index) => (
				<li className={`${todo.complete ? 'item-checked' : ''} item-card`}>
					<input type="checkbox" className="checkbox" onClick={() => checkItem(index)} />
					{todo.item}
					<button type="button" className="delete-button" onClick={() => deleteTodo(index)}>Deletar</button>
				</li>
			))}
		</ul>
	);
}

export default List;
