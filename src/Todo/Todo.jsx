import React, { Component } from 'react';
import List from '../List/List';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.saveText = this.saveText.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.checkItem = this.checkItem.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);

		this.state = {
			todos: [],
			item: '',
		};
	}

	componentDidUpdate() {
		this.input.focus();
	}

	saveText(e) {
		this.setState({ item: e.target.value });
	}

	createTodo(e) {
		e.preventDefault();
		const { item, todos } = this.state;
		if (item !== '') {
			const newItem = {
				item,
				complete: false,
			};

			this.setState({
				todos: [...todos, newItem],
				item: '',
			});
		}
		this.input.value = '';
	}

	checkItem(i) {
		const { todos } = this.state;
		this.setState({
			todos: todos.map((todo, index) => {
				if (index === i) {
					return {
						...todo,
						complete: !todo.complete,
					};
				}
				return todo;
			}),
		});
	}

	deleteTodo(i) {
		const { todos } = this.state;
		const array = [...todos];
		array.splice(i, 1);
		this.setState({ todos: array });
	}

	render() {
		const { todos } = this.state;
		return (
			<>
				<form className="todo-form" onSubmit={this.createTodo}>
					<input type="text" onChange={this.saveText} ref={(i) => { this.input = i; }} className="form-input" />
					<button type="submit" className="save-button">+</button>
				</form>

				<List todos={todos} checkItem={this.checkItem} deleteTodo={this.deleteTodo} />
			</>
		);
	}
}

export default Todo;
